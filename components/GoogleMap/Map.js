import GoogleMapReact from "google-map-react";

export default function Map() {
  const location = {
    center: {
      lat: 22.8332,
      lng: 88.3707,
    },
    zoom: 15,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDrIlKE-OzCydDLFrnffUK3Lazd3A3n7vg" }}
      defaultCenter={location.center}
      defaultZoom={location.zoom}
    >
      <AnyReactComponent lat={location.center.lat} lng={location.center.lng} />
    </GoogleMapReact>
  );
}
