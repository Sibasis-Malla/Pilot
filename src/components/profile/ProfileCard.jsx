import React from 'react';

// Libraries
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import AddTaskIcon from '@mui/icons-material/AddTask';

import { Link } from 'react-router-dom';

const UserCard = () => {
  //   let Desktop = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item md={5} sm={12} className={classes.gridPadding}>
              <div className={classes.userWrapper}>
                <div className={classes.imageWrapper}>
                  <img
                    className={classes.profileImage}
                    src="https://res.cloudinary.com/tedxnitrourkela/image/upload/v1643281545/team/technical/Sambit_Sankalp_omdbgy.png"
                    alt="user photo"
                  />
                </div>
                <div className={classes.userData}>
                  <div className={classes.columnFlex}>
                    <div className={classes.userName}>
                      <Typography variant="h5">Sambit Sankalp</Typography>
                    </div>
                    <div>
                      <div className={classes.boldText}>Email</div>
                      <Typography variant="body2">
                        sambit.sankalp.official@gmail.com
                      </Typography>
                    </div>
                    <div>
                      <Button variant="contained" component="span">
                        Follow
                      </Button>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <AddTaskIcon />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid
              item
              md={3}
              sm={6}
              className={`${classes.bordered} ${classes.gridPadding} ${classes.postDetailsWrapper}`}
            >
              <div className={classes.postDetails}>
                <div>
                  <Typography variant="body2" className={classes.boldText}>
                    Number Of Posts
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">100</Typography>
                </div>
              </div>
              <div className={classes.postDetails}>
                <Typography variant="body2">
                  <span className={classes.boldText}>Content: </span>5
                </Typography>

                <Typography variant="body2">
                  <span className={classes.boldText}>Design: </span>0
                </Typography>

                <Typography variant="body2">
                  <span className={classes.boldText}>Photography: </span>0
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              className={`${classes.bordered} ${classes.gridPadding} ${classes.postDetailsWrapper}`}
            >
              <div className={classes.postDetails}>
                <div>
                  <Typography variant="body2" className={classes.boldText}>
                    Teams
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2">Content</Typography>
                </div>
              </div>

              <div className={classes.postDetails}>
                <div>
                  <Typography variant="body2" className={classes.boldText}>
                    Links
                  </Typography>
                </div>
                <div className={classes.socialIcon}>
                  <span>
                    <Link to="https://www.linkedin.com/company/monday-morning-the-official-student-media-body-of-nit-rourkela/mycompany/">
                      <i className="fab fa-linkedin" />
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.facebook.com/mondaymorningnitr">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </span>
                  <span>
                    <Link to="https://www.instagram.com/mondaymorningnitrofficial/?hl=en">
                      <i className="fab fa-instagram" />
                    </Link>
                  </span>
                  <span>
                    <Link to="https://twitter.com/mmnitrkl?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                      <i className="fab fa-twitter" />
                    </Link>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
export default UserCard;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: '1.5rem auto 0 auto ',
    maxWidth: '1200px',
  },
  card: {
    boxShadow: theme.shadows[0],
  },
  boldText: {
    fontFamily: 'Source Sans Pro',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
  },
  gridPadding: {
    width: '100%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  bordered: {
    width: '100%',
    borderLeft: '1px solid',
    borderColor: theme.palette.secondary.neutral50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2rem',
      paddingBottom: '2rem',
      borderLeft: 'unset',
      borderTop: '1px solid',
      borderColor: theme.palette.secondary.neutral50,
    },
  },
  userWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    alignSelf: 'center',
  },
  profileImage: {
    borderRadius: '50%',
    height: 135,
    width: 135,
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },
  userName: {
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
    },
  },
  postDetailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  postDetails: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  postInfo: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem',
      alignText: 'center',
    },
  },
  postInfoNumber: {
    alignSelf: 'center',
    marginTop: '20px',
  },
  socialIcon: {
    maxWidth: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2px',
    fontSize: '20px',
  },
}));
