
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
    res.send('Hello your looking at this website!');
    console.log("the root has been requested!")
})

//  making an async function as the endpoint
// This logs the table to the console
app.get("/animals", async function (request, response) {
    const data = await db.query("SELECT * FROM animals");
    const animals = data.rows
    res.status(200).json(animals)
    // response.json(animals.rows);
});

app.post("/animals", async function (request, response) {
    const animals = await db.query("SELECT * FROM animals WHERE id = 1");
    response.json(animals.rows);
})

app.listen(4242, () => {
    // nothing is to be said here
});