import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
});

// async function seed() {
//     try {
//         await db.query(
//             // Use parameterized queries to prevent SQL injection (best practice)
//             "INSERT INTO animals (animal_name, likes, comment) VALUES ($1, $2, $3)",
//             ['bill', 3, 'bill the platypus is so cool!']
//         );
//         console.log("Data seeded successfully!");
//     } catch (err) {
//         console.error("Seeding failed:", err.stack);
//     } finally {
//         await db.end();
//     }
// }

// seed();
db.query(
    `INSERT INTO animals (animal_name, likes, comment) VALUES ('bill', '3', 'bill the playpus is so cool!')`
);

