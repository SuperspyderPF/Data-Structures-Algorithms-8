/**
 * @param {number[]} nums
 * @return {number[]}
 */        
var numberOfPairs = function(nums) {
    nums.sort()                                 //sort given array nums
    let equals = search_equals(nums)           //search equals pairs in nums
    return [equals, nums.length - equals * 2]   //return equals and the number of leftover integers   
};

function search_equals(nums) {
let equals = 0
for (let i = 0; i < nums.length - 1; i++) {        
    if (nums[i] == nums[i + 1]) 
        equals ++, i++
}
return equals
}