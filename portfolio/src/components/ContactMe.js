import React from "react";
import { Typography } from "@mui/material";
import Email from '../assets/images/Email.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import { styled } from '@mui/material/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Github from '../assets/images/Github.png'
import Link from '@mui/material/Link';
import { Box } from "@mui/system";
import Grow from '@mui/material/Grow';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ContactMe = () => {
  const [checked, setChecked] = React.useState(true);
    return ( 
      <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
      textAlign="center"
      sx={{ bgcolor:""}}
      height="100vh"
      width="auto"
    >
      <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      >
        <Grid item
                  margin="2%"
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  > 
        <ThemeProvider theme={theme}>
        <Typography variant="h2"> 
        Contact me on:  
        </Typography>
        </ThemeProvider>
        </Grid>

      <Grid item
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          textAlign="center"
          sx={{ marginBottom:5 }}
          marginTop="5%"
      >
        <ThemeProvider theme={theme}> 
        <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
      <Grid item
      sx={{ marginRight:3 }}
      >
        <Typography variant="h4"> Email Address </Typography>
          <Img height="100" src={Email} alt="Email-Logo" /> 
        <Typography variant="h6"> Jomari1095@gmail.com </Typography>
      </Grid>
      </Grow>

      <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1500 } : {})}>
      <Grid item
      sx={{ marginLeft:3 }}>
        <Link href='https://www.linkedin.com/in/jomaric/' color="inherit" underline="none">
        <Typography variant="h4"> LinkedIn </Typography>
          <Img height="100" src={LinkedIn} alt="LinkedIn-Logo" />
        </Link> 
      </Grid>
      </Grow>

      <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 2000 } : {})}>
      <Grid item
      sx={{ marginLeft:3 }}>
        <Link href='https://github.com/CamJom' color="inherit" underline="none">
        <Typography variant="h4"> Github Page </Typography>
          <Img height="100" src={Github} alt="Github-Logo" />
        </Link> 
      </Grid>
      </Grow>
      </ThemeProvider>

      </Grid>
      </Grid>
      </Box>
    )
}

export default ContactMe