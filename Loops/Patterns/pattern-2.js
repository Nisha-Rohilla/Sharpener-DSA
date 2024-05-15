// Print the following pattern using for loops

// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
