import { useState } from 'react';
import { Button, Link, ListItemText, Stack, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MarianneLogo from '/marianne.webp';
import CycladesLogo from '/logo-cyclades.webp';
import MenuPopup from './MenuPopup';

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
            <Link href="/" color="inherit">
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
                backgroundColor: '#FAF7F4',
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
            sx={{ alignItems: 'center', paddingRight: '60px' }}
          >
            <Button
              color="inherit"
              sx={{
                height: '100%',
                borderRadius: '0px',
                borderRight: '1px solid #9C2D41',
                fontSize: '20px',
                textTransform: 'capitalize',
                backgroundColor: '#FAF7F4',
                color: '#9C2D41',
              }}
            >
              <Link
                href="/signup"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Sign Up
              </Link>
            </Button>
            <Button
              color="inherit"
              sx={{
                height: '100%',
                borderRadius: '0px',
                borderLeft: '1px solid #9C2D41',
                fontSize: '20px',
                textTransform: 'capitalize',
                backgroundColor: '#FAF7F4',
                color: '#9C2D41',
              }}
            >
              <Link
                href="/login"
                color="inherit"
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Login
              </Link>
            </Button>
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
