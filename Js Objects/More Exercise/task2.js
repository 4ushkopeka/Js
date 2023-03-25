function catalogue(input){
let stock = [];
for (const str of input) {
    let splitted = str.split(' : ');
    let obj = {};
    obj[splitted[0]] = Number(splitted[1]);
    stock.push(obj);
}
stock.sort((a, b) =>{
    return Object.keys(a)[0].localeCompare(Object.keys(b)[0]);
})
let letters = stock.map(x => (Object.keys(x)[0])[0])
letters = Array.from(new Set(letters)).sort((a,b) => {
    return a.localeCompare(b);
});
for (const letter of letters) {
    let filtered = stock.filter(x => (Object.keys(x)[0])[0] === letter);
    console.log(letter);
    for (const item of filtered) {
        for (const key in item) {
            console.log(`  ${key}: ${item[key]}`)
        }
    }
}
}