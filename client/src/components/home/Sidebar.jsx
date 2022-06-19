import React,{useEffect,useState} from 'react';
import { Typography, Paper, Stack, Avatar } from '@mui/material';
import SmallBlogCard from '../profile/SmallBlogCard';
import { Link } from 'react-router-dom';
import { getProfiles } from '../../Lens/query';

const Sidebar = () => {
  const [data,setData] = useState([]) 
  useEffect(()=>{
    getProfile()
  },[])

  const getProfile = async () => {
    //console.log(account)
    const a = {
      profileIds: ['0x2d5b','0x2eae','0x2eee'],
      limit: 50,
    };
    const res2 = await getProfiles(a);
    //console.log(res2.data.profiles.items);
    // const res = res2.data.profiles.items[0].name
    //   ? res2.data.profiles.items[0]
    //   : null;
     setData(res2.data.profiles.items);
    //console.log(res.coverPicture.original.url);
  };
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: 'grey.200',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
          backgroundColor: '#242629',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: 'left',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fffffe',
          }}
          gutterBottom
        >
          Popular Pilots
        </Typography>
        <Stack
          direction="column"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {data && data.map(({picture,id,name,handle }) => (
            <Link key={id} style={{ textDecoration: 'none' }} to={`/${id}/profile`}>
              <Stack
                direction="column"
                sx={{
                  color: '#fffffe',
                  py: 0.5,
                  px: 2,
                  mx: 0.5,
                  my: 1,
                  borderRadius: '10%',
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Avatar alt={name} src={picture.original.url} />
                  <Stack direction="column">
                    <Typography variant="body1" sx={{ color: '#fffffe' }}>
                      {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#bababa' }}>
                      {handle}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Paper>
      <Typography
        variant="h6"
        fontWeight={700}
        gutterBottom
        sx={{
          textAlign: 'left',
          fontSize: '2rem',
          fontWeight: 'bold',
          mt: 8,
          color: '#fffffe',
        }}
      >
        Subscribed
      </Typography>
      <SmallBlogCard n={35} />
      <SmallBlogCard n={35} />
      <SmallBlogCard n={35} />
    </>
  );
};

export default Sidebar;
