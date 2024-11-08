import { DB } from 'https://deno.land/x/sqlite@v3.9.1/mod.ts';
export let db: DB;

export const setupDatabase = (): DB => {
  db = new DB('candidates.db');

  try {
    db.execute(`
    DROP TABLE IF EXISTS candidates;

    CREATE TABLE candidates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    candidate_number TEXT,
    inscription_number TEXT,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    email TEXT NOT NULL,
    birthdate TEXT NOT NULL,
    country_of_birth TEXT NOT NULL,
    city_of_birth TEXT NOT NULL,
    gender TEXT NOT NULL,
    nationality TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    country TEXT NOT NULL,
    city TEXT NOT NULL,
    school_postal_code TEXT NOT NULL,
    school_code TEXT NOT NULL,
    class_division TEXT,
    state TEXT NOT NULL,
    qualification TEXT NOT NULL,
    created TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO candidates (
    candidate_number,
    inscription_number,
    lastname,
    firstname,
    email,
    birthdate,
    country_of_birth,
    city_of_birth,
    gender,
    nationality,
    phone_number,
    country,
    city,
    school_postal_code,
    school_code,
    class_division,
    state,
    qualification
    )
    VALUES (
    '02438257150',
    '001 Version 01',
    'Stark',
    'Arya',
    'sansa@stark.fr',
    '1990-11-30',
    'FRANCE',
    'Redon',
    'Male',
    'Française',
    '0606050505',
    'France',
    'Aix en Provence',
    '13080',
    '0040022C',
    NULL,
    'Inscrit',
    'Baccalauréat général (BCG) / ...'
    );
    `);

    // Verify database setup
    const count = db.query('SELECT COUNT(*) FROM candidates')[0][0];
    console.log(`Database initialized with ${count} candidates`);

    return db;
  } catch (error) {
    console.error('Database setup error:', error);
    throw error;
  }
};
