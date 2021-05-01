import React, { Component } from 'react';

import FlatList from './flat_list';
import Map from './map';

import flats from '../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.flats = flats;

    this.state = {
      selected: this.flats[0]
    };

    this.updateFlat = this.updateFlat.bind(this);
  }

  updateFlat(index) {
    this.setState({ selected: this.flats.find(flat => flat.id === index) });
  }

  render() {
    const { selected } = this.state;

    return (
      <div className="app">
        <FlatList flats={this.flats} selected={selected} updateFlat={this.updateFlat} />
        <Map selected={selected} />
      </div>
    );
  }
}

export default App;
