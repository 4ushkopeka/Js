function attachEvents() {
  let loadBtn = document.getElementById('loadBooks');
  let createPutBtn = document.querySelector('#form > button');
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books';
  let putId = null;
  loadBtn.addEventListener('click', loadData());
  createPutBtn.addEventListener('click', (e) => {
    if(e.currentTarget.textContent === 'Save'){
      let newAuth = document.querySelector('input[name = "author"]').value;
      let newTitle = document.querySelector('input[name = "title"]').value;
      let httpHeaders = {
        method: 'PUT',
        body: JSON.stringify({author: newAuth, title: newTitle})
      };
      document.querySelector('input[name = "title"]').value = '';
      document.querySelector('input[name = "author"]').value = '';
      createPutBtn.textContent = 'Submit';
      document.querySelector('#form > h3').textContent = 'FORM';
      fetch(BASE_URL+`/${putId}`, httpHeaders)
      .then(res => res.json())
      .then(loadData());
    }
    else{
      let newAuth = document.querySelector('input[name = "author"]').value;
      let newTitle = document.querySelector('input[name = "title"]').value;
      let httpHeaders = {
        method: 'POST',
        body: JSON.stringify({author: newAuth, title: newTitle})
      };
      fetch(BASE_URL, httpHeaders)
      .then(res => res.json())
      .then(loadData());
    }
  });
  function loadData(){
    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      for (const id in data) {
        let row = document.createElement('tr');
        let titleTd = document.createElement('td');
        titleTd.textContent = data[id].title;
        let authorTd = document.createElement('td');
        authorTd.textContent = data[id].author;
        let actionTd = document.createElement('td');
        let editBtn = document.createElement('button');
        let deleteBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        deleteBtn.textContent = 'Delete';
        editBtn.addEventListener('click', ()=>{
          putId = id;
          document.querySelector('input[name = "title"]').value = data[id].title;
          document.querySelector('input[name = "author"]').value = data[id].author;
          createPutBtn.textContent = 'Save';
          document.querySelector('#form > h3').textContent = 'Edit FORM';
        });
        deleteBtn.addEventListener('click', ()=>{
          let httpHeaders = {
            method: 'DELETE'
          };
          fetch(BASE_URL+`/${id}`, httpHeaders)
          .then(res => res.json())
          .then(loadData());
        });
        actionTd.appendChild(editBtn);
        actionTd.appendChild(deleteBtn);
        row.appendChild(titleTd);
        row.appendChild(authorTd);
        row.appendChild(actionTd);
        tbody.appendChild(row);
      }
    });
  }
}

attachEvents();