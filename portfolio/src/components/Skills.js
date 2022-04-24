import React from "react";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import CSS from '../assets/images/CSS.png'
import HTML from '../assets/images/HTML.png'
import JS from '../assets/images/JS.png'
import MongoDB from '../assets/images/MongoDB.png'
import ReactIcon from '../assets/images/ReactIcon.png'
import Grow from '@mui/material/Grow';
import Django from "../assets/images/Django.png"
import TypeScript from "../assets/images/TypeScript.png"
import MaterialUI from "../assets/images/MaterialUI.png"
import Python from "../assets/images/Python.png"
import Brew from "../assets/images/Brew.png"
import Figma from "../assets/images/Figma.png"
import Heroku from "../assets/images/Heroku.png"
import JWT from "../assets/images/JWT.png"
import NodeJS from "../assets/images/NodeJS.png"
import NPM from "../assets/images/NPM.png"
import SASS from "../assets/images/SASS.png"
import Insomnia from "../assets/images/Insomnia.png"
import TablePlus from "../assets/images/TablePlus.png"
import Trello from "../assets/images/Trello.png"
import VSCode from "../assets/images/VSCode.png"
import Yarn from "../assets/images/Yarn.png"
import { styled } from '@mui/material/styles';
import Git from "../assets/images/Git.png"




const Img = styled('img')({
  margin: '5px',
  display: 'block',
  maxWidth: '100px',
  maxHeight: '100px',
});

const Skills = () => {
  const [checked, setChecked] = React.useState(true);
  
  return (
    <Grid
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

    <Grid item> 
      <Paper
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ padding: 3, borderRadius:5, margin:2, maxWidth:"50vh" }}
      elevation={10}
      > 
        <Typography variant="h2" marginBottom="15px" sx={{ fontWeight:"500" }}> 
          Confident 
        </Typography>

        <Grid item
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            marginTop="2%"
            sx={{ margin:1 }}
          >
          <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout:2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={CSS} alt="Home-Logo" /> 
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> CSS 3 </Typography>
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={HTML} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> HTML 5 </Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={JS} alt="Home-Logo" /> 
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> JavaScript </Typography>
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={ReactIcon} alt="Home-Logo" /> 
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> React </Typography>
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={VSCode} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> VS Code </Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item>
            <Img src={SASS} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> SASS </Typography>  
            </Grid>
            </Grow>
          </Grid>
      </Paper>
    </Grid>

    <Grid item> 
      <Paper
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ padding: 3, borderRadius:5, margin:2, maxWidth:"50vh" }}
      elevation={10}> 
        <Typography variant="h2" marginBottom="15px" sx={{ fontWeight:"500" }}> 
          Comfortable 
        </Typography>
        <Grid item
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            marginTop="2%"
            sx={{ margin:1 }}
          >
          <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout:2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={MaterialUI} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}>Material UI</Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={MongoDB} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}>MongoDB</Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Python} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}>Python</Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Figma} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}>Figma</Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Yarn} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}>Yarn</Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={NPM} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> NPM</Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Trello} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Trello </Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Brew} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Homebrew </Typography>  
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={NodeJS} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Node.js </Typography>  
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={TablePlus} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> TablePlus </Typography>  
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px"> 
            <Img src={Git} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Git </Typography>  
            </Grid>
            </Grow>
          </Grid>

      </Paper>
    </Grid>

    <Grid item> 
      <Paper
      display="flex"
      flexDirection="column"
      justifyContent="center"
      sx={{ padding: 3, borderRadius:5, margin:2, maxWidth:"50vh" }}
      elevation={10}> 
        <Typography  display="flex" justifyContent="center" variant="h2" marginBottom="15px" sx={{ fontWeight:"500" }}>  
          Improving
        </Typography>
        <Grid item
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            marginTop="2%"
            sx={{ margin:1 }}
          >
        <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout:2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Django} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Django </Typography>  
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout:2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={TypeScript} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> TypeScript </Typography> 
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Insomnia} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Insomnia </Typography>  
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item margin="0px 10px">
            <Img src={Heroku} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"8px", fontWeight:"500" }}> Heroku </Typography>  
            </Grid>
            </Grow>
            <Grow in={checked} style={{ transformOrigin: 'center' }}
          {...(checked ? { timeout: 2000 } : {})}>
            <Grid item 
            container
            direction="column"
            alignItems="center"
            margin="0px 10px">
            <Img src={JWT} alt="Home-Logo" />
            <Typography variant="h5" sx={{marginTop:"-5px", fontWeight:"500" }}> Json Web Token </Typography>  
            </Grid>
            </Grow>
            </Grid>
      </Paper>
    </Grid>

    </Grid>



  )
}

export default Skills;