import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Footer from "../Components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(1),
    minWidth: theme.spacing(89),
    textAlign: "center",
  },
}));

function Counter() {
  const classes = useStyles();

  const [state1, setState1] = useState({
          id: 0,
          redCount: 0,
          blueCount: 0,
          greenCount: 0,
  });
  const [state2, setState2] = useState({
          id: 0,
          redCount: 0,
          blueCount: 0,
          greenCount: 0,
  });
  const [state3, setState3] = useState({
          id: 0,
          redCount: 0,
          blueCount: 0,
          greenCount: 0,
  });
  const [state4, setState4] = useState({
          id: 0,
          redCount: 0,
          blueCount: 0,
          greenCount: 0,
  });

  async function getData1() {
    const getNextItem = await fetch(`/counts/sensor1`, {
      method: "GET",
    });
    const nextItem = await getNextItem.json();

    // console.log(nextItem);

    return await nextItem;
  }

  async function getData2() {
    const getNextItem = await fetch(`/counts/sensor2`, {
      method: "GET",
    });
    const nextItem = await getNextItem.json();

    // console.log(nextItem);

    return await nextItem;
  }

  async function getData3() {
    const getNextItem = await fetch(`/counts/sensor3`, {
      method: "GET",
    });
    const nextItem = await getNextItem.json();

    // console.log(nextItem);

    return await nextItem;
  }

  async function getLast10() {
    const getNextItem = await fetch(`/counts/sum-10-min`, {
      method: "GET",
    });
    const nextItem = await getNextItem.json();

    // console.log(nextItem);

    return await nextItem;
  }

  function setData() {
    getData1().then((data) => {
      // console.log(data)
      if (data.counts.length !== 0) {
        setState1({
          id: data.sensorID,
          redCount: data.counts[0].totalRed,
          blueCount: data.counts[0].totalBlue,
          greenCount: data.counts[0].totalGreen,
        });
      }
    });
    getData2().then((data) => {
      // console.log(data)
      
      if (data.counts.length !== 0) {
        setState2({
          id: data.sensorID,
          redCount: data.counts[0].totalRed,
          blueCount: data.counts[0].totalBlue,
          greenCount: data.counts[0].totalGreen,
        });
      }
    });
    getData3().then((data) => {
      // console.log(data)

      if (data.counts.length !== 0) {
        setState3({
          id: data.sensorID,
          redCount: data.counts[0].totalRed,
          blueCount: data.counts[0].totalBlue,
          greenCount: data.counts[0].totalGreen,
        });
      }
      
    });
    getLast10().then((data) => {
      // console.log(data)
      
      if (data.counts.length !== 0) {
        setState4({
          id: data.sensorID,
          redCount: data.counts[0].totalRed,
          blueCount: data.counts[0].totalBlue,
          greenCount: data.counts[0].totalGreen,
        });
      }
     
    });
  }

  useEffect(() => {
    setData();
    const interval = setInterval(() => {
      setData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />

      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h3">Parts Count Overview</Typography>
        <Typography variant="h4">Station 1</Typography>

        <List component="nav">
          <Typography>Red Parts: {state1.redCount}</Typography>
          <Typography>Blue Parts: {state1.blueCount}</Typography>
          <Typography>Green Parts: {state1.greenCount}</Typography>
        </List>

        <Typography variant="h4">Station 2</Typography>

        <List component="nav">
          <Typography>Red Parts: {state2.redCount}</Typography>
          <Typography>Blue Parts: {state2.blueCount}</Typography>
          <Typography>Green Parts: {state2.greenCount}</Typography>
        </List>

        <Typography variant="h4">Station 3</Typography>

        <List component="nav">
          <Typography>Red Parts: {state3.redCount}</Typography>
          <Typography>Blue Parts: {state3.blueCount}</Typography>
          <Typography>Green Parts: {state3.greenCount}</Typography>
        </List>

        <Typography variant="h4">In last 10 minutes</Typography>
        <List component="nav">
          <Typography>Red Parts: {state4.redCount}</Typography>
          <Typography>Blue Parts: {state4.blueCount}</Typography>
          <Typography>Green Parts: {state4.greenCount}</Typography>
        </List>

      </Paper>

      <Footer />
    </div>
  );
}

export default Counter;
