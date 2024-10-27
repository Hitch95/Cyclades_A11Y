import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("candidates.db");
db.exec(`
    DROP TABLE IF EXISTS candidates;
    CREATE TABLE candidates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        candidate_number TEXT,
        inscription_number TEXT,
        lastname TEXT NOT NULL,
        firstnames TEXT NOT NULL,
        birthdate DATE NOT NULL,
        country_of_birth TEXT NOT NULL,
        city_of_birth TEXT NOT NULL,
        gender TEXT NOT NULL,
        nationality TEXT NOT NULL,
        number TEXT NOT NULL,
        country TEXT NOT NULL,
        city TEXT NOT NULL,
        school_code TEXT NOT NULL,
        class_division TEXT NOT NULL,
        state TEXT NOT NULL,
        qualification TEXT NOT NULL,
        created DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
`);

console.log("Database setup complete.");
db.close();