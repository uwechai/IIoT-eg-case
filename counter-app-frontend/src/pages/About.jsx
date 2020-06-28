import React from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Components/Navbar";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Components/Footer";


const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(1),
      maxWidth: theme.spacing(89),
      textAlign: "center",
      margin: "auto"
    },
  }));

export default function About() {
    const classes = useStyles();
  return (
    <div>
     <Navbar />
      

      <Paper elevation={3} className={classes.paper}>
      <Typography variant="h4">This web application is a part of my Bachelor Thesis
      <br />"Comparing IT Architectures for IoT implementations in Manufacturing"<br />
      and is submitted for the partial fulfilment of the same.<br />
      - Chaitanya Wadhai, IBE student FHWS
      </Typography>

      
      </Paper>

    <Footer />
    </div>
  );
}
