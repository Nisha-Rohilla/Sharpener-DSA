// Maximum Sum Subarray
// Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

// Input:-[5,2,-4,-5, 3,-1,2,3,1]

// Output:-8

let arr = [5,2,-4,-5, 3,-1,2,3,1]
let max_sum=0
for(let i=0; i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let sum = 0;
        for(let k=i;k<=j;k++){
            sum=sum+arr[k]
            if(max_sum<sum){
                max_sum = sum
            }
        }
    }
}
console.log(max_sum)