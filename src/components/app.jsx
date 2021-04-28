import React from 'react';

import FlatList from './flat_list';
import Map from './map';


const App = (props) => {
  return (
    <div className="app">
      <FlatList />
      <Map />
    </div>
  );
};

export default App;
