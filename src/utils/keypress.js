import KeyPress from "keypress.js";

export default (function registerKeypress() {
  let listener;

  return function () {
    if (listener) {
      return listener;
    }

    listener = new KeyPress.Listener();
    return listener;
  };
})();
