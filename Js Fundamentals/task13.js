function arrayRotation(array, rotations){
for (let i = 0; i < rotations; i++) {
    let temp = array[0];
    array.shift(array[0]);
    array.push(temp);
}
console.log(array.join(' '));
}