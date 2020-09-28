import React from 'react';
import Homepage from "../src/pages/Home"
import './App.scss';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import SignUp from '../src/pages/SignUp';
import SignIn from '../src/pages/SignIn';

function App() {
  return (
    <Router>
     

      <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/sign-up"  exact component={SignUp}/>
          <Route path="/sign-in" exact component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
