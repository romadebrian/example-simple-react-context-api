import { Component } from "react";
import { RootContext } from "./App";

class Profile extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          // console.log(value);
          return (
            <div>
              <h1>Profile</h1>
              <p>This is profile page </p>
              <p> Welcome {value.state.name} </p>
              <p> {value.state.email} </p>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default Profile;
