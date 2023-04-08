window.addEventListener('load', solve);

function solve() {
    let totalP = document.getElementById('total-sprint-points');
    let createBtn = document.getElementById('create-task-btn');
    let deleteBtn = document.getElementById('delete-task-btn');
    let hiddenInput = document.getElementById('task-id');
    let titleInput = document.getElementById('title');
        let descriptionInput = document.getElementById('description');
        let resultSection = document.getElementById('tasks-section');
        let labelSelect = document.getElementById('label');
        let pointsInput = document.getElementById('points');
        let assigneeInput = document.getElementById('assignee');
    let tasks = [];
    let subtracted = [];
    deleteBtn.addEventListener('click', (e) => {
        let article = document.getElementById(hiddenInput.value);
        let form = tasks.find(x => x.id === hiddenInput.value);
        subtracted.push(form.information.points);
        article.remove();
        e.currentTarget.disabled = true;
        createBtn.disabled = false;
        descriptionInput.disabled = false;
        descriptionInput.value = '';
        titleInput.disabled = false;
        titleInput.value = '';
        labelSelect.value = 'Feature';
        labelSelect.disabled = false;
        assigneeInput.disabled = false;
        assigneeInput.value = '';
        pointsInput.disabled = false;
        pointsInput.value = '';
        updatePoints();
    });
    createBtn.addEventListener('click', () => {
        if(titleInput.value !== '' && descriptionInput.value !== '' && pointsInput.value !== '' && assigneeInput.value !== ''){
            let article = document.createElement('article');
            article.classList.add('task-card');
            let featureDiv = document.createElement('div');
            featureDiv.classList.add('task-card-label');
            if(labelSelect.value === 'Feature')
            {
                featureDiv.classList.add('feature');
                let icon = `&#8865;`;
                featureDiv.innerHTML = `Feature ${icon}`;
            }
            else if(labelSelect.value === 'Low Priority Bug'){
                featureDiv.classList.add('low-priority');
                let icon = `&#9737;`;
                featureDiv.innerHTML = `Low Priority Bug ${icon}`;
            }
            else{
                featureDiv.classList.add('high-priority');
                let icon = `&#9888;`
                featureDiv.innerHTML = `High Priority Bug ${icon}`;
            }
            let formObject = {
                id: `task-${tasks.length+1}`,
                information:{
                    feature: labelSelect.value,
                    title: titleInput.value,
                    description: descriptionInput.value,
                    assignee: assigneeInput.value,
                    points: Number(pointsInput.value)
                }
            };
            tasks.push(formObject);
            article.appendChild(featureDiv);
            article.id = `task-${tasks.length}`
            let h3 = document.createElement('h3');
            h3.classList.add('task-card-title');
            h3.textContent = titleInput.value;
            article.appendChild(h3);
            let p = document.createElement('p');
            p.classList.add('task-card-description');
            p.textContent = descriptionInput.value;
            article.appendChild(p);
            let pointDiv = document.createElement('div');
            pointDiv.classList.add('task-card-points');
            pointDiv.textContent = `Estimated at ${pointsInput.value} pts`;
            article.appendChild(pointDiv);
            let assigneeDiv = document.createElement('div');
            assigneeDiv.classList.add('task-card-assignee');
            assigneeDiv.textContent = `Assigned to: ${assigneeInput.value}`;
            article.appendChild(assigneeDiv);
            let actionDiv = document.createElement('div');
            actionDiv.classList.add('task-card-actions');
            let delBtn = document.createElement('button');
            delBtn.addEventListener('click',(e) => {
                let article = e.currentTarget.parentElement.parentElement;
                let form = tasks.find(x => x.id === article.id);
                hiddenInput.value = article.id;
                
                assigneeInput.value = form.information.assignee;
                titleInput.value = form.information.title;
                descriptionInput.value = form.information.description;
                labelSelect.value = form.information.feature;
                pointsInput.value = form.information.points;
                deleteBtn.disabled = false;
                createBtn.disabled = true;
                assigneeInput.disabled = true;
                pointsInput.disabled = true;
                labelSelect.disabled = true;
                descriptionInput.disabled = true;
                titleInput.disabled = true;
            });
            descriptionInput.value = '';
        titleInput.value = '';
        assigneeInput.value = '';
        pointsInput.value = '';

            delBtn.textContent = 'Delete';
            actionDiv.appendChild(delBtn);
            article.appendChild(actionDiv);
            resultSection.appendChild(article);
            updatePoints();
        }
    });
    function updatePoints(){
        debugger;
        let sum = 0;
        for (const obj of tasks) {
            sum+=Number(obj.information.points);
        }
        for (const sub of subtracted) {
            sum-=Number(sub);
        }
        totalP.textContent = `Total Points ${sum}pts`
    }
}