function sums(num){
    let nums = Array.from(String(num), Number);
    let sum =0;
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    console.log(sum);
}