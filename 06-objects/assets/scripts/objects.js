let person = {
  name: 'Ash',
  age: 27,
  hobbies: ['Music', 'Swimming'],
  greet: function () {
    alert('Hi there');
  },
};

// ...

// person.age = 30;
// delete person.age;
// person.age = undefined;
person.age = null;
person.isAdmin = true;



console.log(person);
