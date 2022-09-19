/*
Objects:-
 * JavaScript object is a non-primitive data-type 
that allows you to store multiple collections of data
what is object?
Ans:JavaScript objects are containers for named values called properties.

object declaration:-
*Here, an object object_name is defined. Each member of an object is a key: value 
pair separated by commas and enclosed in curly braces {}.
// =====

object index holo propertyname;
object key/propertyname with left side
object value with right side

object literal syntax:
const parson = {name:'naim', age=30,  marred:false,};

object multie line syntax:-
const parson ={
     name:'rakib',
     age:24,
     marred:true
}

*/
const parson = {
  name: "naim",
  age: 24,
  married: false,
};
console.log(typeof parson);

/*
 * you can access the value of property by using its key.

 1/using a dot notaion.!
 2/Using bracket Notation.!
 *Here a snytax of the notaion.?
 parson.name;
*/
//1 for example:-
const student = {
  name: "rakib",
  age: 24,
  married: true,
};
console.log(student.name);
//2 for example:-
const item = {
  name: "naim",
  age: 24,
};
console.log(item["name"]);
// object index number propertyName

// nested object
const furts = {
  name: "mango",
  price: 240,
  mark: {
    science: 50,
    math: 70,
  },
};
console.log(furts.mark);
console.log(furts.mark.science);
// javascript object methops
const add = {
  name: "naim",
  age: 20,
  items: function () {
    console.log("data");
  },
};
add.items();

// this key word object
const parson2 = {
  name: "rakib",
  age: 24,
  data: function () {
    console.log("My name is" + " " + this.name);
  },
};
// function object property this method..
parson2.data();

// add a construtcour in object
//adding  function inside a consturtcour
function Student(name, age, height, language) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.language = language;
     

     this.display = function (){
          console.log(this.name)
          console.log(this.age)
          console.log(this.height)
          console.log(this.language)
     }
}
// consturtcour value set the used new key word akh consturtcour name..!
const student1 = new Student("naim", 22, 5.6, ["html", "css", "javaScript"]);

student1.display();

//1 you can access the keys
const key = Object.keys(parson2);
console.log(key);

//2 you can access the values
const value = Object.values(parson2);
console.log(value);

var itemed = {
  name: 'naim',
  movies:['one','tow']
}
console.log(itemed["movies[0]"]);
