
// imports
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// config
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONN
});

app.get('/', (req, res) => {
    res.send("Hello you're looking at this website!");
    console.log("the root has been requested!")
})

//  making an async function as the endpoint
// This logs the table to the console
app.get("/animals", async function (req, res) {
    const data = await db.query("SELECT * FROM animals");
    const animals = data.rows
    res.status(200).json(animals)
    // response.json(animals.rows);
});

app.post('/animals', async (req, res) => {
    const userData = req.body
    console.log(userData)
    const dbQuery = await db.query(`INSERT INTO animals (animal_name, likes, comment) VALUES ($1, $2, $3)`, [userData.animal_name, userData.likes, userData.comment])

    res.status(200).json({message: "added message"})
})

app.listen(4242, () => {
    // console.log(`Server started on port http://localhost:4242`)
});