
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

app.listen(4242, () => {
    // nothing is to be said here
});

app.get("/", (req, res) => {
   res.send('hello I am looking at this server hosted on my computer'); 
})