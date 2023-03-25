function create(words) {
   for (const iterator of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = iterator;
      div.appendChild(p);
      div.addEventListener('click', clicked);
      document.getElementById('content').appendChild(div);
   }
   function clicked(){
      this.children[0].style.display = 'block';
   }
}