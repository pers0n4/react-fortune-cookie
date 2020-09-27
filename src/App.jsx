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
  const [messages, setMessages] = useState([
    "완벽보다 완성을 추구하라",
    "내가 알고 있는 단 하나는 내가 모른다는 사실뿐",
    "읽었다면 써라, 들었다면 말하라, 배웠다면 가르쳐라",
    "사람이 고통을 대하는 두 가지 방식은 극복하거나, 답습하거나",
    "감정의 문은 하나이기에 상처가 두려워 문을 닫으면 행복 또한 마주할 수 없다",
    "거짓이 지은 웃음보다 진실이 주는 고통을",
    "선악은 없고 각자의 정의만이 남아있으리",
    "모든 삶은 죽음이라는 완성을 향해가는 미완성이다",
  ]);

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
      </div>
    </ThemeProvider>
  );
};

export default App;
