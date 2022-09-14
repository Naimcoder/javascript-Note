
/*
what is function?
Ans:
* declare a function:-
function ketword+function name+()+{};

function myfunction(){
 
}
*/
// parameter value send
function myfunction(num1,num2) {
     const number = num1*num2; 
     return number;
}
// argument value recived
const mynumber = myfunction(3,3);
console.log(mynumber);

function names(firstName, lastName) {
     const myname = firstName + " " + lastName;
     return myname;
}
const items = names('Md naimul', 'islam');
console.log(items);

function numbers() {
     // let item = [23, 45, 67, 89, 90];
        const item = [];
     for (let i = 1; i <= 10; i+=2) {
          item.push(i);
     }
      return(item);
     
}
console.log(numbers());
// 
function numbers1() {
     // let item = [23, 45, 67, 89, 90];
        const item = [];
     for (let i = 0; i <= 10; i+=2) {
          item.push(i);
     }
      return item
     
}
console.log(numbers1());

// defulet parameter
function  num(a,b=2,c=9,d=0) {
     const item = a + b + c + d;
     return item
}
console.log(num(10, 30, 10))

// rest parameter
function  add(add1,add2,...addall) {
     console.log('a', add1);
     console.log('b', add2);
     console.log("all", addall);
}
add('one', 'tow',  'three', 'four', 'five', 'six');
