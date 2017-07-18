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
            <h1> Gray's Anatomy </h1>
          </div>
          <div className='take'>
            <Link to='/'> Home </Link>
            <Link to='/play'> Play </Link>
            <Link to='/Study'> Study </Link>
          </div>




      </div>

      </div>
    )
  }
}
