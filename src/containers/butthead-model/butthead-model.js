import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import Butthead from '../../data/butthead.obj';
import Texture from '../../images/objectTexture.jpg';
import './butthead-model.css';
var THREE                   = require('three');
var OBJLoader               = require('three-obj-loader')(THREE);
var OrbitControls           = require('three-orbit-controls')(THREE);

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
        <div className="modelContainer">
          <div id="ModelContainer"
            className="modelContainer">
          </div>
        </div>
      );
    }

  init(){
    var Modelcontainer = document.getElementById('ModelContainer');

    var viewportOffset = Modelcontainer.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var viewportTop = viewportOffset.top;
    var viewportLeft = viewportOffset.left;
    var renderer = new THREE.WebGLRenderer( { alpha: true } );
    // this.renderer.setClearColor( 0x000000, 0 );
    console.log(Modelcontainer);
    renderer.setSize( Modelcontainer.clientWidth, Modelcontainer.clientHeight );

    Modelcontainer.appendChild( renderer.domElement );

    var scene = new THREE.Scene();
    var ambientLight = new THREE.AmbientLight(0xffa393);
    scene.add(ambientLight);

    var camera = new THREE.PerspectiveCamera( 50, Modelcontainer.clientWidth/Modelcontainer.clientHeight, 0.1, 1000 );
    camera.position.z = 8;
    camera.lookAt( scene.position );

    var controls = new OrbitControls( camera, renderer.domElement );
    controls.target.set( 12000, -4000, 20 ); // sets initial orbit center

    var texture = new THREE.TextureLoader().load( Texture );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4 );

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

        scene.add( buttheadObj )

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
