import { type Row } from 'https://deno.land/x/sqlite@v3.9.1/mod.ts';

import { initializeCandidateDatabase } from '../database.ts';
import { Candidate, Position, ArtisticTeaching } from '../types.ts';

const database = initializeCandidateDatabase();

export const getAllCandidates = () => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  return database.query(`
    SELECT 
      c.*,
      p.name as position_name,
      at.name as artistic_teaching_name
    FROM candidates c
    LEFT JOIN positions p ON c.position_id = p.id
    LEFT JOIN artistic_teachings at ON c.artistic_teaching_id = at.id
  `);
};

export const getCandidateById = (id: string) => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  const idNumber = parseInt(id);
  return database.query(
    `
    SELECT 
      c.*,
      p.name as position_name,
      at.name as artistic_teaching_name
    FROM candidates c
    LEFT JOIN positions p ON c.position_id = p.id
    LEFT JOIN artistic_teachings at ON c.artistic_teaching_id = at.id
    WHERE c.id = ?
  `,
    [idNumber]
  )[0];
};

export const addOneCandidate = (candidate: Candidate) => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  const query = `
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
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  database.query(query, [
    candidate.candidate_number,
    candidate.inscription_number,
    candidate.lastname,
    candidate.firstname,
    candidate.email,
    candidate.birthdate,
    candidate.country_of_birth,
    candidate.city_of_birth,
    candidate.gender,
    candidate.nationality,
    candidate.phone_number,
    candidate.country,
    candidate.city,
    candidate.school_postal_code,
    candidate.school_code,
    candidate.class_division,
    candidate.state,
    candidate.qualification,
    candidate.position_id,
    candidate.artistic_teaching_id,
  ]);

  // Return the ID of the new candidate
  return database.lastInsertRowId;
};

// Helper functions to get positions and artistic teachings
export const getAllPositions = () => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  const rows = database.query(
    'SELECT position_id, position_name FROM positions'
  );
  return rows.map((row: Row) => ({
    id: row[0] as number | null,
    name: row[1] as 'Inscrit' | 'Non inscrit' | null,
  })) as Position[];
};

export const getAllArtisticTeachings = () => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  const rows = database.query(
    'SELECT artistic_teaching_id, artistic_teaching_name FROM artistic_teachings'
  );
  return rows.map((row: Row) => ({
    id: row[0] as number | null,
    name: row[1] as ArtisticTeaching['name'],
  })) as ArtisticTeaching[];
};
