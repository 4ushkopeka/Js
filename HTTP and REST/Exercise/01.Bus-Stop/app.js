function getInfo() {
    const ID = document.getElementById('stopId').value;
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const STOP = document.getElementById('stopName');
    const BUSES = document.getElementById('buses');
    STOP.textContent = '';
    BUSES.innerHTML = '';
    fetch(`${BASE_URL}${ID}`)
    .then(response => response.json())
    .then(data => {
        let {name, buses} = data;
        STOP.textContent = name;
        for (const key in buses) {
            let li = document.createElement('li');
            li.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
            BUSES.appendChild(li);
        }
    })
    .catch(() =>{
        STOP.textContent = 'Error';
    });
}