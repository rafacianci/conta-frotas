import React from 'react';
import 'bulma/css/bulma.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Vehicles from './containers/Vehicles';
import VehicleForm from './containers/VehicleForm';
import './App.css';

const App = () => (
  <Router>
    <div className='App'>
      <Header />
      <Route exact path='/' component={Vehicles} />
      <Route path='/:vehicleId' component={VehicleForm} />
    </div>
  </Router>
);

export default App;
