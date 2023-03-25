function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      const input = document.getElementById('searchField');
      const cells = Array.from(document.querySelectorAll('tbody td'));
      for (const cell of cells) {
         const row = cell.parentElement;
         if(cell.textContent.includes(input.value)){
            row.classList.add('select');
         }
      }
      input.value = '';
   }
}