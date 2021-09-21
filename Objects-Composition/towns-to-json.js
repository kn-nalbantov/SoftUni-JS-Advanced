function townsJSON(input) {
  let catalogue = [];

  for (let i = 1; i < input.length; i++) {
    let town = {};
    let [token, name, latitude, longitude] = input[i]
      .split('|')
      .map((x) => x.trim());

    town.Town = name;
    town.Latitude = Number(Number(latitude).toFixed(2));
    town.Longitude = Number(Number(longitude).toFixed(2));

    catalogue.push(town);
  }

  console.log(JSON.stringify(catalogue));
}
