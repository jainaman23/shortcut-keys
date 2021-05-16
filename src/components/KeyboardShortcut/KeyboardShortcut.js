import { useEffect, useContext } from "react";
import Proptypes from "prop-types";
import { KeypressContext } from "../../context/keypress";
import listener from "../../utils/keypress";

const KeyboardShortcut = ({ combo, callback, description, children }) => {
  const { setKeypressCombo } = useContext(KeypressContext);

  useEffect(() => {
    const keyBind = listener();
    const obj = keyBind.simple_combo(combo, callback);
    const id = new Date().getTime();

    setKeypressCombo((prev) => {
      return { ...prev, [id]: { combo, description } };
    });

    return () => {
      keyBind.unregister_combo(obj);

      setKeypressCombo((prev) => {
        delete prev[id];
        return prev;
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

KeyboardShortcut.propTypes = {
  callback: Proptypes.func.isRequired,
  combo: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
};

export default KeyboardShortcut;
