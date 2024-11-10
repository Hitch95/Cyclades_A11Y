import { initializeCandidateDatabase } from '../database.ts';
import { Candidate } from '../types.ts';

const database = initializeCandidateDatabase();

export const getAllCandidates = () => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  return database.prepare('SELECT * FROM candidates').all();
};

export const getCandidateById = (id: string) => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  const idNumber = parseInt(id);
  return database
    .prepare('SELECT * FROM candidates WHERE id = ?')
    .get(idNumber);
};

export const addOneCandidate = (candidate: Candidate) => {
  if (!database) {
    throw new Error('Database is not initialized');
  }
  const query = `
    INSERT INTO candidates (
      candidate_number, inscription_number, lastname, firstname, email, birthdate, 
      country_of_birth, city_of_birth, gender, nationality, phone_number, 
      country, city, school_postal_code, school_code, class_division, state, qualification
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  database.exec(
    query,
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
    candidate.qualification
  );

  // Return the ID of the new candidate
  return database.lastInsertRowId;
};
