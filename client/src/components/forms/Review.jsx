import React, { useState, useContext } from 'react';
import { Typography, Input, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { createProfile, getProfiles } from '../../Lens/query';
import { setProfileImageUriNormal } from '../../Lens/utils/setProfilePic';

export default function Review() {
  const [Profileimage, setProfileImage] = useState();
  const [CoverimageURI, setCoverImageURI] = useState();
  const [ProfileimageURI, setProfileImageURI] = useState();
  const [profileId, setProfileId] = useState('');

  const handleProfileImage = (event) => {
    setProfileImage(event.target.files[0]);
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
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ color: '#fffffe' }}>
        Profile Picture
      </Typography>
      <Grid item xs={12}>
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
          sx={{ mt: 3, mb: 2, backgroundColor: '#7f5af0' }}
          component="span"
          onClick={() => UploadImage(Profileimage, 1)}
        >
          Upload your Profile Pic
        </Button>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#7f5af0' }}
        onClick={handleProfilePic}
      >
        Sign Up
      </Button>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#7f5af0' }}
        onClick={getProfile}
      >
        Profile
      </Button>
    </React.Fragment>
  );
}
