import { FC } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface MenuPopupProps {
  open: boolean;
  handleClose: () => void;
}

const MenuPopup: FC<MenuPopupProps> = ({ open, handleClose }) => {
  const menuItems = [
    { label: 'Accueil' },
    { label: 'Administration' },
    { label: 'Reglementation' },
    { label: 'Inscription' },
    { label: 'Orga-Affectation' },
    { label: 'Déroulement' },
    { label: 'Evaluation (Désactivé en Prod)' },
    { label: 'Délibération (Désactivé en Prod)' },
    { label: 'Publication (Désactivé en Prod)' },
    { label: 'Fin de session (Désactivé en Prod)' },
    { label: 'Document' },
  ];

  const subscriptionItems = [
    { label: `Gérer les services d'inscription` },
    { label: 'Gérer les inscriptions', href: '/handleSubscription' },
    { label: 'Gérer les mesures handicap' },
    { label: 'Editer des listes de candidatures' },
    { label: 'Editer liste des candidats allophones' },
    { label: 'Editer des confirmations d’inscription' },
    { label: 'Gérer les pièces justificatives' },
    { label: 'Editer des statistiques' },
    { label: 'Editer statistiques générales simples' },
  ];

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
                backgroundColor: '#9C2D41',
                color: 'white',
                padding: '0',
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem disablePadding key={index}>
                  <ListItemButton
                    sx={{
                      '&:hover': {
                        color: '#9C2D41',
                        backgroundColor: '#FAF7F4',
                      },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            sx={{ backgroundColor: '#FAF7F4' }}
            size={{ md: 8, lg: 8, xl: 8 }}
          >
            <List sx={{ width: '50%' }}>
              {subscriptionItems.map((item, index) => (
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
