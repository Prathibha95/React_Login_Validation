import React, { Component } from 'react';

import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h2 style={{color: "black"}}>React Form Login with Validation </h2>
       <Form />
          
       
      </div>
    );
  }
}

export default App;
