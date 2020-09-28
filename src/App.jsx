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
import styles from "./Bubble.module.css";

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

const Bubble = ({ children }) => {
  if (!children) {
    return null;
  }
  return (
    <div className={styles.bubble}>
      <Typography>{children}</Typography>
    </div>
  );
};

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
          <Bubble>{message}</Bubble>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
