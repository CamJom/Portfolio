import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Dog1 from "../assets/images/Dog1.png";
import Dog2 from "../assets/images/Dog2.png";
import Food1 from "../assets/images/Food1.png";
import Food2 from "../assets/images/Food2.png";
import Game1 from "../assets/images/Game1.png";
import Game2 from "../assets/images/Game2.png";
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';


let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled('img')({
  margin: '15px',
  display: 'block',
  maxWidth: '180px',
  maxHeight: '180px',
  borderRadius: '10px',
});

const AboutMe = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <Box
      display="flex"
      paddingTop="1%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="auto"
      height="100%"
      sx={{ bgcolor:"" }}
    >
      <ThemeProvider theme={theme}>
      <Typography       
      display="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="70%"
      variant="h6"
      >
                  <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
        <Box>
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
        </Box>
        </Grow>
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
        > 

          <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Grid item> <Img src={Food1} alt="Food" /> </Grid> 
          </Grow>

          <Grow in={checked} style={{ transformOrigin: 'bottom' }}
          {...(checked ? { timeout: 4000 } : {})}>
          <Grid item> <Img src={Dog1} alt="Dog" /> </Grid> 
          </Grow>

          <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
          <Grid item> <Img src={Food2} alt="Food" /> </Grid> 
          </Grow>

          <Grow in={checked} style={{ transformOrigin: 'bottom' }}
          {...(checked ? { timeout: 4000 } : {})}>
          <Grid item> <Img src={Dog2} alt="Dog" /> </Grid> 
          </Grow>



        </Grid>
        <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1000 } : {})}>
        <Box> 
        <br />
        <br />
        With the occasional boardgames and DnD here and there sprinkled in. 
        </Box>
        </Grow>
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
         > 
                   <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 2000 } : {})}>
          <Grid item> <Img src={Game1} alt="Games" /> </Grid>
          </Grow>
          <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 2000 } : {})}>
          <Grid item> <Img src={Game2} alt="Games" /> </Grid>
          </Grow>
        </Grid>
      </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default AboutMe;
