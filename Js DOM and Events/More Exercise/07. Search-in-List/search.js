function search() {
   let list = document.getElementById('towns');
   let search = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let matches = 0;
   let lis = Array.from(list.children);
   for (let li of lis) {
      if(li.textContent.includes(search)){
         li.style = 'font-weight: bold; text-decoration: underline;'
         matches++;
      }
      else{
         li.style = '';
      }
   }
   result.textContent = `${matches} matches found`;
}
