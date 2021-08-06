import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

const Map = ({ searchResults }) => {
  const [selectLocation, setSelectLocation] = useState({});
  //Transform the object result object into the {lat:34.434,long:009}
  //!object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // !Centre

  const center = getCenter(coordinates);
  //!View state
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
  });
  console.log({ selectLocation });
  //   console.log(coordinates);
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/magesh007/cks0ibo5b3pjy17pex5lf5cyz"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => {
        return (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setSelectLocation(result)}
                role="img"
                className="cursor-pointer text-2xl animate-bounce "
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>
            {/* popup should show if we click the pin */}
            {selectLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectLocation(result)}
                closeOnClick={true}
                longitude={result.long}
                latitude={result.lat}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        );
      })}
    </ReactMapGL>
  );
};

export default Map;
