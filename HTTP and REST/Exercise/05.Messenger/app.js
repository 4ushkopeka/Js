function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger';
    let btnSubmit = document.getElementById('submit');
    let btnRefresh = document.getElementById('refresh');
    debugger;
    btnSubmit.addEventListener('click', ()=>{
        let author = document.querySelector('input[name = "author"]').value;
        let message = document.querySelector('input[name = "content"]').value;
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ author: author, content: message })
        };
        fetch(BASE_URL, httpHeaders)
        .then(response => response.json())
        .then(()=>{
        })
        .catch(err => {
            console.log(err);
        })
    });
    btnRefresh.addEventListener('click', ()=>{
        let area = document.getElementsByTagName('textarea')[0];
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            let values = Array.from(Object.values(data));
            let messages = [];
            for (const obj of values) {
                messages.push(`${obj.author}: ${obj.content}`);
            }
            area.value = messages.join('\n');
        })
    });
}

attachEvents();