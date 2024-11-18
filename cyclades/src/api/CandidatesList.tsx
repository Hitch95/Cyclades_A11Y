import { useEffect, useState } from 'react';
import { Candidate } from '../types';

type CandidateListProps = {
  onCandidatesFetched: (candidates: Candidate[]) => void;
};

const CandidatesList = ({ onCandidatesFetched }: CandidateListProps) => {
  const [_, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const backendUrl =
          import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000';
        console.log('Backend URL:', backendUrl);

        const response = await fetch(`${backendUrl}/api/candidates`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Response data:', data);

        setCandidates(data);
        onCandidatesFetched(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  return null;
};

export default CandidatesList;
