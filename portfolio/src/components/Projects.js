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

  return (
    <Box
      display="flex"
      marginTop="5%"
      marginBottom="1%"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap="wrap"
      textAlign="center"
    >
      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 5, borderRadius:5, margin:2 }}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> Zoo Visit! </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project4} alt="Project4" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            An interactive learning website 
            Zoo Visit! gives the user interesting facts and trivia 
            on different animals in thier corresponding biomes. 
            <br />
            <br />
            Languages used: 
            <br />
            Python | Django | JavaScript | React.js | HTML | SCSS | Express 
            <br />
            <br />
            <Button variant="contained" color="success" onClick={project4}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>

      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 5, borderRadius:5, margin:2 }}
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
            <br />
            <br />
            Languages used: 
            <br />
            MongoDB | JavaScript | React.js | HTML | SCSS | Express 
            <br />
            <br />
            <Button variant="contained" color="success" onClick={project3}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>

      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 5, borderRadius:5, margin:2 }}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> Recipe App </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project2} alt="Project2" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            Dont know what to cook? cove visit our RecipeApp website and browse around our mutitide of recipes. 
            <br />
            <br />
            Languages used: 
            <br />
            JavaScript | React.js | HTML | SCSS | Express 
            <br />
            <br />
            <Button variant="contained" color="success"onClick={project2}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>

      <Paper
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ padding: 5, borderRadius:5, margin:2 }}
      >
        <ThemeProvider theme={theme}>
          <Grid sx={{ maxWidth:300 }}>
          <Typography variant="h4"> Matermind! </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project1} alt="Project1" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            Do you have what it takes to traverse the land of Middle Earth and choose the right companions for the journey?
            <br />
            Come and play my Mastermind clone and make your way to Mount Doom!  
            <br />
            <br />
            Languages used: 
            <br />
            HTML | SCSS | JavaScript
            <br />
            <br />
            <Button variant="contained" color="success" onClick={project1}> Visit the website </Button>
          </Typography>
          </Grid>
          </Grid>
        </ThemeProvider>
      </Paper>
    </Box>
  );
};

export default Projects;
