function tracker(input){
let words = input[0].split(' ');
let counter = {};
for (const iterator of words) {
    counter[iterator] = 0;
}
for (let i = 1; i < input.length; i++) {
    if(counter.hasOwnProperty(input[i])){
        counter[input[i]]++;
    }
}
let values = Object.entries(counter).sort((a,b) => {
    return b[1] - a[1];
});
for (const [key, value] of values) {
    console.log(`${key} - ${value}`);
}
}