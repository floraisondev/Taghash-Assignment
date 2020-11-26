import React, { Fragment } from 'react';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Emails from "./components/Emails/Emails";
import Charts from "./container/Analytics/Analytics";
import './App.css';
import User from "./container/User/User";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Fragment>
         <Router>
           <div className="App">
            <User />
            
    </div>
    <Route path="/" exact component = {Emails} />
    <Route path="/analytics" component ={Charts} />
     <Footer/>
    </Router>

    </Fragment>
   
   
  );
}

export default App;
