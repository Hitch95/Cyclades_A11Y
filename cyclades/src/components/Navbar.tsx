import { useState } from 'react';
import { Button, Link, ListItemText, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MarianneLogo from '/marianne.webp';
import CycladesLogo from '/logo-cyclades.webp';
import MenuPopup from './MenuPopup';
import theme from '../theme';

const Navbar = () => {
  const isAuthenticated = false;
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

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
        }}
      >
        {/* Left group */}
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: 2,
            paddingLeft: '60px',
          }}
        >
          <ListItemText>
            <Link href="/" color="inherit" aria-label="Accueil">
              <HomeIcon />
            </Link>
          </ListItemText>
          <Button
            color="inherit"
            onClick={handleOpenMenu}
            sx={{
              height: '100%',
              borderRadius: '0px',
              fontSize: '20px',
              '&:hover': {
                color: '#9C2D41',
                backgroundColor: theme.palette.background.cream,
              },
            }}
          >
            Menu
            <ExpandMoreIcon />
          </Button>
          <MenuPopup open={openMenu} handleClose={handleCloseMenu} />
        </Stack>

        {/* Right group */}
        {!isAuthenticated ? (
          <Stack
            direction="row"
            sx={{ alignItems: 'center', paddingRight: '60px', gap: 4 }}
          >
            <Link
              href="/signup"
              sx={{
                display: 'inline-block',
                padding: '15px 16px',
                borderRadius: '0px',
                fontSize: '20px',
                textTransform: 'capitalize',
                color: '#FAF7F4',
                textDecoration: 'none',
                background:
                  'linear-gradient(to right, #FAF7F4 50%, #9C2D41 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0%',
                transition: 'background-position 0.5s ease-in-out',
                '&:hover': {
                  color: 'black',
                  backgroundPosition: '0% 0%',
                  textDecoration: 'underline',
                },
              }}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              sx={{
                display: 'inline-block',
                padding: '15px 16px',
                borderRadius: '0px',
                fontSize: '20px',
                textTransform: 'capitalize',
                color: '#FAF7F4',
                textDecoration: 'none',
                background:
                  'linear-gradient(to right, #FAF7F4 50%, #9C2D41 50%)',
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0%',
                transition: 'background-position 0.5s ease-in-out',
                '&:hover': {
                  color: 'black',
                  backgroundPosition: '0% 0%',
                  textDecoration: 'underline',
                },
              }}
            >
              Login
            </Link>
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
