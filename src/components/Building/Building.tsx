import React, { ReactElement } from "react";
import range from "../../resources/range";

type BuildingProps = {
  numFloors: number;
  numWindows: number;
};

const Building = ({ numFloors, numWindows }: BuildingProps): ReactElement => {
  return (
    <div className="building">
      <div className="building__front">
        {range(1, numFloors + 1).map((num) => {
          return (
            <div className="building__front-floor">
              {range(1, numWindows + 1).map(() => (
                <div className="building__front-window"></div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="building__side"></div>
    </div>
  );
};

export default Building;
