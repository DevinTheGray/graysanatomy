import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



export default class Study extends Component {

  render(){
    return(
      <div className='study2'>
        <div className="anterior">
          <div className='anterior2'>
          <h2> Anterior </h2>
          </div>


        <Link to="/studyfront"> <img src={require('../assets/front.jpg')} /> </Link>



        </div>
      <div className="study"><h1>Study</h1></div>

        <div className='posterior'>
          <div className='posterior2'>
          <h2> Posterior </h2>
          </div>
          <Link to="/studyback"> <img src={require('../assets/back.jpg')} /> </Link>

          {/* <img src={require('../assets/back.jpg')} /> */}
        </div>





      </div>
    )
  }
}
