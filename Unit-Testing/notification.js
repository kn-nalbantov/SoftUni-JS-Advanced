function notify(message) {
  const output = document.querySelector('#notification');

  output.textContent = message;
  output.style.display = 'block';

  output.addEventListener('click', () => {
    output.style.display = 'none';
  })
}