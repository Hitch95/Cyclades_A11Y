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
        backgroundColor: '#FAF7F4',
        borderRight: '1px solid #9C2D41',
      }}
    >
      <List
        sx={{
          color: 'black',
          padding: '1px',
        }}
      >
        {leftSidebarItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
              role="button"
              sx={{
                transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                  backgroundColor: '#D4A373',
                  outline: '1px solid white',
                },
                '&:focus': {
                  backgroundColor: '#D4A373',
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
