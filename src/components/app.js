import React, { Component } from 'react';
import Navbar from '../containers/navbar/navbar';
import NavItemDetails from '../containers/nav-item-detail/nav-item-detail';
import Footer from '../containers/footer/footer';

class App extends Component {
  render() {
    return (
      <div id="background">
        <Navbar />
        <NavItemDetails />
        <Footer />
      </div>
    );
  }
}

export default App;
