export interface Candidate {
  id: number;
  candidate_number: string;
  inscription_number: string;
  lastname: string;
  firstname: string;
  email: string;
  birthdate: string;
  country_of_birth: string;
  city_of_birth: string;
  gender: string;
  nationality: string;
  phone_number: string;
  country: string;
  city: string;
  school_postal_code: string;
  school_code: string;
  class_division: string | null;
  state: string;
  qualification: string;
  created: string;
  position_id: number;
  artistic_teaching_id: number | null;
}

export interface Position {
  id: number;
  name: 'Inscrit' | 'Non inscrit';
}

export interface ArtisticTeaching {
  id: number;
  name:
    | 'Art - Cinéma audiovisuel'
    | 'Art - Histoire des arts'
    | 'Art - Théâtre'
    | 'Art - Arts du cirque'
    | 'Art - Musique'
    | 'Art - Danse'
    | 'Art - Arts plastiques';
}
