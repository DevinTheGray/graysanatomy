import React, { Component } from 'react';
import '../App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'






export default class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = { time: {}, seconds: 60 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);




  }

  secondsToTime(secs){

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {

      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }


  countDown() {

    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });


    if (seconds == 0) {
      clearInterval(this.timer);

    }
  }

 //  componentDidMount() {
 //    window.addEventListener('load', this.startTimer);
 // }


  render(){
    return(
      <div className='timer'>


        <div className='count-down'>

            <button  className="leggo" onClick={this.startTimer}>Start</button>
            <div className="red">

            m: {this.state.time.m} s: {this.state.time.s}
          </div>
          </div>


      </div>
    )
  }
}
