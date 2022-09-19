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
