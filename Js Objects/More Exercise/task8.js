function garageStuff(input){
    let garages = [];
    for (const iterator of input) {
        let garageinfo = iterator.split(' - ');
        let gNum = Number(garageinfo[0]);
        let garage = garages.find(x => x.number === gNum);
        if(garage === undefined){
            garage = {};
            garage.number = gNum;
            garage.cars = [];
        }
        let carInfo = garageinfo[1].split(', ');
        let car = {};
        for (const info of carInfo) {
            let properties = info.split(': ');
            for (let i = 0; i < properties.length; i+=2) {
                car[properties[i]] = properties[i+1];
            }
        }
        garage.cars.push(car);
        if(garages.find(x => x.number === garage.number) === undefined){
            garages.push(garage);
        }
    }
    for (const garage of garages) {
        console.log(`Garage № ${garage.number}`)
        for (let i = 0; i < garage.cars.length; i++) {
            let entries = Object.entries(garage.cars[i]);
            let text = '--- '
            for (let i = 0; i < entries.length; i++) {
                let [key, value] = entries[i];
                if(i+1 === entries.length){
                    text+=`${key} - ${value}`
                }
                else{
                    text+=`${key} - ${value}, `
                }
            }
            console.log(text)
        }
    }
}