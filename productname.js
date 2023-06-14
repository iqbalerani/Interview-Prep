const products = [
    { id: 1, name: 'Apple', price: 0.5 },
    { id: 2, name: 'Banana', price: 0.25 },
    { id: 3, name: 'Orange', price: 0.35 }
];

const ProductName = products.map((product)=> product.name)

console.log(ProductName);