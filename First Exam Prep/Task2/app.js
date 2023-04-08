window.addEventListener("load", solve);

function solve() {
  let mainDiv = document.getElementById('main');
  let ul = document.getElementById('preview-list');
  let fNameInput = document.getElementById('first-name');
  let lNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let genreSelect = document.getElementById('genre');
  let sTitleInput = document.getElementById('story-title');
  let storyArea = document.getElementById('story');
  let previewBtn = document.getElementById('form-btn');
  previewBtn.addEventListener('click', (e) => {
    if(fNameInput.value !== '' && lNameInput.value !== '' && ageInput.value !== '' && sTitleInput.value !== '' && storyArea.value !== ''){
      e.currentTarget.disabled = true;
      
      let object = {
        firstName: `${fNameInput.value}`,
        lastName: `${lNameInput.value}`,
        age: `${ageInput.value}`,
        title: `${sTitleInput.value}`,
        content: `${storyArea.value}`
      };
      let li = document.createElement('li');
      li.classList.add('story-info');
      let article = document.createElement('article');

      let name = document.createElement('h4');
      name.textContent = `Name: ${fNameInput.value} ${lNameInput.value}`;
      article.appendChild(name);

      let age = document.createElement('p');
      age.textContent = `Age: ${ageInput.value}`;
      article.appendChild(age);

      let title = document.createElement('p');
      title.textContent = `Title: ${sTitleInput.value}`;
      article.appendChild(title);

      let genre = document.createElement('p');
      genre.textContent = `Genre: ${genreSelect.value}`;
      article.appendChild(genre);

      let story = document.createElement('p');
      story.textContent = `${storyArea.value}`;
      article.appendChild(story);
      li.appendChild(article);
      
      fNameInput.value = '';
      lNameInput.value = '';
      ageInput.value = '';
      sTitleInput.value = '';
      storyArea.value = '';

      let saveBtn = document.createElement('button');
      saveBtn.classList.add('save-btn');
      saveBtn.textContent = 'Save Story';
      saveBtn.addEventListener('click', () => {
        mainDiv.innerHTML = '';
        let saved = document.createElement('h1');
        saved.textContent = 'Your scary story is saved!'
        mainDiv.appendChild(saved);
      });
      li.appendChild(saveBtn);

      let editBtn = document.createElement('button');
      editBtn.classList.add('edit-btn');
      editBtn.textContent = 'Edit Story';
      let deleteBtn = document.createElement('button');
      editBtn.addEventListener('click', (z) => {
        previewBtn.disabled = false;
        z.currentTarget.disabled = true;
        deleteBtn.disabled = true;
        saveBtn.disabled = true;
        ul.removeChild(li);
        fNameInput.value = object.firstName;
        lNameInput.value = object.lastName;
        ageInput.value = object.age;
        sTitleInput.value = object.title;
        storyArea.value = object.content;
      });
      li.appendChild(editBtn);

      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.addEventListener('click', () => {
        ul.removeChild(li);
        previewBtn.disabled = false;
      });
      li.appendChild(deleteBtn);

      ul.appendChild(li);
    }
  });
}
