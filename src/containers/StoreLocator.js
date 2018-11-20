import React, { Component } from 'react';
import Header from './../components/Header';
import Button from './../components/Button';

// This is the most basic Component that we want react to pass
class StoreLocator extends React.Component {
  render() {
    return (
      <div>
           <Header/>
           <Button/>
           <Button/>
      </div>
     
    );
  }
}

export default StoreLocator;
