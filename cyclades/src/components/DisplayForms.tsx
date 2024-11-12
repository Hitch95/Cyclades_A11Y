import React, { FC, useState } from 'react';
import {
  Button,
  FormControl,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import theme from '../theme';

interface DisplayFormsProps {
  selectedElementId: number | null;
  onElementClick: (id: number) => void;
}

const DisplayForms: FC<DisplayFormsProps> = ({
  selectedElementId,
  // onElementClick,
}) => {
  return (
    <Stack
      direction={'column'}
      sx={{
        position: 'absolute',
        top: '283px',
        left: '476px',
        marginLeft: '60px',
        right: '60px',
        width: 'auto',
        minHeight: '200px',
        height: 'auto',
        backgroundColor: theme.palette.background.cream,
        outline: '2px solid black',
      }}
    >
      {selectedElementId === null ? (
        <Typography sx={{ color: '#FAF7F4' }}>
          Please select an element from the sidebar.
        </Typography>
      ) : (
        <DynamicContent elementId={selectedElementId} />
      )}
    </Stack>
  );
};

interface DynamicContentProps {
  elementId: number;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ elementId }) => {
  // Load dynamically different forms based on the elementId
  const match = useMediaQuery(theme.breakpoints.up('lg'));
  const renderContent = () => {
    switch (elementId) {
      case 1:
        return <NumberOfCandidateForm />;
      case 13:
        return <ExamForm />;
      case 26:
        return <HomeAcademyForm />;
      default:
        return <p>Unknown element</p>;
    }
  };

  return (
    <Stack className="dynamic-content" direction={'column'}>
      {renderContent()}
      <Stack
        direction={match ? 'row' : 'column'}
        sx={{
          width: '100%',
          gap: 2,
          padding: 2,
          justifyContent: match ? 'end' : 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          href="/search"
          sx={{
            width: match ? 'auto' : '60%',
            fontWeight: '700',
            letterSpacing: '0.5px',
            backgroundColor: '#9C2D41',
          }}
        >
          Rechercher
        </Button>
        <Button
          variant="contained"
          sx={{
            width: match ? 'auto' : '60%',
            fontWeight: '700',
            letterSpacing: '0.5px',
            backgroundColor: '#9C2D41',
          }}
        >
          Charger paramétrage
        </Button>
        <Button
          variant="contained"
          sx={{
            width: match ? 'auto' : '60%',
            fontWeight: '700',
            letterSpacing: '0.5px',
            backgroundColor: '#9C2D41',
          }}
        >
          Enregistrer paramétrage
        </Button>
      </Stack>
    </Stack>
  );
};

const NumberOfCandidateForm = () => {
  const firstTextfieldItems = [
    { id: 1, value: 'Egal' },
    { id: 2, value: 'Non Egal' },
  ];
  return (
    <FormControl
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
    >
      <TextField
        select
        aria-describedby=""
        defaultValue={firstTextfieldItems[0].value}
      >
        {firstTextfieldItems.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

const ExamForm = () => {
  const firstTextfieldItems = [
    { id: 1, value: 'Egal' },
    { id: 2, value: 'Non Egal' },
  ];

  const examNames = [
    { id: 1, value: 'Baccalaureat Générale (BCG)' },
    { id: 2, value: 'Baccalaureat Technologique (BTN)' },
  ];

  return (
    <FormControl
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
    >
      <TextField
        select
        aria-describedby=""
        defaultValue={firstTextfieldItems[0].value}
      >
        {firstTextfieldItems.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        aria-describedby="select your exam names"
        helperText="Please select your exam"
      >
        {examNames.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

const HomeAcademyForm = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const firstTextfieldItems = [
    { id: 1, value: 'Egal' },
    { id: 2, value: 'Non Egal' },
  ];

  return (
    <FormControl
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: 2,
      }}
    >
      <TextField
        select
        aria-label="Tell if equal or not equal"
        aria-labelledby="equal-select-label"
        aria-describedby="Tell if equal or not equal"
        defaultValue={firstTextfieldItems[0].value}
      >
        {firstTextfieldItems.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        value={selectedValue}
        aria-label="Select your exam"
        aria-labelledby="exam-select-label"
        aria-describedby="select your exam"
        helperText="Please select your exam"
        onChange={(event) => setSelectedValue(event.target.value)}
      >
        <MenuItem key={''} value={''}>
          &nbsp;
        </MenuItem>
        <MenuItem key={'aix-marseille'} value={'aix-marseille'}>
          Aix-Marseille
        </MenuItem>
      </TextField>
    </FormControl>
  );
};

export default DisplayForms;
