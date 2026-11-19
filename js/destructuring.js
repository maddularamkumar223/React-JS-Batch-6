// let arr = ["sofa","clothes","beds","chairs",["charger","tablets"]]

// let [a,b,c,d,e] = arr
// console.log(e)
// console.log(b)

// let  [,clothes,,chairs,[,tablets]] = arr
// console.log(clothes)
// console.log(chairs)
// console.log(tablets)

// let productDetails = {
//   name: "mouse",
//   price: 2000,
//   material: "Metal",
//   rating: {
//     rate: 4.5,
//     count: 5,
//   },
// };

// let { name, price, material, rating } = productDetails;
// console.log(price);

// let {
//   material,
//   rating: { rate, count },
// } = productDetails;
// console.log(rate);
// console.log(material);

let productsDetails = {
  productName: "Pens",
  price: 30,

  quantity: 30,
  rating: 5,
  dealers: {
    andhra: ["Ravi", "Siri"],
    telangana: ["Raghu", "Rahul"],
    delhi: ["Ramya", "teja"],
  },
};

let {
  price,
  quantity,
  rating,
  dealers: {
    andhra: [a],
    telangana: [, b],
    delhi: [, c],
  },
} = productsDetails;

console.log(price);
console.log(quantity);
console.log(rating);
console.log(a);
console.log(b);
console.log(c);
