import { Link, ListItemText, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack
      component="footer"
      aria-labelledby="page-footer"
      role="contentinfo"
      id="page-footer"
      sx={{
        backgroundColor: (theme) => theme.palette.background.footer,
        padding: 2,
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: 2,
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <ListItemText>
          <Link
            href="/"
            aria-label="Plan du site"
            color="inherit"
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
          >
            Plan du site
          </Link>
        </ListItemText>
        <ListItemText>
          <Link
            href="/"
            aria-label="Plan du site"
            color="inherit"
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
          >
            Mentions légales
          </Link>
        </ListItemText>
        <ListItemText>
          <Link
            href="/"
            aria-label="Plan du site"
            color="inherit"
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
          >
            Accessibilité conforme
          </Link>
        </ListItemText>
        <ListItemText>
          <Typography>
            © Ministère de l'éducation nationale, Cyclades - Tous droits
            réservés
          </Typography>
        </ListItemText>
      </Stack>
    </Stack>
  );
};

export default Footer;
