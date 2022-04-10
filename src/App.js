import { createContext, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";

export const RootContext = createContext();
const Provider = RootContext.Provider;

function App() {
  const [globalState, setGlobalState] = useState({
    name: "Roma Debrian",
    email: "roma@yahoo.com"
  });

  const changeGlobalState = (action) => {
    console.log(action);

    if (action.type === "SET_NAME") {
      // console.log(action.val);

      return setGlobalState({
        ...globalState,
        name: action.valName
      });
    }

    if (action.type === "SET_EMAIL") {
      return setGlobalState({
        ...globalState,
        email: action.valEmail
      });
    }
  };

  return (
    <Provider
      value={{
        state: globalState,
        dispatch: changeGlobalState
      }}
    >
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>

          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
