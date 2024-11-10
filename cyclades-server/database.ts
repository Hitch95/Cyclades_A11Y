import { Database } from 'jsr:@db/sqlite';

export const initializeCandidateDatabase = (): Database | null => {
  const database = new Database('candidates.db');

  try {
    database.exec(`
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

    // Check if at least one candidate was inserted into the database
    const statement = database.prepare('SELECT * FROM candidates LIMIT 1');
    const row = statement.get();
    if (row) {
      return database;
    } else {
      throw new Error('No candidates found in the database');
    }
  } catch (error) {
    console.error('Database setup error:', error);
    return null;
  }
};
