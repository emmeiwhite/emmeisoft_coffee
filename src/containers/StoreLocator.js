import React, { Component } from 'react';
import Header from './../components/Header';
import Button from './../components/Button';
import Map from './../components/Map';

// This is the most basic Component that we want react to pass
class StoreLocator extends React.Component {
  render() {
    return (
      <div>
           <Header/>
           <Button/>
           <Button/>
           <Map/>
      </div>
    );
  }
}

export default StoreLocator;
