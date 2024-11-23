import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Button,
  styled,
} from '@mui/material';

interface SubItem {
  label: string;
}

interface MenuItem {
  label: string;
  subItems?: SubItem[];
}

interface OptionnalTeachingsProps {
  items: MenuItem[];
}

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: theme.palette.background.goldAccent,
  textTransform: 'none',
  fontSize: '0.875em',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}));

const OptionnalTeachings: React.FC<OptionnalTeachingsProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <List>
      {items.map((item, index) => (
        <Stack key={index}>
          <CustomButton variant="contained" onClick={() => handleToggle(index)}>
            <ListItemText primary={item.label} sx={{ fontSize: '0.875em' }} />
          </CustomButton>
          {openIndex === index && item.subItems && (
            <List component="div" disablePadding>
              {item.subItems.map((subItem, subIndex) => (
                <ListItem key={subIndex}>
                  <ListItemText
                    primary={subItem.label}
                    sx={{ fontSize: '0.875em' }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Stack>
      ))}
    </List>
  );
};

export default OptionnalTeachings;
