// Minimum in Array

function find_minimum(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min;
}
find_minimum([5,4,7,2,6])