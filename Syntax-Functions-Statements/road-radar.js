function roadRadar(speed, area) {
  const speedLimits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let drivingStatus = 'not speeding';
  if (speed - speedLimits[area] > 40) {
    drivingStatus = 'reckless driving';
  } else if (speed - speedLimits[area] > 20) {
    drivingStatus = 'excessive speeding';
  } else if (speed > speedLimits[area]) {
    drivingStatus = 'speeding';
  }

  if (drivingStatus == 'not speeding') {
    console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
  } else {
    console.log(
      `The speed is ${
        speed - speedLimits[area]
      } km/h faster than the allowed speed of ${
        speedLimits[area]
      } - ${drivingStatus}`
    );
  }
}