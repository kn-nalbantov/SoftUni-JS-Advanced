function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      let searchTerm = document.getElementById('searchField');
      const searchFields = document.querySelectorAll('tbody td');

      for (let cell of Array.from(searchFields)) {
         cell.parentElement.removeAttribute('class');
      }

      for (let cell of Array.from(searchFields)) {
         if (cell.textContent.includes(searchTerm.value)) {
            cell.parentElement.setAttribute('class', 'select');
         }
      }

      searchTerm.value = '';
   }
}