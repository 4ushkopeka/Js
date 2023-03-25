function FactorialDivision(a, b){
    console.log((factorial(a)/factorial(b)).toFixed(2));
function factorial(num){
    let sum = 1;
    for (let i = num; i > 0; i--) {
        sum*=i;
}
return sum;
}
}