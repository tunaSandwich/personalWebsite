import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import Butthead from '../../data/butthead.obj';
import './butthead-model.css';
var THREE                   = require('three');
var OBJLoader               = require('three-obj-loader')(THREE);
// var OrbitControls           = require('three-orbit-controls')(THREE);

class ButtheadModel extends Component {
  constructor(props) {
    super(props);
    this.state = {percentComplete: 0};
    this.state = {modelLoading: true};
  }

  componentDidMount(){
    this.init();
  }

    render() {
      return (
        <div>
        {/*  {(this.state.modelLoading) ? (
            <div className="loadingModel">
              <h3>{this.state.percentComplete} %</h3>
              <img src={spinnerGif} alt="loading..." />
            </div>
          ) : (
            <div></div>
          )
        }*/}
          <div id="ModelContainer"
            className="modelContainer">
          </div>
          <h2>BUTTHEAD</h2>
        </div>
      );
    }

  init(){
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var ambientLight = new THREE.AmbientLight(0xfffff3);
    scene.add(ambientLight,);

    camera.position.z = 5;
    var buttheadObj;

    var manager = new THREE.LoadingManager();
    // =====================================================================
    // ==========================Load in OBJ File===========================
    // =====================================================================
    // ************************ Terminal Material ************************
      var objLoader = new THREE.OBJLoader( manager );
      // ========================== Obj File ===============================
      objLoader.load( Butthead, ( object ) => {
        buttheadObj = object;
        scene.add(  object  );
        this.setState({
          modelLoading: false
        });
      }, onProgress, onError );
      var onProgress = ( xhr ) => {
      if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        this.setState({
          percentComplete: Math.round(percentComplete, 2)
        });
      }
    };
    var onError = ( xhr ) => {
      console.log(xhr);
    };


    var animate = function () {
      requestAnimationFrame( animate );
      if (buttheadObj) {
        buttheadObj.rotation.x += 0.01;
        buttheadObj.rotation.y += 0.01;

      }

      renderer.render(scene, camera);
    };

    animate();

  }
}

// function mapStateToProps(state){
//   return {
//     nav: state.activeNav
//   }
// }
// export default connect(mapStateToProps)(ButtheadModel);

export default ButtheadModel;
