// Store Prime numbers in an array

let arr = []
let count = 0;
let a = 2;

while(count<5){
    let flag = true;
    for(let i=2; i<a; i++){
        if(a%i == 0){
            flag = false;
            break;
        }
    }
    if(flag == true){
        arr[count] = a;
        count++;
    }
    a++;
    console.log(arr)
}