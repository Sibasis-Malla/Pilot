import React,{useContext} from 'react';

import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Add, WindowRounded } from '@mui/icons-material';
import Web3Context from '../../context';

function Navbar() {
  const classes = useStyles();
  const { connectWallet, account,loginStat,login } = useContext(Web3Context);

  return (
    <div className={classes.root}>
    <Link to="/" className={classes.logoContainer}>
      <Typography variant="h4" component="h4" className={classes.logo}>
        Pilot
      </Typography>
    </Link>
    <div className={classes.tabsContainer}>
      <Link className={classes.tabLink} to="/profile">
        <Typography className={classes.tab} variant="body1">
          Profile Page
        </Typography>
      </Link>
      {account.currentAccount != null ? (
        <>
        {!loginStat?(<Button
          variant="contained"
          style={{ backgroundColor: '#eebbc3', color: '#232946' }}
          startIcon={<Add />}
          onClick={()=>login(account.currentAccount)}
        >
          <Typography
            className={classes.tab}
            style={{ color: '#232946' }}
            variant="body1"
          >
            Login to Lens
          </Typography>
        </Button>):
        <Typography className={classes.tab} variant="body1">
        Connected to Lens
      </Typography>
        }
          
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
            className={classes.tab}
            style={{ color: '#232946' }}
            variant="body1"
          >
            Connect to Wallet
          </Typography>
        </Button>
      )}
    </div>
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
    backgroundColor: '#232946',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
  },
  logoContainer: {
    textDecoration: 'none',
    marginLeft: '10%',
  },
  logo: {
    color: '#fff',
    textTransform: 'uppercase',
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '10%',
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
