function solve() {
  const text = document.getElementById('text').value;
  const casing = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  let splitText = text.split(' ').map(x => x.toLowerCase());
  let resultArr = [];

  if (casing == 'Camel Case') {
    resultArr.push(splitText[0]);
    for (let i=1; i<splitText.length; i++) {
      //push capitalized words if any
      splitText[i] = splitText[i][0].toUpperCase() + splitText[i].substring(1);
      resultArr.push(splitText[i]);
    }
  } else if (casing == 'Pascal Case') {
    for (let word of splitText) {
      word = word[0].toUpperCase() + word.substring(1);
      resultArr.push(word);
    }
  } else {
    resultArr.push('Error!');
  }


  result.textContent = resultArr.join('');
}