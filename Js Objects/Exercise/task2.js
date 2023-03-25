function employees(towns){
    let objects = [];
    for (const row of towns) {
        let splitted = row.split(' | ');
        let obj = {"town": splitted[0], "latitude": Number(splitted[1]).toFixed(2), "longitude": Number(splitted[2]).toFixed(2)};
        objects.push(obj);
    }
    objects.forEach(x => console.log(x));
}