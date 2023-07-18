// 1588. Sum of All Odd Length Subarrays

// Input: arr = [1,4,2,5,3]
// Output: 58

let arr = [1,4,2,5,3]
let sum = 0;
for(let i=0; i<arr.length; i++){
    for(let j=i; j<arr.length; j++){
        if((i-j)%2 == 0){
            for(let k=i; k<=j; k++){
                sum+=arr[k]
            }
        } 
    } 
}
console.log(sum)
