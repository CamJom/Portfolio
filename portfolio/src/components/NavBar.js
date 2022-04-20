import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon2 from '../assets/images/HomeIcon2.png'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ButtonAppBar() {
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor:"#2dbc94"}} position="static">
        <Toolbar>
          <Grid item marginRight="5%" sx={{ padding:"10px", margin:"0.5%", borderRadius:"25%", bgcolor: "#a6e6db" }}> 
            <Link href='/' color="inherit" underline="none">  
              <Img height="35px" src={HomeIcon2} alt="Home-Logo" /> 
            </Link> 
          </Grid>
          <Grid item
            container
            direction="colmn"
            justifyContent="space-evenly"
            alignItems="center"
          > 
          <ThemeProvider theme={theme}>
            
            <Typography variant="h6" component="div">
            <Link href='/about'color="inherit" underline="none"> About Me </Link>
            </Typography>

            <Typography variant="h6" component="div">
            <Link href='/skills'color="inherit" underline="none"> Skills </Link>
            </Typography>
            
            <Typography link='/projects' variant="h6" component="div" margin="1%">
            <Link href='/projects'color="inherit" underline="none"> My Projects </Link>
            </Typography>
            
            
            <Typography link='/contact' variant="h6" component="div" margin="1%">
            <Link href='/contact'color="inherit" underline="none"> Contact Me </Link>
            </Typography>
            
          </ThemeProvider>
            </Grid>
            
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
