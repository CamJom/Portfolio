import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Varela Round', 'sans-serif',
      ].join(','),
    },});

    
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
