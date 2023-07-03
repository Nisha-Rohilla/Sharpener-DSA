// Maximum in an Array

function find_maximum(arr,length){
    let max = arr[0];
    for(let i=0; i<length; i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max;
}
find_maximum([5,4,7,2,6],5);