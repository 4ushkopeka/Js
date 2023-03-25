function parkingLot(input){
let cars = [];
for (const iterator of input) {
    let command = iterator.split(', ');
    if(command[0] === 'IN' && !cars.includes(command[1])){
        cars.push(command[1])
    }
    else if(command[0] === 'OUT' && cars.includes(command[1])){
        cars = cars.filter(x => x !== command[1]);
    }
}
if(cars.length !== 0){
    cars.sort((a,b) => {
        return a.localeCompare(b);
    });
    cars.forEach(x => console.log(x));
}
else{
console.log('Parking Lot is Empty');
}
}