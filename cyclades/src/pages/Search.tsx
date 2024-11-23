import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { Candidate } from '../types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchAllCandidates } from '../api/utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    cursor: 'pointer',
    outline: '2px solid black',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Search = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const navigate = useNavigate();

  const handleCandidatesFetched = (fetchedCandidates: Candidate[]) => {
    setCandidates(fetchedCandidates);
  };

  const handleCandidateClick = (id: number) => {
    navigate(`/candidate/${id}`);
  };

  useEffect(() => {
    fetchAllCandidates()
      .then((fetchedCandidates) => {
        handleCandidatesFetched(fetchedCandidates);
      })
      .catch((error) => {
        console.error('Error fetching candidates:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Numéro Candidat</StyledTableCell>
                <StyledTableCell align="right">
                  Numéro Inscription
                </StyledTableCell>
                <StyledTableCell align="right">Nom de famille</StyledTableCell>
                <StyledTableCell align="right">Prénom</StyledTableCell>
                <StyledTableCell align="right">
                  Date de naissance
                </StyledTableCell>
                <StyledTableCell align="right">
                  Code Etablissement
                </StyledTableCell>
                <StyledTableCell align="right">
                  Division de classe
                </StyledTableCell>
                <StyledTableCell align="right">Etat</StyledTableCell>
                <StyledTableCell align="right">
                  Qualification présentée
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {candidates.map((candidate) => (
                <StyledTableRow
                  key={candidate.id}
                  onClick={() => handleCandidateClick(candidate.id)}
                >
                  <StyledTableCell component="th" scope="row">
                    {candidate.candidate_number}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.inscription_number}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.lastname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.firstname}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.birthdate}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.school_code}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.class_division}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.state}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {candidate.qualification}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </main>
      <Footer />
    </>
  );
};

export default Search;
