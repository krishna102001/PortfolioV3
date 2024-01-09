import React from "react";
import "../home.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: "#092635",
    },
  },
});
export const Home = () => {
  return (
    <div className="home container-fluid">
      <div className="home--content">
        <p>
          Hello Geeks <span className="waving--hand">👋🏻</span>
        </p>
        <div className="home--content-text">
          <p className="greeting">Good Morning 🌅</p>
          <p>
            I m <span className="highlights">Krishna Kant</span>
          </p>
          <p>A tech enthusiast and web developer in programming World!</p>
          <div className="contact--button">
          <Link to="/contact">
          <ThemeProvider theme={theme}>
            <Button variant="contained" size="large" color="primary">
              Contact
            </Button>
          </ThemeProvider>
          </Link>
          </div>
        </div>
      </div>
      <div className="home--img">
        <img src="../src/assets/profile_img.png" alt="krishna-img" />
      </div>
    </div>
  );
};
