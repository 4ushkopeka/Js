function inventory(commands){
let heroes = [];
for (const iterator of commands) {
    let row = iterator.split(' / ');
    heroes.push({"Hero": row[0], "level": Number(row[1]), "items": row[2].split(', ')})
}
heroes.sort((a, b) => {
return a.level - b.level
});
for (const iterator of heroes) {
    let values = Object.entries(iterator);
    for (let i = 0; i < values.length; i++) {
        if(i === 0){
            console.log(`${values[i][0]}: ${values[i][1]}`);
        }
        else if(i === 1){
            console.log(`${values[i][0]} => ${values[i][1]}`); 
        }
        else{
            console.log(`${values[i][0]} => ${values[i][1].join(', ')}`);
        }
    }
}
}