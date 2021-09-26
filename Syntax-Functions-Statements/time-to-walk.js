function timeToWalk(steps, footprint, speedKmH) {
  const speed = (speedKmH * 1000) / 3600;
  const distance = steps * footprint;

  const rest = Math.floor(distance / 500) * 60;
  const breaks = distance / speed + rest;

  const h = Math.floor(breaks / 60 / 60)
    .toFixed(0)
    .padStart(2, '0');
  const m = Math.floor(breaks/60)
    .toFixed(0)
    .padStart(2, '0');
  const s = (breaks%60)
    .toFixed(0)
    .padStart(2, '0');

  console.log(`${h}:${m}:${s}`);
}

