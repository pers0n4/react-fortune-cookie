import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Footer from "./Footer";
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
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/messages.json");
      setMessages(await data.json());
    })();
  }, []);

  const handleCookieClick = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(`“${messages[randomIndex]}”`);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Container component="main" maxWidth="md" className={classes.main}>
          <Cookie onClick={handleCookieClick} />
          <Typography>{message}</Typography>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
