import * as React from 'react';

// libraries
import {
  CssBaseline,
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  styled,
} from '@mui/material';

// components
import UsernameForm from './UsernameForm';
import DetailsForm from './DetailsForm';
import ProfileForm from './ProfileForms';

const CustomizedLabel = styled(StepLabel)({
  '& .MuiStepLabel-label': {
    color: '#fff',
  },
  '& 	.MuiStepLabel-horizontal': {
    color: '#fff',
  },
  '& 	.Mui-completed': {
    color: '#fff',
  },
});

const steps = ['Write username', 'Your Details', 'Profile Picture'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UsernameForm />;
    case 1:
      return <DetailsForm />;
    case 2:
      return <ProfileForm />;
    default:
      throw new Error('Unknown step');
  }
}

const SignUp = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container maxWidth="lg" sx={{ my: 10, mt: 9 }}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            backgroundColor: '#242629',
          }}
        >
          <Typography component="h1" variant="h4" align="center" sx={{ color: '#fffffe' }}>
            Sign Up
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, color: '#fffffe' }}>
            {steps.map((label) => (
              <Step sx={{ color: '#fffffe' }} key={label}>
                <CustomizedLabel sx={{ color: '#fffffe' }}>{label}</CustomizedLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for signing with us.
                </Typography>
                <Typography variant="subtitle1">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                  Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 ||
                    (activeStep !== 2 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1, color: '#7f5af0' }}>
                        Back
                      </Button>
                    ))}

                  {activeStep !== steps.length - 1 && (
                    <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1, backgroundColor: '#7f5af0' }}>
                      {activeStep !== steps.length - 1 && 'Next'}
                    </Button>
                  )}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </Container>
  );
};

export default SignUp;
