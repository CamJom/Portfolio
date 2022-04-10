import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import HomeIcon from '../assets/images/HomeIcon.png'
// Import Home Icon Temp Place Holder

const Projects = () => {
    return ( 
      <Box display="flex" 
      marginTop="2%"
      flexDirection= "row"
      alignItems="center"
      justifyContent="space-evenly"
      flexWrap= "wrap">
      <Box
      display="flex" 
      marginTop="5%"
      flexDirection= "column"
      alignItems="center"
      justifyContent="center"
      >
        <img src={HomeIcon} alt="Home-Logo" />
        <Typography variant="h4"> Project 1 </Typography> 
        <Typography variant="h6"> 
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project 
        </Typography> 
      </Box>
      <Box
      display="flex" 
      marginTop="5%"
      flexDirection= "column"
      alignItems="center"
      justifyContent="center"
      >
        <img src={HomeIcon} alt="Home-Logo" />
        <Typography variant="h4"> Project 1 </Typography> 
        <Typography variant="h6"> 
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project 
        </Typography> 
      </Box>
      <Box
      display="flex" 
      marginTop="5%"
      flexDirection= "column"
      alignItems="center"
      justifyContent="center"
      >
        <img src={HomeIcon} alt="Home-Logo" />
        <Typography variant="h4"> Project 1 </Typography> 
        <Typography variant="h6"> 
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project 
        </Typography> 
      </Box>
      <Box
      display="flex" 
      marginTop="5%"
      flexDirection= "column"
      alignItems="center"
      justifyContent="center"
      >
        <img src={HomeIcon} alt="Home-Logo" />
        <Typography variant="h4"> Project 1 </Typography> 
        <Typography variant="h6"> 
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project
          <br />
          Text Here discribing project 
        </Typography> 
      </Box>
      </Box>
    )
}

export default Projects
