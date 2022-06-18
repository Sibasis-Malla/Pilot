import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom'
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
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Facebook, Instagram, Mail, Twitter } from '@mui/icons-material';


const UserCard = () => {
  const [data,setData] = useState("")
  const classes = useStyles();
  const{id} = useParams();
  useEffect(() => {
   getProfile()   
  }, [])
  
  const getProfile = async () => {
    const a = {
      profileIds: [`${id}`],
      limit: 50,
    };
    const res2 = await getProfiles(a);
    console.log(res2);
     const res =
       res2.data.profiles.items[0];
       setData(res)
       console.log()
      
    
  };


  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item md={4} sm={12} className={classes.gridPadding}>
              {data && <img
                className={classes.profileImage}
                src={`${data.picture.original.url}`}
                alt="Sambit Sankalp"
              />}
              <Stack direction="row" spacing={2} sx={{ mt: 2, width: '100%' }}>
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
                  {data && <Typography variant="h4" sx={{ color: '#fffffe' }}>
                    {data.name}
                  </Typography>}
                  <Typography variant="h6">
                    {data && <span style={{ fontWeight: 700 }}>{data.handle}</span>} 
                    </Typography>
                  </div>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mt: 2, color: '#fffffe' }}
                  >
                    <Typography variant="h6">
                    {data && <span style={{ fontWeight: 700 }}>{data.stats.totalFollowers}</span>} Followers
                    </Typography>
                    <Typography variant="h6">
                      {data && <span style={{ fontWeight: 700 }}>{data.stats.totalPosts}</span>} posts
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
                    {/* <Typography variant="h6">
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
                    </Typography> */}
                    {/* <Typography
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
                    </Typography> */}
                  </Stack>
                  <Typography
                    sx={{ mt: 3.5, color: '#94a1b2' }}
                    variant="body1"
                  >
                    {data && <>
                     {data.bio}
                    </>}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 4, justifyContent: 'flex-end' }}
                  >
                    <IconButton aria-label="delete" sx={{ color: '#7f5af0' }}>
                      <Facebook />
                    </IconButton>
                    <IconButton aria-label="delete" sx={{ color: '#7f5af0' }}>
                      <Instagram />
                    </IconButton>
                    <IconButton
                      aria-label="add an alarm"
                      sx={{ color: '#7f5af0' }}
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                      aria-label="add to shopping cart"
                      sx={{ color: '#7f5af0' }}
                    >
                      <Mail />
                    </IconButton>
                  </Stack>
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
    display: 'flex',
    minHeight: '550px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: '10px 0px',
    paddingTop: '20px',
    backgroundColor: '#242629',
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
  userWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  profileImage: {
    height: 'auto',
    width: '100%',
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
