// Print the following series using for loop:-
// 1,8,27,64,125,216,......n
// Input
// 125
// Output :-
// 1  1
// 8  2*2*2
// 27  3*3*3
// 64  4*4*4
// 125 5*5*5

function series(n) {
  for (let i = 1; i <= n; i++) {
    if (i * i * i <= n) {
      console.log(i * i * i);
    }
  }
}
series(125);
