import React from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Emails from "./components/Emails/Emails";
import Charts from "./components/Charts/Charts";
import './App.css';
import User from "./container/User/User";
function App() {
  return (
    <Router>
           <div className="App">
             
             <User />
             
       
    </div>
    <Route path="/" exact component = {Emails} />
    <Route path="/analytics" component ={Charts} />
    </Router>
   
  );
}

export default App;
