import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfiles } from '../../Lens/query';

// Libraries
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Stack,
  Container,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';

const UserCard = () => {
  const [data, setData] = useState('');
  const classes = useStyles();
  const { id } = useParams();
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const a = {
      profileIds: [`${id}`],
      limit: 50,
    };
    const res2 = await getProfiles(a);
    console.log(res2);
    const res = res2.data.profiles.items[0].name
      ? res2.data.profiles.items[0]
      : null;
    setData(res);
    console.log(res.coverPicture.original.url);
  };
  const img = 'https://source.unsplash.com/random';
  return (
    <div
      className={classes.wrapper}
      style={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        textAlign: 'left',
        // filter: 'blur(8px)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `linear-gradient(to bottom, transparent, #232323), url(${
          data ? data.coverPicture.original.url : img
        })`,
      }}
    >
      <Container maxWidth="lg" sx={{ my: 5, mt: 7 }}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container>
              <Grid item md={4} sm={12} className={classes.gridPadding}>
                {data && (
                  <img
                    className={classes.profileImage}
                    src={`${data.picture.original.url}`}
                    alt="Sambit Sankalp"
                  />
                )}
                <Stack direction="row" spacing={2} sx={{ mt: 2, width: '80%' }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: '#7f5af0' }}
                  >
                    Follow
                  </Button>
                  {/* <Button fullWidth variant="outlined" sx={{ color: '#7f5af0' }}>
                  Subscribe
                </Button> */}
                </Stack>
              </Grid>
              <Grid item md={8} sm={12} className={classes.gridPadding}>
                <div className={classes.userData}>
                  <div className={classes.columnFlex}>
                    <div className={classes.userName}>
                      {data && (
                        <Typography variant="h4" sx={{ color: '#fffffe' }}>
                          {data.name}
                        </Typography>
                      )}
                      <Typography variant="h6" sx={{ color: '#bababa' }}>
                        {data && <span>{data.handle}</span>}
                      </Typography>
                    </div>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{ mt: 2, color: '#fffffe' }}
                    >
                      <Typography variant="h6">
                        {data && (
                          <span style={{ fontWeight: 700 }}>
                            {data.stats.totalFollowers}
                          </span>
                        )}{' '}
                        Followers
                      </Typography>
                      <Typography variant="h6">
                        {data && (
                          <span style={{ fontWeight: 700 }}>
                            {data.stats.totalPosts}
                          </span>
                        )}{' '}
                        posts
                      </Typography>
                      {/* <Typography variant="h6">
                      <span style={{ fontWeight: 700 }}>67</span> subscribers
                    </Typography> */}
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 2, color: '#fffffe' }}
                    >
                      <Typography variant="h6">
                        <span style={{ fontWeight: 700 }}>Genre</span> -{' '}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          backgroundColor: '#7f5af0',
                          color: '#fffffe',
                          py: 0.5,
                          px: 2,
                          borderRadius: '10%',
                        }}
                      >
                        Tech
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          backgroundColor: '#7f5af0',
                          color: '#fffffe',
                          py: 0.5,
                          px: 2,
                          borderRadius: '10%',
                        }}
                      >
                        Design
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          backgroundColor: '#7f5af0',
                          color: '#fffffe',
                          py: 0.5,
                          px: 2,
                          borderRadius: '10%',
                        }}
                      >
                        Bussiness
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{ mt: 3.5, color: '#94a1b2' }}
                      variant="body1"
                    >
                      {data && <>{data.bio}</>}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                      }}
                    >
                      <IconButton sx={{ color: '#7f5af0' }}>
                        <Facebook />
                      </IconButton>
                      <IconButton sx={{ color: '#7f5af0' }}>
                        <Instagram />
                      </IconButton>
                      <IconButton sx={{ color: '#7f5af0' }}>
                        <Twitter />
                      </IconButton>
                      <IconButton sx={{ color: '#7f5af0' }}>
                        <Mail />
                      </IconButton>
                    </Stack>
                  </div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default UserCard;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    minHeight: '550px',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  },
  card: {
    padding: '10px 0px',
    paddingTop: '20px',
    backgroundColor: '#242629',
    zIndex: 10000,
    filter: 'none',
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
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '2rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
  },
  userWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  profileImage: {
    height: 'auto',
    width: '80%',
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
