// const ids = new Set(['Hi', 'Ash', 'Lai']);
// ids.add(2);
// ids.delete('Hi');

// for (const entry of ids.entries()) {
//   console.log(entry);
// }
// for (const entry of ids.values()) {
//   console.log(entry);
// }

// const person1 = { name: 'Ash' };
// const person2 = { name: 'Anna' };

// const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

// personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// // console.log(personData);
// // console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// console.log(personData.size);

let person = { name: 'Ash' };
const persons = new WeakSet();
persons.add(person);

// ...  some operations;
person = null;

console.log(persons);
