# react-keyboard-shortcut

This package provide functionality to add keyboard shortcut in your project.

# Use and Setup

Include `react-keyboard-shortcut` in your codebase.

Wrap your App with the `KeyboardShortcutProvider` and wrap individual component with `KeyboardShortcut`

Note: `KeyboardShortcut` should always be the child of `KeyboardShortcutProvider`

    import  React  from  "react";
    import  ReactDOM  from  "react-dom";
    import  App  from  "./App";
    import { KeyboardShortcutApp }  from  "react-keyboard-shortcut";

    ReactDOM.render(
      <React.StrictMode>
        <KeyboardShortcutApp>
          <App  />
        </KeyboardShortcutApp>
      </React.StrictMode>,
      document.getElementById("root")
    );

For every individual compoenent use `KeyboardShortcut` like below

    import { KeyboardShortcut }  from  "react-keyboard-shortcut";

    function  App(props) {
       return (
       <KeyboardShortcut
        combo="shift a"
        callback={function () {console.log("Callback")}}
        description="component description"
       >
        <YourComponent  />
       </KeyboardShortcut>
       )
    }

    export  default  App;

To get all the active shortcuts in the props then wrap your component with `withKeypress`

    import { KeyboardShortcut, withKeypress }  from  "react-keyboard-shortcut";

    function  App(props) {
       return (
       <KeyboardShortcut
        combo="shift a"
        callback={function () {console.log("Callback")}}
        description="component description"
       >
        <YourComponent  />
       </KeyboardShortcut>
       )
    }

    export  default  withKeypress(App);
