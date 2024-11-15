import { useEffect, useState } from 'react';

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
}

type CandidateListProps = {
  onCandidatesFetched: (candidates: Candidate[]) => void;
};

const CandidatesList = ({ onCandidatesFetched }: CandidateListProps) => {
  const [_, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      const backendUrl = import.meta.env.PROD
        ? import.meta.env.VITE_BACKEND_URL
        : 'http://127.0.0.1:8000';
      console.log(backendUrl);
      const response = await fetch(`${backendUrl}/api/candidates`);
      if (response.ok) {
        const data = await response.text();

        try {
          const jsonData = JSON.parse(data);
          console.log('JSON Data:', jsonData);
          setCandidates(jsonData);
          onCandidatesFetched(jsonData);
        } catch (error) {
          console.error('Erreur while parsing to JSON format:', error);
        }
      } else {
        console.error('Failed to fetch candidates');
      }
    };

    fetchCandidates();
  }, []);

  return <></>;
};

export default CandidatesList;
