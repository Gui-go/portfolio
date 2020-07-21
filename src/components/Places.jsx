import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "../data/places.json";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <Map center={[38.692063, -9.177628]} zoom={2}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          // icon={icon}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTION}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}



















// import React from 'react'
// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

// class Map extends React.Component {
//   render() {
//     return (
//       <LeafletMap
//         center={[50, 10]}
//         zoom={6}
//         maxZoom={10}
//         attributionControl={true}
//         zoomControl={true}
//         doubleClickZoom={true}
//         scrollWheelZoom={true}
//         dragging={true}
//         animate={true}
//         easeLinearity={0.35}
//       >
//         <TileLayer
//           url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
//         />
//         <Marker position={[50, 10]}>
//           <Popup>
//             Popup for any custom information.
//           </Popup>
//         </Marker>
//       </LeafletMap>
//     );
//   }
// }

// export default Map