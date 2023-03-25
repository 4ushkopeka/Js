function sameNumbers(num){
    let nums = Array.from(String(num), Number);
    let sum = 0;
    let same = true;
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i] != nums[i+1]){
            same = false;
            break;
        }
    }
    console.log(same);
    console.log(sum);
}