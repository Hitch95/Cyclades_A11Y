import { Link, ListItemText, Stack, Typography } from '@mui/material';

const Footer = () => {
  const footerPages = [
    { id: 1, label: 'Plan du site', href: '/' },
    { id: 2, label: 'Mentions légales', href: '/' },
    { id: 3, label: 'Gestion des cookies', href: '/' },
    { id: 4, label: 'Un problème ?', href: '/' },
    { id: 5, label: 'Accessibilité conforme', href: '/' },
  ];

  return (
    <Stack
      component="footer"
      aria-labelledby="page-footer"
      role="contentinfo"
      id="page-footer"
      direction="row"
      sx={{
        width: '100%',
        height: '60px',
        padding: '0px 60px',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        backgroundColor: (theme) => theme.palette.background.footer,
      }}
    >
      {footerPages.map((item) => (
        <ListItemText key={item.id}>
          <Link
            href={item.href}
            aria-label="Plan du site"
            color="inherit"
            sx={{
              '&:hover': {
                color: 'white',
              },
            }}
          >
            {item.label}
          </Link>
        </ListItemText>
      ))}
      <ListItemText>
        <Typography sx={{}}>
          © Ministère de l'éducation nationale, Cyclades - Tous droits réservés
        </Typography>
      </ListItemText>
    </Stack>
  );
};

export default Footer;
