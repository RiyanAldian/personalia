/* eslint-disable prettier/prettier */
import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
      // <Routes/>

    );
};

export default App;
