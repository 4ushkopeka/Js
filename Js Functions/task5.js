function palindromes(numbers){
let result = [];
numbers.forEach(x => {
    let numArr = Array.from(String(x), Number);
    let check = true;
    for (let i = 0; i < numArr.length/2; i++) {
        if(numArr[i] != numArr[numArr.length-1-i]){
            check = false;
        }
    }
    result.push(check);
});
console.log(result.join('\n'));
}