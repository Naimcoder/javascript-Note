/*
ES6:---
2.1 template string ${}
2.2 spread oparator
2.3 copy an array than add a new element to an array
2.4 use filter to remove an element from an array.
2.5 arrow function(
    * no parameter
    * single parameter
    * multiple parameter
    * multiple line
)
2.6 array destructuring, object destructuring
2.7 object shortHand
2.8 function parameter defaut value
2.9 optional chaning(?)
3 Browser API:-
3.1 localstorage ,sesseionstorage
3.2 local API
3.3 History API
3.4 fetch,async await,error
3.5 Array method:(
    * map varaiable name
    * filter
    * find
    * foreach
)
3.6 terary operator
3.7 logical and logical or (&&,||)
3.8 JSON(stringity,parse)
3.9 dev tool
4. trurty  value ,falsey value,null,undefinde
*/

/*
template string:-
what is template string?
Answer:
Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks ``. For example,
Template literals provide an easy way to interpolate variables and expressions into strings.

With template literals, it's a bit easier to include
 variables and expressions inside a string. For that,
 we use the (-|`${...}`|-)syntax.
 declated template: snytax(`${...}`)
*/

//1 Ex: - template literals
var parson = "naim";
var age = 24;
console.log(`my name is ${parson} i am ${age} old`);

// Multiline Strings Using Template Literals..
// Template literals also make it easy to write multiline strings. For example:-
const items = `my name is ${parson}
 i am ${age} year old .I live is Dhaka.
 My best pethner in coding ,I love always coding.
`;
console.log(items);
// spread oparator:=
/*
what is spreas opataror?
Anser:
The JavaScript spread operator (...) allows us to quickly copy all or part of an 
existing array or object into another array or object.
declated spread: snytax(...arrayname)
*/
// EX:- spread Oparator in array:-
let array1 = [20, 34, 56, 70];

//  copy an array than add a new element to an array
let array2 = [...array1, 40, 60, 80];
array1.push(90, 80);
array2.push(20, 33);
console.log(array1)
console.log(array2);
//  use filter to remove an element from an array.
const arr = array2.filter(a => a % 2 === 0);
console.log(arr);


// The spread operator is often used in combination with destructuring.
// Ex: -
const number = [2, 4, 6, 8, 10];
const [one, tow, ...three] = number;
console.log(one);
console.log(tow);
console.log(three);

// Spread Operator with Object:-
let parson1 = { name: 'naim', age: 23, salary: 500 }
let parson2 = { ...parson1, name: 'rakib', age: 24, salary: 5000 }
console.log(parson1)
console.log(parson2)

// arrow function:-
/*
arrow function:-
declared a arrow function:-
normal function:-
let Myfunction(a, b){
     return a*b;
}

// arrow function:-
let myFunction = (a, b) => a * b;
4 type declared a arrow function:-
     * no parameter
    * single parameter
    * multiple parameter
    * multiple line
*/
//  * declared no parameter
let item1 = () => console.log(5);
// * declared single parameter
let item2 = (a) => a + 54;
// * declared multiple parameter
let item3 = (a, b, c) => a + b + c;
//    * declared  multiple line
let item4 = (num1, num2){
     const result = num1 + num2;
     return result;
} 

// dfunction parameter defaut value
function  num(a,b=2,c=9,d=0) {
     const item = a + b + c + d;
     return item
}
console.log(num(10, 30, 10))
/*
//:- Trurty  value ,falsey value,null,undefinde
three equal(=== check typeof and value);
dobule equal(== check only value);
not dobule equal(!==check not crrect value);
1.Truethy Value:-
1.1 true
1.2 any number (+ve,-ve)will be othen then 0
1.3 any string other than empty string  100% no true
1.4 '0',"false";
1.5 empty object{}truthy,empty array[]truthy
 
2.Falsey Value:-
2.1 false
2.2 0
2.3 ''(empty string)
2.4 any undefined falsey
2.5 any null falsy

/* undefine javascript --------------------------------------------
/*
8 ways to get undefine;
1.variable that is not initialized will give undefined 
2.function with no return
3.parameter that is not passed will be undefined 
4.if return has nothing on the right side will return undefind
5.property that does't exists on an object will give you undefined
6.accessing array elements out side of the index range
7.deleting an element inside an array
8.set a value directly to undefind
*/ 


1
let shehab;
console.log(shehab);
function x(a, b) {
     const total = a + b;
}
// 2
const result = x();
console.log(x);
// 3
function  nums(a,b,c,d,e) {
     const total = a + b + c + d + e;
      console.log(a,b,c,d,e)
}
nums(2, 5);

// 4
function noNagitive(a, b) {
     if (a < 0 || b < 0){
          return
     }
     return a + b;
}
console.log(noNagitive(2, -9))
// 5
const naim = { name: 'naim', age: 20 }
console.log(naim.salary);



// 6
const b = [23, 56, 78, 90, 23];
console.log(b[1], b[4], b[200]);
console.log(b);
// 7
const d = [23, 56, 78, 90, 23];
// you should do not it. instead use splice used
delete d[1];
console.log(d);
// 8
const roll = undefined;
console.log(roll);
// null typeOf :object
// undefined typeOf:indefined







