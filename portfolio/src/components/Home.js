import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CSS from '../assets/images/CSS.png'
import Github from '../assets/images/Github.png'
import HTML from '../assets/images/HTML.png'
import JS from '../assets/images/JS.png'
import MongoDB from '../assets/images/MongoDB.png'
import ReactIcon from '../assets/images/ReactIcon.png'

const Home = () => {
    return ( 
        <Box
        display="flex" 
        marginTop="5%"
        flexDirection= "column"
        alignItems="center"
        justifyContent="center"
        >
          <Typography variant="h1"> 
          Welcome! I'm Jomari Camangon!
          </Typography>
          <br />
          <Typography variant="h2"> 
          This is my Portfolio Website!
          </Typography>
          <Box 
          display="flex" 
          marginTop="2%"
          flexDirection= "row"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap= "wrap"
          width="90%"
          >
          <img src={CSS} alt="Home-Logo" /> 
          <img src={HTML} alt="Home-Logo" /> 
          <img src={JS} alt="Home-Logo" /> 
          <img src={ReactIcon} alt="Home-Logo" /> 
          <img src={MongoDB} alt="Home-Logo" /> 
          <img src={Github} alt="Home-Logo" /> 
          </Box>
        </Box>
    )
}

export default Home