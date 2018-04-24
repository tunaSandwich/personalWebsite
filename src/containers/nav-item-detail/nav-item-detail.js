import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from '../home-page/home-page';
import Projects from '../projects/projects';
import './nav-item-detail.css';

class NavItemDetails extends Component {

  selectDetail(){
    //Render currect Section
    // WARNING - Expected a default case  default-case
    switch(this.props.nav.title){
      case 'Lucas Garza': return <HomePage />;
      case 'Projects': return <Projects />;
    }
    return 'err';
  }

  render(){
    return (
      <div>
        <div className='contentContainer'>
          {this.selectDetail()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    nav: state.activeNav
  }
}

export default connect(mapStateToProps)(NavItemDetails);
