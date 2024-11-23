import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, styled, Tab, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Candidate } from '../types';
import { fetchOneCandidate } from '../api/utils';
import OptionnalTeachings from '../components/OptionnalTeachnings';

const CustomTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.common.black,
  textTransform: 'none',
  fontSize: '1em',
  borderLeft: '1px solid #FAF7F4',
  borderRight: '1px solid #FAF7F4',
  '&:hover': {
    backgroundColor: theme.palette.background.cream,
    color: theme.palette.common.black,
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.background.goldAccent,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [tabValue, setValue] = useState('1');

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  const menuItems = [
    {
      label: 'Enseignement(s) facultatif(s) terminale',
      subItems: [
        { label: 'LT060-1 : Enseignement optionnel : Non Inscrit' },
        { label: 'LT061-1 : Enseignement optionnel : Non Inscrit' },
        { label: 'LT062-1 : Enseignement optionnel : Non Inscrit' },
        { label: 'LT063-1 : Enseignement optionnel : Non Inscrit' },
        { label: 'LT070-1 : DNL - Histoire-géographie : Non Inscrit' },
        { label: 'LT071-1 : DNL - Enseignement scientique : Non Inscrit' },
        {
          label: 'LT073-1 : DNL - Education physique et sportive : Non Inscrit',
        },
        { label: 'LT074-1 : Enseignement optionnel : Non Inscrit' },
        { label: 'LT075-1 : Enseignement optionnel : Non Inscrit' },
        { label: 'LT076-1 : Enseignement optionnel : Non Inscrit' },
      ],
    },
  ];

  useEffect(() => {
    if (id) {
      fetchOneCandidate(id)
        .then((fetchedCandidates) => {
          setCandidate(fetchedCandidates);
        })
        .catch((error) => {
          console.error('Error fetching candidate:', error);
        });
    }
  }, [id]);

  if (!candidate) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabValue}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="candidate information tabs"
            >
              <CustomTab label="1 - Identification" value="1" />
              <CustomTab label="2 - Informations candidature" value="2" />
              <CustomTab label="3 - Qualification présentée" value="3" />
              <CustomTab label="4 - Informations supplémentaires" value="4" />
              <CustomTab label="5 - Epreuves" value="5" />
              <CustomTab label="6 - Récapitulatif" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ minHeight: '550px' }}>
            <Typography>Firstname: {candidate?.firstname}</Typography>
            <Typography>Lastname: {candidate?.lastname}</Typography>
            <Typography>Email: {candidate?.email}</Typography>
            <Typography>
              School postal code: {candidate?.school_postal_code}
            </Typography>
          </TabPanel>
          <TabPanel value="2">
            <Typography>ER d'origine ACADEMIE D'AIX MARSEILLE</Typography>
            <Typography>Académie d'origine ACADEMIE D'AIX MARSEILLE</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Typography>Qualification présentée</Typography>
            <Typography>Enseignement de spécialité</Typography>
          </TabPanel>
          <TabPanel value="4">
            <Typography sx={{ fontWeight: 'bold' }}>
              Aucune information supplémentaire n'est requise. Veuillez passer à
              l'onglet suivant.
            </Typography>
          </TabPanel>
          <TabPanel
            value="5"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              gap: 1,
            }}
          >
            <CustomButton variant="contained" sx={{ fontWeight: 'bold' }}>
              Session normale 1er groupe
            </CustomButton>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#9C2D41',
                fontSize: '0.875em',
              }}
            >
              <KeyboardArrowRightIcon />
              Epreuve(s) obligatoire(s)
            </Typography>
            <CustomButton variant="contained">Epreuves terminales</CustomButton>
            <CustomButton variant="contained">
              Contrôle continu 1ère (livret)
            </CustomButton>
            <CustomButton variant="contained">
              Contrôle continu terminales (livret)
            </CustomButton>
            <CustomButton variant="contained">
              Attestation(s) en langue
            </CustomButton>

            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#9C2D41',
                fontSize: '0.875em',
              }}
            >
              <KeyboardArrowRightIcon />
              Enseignements optionnels ou Disciplines Non Linguistiques
            </Typography>
            <CustomButton variant="contained">
              Enseignement(s) facultatif(s) 1ère
            </CustomButton>

            <OptionnalTeachings items={menuItems} />
            <CustomButton variant="contained">
              Evaluations spécifiques
            </CustomButton>

            <CustomButton variant="contained" sx={{ fontWeight: 'bold' }}>
              Session normale 2nd groupe
            </CustomButton>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: '#9C2D41',
                fontSize: '0.875em',
              }}
            >
              <KeyboardArrowRightIcon />
              Epreuve(s) obligatoire(s)
            </Typography>
            <CustomButton variant="contained">Epreuves terminales</CustomButton>
          </TabPanel>
          <TabPanel value="6">Récapitulatif</TabPanel>
        </TabContext>
      </Box>
      <Footer />
    </>
  );
};

export default CandidatePage;
