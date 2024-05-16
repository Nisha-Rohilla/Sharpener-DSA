// Print the following pattern using for loops

// *****
// ****
// ***
// **
// *

function print_pattern() {
  for (let i = 0; i < 5; i++) {
    let str = "";
    // inner loop
    for (let j = 5; j > i; j--) {
      str += "*";
    }
    console.log(str);
  }
}
print_pattern();
