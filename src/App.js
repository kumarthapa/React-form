import React from "react";
import UserForm from './components/UserForm/UserForm';
import UserData from './components/UserForm/UserData';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";
const App = () => {
  return (
    <>
     <Router>
            <Switch>
                <Route exact path="/" component ={UserForm}/>
                <Route exact path="/userdata" component ={UserData}/>
            </Switch>
            </Router>
    </>
  );
};

export default App;
