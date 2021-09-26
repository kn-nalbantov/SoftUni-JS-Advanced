function solve() {
  const text = document
    .getElementById('input')
    .value.split('.')
    .filter((x) => x.length > 1);
  const result = document.getElementById('output');

  for (let i = 0; i < text.length; i += 3) {
    let paragraph = '';
    paragraph += text[i] + '.';
    if (text[i + 1]) {
      paragraph += text[i + 1] + '.';
    }
    if (text[i + 2]) {
      paragraph += text[i + 2] + '.';
    }

    const newP = document.createElement('p');
    newP.textContent = paragraph;
    result.appendChild(newP);
  }
}
