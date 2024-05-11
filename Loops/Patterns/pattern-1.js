// Print the following pattern using for loops

// *****
// ****
// ***
// **
// *

function print_pattern() {
  for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 5; j > i; j--) {
      str += "*";
    }
    console.log(str);
  }
}
print_pattern();
