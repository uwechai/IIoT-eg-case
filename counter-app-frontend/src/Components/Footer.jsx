import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "#DD7631",
    color: "white",
    textAlign: "center",
    
  },

}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Typography>Copyright @ Chai Wadhai</Typography>
    </div>
  );
}
