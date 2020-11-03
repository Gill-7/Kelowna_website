import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Cycling from './components/pages/Cycling';
import Boating from './components/pages/Boating';
import Hiking from './components/pages/Hiking';
import Camping from './components/pages/Camping';
import Golf from './components/pages/Golf';
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cycling' exact component={Cycling} />
          <Route path='/boating' exact component={Boating} />
          <Route path='/hiking' exact component={Hiking} />
          <Route path='/camping' exact component={Camping} />
          <Route path='/golf' exact component={Golf} />
          <Route path='/sign-up' exact component={SignUp} />

        </Switch>
      </Router>
    </>
  )
}

export default App;