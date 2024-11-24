import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  DataGrid,
  gridClasses,
  GridColDef,
  GridEventListener,
  GridRowsProp,
} from '@mui/x-data-grid';
import { alpha, styled } from '@mui/material/styles';

import LoadingIcon from '/loading.svg';
import { Candidate } from '../types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchAllCandidates } from '../api/utils';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  '&:hover': {
    cursor: 'pointer',
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.background.burgundyRed,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: alpha(
          theme.palette.background.burgundyRed,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.background.burgundyRed,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

const Search = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const navigate = useNavigate();

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    navigate(`/candidate/${params.id}`);
  };

  useEffect(() => {
    fetchAllCandidates()
      .then((fetchedCandidates) => {
        setCandidates(fetchedCandidates);
      })
      .catch((error) => {
        console.error('Error fetching candidates:', error);
      });
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'candidateNumber',
      headerName: 'Numéro Candidat',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'inscriptionNumber',
      headerName: 'Numéro Inscription',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'lastname',
      headerName: 'Nom de famille',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'firstname',
      headerName: 'Prénom',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'birthdate',
      headerName: 'Date de naissance',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'schoolCode',
      headerName: 'Code Etablissement',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'classDivision',
      headerName: 'Division de classe',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'state',
      headerName: 'Etat',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
    {
      field: 'qualification',
      headerName: 'Qualification',
      headerClassName: 'HeaderStyle',
      flex: 1,
    },
  ];

  const rows: GridRowsProp = candidates.map((candidate) => ({
    id: candidate.id,
    candidateNumber: candidate.candidate_number,
    inscriptionNumber: candidate.inscription_number,
    lastname: candidate.lastname,
    firstname: candidate.firstname,
    birthdate: candidate.birthdate,
    schoolCode: candidate.school_code,
    classDivision: candidate.class_division,
    state: candidate.state,
    qualification: candidate.qualification,
  }));

  if (!candidates) {
    return (
      <div>
        Loading... <img src={LoadingIcon} />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Stack
          component="section"
          aria-label="Liste des candidats"
          sx={{ p: 2 }}
        >
          <h3
            aria-label="Liste des candidats"
            style={{
              fontSize: '1em',
              fontWeight: '500',
              margin: '0 0 1em 0',
              textAlign: 'left',
              cursor: 'default',
            }}
          >
            Liste des candidats
          </h3>

          <Grid container spacing={1}>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <Stack sx={{ width: '100%' }}>
                <StripedDataGrid
                  rows={rows}
                  columns={columns}
                  onRowClick={handleRowClick}
                  density="comfortable"
                  // localeText={}
                  disableRowSelectionOnClick
                  aria-label="Tableau des candidats"
                  sx={{
                    '& .HeaderStyle': {
                      '&:hover': {
                        outline: '1px solid lightgrey',
                      },
                      '&:focus-within': {
                        outline: '1px solid black',
                      },
                    },
                  }}
                  getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                  }
                  getCellClassName={() => 'data-grid-cell'}
                  hideFooterSelectedRowCount
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </main>
      <Footer />
    </>
  );
};

export default Search;
