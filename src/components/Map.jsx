import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import useGeoLocation from "../hooks/useGeolocation";
import { useDispatch } from "react-redux";
import { workoutactions } from "../store";
export default function Map() {
  const location = useGeoLocation();
  const dispatch = useDispatch();

  // const showMyLocation = () => {
  //   if (location.loaded && !location.error) {
  //     mapRef.current.leafletElement.flyTo(
  //       [location.coordinates.lat, location.coordinates.lng],
  //       ZOOM_LEVEL,
  //       { animate: true }
  //     );
  //   } else {
  //     alert(location.error.message);
  //   }
  // };
  // const map = useMapEvents({
  //   click: () => {
  //     map.locate();
  //   },
  //   locationfound: (location) => {
  //     console.log("location found:", location);
  //   },
  // });

  function mapHandler() {
    dispatch(workoutactions.showForm());
  }
  return (
    <div id="map" onClick={mapHandler}>
      {location.loaded && !location.error && (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {location.loaded && !location.error && (
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
            >
              <Popup>this is the popup </Popup>
            </Marker>
          )}
        </MapContainer>
      )}
    </div>
  );
}
