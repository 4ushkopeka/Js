function store(stocked, additions){
let result = {};
for (let i = 0; i < stocked.length; i+=2) {
        result[stocked[i]] = Number(stocked[i+1]);
}
for (let i = 0; i < additions.length; i+=2) {
    if(result.hasOwnProperty(additions[i])){
        result[additions[i]] += Number(additions[i+1]);
    }
    else{
        result[additions[i]] = Number(additions[i+1]);
    }
}
for (const key in result) {
    console.log(`${key} -> ${result[key]}`);
}
}