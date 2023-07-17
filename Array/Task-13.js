 // 1672. Richest Customer Wealth [LEETCODE]

//  Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6

let accounts = [[1,2,3],[3,2,1],[4,5,6]]
let richestWealth = 0;
for(let i=0; i<accounts.length; i++){
    let wealth = 0;
    for(let j=0; j<accounts[i].length; j++){
        wealth += accounts[i][j]
    }
    if(richestWealth<wealth){
        richestWealth = wealth
    }
}
console.log(richestWealth)