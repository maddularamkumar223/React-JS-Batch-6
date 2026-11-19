let arr = ["sofa", "clothes", "beds", "chairs", ["charger", "tablets"]];

let [sofa, clothes,,,a] = arr;
console.log(sofa);
// console.log(data);
console.log(a)

let arr1 = [1, 2, 3, 4, 5, 6];

let arr3 = [...arr, ...arr1];
console.log(arr3);

let str = "I am a string";

let arr4 = [...str];
console.log(arr4);

let details = {
  name: "Ram",
  age: 65,
};
let address = {
  area: "JNTU",
  place: "HYD",
};

let fullDetails = {
  ...details,
  ...address,
};
console.log(fullDetails);
