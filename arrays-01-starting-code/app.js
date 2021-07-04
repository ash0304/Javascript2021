// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = new Array(5);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [27, 'Ash', { moreDetaul: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Cooking', 'Sports'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removeElements = hobbies.splice(0, 1);
// console.log(removeElements);

// const removeElement = hobbies.splice(-2, 1);
// console.log(removeElement);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice(0, 2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Ash' }, { name: 'max' }];
// console.log(personData.indexOf({ name: 'max' }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'max';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const ashIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Ash';
// });

// console.log(ashIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx) => {
  return {
    index: idx,
    taxAdjPrice: price * (1 + tax),
  };
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  console.log(a, b);
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

console.log(sum);

const data = 'new york;10.99;2000';

const transformedData = data.split(';');

console.log(transformedData);

const origin = transformedData.join('');

console.log(origin);
