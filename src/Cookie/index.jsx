import React, { useState } from "react";
import "./Cookie.css";

import FortuneCookie from "./fortune-cookie.svg";

const Cookie = (props) => {
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    if (!isJumping) {
      props.onClick();
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 1500);
    }
  };

  return (
    <img
      src={FortuneCookie}
      alt="Fortune cookie"
      className={`cookie${isJumping ? " cookie--jumping" : ""}`}
      onClick={handleClick}
      onDragStart={(event) => event.preventDefault()}
    />
  );
};

export default Cookie;
