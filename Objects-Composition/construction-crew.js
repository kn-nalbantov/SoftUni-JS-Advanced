function construction(input) {
  if (input.dizziness == true) {
    //modify obj
    let hydrationNeeded = input.weight * input.experience * 0.1;
    input.levelOfHydrated += hydrationNeeded;
    input.dizziness = false;
  }
  return input;
}
