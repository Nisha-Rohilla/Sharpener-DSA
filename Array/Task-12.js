// 1480. Running Sum of 1d Array (Leetcode)
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

let nums = [1,2,3,4];
for(let i=1; i<nums.length; i++){
    nums[i] = nums[i]+nums[i-1]
   
}
console.log(nums)