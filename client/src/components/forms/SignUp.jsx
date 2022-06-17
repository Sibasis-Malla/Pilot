import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { createProfile, getProfiles } from '../../Lens/query';
import { setProfileMetadata } from '../../Lens/utils/setProfileMetadata';
import { setProfileImageUriNormal } from '../../Lens/utils/setProfilePic';
import { createAccount, getProfileId } from '../../Lens/utils/pilot-utils';
import { v4 as uuidv4 } from 'uuid';
import client from '../../Lens/utils/ipfs';
import Web3Context from '../../context';
import { Contract } from 'ethers';

const Input = styled('input')({});

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7f5af0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7f5af0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7f5af0',
    },
    '&:hover fieldset': {
      borderColor: '#7f5af0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7f5af0',
    },
  },
});

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7f5af0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7f5af0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#7f5af0',
    },
    '&:hover fieldset': {
      borderColor: '#7f5af0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7f5af0',
    },
  },
});

export default function SignUp() {
  const [Coverimage, setCoverImage] = useState();
  const [Profileimage, setProfileImage] = useState();
  const [CoverimageURI, setCoverImageURI] = useState();
  const [ProfileimageURI, setProfileImageURI] = useState();
  const [handleName, setHandleName] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileId, setProfileId] = useState('');
  const { pilotContract, account } = useContext(Web3Context);
  const handleCoverImage = (event) => {
    setCoverImage(event.target.files[0]);
  };
  const handleProfileImage = (event) => {
    setProfileImage(event.target.files[0]);
  };
  const handleUsername = (event) => {
    setHandleName(() => ([event.target.name] = event.target.value));
  };
  const handlename = (event) => {
    setName(() => ([event.target.name] = event.target.value));
  };
  const handleBio = (event) => {
    setBio(() => ([event.target.name] = event.target.value));
  };
  const UploadImage = async (image, ind) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'mystiq');
    data.append('cloud_name', 'doybtqm8h');
    await fetch('https://api.cloudinary.com/v1_1/doybtqm8h/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        !ind ? setCoverImageURI(data.url) : setProfileImageURI(data.url);
        console.log('Image Uploaded');
      })
      .catch((err) => console.log(err));
  };
  const handleRegister = async () => {
    const obj = {
      handle: handleName,
      followModule: {
        freeFollowModule: true,
      },
    };
    const res = await createProfile(obj);
    console.log(res);
    const res3 = await getProfile();
    setProfileId(res3);
    await createAccount(pilotContract, res3, account.currentAccount);
  };

  const handleData = async () => {
    const obj = {
      version: '1.0.0',
      metadata_id: uuidv4(),
      name: name,
      bio: bio,
      cover_picture: CoverimageURI,
      attributes: null,
    };

    const result = await client.add(JSON.stringify(obj));
    const str = 'https://ipfs.io/ipfs/';
    const finalResult = str.concat(String(result.path));
    //console.log(result)
    console.log(finalResult);
    console.log(profileId);

    const res = await setProfileMetadata(profileId, finalResult);
    console.log(res);
  };
  const handleProfilePic = async () => {
    const res = await setProfileImageUriNormal(profileId, ProfileimageURI);
    console.log(res);
  };
  const getProfile = async () => {
    const a = {
      ownedBy: ['0x49535e0D37E232F43b1c35541978c562051473D6'],
      limit: 50,
    };
    const res2 = await getProfiles(a);
    console.log(res2);
    const res =
      res2.data.profiles.items[res2.data.profiles.items.length - 1].id;
    return res;
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginBottom: 15,
        color: '#fffffe',
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="handleName"
              label="Username"
              name="handleName"
              onChange={handleUsername}
            />
            <Button
              fullWidth
              variant="contained"
              component="span"
              onClick={handleRegister}
            >
              Register
            </Button>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handlename}
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <CssTextField
                required
                fullWidth
                multiline
                InputLabelProps={{
                  style: { color: ' #fffffe' },
                }}
                InputProps={{
                  style: { color: '#fffffe' },
                }}
                minRows={5}
                content="content"
                label="Bio"
                name="bio"
                id="content"
                autoComplete="content"
                onChange={handleBio}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <label for="image">Select a file:</label>
                    <input onChange={handleImage} type="file" id="image" name="image"/> */}
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleCoverImage}
                name="image"
              />
              <Button
                fullWidth
                variant="contained"
                component="span"
                onClick={() => UploadImage(Coverimage, 0)}
              >
                Upload your cover Image
              </Button>
              <Button
                fullWidth
                variant="contained"
                component="span"
                onClick={handleData}
              >
                Upload metadata
              </Button>
            </Grid>
            <Grid item xs={12}>
              {/* <label for="image">Select a file:</label>
                    <input onChange={handleImage} type="file" id="image" name="image"/> */}
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleProfileImage}
                name="image"
              />
              <Button
                fullWidth
                variant="contained"
                component="span"
                onClick={() => UploadImage(Profileimage, 1)}
              >
                Upload your Profile Pic
              </Button>
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleProfilePic}
          >
            Sign Up
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={getProfile}
          >
            profile
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" sx={{ mt: 1, color: '#7f5af0' }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
