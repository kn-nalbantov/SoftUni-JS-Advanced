function heroInventory(input) {
  let heroes = [];

  for (let line of input) {
    let hero = {};
    let [heroName, heroLevel, items] = line.split(' / ');
    heroLevel = Number(heroLevel);

    hero.name = heroName;
    hero.level = heroLevel;
    if (items) {
        hero.items = items.split(', ');
    } else {
        hero.items = [];
    }

    heroes.push(hero);
  }

  console.log(JSON.stringify(heroes));
}