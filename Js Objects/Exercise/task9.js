function Dictionary(json){
    let result = {};
for (const iterator of json) {
    let obj = JSON.parse(iterator);
    let entries = Object.entries(obj);
    result[entries[0][0]] = entries[0][1];
}
let values = Object.entries(result);
values.sort((a, b) => {
    return a[0].localeCompare(b[0]);
})
for (const [key, val] of values) {
    console.log(`Term: ${key} => Definition: ${val}`);
}
}