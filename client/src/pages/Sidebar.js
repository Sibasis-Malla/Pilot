import  React,{useEffect,useContext,useState} from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material';
import SamllBlogCard from '../components/profile/SmallBlogCard';
import { Link } from 'react-router-dom';
import {doesFollow} from '../Lens/query'
import { follow } from '../Lens/utils/pilot-utils';

import Web3Context from '../context';

function Sidebar(props) {
  const [follows,setfollows] = useState(true)
  const {lensHub,account}= useContext(Web3Context)
  useEffect(()=>{
    doesfollow()
  },[account.currentAccount])
  const Follow = async()=>{
    await follow(lensHub,props.id);

  }
  const doesfollow= async()=>{
    const obj=[
     
    {
        followerAddress:account.currentAccount,
        profileId:props.id
       }
      
    ]
    const res = account.currentAccount?await doesFollow(obj):null
    console.log(res?res.data.doesFollow[0].follows:null)
    setfollows(res?res.data.doesFollow[0].follows:false)
  }
  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: '#242629',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ color: '#fffffe' }}
          gutterBottom
        >
          About the Author
        </Typography>
        <img
          style={{
            width: '50%',
            height: 'auto',
            borderRadius: '50%',
            marginTop: 5,
          }}
          src={props.img}
          alt="user"
        />
        <Link style={{ textDecoration: 'none' }} to={`/${props.id}/profile`}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ mt: 2, color: '#fffffe' }}
          >
           {props.name}
          </Typography>
        </Link>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 2,
            width: '100%',
            justifyContent: 'center',
          }}
        >
         {!follows?( <Button
            variant="contained"
            sx={{ backgroundColor: '#7f5af0', color: '#fffffe' }}
            onClick={Follow}
          >
            Follow
          </Button>):<>Following</>}

        </Stack>
        <Typography sx={{ mt: 2, px: 1, color: '#94a1b2' }}>
         {props.bio}
        </Typography>
      </Paper>
      <Typography
        variant="h6"
        fontWeight={700}
        gutterBottom
        sx={{ mt: 3, color: '#fffffe' }}
      >
        More from the Author
      </Typography>
      <SamllBlogCard n={35} />
      <SamllBlogCard n={35} />
    </Grid>
  );
}

export default Sidebar;
