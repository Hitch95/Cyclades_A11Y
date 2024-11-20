import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Candidate } from '../types';
import { fetchOneCandidate } from '../api/utils';

const CandidatePage = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    fetchOneCandidate(id)
      .then((fetchedCandidates) => {
        setCandidate(fetchedCandidates);
      })
      .catch((error) => {
        console.error('Error fetching candidate:', error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <main>
        <h1>Id: {id} </h1>
        <p>Firstname: {candidate?.firstname}</p>
        <p>Lastname: {candidate?.lastname}</p>
      </main>
      <Footer />
    </>
  );
};

export default CandidatePage;
