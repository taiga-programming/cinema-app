import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';
import Main from './components/main/Main';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <Main />
      </div>
    </Provider>
  );
};

export default App;
