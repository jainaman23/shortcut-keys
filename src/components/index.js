import React, { useState } from "react";
import { KeypressContext } from "../context/keypress";

const KeyboardShortcutProvider = ({ children }) => {
  const [keyPressList, setKeypressCombo] = useState({});

  return (
    <KeypressContext.Provider value={{ keyPressList, setKeypressCombo }}>
      {children}
    </KeypressContext.Provider>
  );
};

export default KeyboardShortcutProvider;
