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
  const project3 = () => { window.open("https://bit.ly/3Ej8pY0") }
  const project4 = () => { window.open("https://bit.ly/3vmkXKo") }
  const gitHubproject1 = () => { window.open("https://github.com/CamJom/SEI-Project-1-Mastermind") }
  const gitHubproject2 = () => { window.open("https://github.com/CamJom/SEI-Project-2-RecipeApp") }
  const gitHubproject3 = () => { window.open("https://github.com/CamJom/SEI-Project-3-SpaceBook") }
  const gitHubproject4 = () => { window.open("https://github.com/CamJom/SEI-Project-4-ZooVisit") }


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
          <Typography variant="h6"> Solo Project </Typography>
          <Grid item margin="4%"xs={4}>
          <Img src={Project4} alt="Project4" />
          </Grid>
          <Grid item>
          <Typography variant="h6">
            The interactive learning website 
            Zoo Visit! Gives the user interesting facts and trivia 
            on different animals in thier corresponding biomes. 
            <br />
            Timeframe: 8 days
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
            <Button variant="contained" color="success" onClick={gitHubproject4} sx={{ marginTop:"5px"}}> Github Page </Button>
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
          <Typography marginBottom="10px" variant="h6"> 3 Person Group Project </Typography>
          <Grid item margin="2%"xs={4}>
          <Img src={Project3} alt="Project3" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            Book your trip to space with us SpaceBook.
            Your intergalactic travel website! 
            <br />
            Timeframe: 8 days
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
            <Button variant="contained" color="success" onClick={gitHubproject3} sx={{ marginTop:"5px"}}> Github Page </Button>
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
          <Typography marginBottom="8px" variant="h6"> Pair Project </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project2} alt="Project2" />
          </Grid>
          <Grid item marginTop="2%">
          <Typography variant="h6">
            Dont know what to cook? Come and visit our RecipeApp website and browse around our mutitide of recipes.
            <br />
            Timeframe: 2 days 
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
            <Button variant="contained" color="success" onClick={gitHubproject2} sx={{ marginTop:"5px"}}> Github Page </Button>
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
          <Typography variant="h6"> Solo Project </Typography>
          <Grid item marginTop="2%"xs={4}>
          <Img src={Project1} alt="Project1" />
          </Grid>
          <Grid item marginTop="5%">
          <Typography variant="h6">
            Come and play my Mastermind clone and make your way to Mount Doom!
            <br />
            Timeframe: 8 days  
            <Typography variant="h6" marginTop="5%"> Languages used: </Typography>
            <Grid item >
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> JavaScript </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> HTML </Box>
            <Box component="div" margin="0px 3px" padding="3px 5px" borderRadius="10px" sx={{ bgcolor:"#2dbc94", display: 'inline' }}> CSS </Box>
            </Grid>
            <br />
            <Button variant="contained" color="success" onClick={project1}> Visit the website </Button>
            <Button variant="contained" color="success" onClick={gitHubproject1} sx={{ marginTop:"5px"}}> Github Page </Button>
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
