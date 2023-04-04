function attachEvents() {
    let submitBtn  = document.getElementById('submit');
    let forecastDiv = document.getElementById('forecast');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    submitBtn.addEventListener('click', () => {
        let location = document.getElementById('location').value;
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(result => result.json())
        .then(data => {
            let requestedLocation = data.filter(x => x.name === location)[0];
            let symbolDictionary = {};
            symbolDictionary.Sunny = '☀';
            symbolDictionary['Partly sunny'] = '⛅';
            symbolDictionary.Overcast = '☁';
            symbolDictionary.Rain = '☂';
            forecastDiv.style = 'display: block;';
            fetch(`http://localhost:3030/jsonstore/forecaster/today/${requestedLocation.code}`)
            .then(result => result.json())
            .then(stuff => {
                debugger;
                let newDiv = document.createElement('div');
                newDiv.classList.add('forecasts');
                let symbolSpan = document.createElement('span');
                symbolSpan.classList.add(['condition', 'symbol']);
                symbolSpan.textContent = `${symbolDictionary[stuff.forecast.condition]}`;
                let conditionSpan = document.createElement('span');
                conditionSpan.classList.add('condition');
                let nameSpan = document.createElement('span');
                nameSpan.textContent = stuff.name;
                nameSpan.classList.add('forecast-data');
                let degreeSpan = document.createElement('span');
                degreeSpan.textContent = `${stuff.forecast.low}°/${stuff.forecast.high}°`;
                degreeSpan.classList.add('forecast-data');
                let wordSpan = document.createElement('span');
                wordSpan.textContent = stuff.forecast.condition;
                wordSpan.classList.add('forecast-data');
                conditionSpan.appendChild(nameSpan);
                conditionSpan.appendChild(degreeSpan);
                conditionSpan.appendChild(wordSpan);
                newDiv.appendChild(symbolSpan);
                newDiv.appendChild(conditionSpan);
                currentDiv.appendChild(newDiv);
            })
            fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${requestedLocation.code}`)
            .then(result => result.json())
            .then(stuff => {
                let newDiv = document.createElement('div');
                newDiv.classList.add('forecast-info');
                for (const data of stuff.forecast) {
                    let symbolSpan = document.createElement('span');
                    symbolSpan.classList.add('symbol');
                    symbolSpan.textContent = `${symbolDictionary[data.condition]}`;
                    let conditionSpan = document.createElement('span');
                    conditionSpan.classList.add('upcoming');
                    let degreeSpan = document.createElement('span');
                    degreeSpan.textContent = `${data.low}°/${data.high}°`;
                    degreeSpan.classList.add('forecast-data');
                    let wordSpan = document.createElement('span');
                    wordSpan.textContent = data.condition;
                    wordSpan.classList.add('forecast-data');
                    conditionSpan.appendChild(symbolSpan);
                    conditionSpan.appendChild(degreeSpan);
                    conditionSpan.appendChild(wordSpan);
                    newDiv.appendChild(conditionSpan);
                }
                upcomingDiv.appendChild(newDiv);
            })
        })
        .catch(()=>{
            console.log('Error');
        })
    });
}

attachEvents();