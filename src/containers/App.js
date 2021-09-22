import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store = configureStore();
const {jwtToken} = localStorage;
if(jwtToken) {
  setAuthorizationToken(jwtToken);
  // prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    if(parseInt(jwtDecode(jwtToken).expires) > Date.now()) {
      store.dispatch(setCurrentUser(jwtDecode(jwtToken)));
    } else {
      store.dispatch(setCurrentUser({}));
    }
  }
  catch(err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
)

export default App;
