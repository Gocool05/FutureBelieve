import React, { useState, useEffect } from "react";


const DealerMap = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.mapsvg.com/mapsvg.min.js"; // ✅ Load MapSVG library
        script.async = true;
        document.body.appendChild(script);
    
        script.onload = () => {
          window.$(".mapsvg").mapSvg({
            source: "https://mapsvg.com/maps/india.svg", // ✅ Use India map
            colors: {
              base: "#cccccc",
              hover: "#ffcc00",
              selected: "#ff0000",
            },
            onClick: function (region) {
              alert("Clicked: " + region.id);
            },
          });
        };
      }, []);
    
      return <div className="mapsvg" style={{ width: "100%", height: "500px" }}></div>;
}

export default DealerMap