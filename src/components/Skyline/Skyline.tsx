import React from "react";
import Building from "../Building/Building";

const Main = () => {
  return (
    <div className="skyline">
      <div className="skyline__upper">
        <Building numFloors={13} numWindows={3} />
      </div>
      <div className="skyline__lower"></div>
    </div>
  );
};

export default Main;
