import React, { Component } from 'react';
// import Success from './Success.js';
// import {BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h2 style={{color: "black"}}>React Login Form with Validation </h2>
       <Form />
          
       
      </div>
    );
    // <BrowserRouter>
    // <Switch>
    
    //   <Route path="/login/:email" component={Success}/>
    //   <Route path="/logout" component={App}/>
    // </Switch>
    // </BrowserRouter>
  }
 
}

export default App;
