import React from "react";
import ReactDOM from "react-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from "@material-ui/core/styles";
import App from "./App";

// overwrites values in the defualt material ui theme
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#DD7631"
    },
    text: {},
    background: {
      default: "#f0f0f0"
    }
  },
  typography: {
    fontFamily: "'Fresca', sans-serif"
  }
});

theme = responsiveFontSizes(theme);




const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  rootElement
);
