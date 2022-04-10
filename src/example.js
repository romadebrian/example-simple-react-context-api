import React from "react";

const valueText = React.createContext("This is Button");

class App extends React.Component {
  render() {
    // Use a Provider to pass the current theme to the tree below.
    // Any component can read it, no matter how deep it is.
    // In this example, we're passing "dark" as the current value.
    return (
      <valueText.Provider value="dark">
        <Toolbar />
      </valueText.Provider>
    );
  }
}

export default App;

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  static contextType = valueText;

  render() {
    console.log(valueText);

    return (
      <button>
        {valueText._currentValue} {valueText._currentValue2} {this.context}
      </button>
    );
  }
}
