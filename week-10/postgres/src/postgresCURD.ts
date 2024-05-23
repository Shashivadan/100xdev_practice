import pool from "./pg.sql";

async function createUser() {
  await pool.connect();
  const qeury: string = `CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`;

  const queryInsert: string =
    "INSERT INTO users(username , email, password) VALUE ($1 , $2 , $3)";
  const result = await pool.query(qeury);
  const insertResult = await pool.query(queryInsert, [
    "shashi",
    "shashivadan99@gmail.com",
    "shashi@2002",
  ]);
  console.log("Sussfull", result);
}
createUser();
