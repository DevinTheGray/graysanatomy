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
        <Link to='/'> Home </Link>
        <Link to='/play'> Play </Link>
      



      </div>

      </div>
    )
  }
}
