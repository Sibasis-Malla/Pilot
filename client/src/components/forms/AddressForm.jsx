import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TextField, Button, styled } from '@mui/material';
import { createProfile, getProfiles } from '../../Lens/query';
import { createAccount } from '../../Lens/utils/pilot-utils';
import Web3Context from '../../context';

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

export default function AddressForm() {
  const [handleName, setHandleName] = useState('');
  const { pilotContract, account } = useContext(Web3Context);

  const handleUsername = (event) => {
    setHandleName(() => ([event.target.name] = event.target.value));
  };

  const handleRegister = async () => {
    const obj = {
      handle: handleName,
      followModule: {
        freeFollowModule: true,
      },
    };
    const res = await createProfile(obj);
    //console.log(res);
    const res3 = await getProfile();
    await createAccount(pilotContract, res3, account.currentAccount);
    alert('Handle registered')
    window.location.reload()
  };

  const getProfile = async () => {
    const a = {
      ownedBy: [`${account.currentAccount}`],
      limit: 50,
    };
    const res2 = await getProfiles(a);
    console.log(res2);
    const res =
      res2.data.profiles.items[res2.data.profiles.items.length - 1].id;
    return res;
  };
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ color: '#fffffe' }}>
        Username
      </Typography>
      <Grid item xs={12}>
        <CssTextField
          required
          fullWidth
          id="handleName"
          label="Username"
          InputLabelProps={{
            style: { color: ' #fffffe' },
          }}
          InputProps={{
            style: { color: '#fffffe' },
          }}
          name="handleName"
          onChange={handleUsername}
        />
        <Button
          fullWidth
          sx={{ mt: 2, backgroundColor: '#7f5af0' }}
          variant="contained"
          component="span"
          onClick={handleRegister}
        >
          Register
        </Button>
      </Grid>
    </>
  );
}
