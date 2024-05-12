import { Client } from "pg";

const pool = new Client({
  host: "ep-tiny-pine-82404162.us-east-2.aws.neon.tech",
  database: "postgrestest",
  password: "B6msZDuS1zMt",

  user: "shashivadan99",
  port: 5432,
});

export default pool;
