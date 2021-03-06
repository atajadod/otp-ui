import React from "react";
import PropTypes from "prop-types";

import { vehicleType } from "../types";
import { Button } from "./styled";

/**
 * presentational component for tracking button on marker popup
 */
function VehicleTracker(props) {
  const { vehicle } = props;
  const { tracked } = props;
  const { setTracked } = props;

  function handleClick() {
    if (tracked) {
      setTracked(null, true);
    } else {
      setTracked(vehicle.vehicleId || vehicle.tripId);
    }
  }

  function makeButtonText(isTracked) {
    return isTracked ? "Stop Tracking" : "Track Vehicle";
  }

  return <Button onClick={handleClick}>{makeButtonText(tracked)}</Button>;
}

VehicleTracker.defaultProps = {
  vehicle: null,
  tracked: false
};

VehicleTracker.propTypes = {
  vehicle: vehicleType,
  tracked: PropTypes.bool,
  setTracked: PropTypes.func.isRequired
};

export default VehicleTracker;
