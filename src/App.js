import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/Header';
import Vehicles from './containers/Vehicles/Vehicles';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Route path='/' component={Vehicles} />
        </div>
      </Router>
    );
  }
}

export default App;
