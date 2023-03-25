function oddDictionary(input){
let words = input.toLowerCase().split(' ');
let counter = {};
for (const iterator of words) {
    if(!counter.hasOwnProperty(iterator)){
        counter[iterator] = 1;
    }
    else{
        counter[iterator]++;
    }
}
let result = [];
for (const key in counter) {
    if(counter[key]%2 !== 0){
        result.push(key);
    }
}
console.log(result.join(' '));
}