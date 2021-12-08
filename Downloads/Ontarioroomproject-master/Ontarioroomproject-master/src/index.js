import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './Redux/Store'
import { Globalcss } from './Globalcss';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <Globalcss/>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

