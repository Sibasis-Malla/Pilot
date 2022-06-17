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
  Stack,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Add, WindowRounded } from '@mui/icons-material';
import Web3Context from '../../context';
import RocketIcon from '@mui/icons-material/Rocket';

function Navbar() {
  const classes = useStyles();
  const { connectWallet, account, loginStat, login } = useContext(Web3Context);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = [
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
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link to="/" className={classes.logoContainer}>
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
                  style={{ backgroundColor: '#eebbc3', color: '#232946' }}
                  startIcon={<Add />}
                  onClick={() => login(account.currentAccount)}
                >
                  <Typography
                    className={classes.tab}
                    style={{ color: '#232946' }}
                    variant="body1"
                  >
                    Login to Lens
                  </Typography>
                </Button>
              ) : (
                <Typography className={classes.tab} variant="body1">
                  Connected to Lens
                </Typography>
              )}

              <Typography className={classes.tab} variant="body1">
                Hey,{' '}
                {`${String(account.currentAccount).slice(0, 5)}...${String(
                  account.currentAccount
                ).slice(String(account.currentAccount).length - 5)}`}
              </Typography>
            </>
          ) : (
            <Button
              variant="contained"
              style={{ backgroundColor: '#eebbc3', color: '#232946' }}
              startIcon={<Add />}
              onClick={connectWallet}
            >
              <Typography
                style={{ color: '#232946' }}
                variant="body1"
              >
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
  logoContainer: {
    textDecoration: 'none',
    color: '#fffffe',
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
