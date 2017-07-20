import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Play from './components/Play'
import Header from './components/Header'
import Home from './components/Home'
import PlayBack from './components/PlayBack'
import StudyFront from './components/StudyFront'
import StudyBack from './components/StudyBack'
import Study from './components/Study'
import PlayFront from './components/PlayFront'
import Timer from './components/Timer'


// const express = require('express')
// const path = require('path')
// const environment = process.env.NODE_ENV || 'development'
// const app = express()



// app.use(express.static('./'))
//
//
// app.get('*', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'app.js'))
// })
//
// app.listen(port)
// console.log("listening on port fuck you " + port)




ReactDOM.render(
<Router>
  <div>
    <Route path='/' component={App} />
    <Route exact path= '/' component={Home} />
    <Route path='/play' component={Play} />
    <Route path='/play2' component={PlayBack} />
    <Route path='/studyfront' component={StudyFront} />
    <Route path='/studyback' component={StudyBack} />
    <Route path='/study' component={Study} />
    <Route path='/playfront' component={PlayFront} />
    <Route path='/timer' component={Timer} />
  </div>

</Router>,
  document.getElementById('root')
);
