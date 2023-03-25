function goofySorting(nums){
let sorted = [];
let index = 0;
while(nums.length != 0){
    if(index%2 == 0){
        nums.sort((a, b) =>{
            return a - b;
        });
        sorted.push(nums[0]);
        nums.shift();
    }
    else {
        nums.sort((a, b) =>{
            return b-a;
        });
        sorted.push(nums[0]);
        nums.shift();
    }
    index++;
}
return sorted;
}