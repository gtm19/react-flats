import React from 'react';

import FlatList from './flat_list';
import Map from './map';

import flats from '../data/flats';

const App = () => {
  return (
    <div className="app">
      <FlatList flats={flats} />
      <Map />
    </div>
  );
};

export default App;
