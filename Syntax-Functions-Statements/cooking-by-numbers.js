function cooking(num, arg, arg2, arg3, arg4, arg5) {
  num = Number(num);

  const chop = (x) => x / 2;
  const dice = (x) => Math.sqrt(x);
  const spice = (x) => x + 1;
  const bake = (x) => x * 3;
  const fillet = (x) => x * 0.8;

  const operations = { chop, dice, spice, bake, fillet };

  console.log(operations[arg](num));
  num = operations[arg](num);
  console.log(operations[arg2](num));
  num = operations[arg2](num);
  console.log(operations[arg3](num));
  num = operations[arg3](num);
  console.log(operations[arg4](num));
  num = operations[arg4](num);
  console.log(operations[arg5](num));
}
