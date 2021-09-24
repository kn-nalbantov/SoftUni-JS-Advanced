function search() {
   const searchTerm = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   const towns = document.getElementById('towns').children;
   let matches = 0;

   for (let town of Array.from(towns)) { //towns not itterable unless turned to Array in softuni.judge.org
      const currentTown = town.textContent;

      if (currentTown.includes(searchTerm)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matches ++;
      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'none';
      }
   }

   result.textContent =  `${matches} matches found`;
}
