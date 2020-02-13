import React from 'react';
import Routes from './config/routes'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import configureStore from './store/store'

function App() {
  return (
    <Provider store={configureStore()}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
