import { DB } from 'https://deno.land/x/sqlite@v3.9.1/mod.ts';

export const initializeCandidateDatabase = (): DB | null => {
  const database = new DB('candidates.db');
  try {
    database.execute(`
    -- First drop the view since it depends on all tables
    DROP VIEW IF EXISTS candidate_details;
    
    -- Then drop the tables in reverse order of dependencies
    DROP TABLE IF EXISTS candidates;
    DROP TABLE IF EXISTS positions;
    DROP TABLE IF EXISTS artistic_teachings;

    -- Create enum-like table for positions first
    CREATE TABLE positions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );

    -- Create table for artistic teachings
    CREATE TABLE artistic_teachings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );

    -- Create candidates table with foreign keys from the start
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
      position_id INTEGER REFERENCES positions(id),
      artistic_teaching_id INTEGER REFERENCES artistic_teachings(id),
      created TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );

    -- Insert position values first
    INSERT INTO positions (name) VALUES 
      ('Inscrit'),
      ('Non inscrit');

    -- Insert artistic teaching values
    INSERT INTO artistic_teachings (name) VALUES 
      ('Art - Cinéma audiovisuel'),
      ('Art - Histoire des arts'),
      ('Art - Théâtre'),
      ('Art - Arts du cirque'),
      ('Art - Musique'),
      ('Art - Danse'),
      ('Art - Arts plastiques');

    -- Now insert candidates with the correct position_id reference
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
      qualification,
      position_id,
      artistic_teaching_id
    )

    VALUES (
      '02438257150',
      '001 Version 01',
      'Stark',
      'Arya',
      'arya@stark.fr',
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
      'Baccalauréat général (BCG) / Histoire-géographie, géopolitique et sciences politiques Humanités, littérature et philosophie',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    ),
    (
      '02438257151',
      '001 Version 01',
      'Stark',
      'Sansa',
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
      'Baccalauréat général (BCG) / Humanités, littérature et philosophie Mathématiques',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    ), 
    (
      '02438257155',
      '001 Version 01',
      'Stark',
      'Robb',
      'robb@stark.fr',
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
      'Baccalauréat général (BCG) / Arts - Danse Mathématiques',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    ), 
    (
      '02438257158',
      '001 Version 01',
      'Snow',
      'Jon',
      'jon@stark.fr',
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
      'Baccalauréat général (BCG) / Humanités, littérature et philosophie Sciences de la vie et de la terre',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    ), 
    (
      '02438257164',
      '001 Version 01',
      'Baelish',
      'Petyr',
      'petyr@stark.fr',
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
      'Baccalauréat général (BCG) / Arts - Musique Histoire-géographie, géopolitique et sciences politiques',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    ), 
    (
      '02438257166',
      '001 Version 01',
      'De Torth',
      'Brienne',
      'brienne@stark.fr',
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
      'Baccalauréat général (BCG) / Mathématiques Sciences de l''ingénieur',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    ), 
    (
      '02438257167',
      '001 Version 01',
      'Stark',
      'Bran',
      'bran@stark.fr',
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
      'Baccalauréat général (BCG) / Sciences économiques et sociales Humanités, littérature et philosophie',
      (SELECT id FROM positions WHERE name = 'Inscrit'),
      NULL
    );
    
    -- Create indexes for better query performance
    CREATE INDEX idx_candidates_position ON candidates(position_id);
    CREATE INDEX idx_candidates_artistic_teaching ON candidates(artistic_teaching_id);
    
    -- Create view for easier querying
    CREATE VIEW candidate_details AS
    SELECT 
      c.*,
      p.name as position_name,
      at.name as artistic_teaching_name
    FROM candidates c
    LEFT JOIN positions p ON c.position_id = p.id
    LEFT JOIN artistic_teachings at ON c.artistic_teaching_id = at.id;

    -- Update candidates with artistic teachings (based on their qualification)
    UPDATE candidates 
    SET artistic_teaching_id = (
      SELECT id FROM artistic_teachings 
      WHERE candidates.qualification LIKE '%' || artistic_teachings.name || '%'
    )
    WHERE qualification LIKE '%Art%';
    `);

    // Check if at least one candidate was inserted into the database
    const rows = database.query('SELECT * FROM candidates LIMIT 1');
    if (rows.length > 0) {
      return database;
    } else {
      throw new Error('No candidates found in the database');
    }
  } catch (error) {
    console.error('Database setup error:', error);
    return null;
  }
};
