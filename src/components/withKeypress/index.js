import React, { useContext } from "react";
import { KeypressContext } from "../../context/keypress";

const withKeypress = (Component) => {
  return function Keypress() {
    const { keyPressList } = useContext(KeypressContext);

    return <Component keyPressList={keyPressList} />;
  };
};

export default withKeypress;
