const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'red';
movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
  'first-name': 'Ash',
  age: 27,
  hobbies: ['Music', 'Swimming'],
  [userChosenKeyName]: 'test',
  greet: function () {
    alert('Hi there');
  },
  1.5: 'hello',
};

// ...

// person.age = 30;
// delete person.age;
// person.age = undefined;
person.age = null;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);
