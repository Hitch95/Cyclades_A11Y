import { Button, Link, ListItemText, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MarianneLogo from '/marianne.webp';
import CycladesLogo from '/logo-cyclades.webp';

const Navbar = () => {
  const isAuthenticated = false;

  return (
    <Stack
      component="nav"
      aria-labelledby="main-navigation"
      role="navigation"
      direction="column"
    >
      <Stack
        direction="row"
        sx={{
          width: '100%',
          backgroundColor: '#FAF7F4',
          alignItems: 'center',
        }}
      >
        <Link
          href="/"
          sx={{
            cursor: 'pointer',
          }}
        >
          <img src={CycladesLogo} alt="Cyclades" width={183} height={79} />
        </Link>
        <Link
          href="/"
          sx={{
            cursor: 'pointer',
          }}
        >
          <img
            src={MarianneLogo}
            alt="Liberté égalité fraternité, République Française"
            width={93}
            height={60}
          />
        </Link>
        <Typography
          variant="h1"
          sx={{
            fontSize: '2em',
            fontWeight: 'bold',
            marginLeft: '18%',
            cursor: 'default',
          }}
        >
          Gestion des examens et concours
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          color: 'white',
          backgroundColor: (theme) => theme.palette.background.navbar,
          justifyContent: 'space-between',
          height: '60px',
          paddingLeft: '60px',
        }}
      >
        {/* Left group */}
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: 2,
          }}
        >
          <ListItemText>
            <Link
              href="/"
              color="inherit"
              sx={{
                height: '24px',
              }}
            >
              <HomeIcon />
            </Link>
          </ListItemText>
          <Button
            color="inherit"
            sx={{
              minHeight: '100%',
              borderRadius: '0px',
              '&:hover': {
                color: '#9C2D41',
                backgroundColor: '#FAF7F4',
              },
            }}
          >
            Menu
            <ExpandMoreIcon />
          </Button>
        </Stack>

        {/* Right group */}
        {!isAuthenticated ? (
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: 'center', marginRight: '60px' }}
          >
            <ListItemText>
              <Link href="/signup" color="inherit">
                Sign Up
              </Link>
            </ListItemText>
            <ListItemText>
              <Link href="/login" color="inherit">
                Login
              </Link>
            </ListItemText>
          </Stack>
        ) : (
          <ListItemText sx={{ marginRight: '60px' }}>
            <Button onClick={() => {}}>Disconnect</Button>
          </ListItemText>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
