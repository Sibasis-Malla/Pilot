import React, { useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { TextField, Input, Button, styled } from '@mui/material';
import { setProfileMetadata } from '../../Lens/utils/setProfileMetadata';
import { v4 as uuidv4 } from 'uuid';
import client from '../../Lens/utils/ipfs';

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

export default function PaymentForm() {
  const [Coverimage, setCoverImage] = useState();
  const [CoverimageURI, setCoverImageURI] = useState();
  const [ProfileimageURI, setProfileImageURI] = useState();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileId, setProfileId] = useState('');
  const handleCoverImage = (event) => {
    setCoverImage(event.target.files[0]);
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

    const res = await setProfileMetadata(profileId, finalResult);
    console.log(res);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ color: '#fffffe' }}>
        Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CssTextField
            onChange={handlename}
            name="name"
            InputLabelProps={{
              style: { color: ' #fffffe' },
            }}
            InputProps={{
              style: { color: '#fffffe' },
            }}
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
            minRows={5}
            InputLabelProps={{
              style: { color: ' #fffffe' },
            }}
            InputProps={{
              style: { color: '#fffffe' },
            }}
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
            sx={{ mt: 2, backgroundColor: '#7f5af0' }}
            variant="contained"
            component="span"
            onClick={() => UploadImage(Coverimage, 0)}
          >
            Upload your cover Image
          </Button>
          <Button
            fullWidth
            sx={{ mt: 2, backgroundColor: '#7f5af0' }}
            variant="contained"
            component="span"
            onClick={handleData}
          >
            Upload metadata
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
