import * as dotenv from "dotenv";
dotenv.config();
import postgres from "postgres";

const db_url = process.env.FAKETREON_DB_URL;
export const sql = postgres(db_url);
