
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
app.get("/messages", async function (request, response) {
    const data = await db.query("SELECT * FROM messages");
    const messages = data.rows
    res.status(200).json(messages)
    // response.json(messages.rows);
});

app.post("/messages", async function (request, response) {
    const messages = await db.query("SELECT * FROM messages WHERE id = 1");
    response.json(messages.rows);
})

app.listen(4242, () => {
    // nothing is to be said here
});