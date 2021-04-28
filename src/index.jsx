import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import flats from './data/flats';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  console.log(flats);
  ReactDOM.render(<App />, root);
}
