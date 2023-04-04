function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook';
    let ul = document.getElementById('phonebook');
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');
    loadBtn.addEventListener('click', loadData());
    createBtn.addEventListener('click', ()=>{
        let peep = document.getElementById('person').value;
        let phone = document.getElementById('phone').value;
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person: peep, phone: phone})
        }
        fetch(BASE_URL, httpHeaders)
        .then(res => res.json())
        .then(() => {})
        loadData();
    });
    function loadData(){
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            let peeps = Object.values(data);
            for (const peep of peeps) {
                let li = document.createElement('li');
                li.textContent = `${peep.person}: ${peep.phone}`;
                let delBtn = document.createElement('button');
                delBtn.id = peep._id;
                delBtn.textContent = 'Delete';
                delBtn.addEventListener('click', (e) => {
                    debugger;
                    let httpHeaders = {
                        method: 'DELETE',
                    };
                    fetch(BASE_URL+`/${e.currentTarget.id}`, httpHeaders)
                    .then(res => res.json())
                    .then(()=>{});
                });
                li.appendChild(delBtn);
                ul.appendChild(li);
            }
        });
    }
}

attachEvents();