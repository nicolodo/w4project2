
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

// db.query(
//     `INSERT INTO guests (guest_name, length_of_stay, comment) VALUES ('bill', '3', 'bill the playpus is so cool!')`
// );

app.get('/', (req, res) => {
    res.send("Hello you're looking at this website!");
    console.log("the root has been requested!")
})

//  making an async function as the endpoint
// This logs the table to the console
app.get("/guests", async function (req, res) {
    const data = await db.query("SELECT * FROM guests");
    console.log('I have asked for data from db: ',data)
    const guests = data.rows
    res.status(200).json(guests)
    // response.json(guests.rows);
});

app.post('/guests', async (req, res) => {
    try {
    console.log("you are requesting a post!")
    const userData = req.body
    console.log('userData from forms:', userData)
    const dbQuery = await db.query(`INSERT INTO guestbook (guest_name, length_of_stay, comment) VALUES ($1, $2, $3)`, [userData.guest_name, userData.length_of_stay, userData.comment])

    res.status(200).json({message: "added message"})
    }
    catch (err) {
        console.error("SERVER ERROR:", err.message); // This shows in your terminal
        res.status(500).json({ error: err.message }); // This shows in your browser console
    }
})

app.listen(4242, () => {
    // console.log(`Server started on port http://localhost:4242`)
});