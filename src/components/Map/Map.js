import React from "react";

const Map = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        width: "80vh",
        margin: "auto",
        padding: "2vh"
      }}
    >
      <iframe
        title="Google Maps"
        style={{ width: "100%", height: "100%" }}
        src={props.mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
