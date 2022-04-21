import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon2 from "../assets/images/HomeIcon2.png";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ButtonAppBar() {
  const pages = [
    { name: "Home Page", link: " " },
    { name: "About Me", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "My Projects", link: "projects" },
    { name: "Contact Me", link: "contact" },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#2dbc94" }} position="static">
      <Toolbar>
        <Grid container alignItems="center" flexDirection="row">
          <Grid
            item
            marginRight="5%"
            sx={{
              padding: "10px",
              margin: "0.5%",
              borderRadius: "25%",
              bgcolor: "#a6e6db",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link href="/" color="inherit" underline="none">
              <Img height="35px" src={HomeIcon2} alt="Home-Logo" />
            </Link>
          </Grid>

          <Grid
            item
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <ThemeProvider theme={theme}>
              <Typography variant="h6" component="div">
                <Link href="/about" color="inherit" underline="none">
                  About Me
                </Link>
              </Typography>

              <Typography variant="h6" component="div">
                <Link href="/skills" color="inherit" underline="none">
                  Skills
                </Link>
              </Typography>

              <Typography
                link="/projects"
                variant="h6"
                component="div"
                margin="1%"
              >
                <Link href="/projects" color="inherit" underline="none">
                  My Projects
                </Link>
              </Typography>

              <Typography
                link="/contact"
                variant="h6"
                component="div"
                margin="1%"
              >
                <Link href="/contact" color="inherit" underline="none">
                  Contact Me
                </Link>
              </Typography>
            </ThemeProvider>
          </Grid>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography variant="h6" component="div">
                    <Link
                      href={`/${page.link}`}
                      color="inherit"
                      underline="none"
                    >
                      {page.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
