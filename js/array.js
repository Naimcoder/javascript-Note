/*
array (declare,length,index,push,pop,indexOf,inculdes,unshift,shifit);
How to declare a array.!
what is array?
Ans: an array javascript array are used to store multiple values in a single line.
* Array special object (typeof check ArrayisArray());

 * JavaScript array is a non-primitive data-type 
that allows you to store multiple collections of data

length:-
*length property is always one more than the highest array index;
*array lest element to length-1;

EX:-length
const number=[20,45,67,89]
consol.log(number.length);

* array is index number start in (0)
*/
// declare a array
const number = [23, 56, 78, 23, 56]
console.log(number);

// check a array length
console.log(number.length);

// check a array index number
console.log(number.indexOf(23));

// check a array index number value
console.log(number[0])

// array reassign 
number[1] = 50;

// array push;
// * array index last Element add in array length 
number.push(20);
console.log(number);

// array  pop 
// * array index last Element remove in array length 
number.pop();
console.log(number);

// array  unshift;
// * array index frist Element add in array length 
number.unshift(30);
console.log(number)

// array  shift;
// * array index frist Element remove in array length 
number.shift();
console.log(number);

// array inculdse;
//To check the array index length value 
console.log(number.includes(23));
// array ar indexnumber  with number

// array slice
// To check the array index element cut 
console.log(number.slice(0, 2));

// splice() will only remove elements from the array and set elements every length in index element
// array splice 
console.log(number.splice(4, 4, 60));
console.log(number);


// =================================== array method=================================
/*
1/forEach
2/filter
3/find
4/map

*1/ForEach:-
The forEach() method calls a function for each element in an array.
snytax ForEach:-
array.forEach(callback(currentValue),thisArg);

The forEach() method takes in:
* callback  The function to execute on every array element. It takes in:
* currentValue  The current element being passed from the array
* forEach() does not change the original array.
* forEach() The function  takes 3 arguments 
 **1 The item currentValue pass from array.
 **2 The item index.
 **3 The item array.
 const count=[23,45,67,89]
  array.forEach((x) => {
   console.log(x)
  }
*2/map:-
 const count=[23,45,67,89]
const count=array.map(x =>x*2)
*3/filter:-
 const count=[23,40,67,89]
  array.filter(x =>x%2===0);
  }

*4/find:-
 const count=[23,40,67,89]
  array.find(x =>x>50)

  *5/reduce:-
 const count5 = [40, 56, 78, 23, 56]
const item4 = count5.reduce((prvesNumber, newNumber) => prvesNumber + newNumber);
*/
1.
 const count=[23,45,67,89]
count.forEach((entry) => {
     console.log(entry)
});
2.
const count2 = [30, 40, 50, 60, 70, 80]
const item1 = count2.map(x => x * 2)
console.log(item1);

3.
const count3 = [40, 51, 63, 75, 80, 82];
const item2 = count3.filter(x => x % 2 == 1);
console.log(item2);

4.
const conut4 = [33, 45, 67, 23, 45, 12];
const item3 = conut4.find(x => x > 30);
console.log(item3)

5.
const count5 = [40, 56, 78, 23, 56]
const item4 = count5.reduce((prvesNumber, newNumber) => prvesNumber + newNumber);
console.log(item4);
