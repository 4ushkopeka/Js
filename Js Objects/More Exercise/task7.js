function sequences(input){
    let arrays = [];
for (const iterator of input) {
    let arr = JSON.parse(iterator);
    arr.sort((a, b)=>{
        return b - a;
    })
    arrays.push(arr);
}
const sameMembers = (arr1, arr2) => { return contains(arr1, arr2) && contains(arr2, arr1)
}
for (let i = 0; i < arrays.length; i++) {
    let saving = arrays.filter(x => x !== arrays[i]);
    for (const arr of saving) {
        if(sameMembers(arrays[i], arr) && arr.length === arrays[i].length){
            arrays = arrays.filter(x => x !== arr);
        }
    }
}
function contains(arr1, arr2){
    return arr2.every((x => arr1.includes(x)));
}

arrays.sort((a, b)=> {
    return a.length - b.length;
});
for (const arr of arrays) {
    console.log(`[${arr.join(', ')}]`)
}
}