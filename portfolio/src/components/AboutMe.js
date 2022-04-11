import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Dog from "../assets/images/Dog.png"
import Dog2 from "../assets/images/Dog2.png"
import Food from "../assets/images/Food.png"
import Food2 from "../assets/images/Food2.png"
import Games from "../assets/images/Games.png"
import Games2 from "../assets/images/Games2.png"
import Grid from '@mui/material/Grid';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled('img')({
  margin: '10px',
  display: 'block',
  maxWidth: '180px',
  maxHeight: '180px',
  borderRadius: '10px'
});

const AboutMe = () => {

  return (
    <Box
      display="flex"
      marginTop="2%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="95%"
    >
      <ThemeProvider theme={theme}>
      <Typography       
      display="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="70%"
      marginTop= "2%"
      variant="h6"
      >
        An interest in HTML and CSS was prompted when my friend took me to open
        coding courses several years ago with a free introduction to code. This
        is what started my fascination for the coding industry as a whole.
        <br />
        <br />
        I enjoyed studying different programming languages and how each
        one works differently with its own pros and cons. I personally felt the
        most comfortable when using React.
        <br />
        <br />
        Outside of code, I enjoy cooking for family and friends and looking after the family Pupper!
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
        > 
          <Grid item> <Img src={Food} alt="Food" /> </Grid>
          <Grid item> <Img src={Dog} alt="Dog" /> </Grid>
          <Grid item> <Img src={Food2} alt="Food" /> </Grid>
          <Grid item> <Img src={Dog2} alt="Dog" /> </Grid>  
        </Grid>
        <br />
        <br />
        With the occasional boardgames and DnD here and there sprinkled in. 
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
         > 
          <Grid item> <Img src={Games} alt="Games" /> </Grid>
          <Grid item> <Img src={Games2} alt="Games" /> </Grid>
        </Grid>
      </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default AboutMe;
