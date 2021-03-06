import React, { useState, useContext } from 'react';

// libraries
import { Typography, Button,Grid } from '@mui/material';

// lens queries
import { setProfileImageUriNormal } from '../../Lens/utils/setProfilePic';

// context
import Web3Context from '../../context';

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState();
  const [profileImageURI, setProfileImageURI] = useState();
  const { profileId } = useContext(Web3Context);

  const handleProfileImage = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const UploadImage = async () => {
    const data = new FormData();
    data.append('file', profileImage);
    data.append('upload_preset', 'mystiq');
    data.append('cloud_name', 'doybtqm8h');
    await fetch('https://api.cloudinary.com/v1_1/doybtqm8h/image/upload', {
      method: 'post',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProfileImageURI(data.url);
        // console.log('Image Uploaded');
        alert('Image Uploaded');
      })
      .catch((err) => console.log(err));
  };

  const handleProfilePic = async () => {
    // eslint-disable-next-line
    const res = await setProfileImageUriNormal(profileId, profileImageURI);
    // console.log(res);
    alert('profile pic Uploaded');
    window.location.href = `/${profileId}/profile`;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ color: '#fffffe' }}>
        Profile Picture
      </Typography>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="input-group mb-3">
              <input type="file" className="form-control" id="inputGroupFile02" onChange={handleProfileImage} />
              <label className="input-group-text" for="inputGroupFile02">
                Upload
              </label>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              component="span"
              sx={{ mb: 3, backgroundColor: '#7f5af0' }}
              onClick={() => UploadImage()}
            >
              Upload Image
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: '#7f5af0' }}
        onClick={handleProfilePic}
      >
        Sign Up
      </Button>
    </React.Fragment>
  );
}

export default ProfileForm;