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
import Grow from '@mui/material/Grow';

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Home = () => {
  const [checked, setChecked] = React.useState(true);
    return ( 
      <Box height="100vh" width="auto" sx={{}} >
      <Grid> 
        <Grid item
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        paddingTop="5%"
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
          <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Typography variant="h1"> 
          Welcome! I'm Jomari Camangon!
          </Typography>
          </Grow>
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
          <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1500 } : {})}>
          <Typography variant="h2"> 
          Aspiring Junior Developer,
          <br />
          Professional Food Enthusiast!
          </Typography>
          </Grow>
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
                  <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout:2000 } : {})}>
            <Grid item>
            <Img src={CSS} alt="Home-Logo" /> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 3000 } : {})}>
            <Grid item>
            <Img src={HTML} alt="Home-Logo" /> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 4000 } : {})}>
            <Grid item>
            <Img src={JS} alt="Home-Logo" /> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 5000 } : {})}>
            <Grid item>
            <Img src={ReactIcon} alt="Home-Logo" /> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 6000 } : {})}>
            <Grid item>
            <Img src={MongoDB} alt="Home-Logo" /> 
            </Grid>
            </Grow>
          </Grid>

          </Grid>
        </Grid>
        </Box>
    )
}

export default Home