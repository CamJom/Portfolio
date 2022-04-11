import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import HomeIcon from '../assets/images/HomeIcon.png'
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
      <AppBar position="static">
        <Toolbar>
          <Grid item marginRight="5%"> 
            <Link href='/' color="inherit" underline="none">  
              <Img height="50px" src={HomeIcon} alt="Home-Logo" /> 
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
