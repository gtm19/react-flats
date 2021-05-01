import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';

import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: flats[0]
    };
  }

  render() {

    const { selected } = this.state;

    return (
      <div className="app">
        <FlatList flats={flats} selected={selected} />
        <Map />
      </div>
    );
  }
}

export default App;
