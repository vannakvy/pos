import React from "react";
import { MapContainer as LeafletMap, TileLayer,Marker } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";
import L from 'leaflet';

function Map({ countries, casesType, center, zoom }) {
  const Icon = new L.Icon({
    iconUrl: 'http://webmonitor.inccloudserver.com/map_marker.png',
    iconRetinaUrl: 'http://webmonitor.inccloudserver.com/map_marker.png',
    iconAnchor: new L.Point(0, 0),
    popupAnchor: new L.Point(16, 0),
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 60),
  });
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
