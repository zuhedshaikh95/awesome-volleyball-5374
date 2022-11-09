import React, { useEffect } from "react";

function AdItem(props) {
  if ("placeholder" in props) {
    return (
      <div className="ad-item">
        <div className="poster placeholder" />
        <div className="title placeholder" />
        <div className="tagline placeholder" />
        <div className="ftr flex ">
          <div className="location placeholder" />
          <div className="stamp placeholder" />
        </div>
      </div>
    );
  }

  return <div className="ad-item"></div>;
}
export default AdItem;
