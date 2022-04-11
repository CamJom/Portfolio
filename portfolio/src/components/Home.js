import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CSS from '../assets/images/CSS.png'
import HTML from '../assets/images/HTML.png'
import JS from '../assets/images/JS.png'
import MongoDB from '../assets/images/MongoDB.png'
import ReactIcon from '../assets/images/ReactIcon.png'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Home = () => {
    return ( 


      <Grid> 

        <Grid item
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop="5%"
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
          <Typography variant="h1"> 
          Welcome! I'm Jomari Camangon!
          </Typography>
          </ThemeProvider>
          </Grid>

          <Grid item 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{ marginBottom:5 }}
          >
          <ThemeProvider theme={theme}>
          <Typography variant="h2"> 
          This is my Portfolio Website!
          </Typography>
          </ThemeProvider>
          </Grid>

          <Grid item
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            marginTop="2%"
            sx={{ margin:1 }}
          >
            <Grid item>
            <Img src={CSS} alt="Home-Logo" /> 
            </Grid>
            <Grid item>
            <Img src={HTML} alt="Home-Logo" /> 
            </Grid>
            <Grid item>
            <Img src={JS} alt="Home-Logo" /> 
            </Grid>
            <Grid item>
            <Img src={ReactIcon} alt="Home-Logo" /> 
            </Grid>
            <Grid item>
            <Img src={MongoDB} alt="Home-Logo" /> 
            </Grid>
          </Grid>

          </Grid>
        </Grid>
    )
}

export default Home