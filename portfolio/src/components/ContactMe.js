import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Email from '../assets/images/Email.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import { styled } from '@mui/material/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ContactMe = () => {
    return ( 
      <Grid
      display="flex" 
      marginTop="5%"
      flexDirection= "column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      >
        <Grid item> 
        <ThemeProvider theme={theme}>
        <Typography variant="h2"> 
        Get into contact from LinkedIn and Email:  
        </Typography>
        </ThemeProvider>
        </Grid>

      <Grid item
      display="flex" 
      margin="5%"
      flexDirection= "row"
      alignItems="center"
      justifyContent="space-evenly"
      alignContent="space-evenly"
      width="50%"
      >
        <ThemeProvider theme={theme}> 
      <Grid item
      sx={{ marginRight:3 }}
      >
        <Typography variant="h4"> Email Adress </Typography>
          <Img src={Email} alt="Home-Logo" /> 
      </Grid>

      <Grid item
      sx={{ marginLeft:3 }}>
        <Typography variant="h4"> LinkedIn Page Here </Typography>
          <Img src={LinkedIn} alt="Home-Logo" /> 
      </Grid>
      </ThemeProvider>

      </Grid>
      </Grid>
    )
}

export default ContactMe