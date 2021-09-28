function create(words) {
   const input = [...words];
   const output = document.getElementById('content');

   for (let section of input) {
      const div = document.createElement('div');
      div.innerHTML += `<p style="display:none">${section}</p>`;
      output.appendChild(div);

      div.addEventListener('click', displayHidden);
   }

   function displayHidden(e) {
      e.target.children[0].removeAttribute('style', 'display:none');
   }
}