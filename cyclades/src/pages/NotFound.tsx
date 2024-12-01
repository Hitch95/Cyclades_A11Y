import { Button, Link, Stack, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const NotFound = () => {
  return (
    <Stack
      sx={{
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <main style={{ textAlign: 'center' }}>
        <Stack
          direction={'row'}
          sx={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}
        >
          <Typography sx={{ fontSize: '2em' }}>Erreur</Typography>
          <Typography
            sx={{
              fontSize: '16em',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
            }}
          >
            404
          </Typography>
          <Typography sx={{ fontSize: '2em' }}>Page non trouvé</Typography>
        </Stack>
        <Typography variant="h1" sx={{ fontSize: '2em' }}>
          Seul la page{' '}
          <Link
            href="/handle-subscription"
            aria-label='Aller sur la page "Gérer les inscriptions"'
            sx={{
              '&.MuiLink-underlineAlways': {
                textDecorationColor: '#9C2D41',
                color: 'inherit',
              },
            }}
          >
            <Typography
              variant="inherit"
              component="span"
              id='Aller sur la page "Gérer les inscriptions"'
              sx={{ fontStyle: 'italic', '&:hover': { color: '#9C2D41' } }}
            >
              Gérer les inscriptions
            </Typography>
          </Link>
          , dans la section{' '}
          <span style={{ fontWeight: 'bold' }}>Inscription</span>, du menu est
          accessible.
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="/"
          aria-describedby={`Retour à la page d'accueil`}
          sx={{
            marginTop: '4vh',
            fontSize: '1em',
            height: '3em',
            color: 'white',
            backgroundColor: '#9C2D41',
            letterSpacing: '1px',
            transition: 'all 0.2s linear',
            '&:hover': {
              boxShadow: '9px 9px 33px #d1d1d1, -9px -9px 33px #9C2D41',
              transform: 'translateY(-2px)',
              '& .MuiSvgIcon-root': {
                fontSize: '1.2em',
                transform: 'translateX(-5px)',
              },
            },
          }}
        >
          <KeyboardBackspaceIcon
            sx={{
              marginRight: '5px',
              marginLeft: '5px',
              fontSize: '20px',
              transition: 'all 0.4s ease-in',
            }}
          ></KeyboardBackspaceIcon>
          <span
            id={`Retour à la page d'accueil`}
            style={{ textTransform: 'none', color: 'inherit' }}
          >
            Retour à la page d'accueil
          </span>
        </Button>
      </main>
    </Stack>
  );
};

export default NotFound;
