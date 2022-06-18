import React, { useContext, useState } from 'react';

import {
  Typography,
  Button,
  Container,
  Menu,
  MenuItem,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  styled,
  Stack,
  Badge,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import Web3Context from '../../context';
import RocketIcon from '@mui/icons-material/Rocket';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const { connectWallet, account, loginStat, login } = useContext(Web3Context);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = [
    {
      link: '/',
      text: `Hey, ${String(account.currentAccount).slice(0, 5)}...${String(
        account.currentAccount
      ).slice(String(account.currentAccount).length - 5)}`,
    },
    { link: '/profile', text: 'Profile' },
    { link: '/article/create', text: 'Write' },
    { link: '/', text: 'Sign Out' },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className={classes.root}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link to="/" className={classes.logoContainer}>
          <RocketIcon sx={{ fontSize: '40px', mr: 0.5 }} />
          <Typography variant="h4" component="h4" className={classes.logo}>
            Pilot
          </Typography>
        </Link>
        <div className={classes.tabsContainer}>
          {account.currentAccount != null ? (
            <>
              {!loginStat ? (
                <Button
                  variant="contained"
                  style={{ color: '#fffffe', backgroundColor: '#7f5af0' }}
                  startIcon={<Add />}
                  onClick={() => login(account.currentAccount)}
                >
                  <Typography style={{ color: '#fffffe' }} variant="body1">
                    Login to Lens
                  </Typography>
                </Button>
              ) : (
                <Stack
                  direction="row"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className={classes.ripple} />
                  <Typography className={classes.tab}  variant="body1">
                    Connected to Lens
                  </Typography>
                </Stack>
              )}
              <Box sx={{ flexGrow: 0, ml: 1 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Sambit Sankalp"
                      src="https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map(({ link, text }) => (
                    <Link
                      style={{ textDecoration: 'none', color: '#000' }}
                      key={text}
                      to={link}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{text}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              {/* <Typography
                className={classes.tab}
                sx={{ ml: 2 }}
                variant="body1"
              >
                Hey,{' '}
                {`${String(account.currentAccount).slice(0, 5)}...${String(
                  account.currentAccount
                ).slice(String(account.currentAccount).length - 5)}`}
              </Typography> */}
            </>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: '#7f5af0', color: '#fffffe' }}
              startIcon={<Add />}
              onClick={connectWallet}
            >
              <Typography style={{ color: '#fffffe' }} variant="body1">
                Connect to Wallet
              </Typography>
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '70px',
    position: 'fixed',
    top: 0,
    backgroundColor: '#16161a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
  ripple: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#44b700',
    color: '#44b700',
    marginRight: '5px',
  },
  logoContainer: {
    textDecoration: 'none',
    color: '#fffffe',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#fffffe',
    textTransform: 'uppercase',
    fontFamily: 'monospace',
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  tabLink: {
    margin: 0,
    textDecoration: 'none',
    padding: 'auto 15px',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  tab: {
    color: '#fffffe',
    fontFamily: 'Helvetica',
    marginRight: '20px',
  },
}));
