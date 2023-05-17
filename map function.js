const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

const celsiusTemperatures = [0, 10, 20, 30, 40];

const fahrenheitTemperatures = celsiusTemperatures.map((celsius) => {return celsius * 9/5 + 32});

console.log(fahrenheitTemperatures);


const products = [
    { id: 1, name: 'Apple', price: 0.5 },
    { id: 2, name: 'Banana', price: 0.25 },
    { id: 3, name: 'Orange', price: 0.35 }
  ];
  
const productName = products.map(product => product.name);

console.log(productName);
  
