import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

class Map extends Component {
  constructor(props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
    this.center = [-0.2, 51.5];
  }

  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v9",
      center: this.center,
      zoom: 10
    });
    // // add map to App state
    // this.setState({ map });
    // const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    // // add marker to App state
    // this.setState({ marker });
  }

  render() {
    return (
      <div id="map-container" className="map-container" />
    );
  }
}

export default Map;
