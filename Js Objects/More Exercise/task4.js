function flightSchedule(input){
let flights = [];
for (const flight of input[0]) {
    let obj = {};
    let info = flight.split(' ');
    obj.name = info[0];
    if(info.length>2){
        let fixedName = '';
        for (let i = 1; i < info.length; i++) {
            fixedName+=info[i]+' ';
        }
        fixedName = fixedName.trimEnd();
        obj.destination = fixedName;
    }
    else{
        obj.destination = info[1];
    }
    obj.status = 'Ready to fly';
    flights.push(obj);
}
for (const cancel of input[1]) {
    let name = cancel.split(' ')[0];
    let obj = flights.find(x => x.name === name);
    if(obj !== undefined){
        obj.status = 'Cancelled';
    }
}
if(input[2][0] === 'Ready to fly'){
let filteredFlights = flights.filter(x => x.status === 'Ready to fly');
for (const flight of filteredFlights) {
    console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`)
}
}
else{
    let filteredFlights = flights.filter(x => x.status === 'Cancelled');
    for (const flight of filteredFlights) {
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`)
    }
}
}