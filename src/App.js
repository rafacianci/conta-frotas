import React from 'react';
import 'bulma/css/bulma.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import reducers from './reducers';
import Header from './components/Header';
import Vehicles from './containers/Vehicles';
import VehicleForm from './containers/VehicleForm';
import './App.css';


const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

const App = () => (
  <Router>
    <Provider store={store}>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Vehicles} />
        <Route path='/:vehicleId' component={VehicleForm} />
      </div>
    </Provider>
  </Router>
);

export default App;
