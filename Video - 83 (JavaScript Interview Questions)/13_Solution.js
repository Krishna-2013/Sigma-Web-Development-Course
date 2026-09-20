const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 3 }
];


const price = cart.reduce((total, el) => {
    return  total + el.price * el.quantity
}, 0)

console.log(price);