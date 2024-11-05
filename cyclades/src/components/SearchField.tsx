import React, { FC, useState } from 'react';
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';

import theme from '../theme';

interface SearchFieldProps {
  onElementClick: (id: number) => void;
}

const SearchField: FC<SearchFieldProps> = ({ onElementClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const elements = [
    { id: 1, name: 'N° Candidat' },
    { id: 2, name: 'N° Inscription' },
    { id: 3, name: 'Nom de famille' },
    { id: 4, name: `Nom d'usage` },
    { id: 5, name: 'Prénom(s)' },
    { id: 6, name: 'Date de naissance' },
    { id: 7, name: 'Sexe' },
    { id: 8, name: 'INE' },
    { id: 9, name: 'Nationalité' },
    { id: 10, name: 'Pays de naissance' },
    { id: 11, name: 'Candidat Allophone' },
    { id: 12, name: 'Qualification présentée' },
    { id: 13, name: 'Examen' },
    { id: 14, name: 'Enseignement de spécialité' },
    { id: 15, name: 'Section de langue' },
    { id: 16, name: 'Langue de section' },
    { id: 17, name: 'Parcous BFI' },
    { id: 18, name: 'Parcours BFI en 1ère' },
    { id: 19, name: 'Section de langue en 1ère' },
    { id: 20, name: 'DNL de la SELO' },
    { id: 21, name: 'Etat' },
    { id: 22, name: 'Canditature validée' },
    { id: 23, name: 'Discipline éloignée' },
    { id: 24, name: 'Catégorie du candidat' },
    { id: 25, name: 'Catégorie du candidat en 1ère' },
    { id: 26, name: `Académie d'origine` },
  ];

  return (
    <Stack
      direction={'column'}
      sx={{
        position: 'absolute',
        top: 'calc(85px + 60px)', // Correspond to all the `Navbar` height
        left: '15rem', // `LeftSidebar` have a width of 15rem
        width: 'calc(100% - 15rem)', // We give the space available
        backgroundColor: theme.palette.background.cream,
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
          marginTop: '0.8rem',
          fontWeight: '600',
          color: '#9C2D41',
          cursor: 'pointer',
        }}
      >
        <KeyboardArrowRightIcon sx={{ marginRight: '0.5rem' }} />
        Arbre des critères de recherche
      </Typography>

      <Stack
        direction={'row'}
        sx={{
          justifyContent: 'start',
          alignItems: 'center',
          padding: '1rem 0rem',
        }}
      >
        <Typography sx={{ paddingLeft: '28px', marginRight: '36px' }}>
          Filtrer
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ width: '400px' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        >
          <SearchIcon />
        </TextField>
      </Stack>

      <Stack direction={'row'}>
        <Stack
          direction={'column'}
          sx={{
            textAlign: 'left',
            marginTop: '20px',
            maxHeight: '60vh',
            overflow: 'auto',
          }}
        >
          {elements
            .filter((element) =>
              element.name.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((element) => (
              <Button
                key={element.id}
                size="small"
                onClick={() => onElementClick(element.id)}
                sx={{
                  color: 'black',
                  justifyContent: 'left',
                  textTransform: 'none',
                  width: '13.7rem',
                  paddingLeft: '28px',
                }}
              >
                {element.name}
              </Button>
            ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SearchField;
