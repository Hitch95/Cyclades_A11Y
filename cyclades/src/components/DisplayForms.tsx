import React, { FC } from 'react';
import { FormControl, Stack, Typography } from '@mui/material';

import theme from '../theme';

interface DisplayFormsProps {
  selectedElementId: number | null;
  onElementClick: (id: number) => void;
}

const DisplayForms: FC<DisplayFormsProps> = ({
  selectedElementId,
  //   onElementClick,
}) => {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '283px',
        right: '60px',
        width: '1040px',
        height: '50vh',
        backgroundColor: theme.palette.background.burgundyRed,
        outline: '2px solid black',
      }}
    >
      <div>
        {selectedElementId === null ? (
          <Typography sx={{ color: '#FAF7F4' }}>
            Please select an element from the sidebar.
          </Typography>
        ) : (
          <DynamicContent elementId={selectedElementId} />
        )}
      </div>
    </Stack>
  );
};

interface DynamicContentProps {
  elementId: number;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ elementId }) => {
  // You can dynamically load different forms based on the elementId
  const renderContent = () => {
    switch (elementId) {
      case 1:
        return <Form1 />;
      case 13:
        return <Form2 />;
      case 26:
        return <Form3 />;
      default:
        return <p>Unknown element</p>;
    }
  };

  return <div className="dynamic-content">{renderContent()}</div>;
};

const Form1: FC = () => (
  <FormControl>
    <Typography sx={{ color: '#FAF7F4' }}>First form</Typography>
  </FormControl>
);
const Form2: FC = () => (
  <FormControl>
    <Typography sx={{ color: '#FAF7F4' }}>Form of Examen</Typography>
  </FormControl>
);
const Form3: FC = () => (
  <Typography sx={{ color: '#FAF7F4' }}>Form of Académie d'origine</Typography>
);

export default DisplayForms;
