import { FC, useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../theme';
import { MENU_CONFIG } from '../types';

interface MenuPopupProps {
  open: boolean;
  handleClose: () => void;
}

const MenuPopup: FC<MenuPopupProps> = ({ open, handleClose }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack
        direction="column"
        sx={{
          width: '100%',
          height: 'auto',
          padding: '145.9px 60px 0px 60px',
        }}
      >
        <Grid container direction="row" sx={{ width: '100%' }}>
          <Grid size={{ lg: 4 }}>
            <List
              sx={{
                height: '100%',
                backgroundColor: '#9C2D41',
                color: '#FAF7F4',
                padding: '0',
              }}
            >
              {MENU_CONFIG.map((item, index) => (
                <ListItem disablePadding key={index}>
                  <Button
                    onClick={() => setActiveMenuIndex(index)}
                    sx={{
                      width: '100%',
                      paddingLeft: '2rem',
                      color: '#FAF7F4',
                      textAlign: 'left',
                      textTransform: 'none',
                      backgroundColor: theme.palette.background.burgundyRed,
                      borderRadius: '0',
                      '&:hover': {
                        color: '#9C2D41',
                        backgroundColor: theme.palette.background.cream,
                      },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </Button>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            sx={{ backgroundColor: theme.palette.background.cream }}
            size={{ md: 8, lg: 8, xl: 8 }}
          >
            <CloseIcon
              sx={{
                color: 'black',
                position: 'absolute',
                top: '165px',
                right: '80px',
                cursor: 'pointer',
                '&:hover': {
                  color: '#9C2D41',
                },
              }}
              onClick={handleClose}
            />
            <List sx={{ width: '50%' }}>
              {MENU_CONFIG[activeMenuIndex].subItems?.map((item, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton
                    component="a"
                    href={item.href}
                    sx={{
                      paddingLeft: '2rem',
                      backgroundColor: '#FAF7F4',
                      '&:hover': {
                        color: '#9C2D41',
                        backgroundColor: 'inherit',
                      },
                      '& .MuiTypography-root': {
                        color: 'inherit',
                      },
                    }}
                  >
                    <KeyboardArrowRightIcon sx={{ marginRight: '0.75rem' }} />
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Stack>
    </Modal>
  );
};
export default MenuPopup;
