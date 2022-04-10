import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeIcon from '../assets/images/HomeIcon.png'
// Import Home Icon Temp Place Holder

const AboutMe = () => {

  const test = ["test", "this", "thing"]

  return (
    <Box
      display="flex"
      marginTop="2%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="95%"
    >
      <Typography       
      display="flex"
      align="center"
      justifyContent="center"
      flexDirection="column"
      maxWidth="70%"
      fontSize="20px"
      marginTop= "2%"
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
        Outside of code, I enjoy cooking for family and friends!
        <Box> <img src={HomeIcon} alt="Home-Logo" />  </Box>
        <br />
        <br />
        With the occasional boardgames and DnD here and there sprinkled in. 
        <Box> <img src={HomeIcon} alt="Home-Logo" />  </Box>
      </Typography>
    </Box>
  );
};

export default AboutMe;
