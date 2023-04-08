function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks';
let loadBtn = document.getElementById('load-board-btn');
let createBtn = document.getElementById('create-task-btn');
let todoList = document.getElementById('todo-section').lastElementChild;
let inProgressList = document.getElementById('in-progress-section').lastElementChild;
let codeReviewList = document.getElementById('code-review-section').lastElementChild;
let doneList = document.getElementById('done-section').lastElementChild;
let titleInp = document.getElementById('title');
let descInp = document.getElementById('description');
loadBtn.addEventListener('click', loadTasks);
createBtn.addEventListener('click', addHandler);

function loadTasks(e){
    fetch(BASE_URL)
    .then(x => x.json())
    .then(data => {
        todoList.innerHTML = '';
        inProgressList.innerHTML = '';
        codeReviewList.innerHTML = '';
        doneList.innerHTML = '';
        let actualData = Object.values(data);
        for (const object of actualData) {
            let li = document.createElement('li');
            li.classList.add('task');
            let h3 = document.createElement('h3');
            h3.textContent = object.title;
            li.appendChild(h3);
            let p = document.createElement('p');
            p.textContent = object.description;
            li.appendChild(p);
            let button = document.createElement('button');
            if(object.status === 'ToDo'){               
                button.textContent = 'Move to In Progress';
                button.addEventListener('click', moveToProgress);
                li.appendChild(button);
                button.id = object._id;
                todoList.appendChild(li);
            }
            else if(object.status === 'In Progress'){
                button.textContent = 'Move to Code Review';
                button.addEventListener('click', moveToReview);
                button.id = object._id;
                li.appendChild(button);
                inProgressList.appendChild(li);
            }
            else if(object.status === 'Code Review'){
                button.textContent = 'Move to Done';
                button.addEventListener('click', moveToDone);
                button.id = object._id;
                li.appendChild(button);
                codeReviewList.appendChild(li);
            }
            else{
                button.textContent = 'Close';
                button.addEventListener('click', removeTask);
                button.id = object._id;
                li.appendChild(button);
                doneList.appendChild(li);
            }
        }
    })
}
function moveToProgress(e){
    let httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({status: 'In Progress'})
    };
    fetch(BASE_URL+`/${e.currentTarget.id}`, httpHeaders)
    .then(() => loadTasks);
}
function moveToReview(e){
    let httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({status: 'Code Review'})
    };
    fetch(BASE_URL+`/${e.currentTarget.id}`, httpHeaders)
    .then(() => loadTasks);
}
function moveToDone(e){
    let httpHeaders = {
        method: 'PATCH',
        body: JSON.stringify({status: 'Done'})
    };
    fetch(BASE_URL+`/${e.currentTarget.id}`, httpHeaders)
    .then(() => loadTasks);
}
function removeTask(e){
    let httpHeaders = {
        method: 'DELETE',
    };
    fetch(BASE_URL+`/${e.currentTarget.id}`, httpHeaders)
    .then(() => loadTasks);
}
function addHandler(){
if(titleInp.value !== '' && descInp.value !== ''){
    let httpHeaders = {
        method: 'POST',
        body: JSON.stringify({title: titleInp.value, description: descInp.value, status: 'ToDo'})
    }
    titleInp.value = '';
    descInp.value = '';
    fetch(BASE_URL, httpHeaders)
    .then(() => loadTasks);

}
}
}

attachEvents();