/*
what is conditon:-

// Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run.
 There are multiple different types of conditionals in JavaScript including: “If” statements:
  where if a condition is true it is used to specify execution for a block of code.


6 base condition in javascript:-
* <(less than)
* >(greater than)
* ===(three equal)
* ==(double equal)
* !==(not equal)
* <=(less than equal)
* >=(greater than equal)
2/ multipul condition.
1.&& (and get)
2. || (and or get)

3/conditional statements:-
3.1 if
3.2 else-if
3.3 else
3.4 switch 

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
*/
// base condition
// less than
console.log(4 < 6);

// greater than
console.log(5 > 6);

// double equal
console.log(5 == 6);

// not equal
console.log(5 !== 5)

// three equal
console.log(5 === 5)

// less than or equal
console.log(5 >= 5)

// greater than or equal
console.log(5 <= 7)

//  if  else statements;
const money = 3000;
const iphone = 5000;
const laptop = 2000;

if (iphone <= money) {
     console.log('iphone kenboh ki moja');
}
else if (laptop >= money) {
     console.log('laptop kenboh ki moja')
}
else {
     console.log('basay bose thkhboh var hoyboh nh');
}
// check truethy
const item = ' ';
if (item) {
     console.log('your value is truethy')
}
else {
      console.log("your value is falsey");
}
// check falsey
const items = '';
if (items) {
     console.log('your value is truethy')
}
else {
      console.log("your value is falsey");
}
// not sign
const x = 0;
if (!x) {
     console.log("your value is truethy");
} else {
     console.log("your value is falsey");
}
// multipul condition
if (money >= iphone && money>=laptop) {
     console.log('sob kena palboh ki moja')
} else {
     console.log('onek taka jomaita hobi')
}
// multipul condition
if (item===true||item==='tea') {
     console.log('your value is right')
}
else {
     console.log('your value is negative')
}

// mark ex:
let marks = parseInt(prompt('Enter Your marks'));
if (marks >= 80 && marks <= 100) {
     alert("Congratulations! Your Result Is A+");
}
else if (marks >= 70 && marks <= 79) {
     alert("Congratulations! Your Result Is A");
}
else if (marks >= 60 && marks <= 69) {
     alert("Congratulations! Your Result Is A-");
}
else if (marks >= 50 && marks <= 59) {
     alert("Congratulations! Your Result Is B");
}
else if (marks >= 40 && marks <= 49) {
     alert("Congratulations! Your Result Is C");
}
else if (marks >= 33 && marks <= 39) {
     alert("Congratulations! Your Result Is D");
}
else {
     alert('Your Resule is FALL Places Next Year Good preperation')
}
/*
note:-
three equal(=== check typeof and value)
dobule eqyal(== check only value)
*/ 
/* undefine javascript --------------------------------------------
8 ways to get undefine;
1.variable that is not initialized will give undefined 
2.function with no return
3.parameter that is not passed will be undefined 
4.if return has nothing on the right side will return undefind
5.property that does't exists on an object will give you undefined
6.accessing array elements out side of the index range
7.deleting an element inside an array
8.set a value directly to undefind

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
*/ 
