import React, { Component } from 'react';
import '../App.css'




export default class Home extends Component {
  render(){
    return(
      <div className='here home'>
        <div className='header'>

          <img className='logo' src={require('../assets/graysanat.png')} />
          <div className='gray'> An anatomy study game for the easily distracted </div>

        </div>







      </div>
    )
  }
}
