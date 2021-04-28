import React from 'react';
import ReactDOM from 'react-dom';

import flats from './data/flats';

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  console.log(flats);
  ReactDOM.render(<Hello name="World" />, root);
}
