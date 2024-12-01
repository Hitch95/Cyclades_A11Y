import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from '@mui/material';

const LeftSidebar = () => {
  const leftSidebarItems = [
    { label: 'Créer une candidature' },
    { label: 'Consulter / Modifier des candidatures' },
    { label: 'Modifier les données candidats (masqué en prod)' },
    { label: 'Importer des candidatures via fichier (hors BEE)' },
    { label: `Gérer l'état des candidatures` },
    { label: 'Gérer les recueils de consentements des candidatures' },
    { label: 'Informer vos candidats pour la validation en ligne' },
    { label: `Changer définitivement l'académie d'une candidature` },
    { label: 'Pré-inscire des candidats en masse aux CG' },
  ];

  return (
    <Stack
      component="nav"
      aria-label="left sidebar navigation menu"
      direction="column"
      sx={{
        width: '15rem',
        borderRight: '1px solid black',
      }}
    >
      <List
        sx={{
          color: 'white',
          backgroundColor: '#1B1B1B',
          padding: '1px',
        }}
      >
        {leftSidebarItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              role="button"
              sx={{
                borderTop: '1px solid white',
                borderBottom: '1px solid white',
                transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                  color: 'black',
                  backgroundColor: 'white',
                },
                '&:focus': {
                  color: 'white',
                  backgroundColor: '#9C2D41',
                },
              }}
            >
              <ListItemText primary={item.label} aria-label={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default LeftSidebar;
