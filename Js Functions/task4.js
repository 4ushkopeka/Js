function sums(number){
let evens = Array.from(String(number), Number).filter(x => x % 2 === 0);
let odds = Array.from(String(number), Number).filter(x => x % 2 != 0);
console.log(`Odd sum = ${summate(odds)}, Even sum = ${summate(evens)}`);
function summate(arr){
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}
}