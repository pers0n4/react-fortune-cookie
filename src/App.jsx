import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Cookie from "./Cookie";

const theme = createMuiTheme();

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  const classes = useStyles();

  const [message, setMessage] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Container component="main" maxWidth="md" className={classes.main}>
          <Cookie />
          <Typography>{message}</Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
