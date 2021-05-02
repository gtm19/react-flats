import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_API_KEY;

class Map extends Component {
  constructor(props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
    this.renderPoint = this.renderPoint.bind(this);
    this.center = [2.3522, 48.8566];

    this.state = {
      map: false,
      marker: false
    };
  }

  componentDidMount() {
    this.renderMap();
  }

  shouldComponentUpdate(nextProps) {
    const { selected } = this.props;
    return nextProps.selected.id !== selected.id;
  }

  componentDidUpdate() {
    const { selected } = this.props;
    this.renderPoint(selected.lng, selected.lat);
  }

  renderMap() {
    const { selected } = this.props;
    const location = [selected.lng, selected.lat];

    const map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v9",
      center: this.center,
      zoom: 13
    });

    const marker = new mapboxgl.Marker().setLngLat(location).addTo(map);
    map.flyTo({
      center: location
    });

    this.setState({ map, marker });
  }

  renderPoint(lng, lat) {
    const { map, marker } = this.state;
    const location = [lng, lat];
    marker.remove();

    const newMarker = new mapboxgl.Marker().setLngLat(location).addTo(map);
    map.flyTo({
      center: location,
      speed: 0.5
    });
    this.setState({ marker: newMarker });
  }

  render() {
    return (
      <div id="map-container" className="map-container" />
    );
  }
}

export default Map;
