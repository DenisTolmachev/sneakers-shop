import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '400px',
  height: '300px',
};

const center = {
  lat: 47.85711100718188,
  lng: 35.10484320881614,
};

const position = {
  lat: 47.85711100718188,
  lng: 35.10484320881614,
};

function FooterLocation() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDyq9qpE1UgMySJNUV4E_YfT5jleKsxU9c',
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(FooterLocation);