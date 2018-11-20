import React, { Component } from "react";
import "./../App.css";
import StoreLocator from './StoreLocator';

class App extends Component {
  render() {
    return (
      <div>
        <StoreLocator/>
        <StoreLocator/> 
        <StoreLocator/>
      </div>
         
    );
  }
}

export default App;
