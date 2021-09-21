function factory(input) {
  let car = {};

  let engines = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];
  let carriages = [
    { type: 'hatchback', color: input.color },
    { type: 'coupe', color: input.color },
  ];

  let wheelSize = input.wheelsize;
  if (wheelSize % 2 == 0) {
    wheelSize--;
  }

  car.model = input.model;

  for (let i = 0; i < engines.length; i++) {
    if (input.power <= engines[i].power) {
      car.engine = engines[i];
      break;
    }
  }

  if (input.carriage == 'hatchback') {
    car.carriage = carriages[0];
  } else {
    car.carriage = carriages[1];
  }

  car.wheels = [wheelSize, wheelSize, wheelSize, wheelSize];

  return car;
}
