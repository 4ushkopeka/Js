function perfect(num){
let divisors = [];
for (let i = 1; i < num; i++) {
    if(num%i === 0){
divisors.push(i);
    }
}
if(summate(divisors) === num){
console.log("We have a perfect number!");
}
else{
    console.log("It's not so perfect.");
}
function summate(arr){
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
return sum;
}
}