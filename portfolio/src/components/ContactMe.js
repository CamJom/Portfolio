import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Github from '../assets/images/Github.png'

const ContactMe = () => {
    return ( 
      <Box
      display="flex" 
      marginTop="5%"
      flexDirection= "column"
      alignItems="center"
      justifyContent="center"
      >
          
        <Typography variant="h1"> 
        Check out my LinkedIn and Github:  
        </Typography>

      <Box 
      display="flex" 
      marginTop="5%"
      flexDirection= "row"
      alignItems="center"
      justifyContent="space-evenly"
      alignContent="space-evenly"
      width="50%">

      <Box>
        <Typography> Git Hub Page Here </Typography>
          <img src={Github} alt="Home-Logo" /> 
      </Box>

      <Box>
        <Typography> LinkedIn Page Here </Typography>
          <img src={Github} alt="Home-Logo" /> 
      </Box>
      </Box>


      </Box>
    )
}

export default ContactMe