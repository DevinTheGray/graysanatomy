import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// var express = require('express');
// var app = express();
// var port = 3000;
//
// app.get("/", fucntion(req, res, next){
//   res.json({'key': 'value'})
// })
//
// app.listen(port, fucntion(){
//   console.log("listening on port" + port);
// })



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
