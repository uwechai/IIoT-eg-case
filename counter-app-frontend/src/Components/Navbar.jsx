import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  separate: {
    flexGrow: 1000
  },
  button: {
    marginLeft: "0px",
    padding: "0px",
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Parts Counting Application</Typography>

          <div className={classes.separate} />

          <Button href="/" className={classes.button} color="inherit">
           Home
          </Button>

          <Button href="/about" className={classes.button} color="inherit">
           About
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
