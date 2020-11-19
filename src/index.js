import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialState = {
  name: 'test',
};

ReactDOM.hydrate(
  <React.StrictMode>
    <App { ...initialState }/>
  </React.StrictMode>,
  document.getElementById('root')
);
