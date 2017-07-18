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
  </div>

</Router>,
  document.getElementById('root')
);
