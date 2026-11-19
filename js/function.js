// let demo = () => {
//   console.log("I am a demo function");
// };
// demo();

// ! Case 1
// let message = () => console.log("Todays React Second Class");
// message()
// ! Case 2
// let message = _ => console.log("Todays React Second Class");
// let message = $ => console.log("Todays React Second Class");
// message()
// ! Case 3
// let message = displayMessage => console.log(displayMessage);
// message("Today We are discuss about the function");
// message("We are discuss about the arrow function");

// ! Return Statements
// @ Implict Return

// let add = (a, b) => a + b;

// console.log(add(10, 20));

// // @ Explicit Return

// let sub = (a, b) => {
//   return a - b;
// };
// console.log(sub(20, 10));

//! Higher Order Function

let cal = (a, b, operation) => operation(a, b);

let add = (a, b) => console.log(a + b);
let sub = (a, b) => console.log(a - b);

cal(10, 20, add);
cal(10, 20, sub);
