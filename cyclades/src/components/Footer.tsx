import { Link, ListItemText, Stack, Typography } from '@mui/material';

const Footer = () => {
  const footerPages = [
    { label: 'Plan du site', href: '/' },
    { label: 'Mentions légales', href: '/' },
    { label: 'Gestion des cookies', href: '/' },
    { label: 'Un problème ?', href: '/' },
    { label: 'Accessibilité conforme', href: '/' },
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
      {footerPages.map((item, index) => (
        <ListItemText>
          <Link
            href={item.href}
            key={index}
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
        <Typography>
          © Ministère de l'éducation nationale, Cyclades - Tous droits réservés
        </Typography>
      </ListItemText>
    </Stack>
  );
};

export default Footer;
