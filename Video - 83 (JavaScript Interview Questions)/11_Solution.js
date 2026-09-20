let arr = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 1000 },
];

function filterProducts (range) {
  let rangeArr = arr.filter((el) => {
    return el.price <= range;
    })

  return rangeArr
}

console.log(filterProducts(20000));