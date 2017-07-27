import React, { Component } from 'react';
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export default class Header extends Component {
  render(){
    return(
      <div className='page-header '>


        <div className='links'>
          <div className='grays'>
            <img className='logo' src={require('../assets/gray_title_light.png')} />
          </div>
          <div className='take'>
            <Link to="/"> <button className='leggo'>Home</button> </Link>
            <Link to="/play"> <button className='leggo'>Play</button> </Link>
            <Link to="/study"> <button className='leggo'>Study</button> </Link>

          </div>




      </div>

      </div>
    )
  }
};
