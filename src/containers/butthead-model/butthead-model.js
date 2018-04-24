import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './butthead-model.css'

class ButtheadModel extends Component {
  componentWillMount() {
    this.init();
  }

  render(){

    return (
      <div>
        <div id='ModelContainer'>
          BUTTHEAD MODEL
        </div>
      </div>
    )

  }

  init(){

  }
}

// function mapStateToProps(state){
//   return {
//     nav: state.activeNav
//   }
// }


export default ButtheadModel;
