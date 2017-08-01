import React from 'react';
import 'bulma/css/bulma.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Vehicles from './containers/Vehicles/Vehicles';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Header />
      <Route path='/' component={Vehicles} />
    </div>
  </Router>
);

export default App;
