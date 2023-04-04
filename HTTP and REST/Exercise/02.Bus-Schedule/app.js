function solve() {
    let nextStop = document.querySelector('.info');
    let deprtureBtn = document.getElementById('depart');
    let arrivalBtn = document.getElementById('arrive');
    let nextStopId = 'depot';
    let nextStopName = '';
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    function depart() {
        deprtureBtn.disabled = true;
        arrivalBtn.disabled = false;
        fetch(`${BASE_URL}${nextStopId}`)
        .then(result => result.json())
        .then(data => {
            let {name, next} = data;
            nextStop.textContent = `Next stop ${name}`;
            nextStopId = next;
            nextStopName = name;
        })
        .catch(() => {
            nextStop.textContent = 'Error';
            arrivalBtn.disabled = true;
            deprtureBtn.disabled = true;
    });
    }

    async function arrive() {
        deprtureBtn.disabled = false;
        arrivalBtn.disabled = true;
        nextStop.textContent = `Arriving at ${nextStopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();