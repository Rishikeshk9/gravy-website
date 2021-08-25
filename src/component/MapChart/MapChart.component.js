import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Image1 from "../../assets/1x/marker.svg";
import Marker from "./marker.component";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.3064113996833324,
      lng: 103.89570206301592,
    },
    zoom: 21,
  };

  center = {
    lat: parseFloat(this.props.lat),
    lng: parseFloat(this.props.lon),
  };

  render() {
    console.log(this.center);
    console.log(this.props.center);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          options={(map) => ({ mapTypeId: map.MapTypeId.ROADMAP })}
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lon}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
