import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.756391, 
      lng: -73.999546
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={ {key: "AIzaSyBqE_G9KHOloGh8yETYuojQI4CHN6BEI1w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.756391}
            lng={-73.999546}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;