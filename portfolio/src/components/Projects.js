import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Project1 from "../assets/images/Project1.png"
import Project2 from "../assets/images/Project2.png"
import Project3 from "../assets/images/Project3.gif"
import Project4 from "../assets/images/Project4.png"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "300px",
  maxHeight: "300px",
  borderRadius: "10px",
});

const Projects = () => {

  const project1 = () => { window.open("https://bit.ly/3Dj2Kkv") }
  const project2 = () => { window.open("https://bit.ly/3DiwCNB") }
  const project3 = () => { window.open("https://space-book-sei61.herokuapp.com/") }
  const project4 = () => { window.open("https://www.google.com") }


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
      <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 3, borderRadius:5, margin:2, bgcolor: "" }}
        elevation={10}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> Zoo Visit! </Typography>
          <Grid item margin="5% 0%"xs={4}>
          <Img src={Project4} alt="Project4" />
          </Grid>
          <Grid item>
          <Typography variant="h6">
            An interactive learning website 
            Zoo Visit! gives the user interesting facts and trivia 
            on different animals in thier corresponding biomes. 
            <Typography variant="h6" marginTop="5%"> Languages used: </Typography>
            <Grid item >
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> Python </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> Django </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> JavaScript </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> React.js </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> HTML </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> SCSS </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> Express </Box>
            </Grid>
            <br />
            <Button variant="contained" color="success" onClick={project4}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
      </Grow>
      <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1500 } : {})}>
      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 3, borderRadius:5, margin:2, bgcolor: "" }}
        elevation={10}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> SpaceBook </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project3} alt="Project3" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            Book your trip to space with us SpaceBook.
            Your intergalactic travel website! 
            <Typography variant="h6" marginTop="5%"> Languages used: </Typography>
            <Grid item >
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> MongoDB </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> JavaScript </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> React.js </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> HTML </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> SCSS </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> Express </Box>
            </Grid>
            <Typography> 
              P.S The website might take a little time to load 
            </Typography>
            <Button variant="contained" color="success" onClick={project3}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
      </Grow>

      <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 2000 } : {})}>
      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 3, borderRadius:5, margin:2, bgcolor: "" }}
        elevation={10}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> Recipe App </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project2} alt="Project2" />
          </Grid>
          <Grid item marginTop="2%">
          <Typography variant="h6">
            Dont know what to cook? come and visit our RecipeApp website and browse around our mutitide of recipes. 
            <Typography variant="h6" marginTop="5%"> Languages used: </Typography>
            <Grid item marginTop="5px">
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> JavaScript </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> React.js </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> HTML </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> SCSS </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> Express </Box>
            </Grid>
            <br />
            <Button variant="contained" color="success"onClick={project2}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
      </Grow>
      <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 2500 } : {})}>
      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        elevation={20}
        sx={{ padding: 3, borderRadius:5, margin:2, bgcolor: "" }}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> Mastermind! </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project1} alt="Project1" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            Come and play my Mastermind clone and make your way to Mount Doom!  
            <Typography variant="h6" marginTop="5%"> Languages used: </Typography>
            <Grid item >
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> JavaScript </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> HTML </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> CSS </Box>
            </Grid>
            <br />
            <Button variant="contained" color="success" onClick={project1}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
      </Grow>
    </Box>
  );
};

export default Projects;
