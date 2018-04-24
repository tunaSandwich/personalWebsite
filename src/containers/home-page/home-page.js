import React, { Component } from 'react';
import { connect } from 'react-redux';

import './home-page.css'
//TODO Swich with skillSymbols
class HomePage extends Component {


  render(){
    return (
      <div className='homepageImg'>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nav: state.activeNav
  }
}

export default connect(mapStateToProps)(HomePage);
