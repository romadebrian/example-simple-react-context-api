import { Component } from "react";
import { RootContext } from "./App";

class Home extends Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = (e) => {
    // console.log("ID: ", e.target.id);
    // console.log("Value: ", e.target.value);

    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSetData = (e) => {
    console.log(this.state);
    console.log(e);
    e({ type: "SET_NAME", valName: this.state.name });
    // e({ type: "SET_EMAIL", valEmail: this.state.email });
  };

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          // console.log(value);

          return (
            <div>
              <h1>Home</h1>
              <p>This is home page </p>
              <div>
                <div>
                  <label> set name </label>
                  <input
                    type="text"
                    id="name"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div>
                  <label> set email </label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <button onClick={() => this.handleSetData(value.dispatch)}>
                  {" "}
                  save{" "}
                </button>
              </div>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}
export default Home;
