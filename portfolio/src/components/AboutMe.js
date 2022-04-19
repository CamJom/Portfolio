import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Dog1 from "../assets/images/Dog1.png";
import Dog2 from "../assets/images/Dog2.png";
import Food1 from "../assets/images/Food1.png";
import Food2 from "../assets/images/Food2.png";
import Django from "../assets/images/Django.png"
import TypeScript from "../assets/images/TypeScript.png"
import MaterialUI from "../assets/images/MaterialUI.png"
import Python from "../assets/images/Python.png"
import Grid from '@mui/material/Grid';
import Grow from '@mui/material/Grow';
import { Paper } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";


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
    <Grid 
    container 
    spacing={2}
    display="flex"
    paddingTop="1%"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    width="auto"
    height="100%"
    > 
      <Grid item
      border="" 
      display="flex"
      align="center"
      justifyContent="center"
      maxWidth="70%"
      >
        <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1500 } : {})}>
      <Paper 
      elevation={10}
      margin="10px"
      sx={{ padding:"15px", }}
      >
      <Typography
      display="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="100%"
      variant="h6"
      border=""
      >
        <Typography variant="h4" margin="10px"> My Journey </Typography>

        An interest in HTML and CSS was prompted when my friend took me to open
        coding courses several years ago with a free introduction to code. This
        is what started my fascination for the coding industry as a whole.
        <br />
        <br />
        I enjoyed studying different programming languages and how each
        one works differently with its own pros and cons. I personally felt the
        most comfortable when using React.
      </Typography>
      </Paper> 
      </Grow>
      </Grid>

      <Grid
      display="flex"
      align="center"
      justifyContent="space-around"
      maxWidth="80%"
      marginTop="1%"
      flexWrap="wrap"
      container
      >
      <Grid item
      display="flex"
      align="center"
      justifyContent="center"
      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
      flexWrap="wrap"
      sx={{ padding:"5px", }}
      minWidth="25%"
      > 
              <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1500 } : {})}>
      <Paper
            elevation={10}
            margin="10px"
            sx={{ padding: 1, borderRadius:5, margin:2, bgcolor: "" }}
            > 
      <Typography
      display="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="100%"
      variant="h6"
      border=""
      >
        <Typography variant="h4" margin="10px"> Skills I'm Actively Improving </Typography>
        <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="TypeScript" src={TypeScript}/>
                </ListItemAvatar>
                <ListItemText
                  primary="TypeScript"
                  secondary="On going group project"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Python" src={Python} />
                </ListItemAvatar>
                <ListItemText
                  primary="Python"
                  secondary="On going personal project"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Django" src={Django} />
                </ListItemAvatar>
                <ListItemText
                  primary="Django"
                  secondary="On going personal project linked with python"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Material UI" src={MaterialUI} />
                </ListItemAvatar>
                <ListItemText
                  primary="Material UI"
                  secondary="designing this website"
                />
              </ListItem>
            </List>
      </Typography>
      </Paper>
      </Grow>

      </Grid>

      <Grid item
      display="flex"
      align="center"
      justifyContent="center"
      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
      minWidth="60%"
      > 
              <Grow in={checked} style={{ transformOrigin: 'top' }}
          {...(checked ? { timeout: 1500 } : {})}>
      <Paper
      elevation={10}
      margin="5px"
      sx={{ padding: 1, borderRadius:5, margin:2, bgcolor: "" }}>
      <Typography
      display="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="100%"
      variant="h6"
      border=""
      >
        <Typography variant="h4" margin="10px"> Personal Interest and Hobbies </Typography>

        Outside of code, I enjoy cooking for family and friends and looking after the family Pupper!
        <Box 
        display="flex"
        align="center"
        justifyContent="center"
        flexDirection="row"
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
          </Box>

      </Typography>
      </Paper>
      </Grow>
      </Grid>
      </Grid>

    </Grid>
    // <Box
    //   display="flex"
    //   paddingTop="1%"
    //   flexDirection="column"
    //   alignItems="center"
    //   justifyContent="center"
    //   width="auto"
    //   height="100%"
    //   sx={{ bgcolor:"" }}
    // >
    //   <ThemeProvider theme={theme}>
    //   <Typography       
    //   display="flex"
    //   align="center"
    //   justifyContent="center"
    //   flexDirection="column"
    //   maxWidth="70%"
    //   variant="h6"
    //   >
    //               <Grow in={checked} style={{ transformOrigin: 'top' }}
    //       {...(checked ? { timeout: 1000 } : {})}>
    //     <Box>
    //       <Typography>  </Typography>
    //     An interest in HTML and CSS was prompted when my friend took me to open
    //     coding courses several years ago with a free introduction to code. This
    //     is what started my fascination for the coding industry as a whole.
    //     <br />
    //     <br />
    //     I enjoyed studying different programming languages and how each
    //     one works differently with its own pros and cons. I personally felt the
    //     most comfortable when using React.
    //     <br />
    //     <br />
    //     Outside of code, I enjoy cooking for family and friends and looking after the family Pupper!
    //     </Box>
    //     </Grow>
    //     <Grid
    //      container
    //      direction="row"
    //      justifyContent="center"
    //      alignItems="center"
    //     > 

    //       <Grow in={checked} style={{ transformOrigin: 'top' }}
    //       {...(checked ? { timeout: 1000 } : {})}>
    //       <Grid item> <Img src={Food1} alt="Food" /> </Grid> 
    //       </Grow>

    //       <Grow in={checked} style={{ transformOrigin: 'bottom' }}
    //       {...(checked ? { timeout: 4000 } : {})}>
    //       <Grid item> <Img src={Dog1} alt="Dog" /> </Grid> 
    //       </Grow>

    //       <Grow in={checked} style={{ transformOrigin: 'top' }}
    //       {...(checked ? { timeout: 1000 } : {})}>
    //       <Grid item> <Img src={Food2} alt="Food" /> </Grid> 
    //       </Grow>

    //       <Grow in={checked} style={{ transformOrigin: 'bottom' }}
    //       {...(checked ? { timeout: 4000 } : {})}>
    //       <Grid item> <Img src={Dog2} alt="Dog" /> </Grid> 
    //       </Grow>



    //     </Grid>
    //     <Grow in={checked} style={{ transformOrigin: 'top' }}
    //       {...(checked ? { timeout: 1000 } : {})}>
    //     <Box> 
    //     <br />
    //     <br />
    //     With the occasional boardgames and DnD here and there sprinkled in. 
    //     </Box>
    //     </Grow>
    //     <Grid
    //      container
    //      direction="row"
    //      justifyContent="center"
    //      alignItems="center"
    //      > 
    //                <Grow in={checked} style={{ transformOrigin: 'top' }}
    //       {...(checked ? { timeout: 2000 } : {})}>
    //       <Grid item> <Img src={Game1} alt="Games" /> </Grid>
    //       </Grow>
    //       <Grow in={checked} style={{ transformOrigin: 'top' }}
    //       {...(checked ? { timeout: 2000 } : {})}>
    //       <Grid item> <Img src={Game2} alt="Games" /> </Grid>
    //       </Grow>
    //     </Grid>
    //   </Typography>
    //   </ThemeProvider>
    // </Box>
  );
};

export default AboutMe;
