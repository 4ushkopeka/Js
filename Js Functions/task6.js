function passCheck(password){
    let checks = true;
if(password.length<6 || password.length>10){
checks = false;
console.log("Password must be between 6 and 10 characters");
}
if(!/^[A-Za-z0-9]+$/.test(password)){
    checks = false;
    console.log("Password must consist only of letters and digits");
}
if(!check2Digits()){
checks = false;
console.log("Password must have at least 2 digits");
}
if(checks){
console.log("Password is valid");
}
function check2Digits(){
let arr = Array.from(String(password));
let nums = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i].charCodeAt(0)>=48 && arr[i].charCodeAt(0)<=57){
nums++;
    }
}
if(nums>=2) {
return true;
}
else {
    return false;
}
}
}
