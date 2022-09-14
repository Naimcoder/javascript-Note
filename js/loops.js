/*
what is loop?
Ans: Loops are used in JavaScript to perform repeated tasks based on a condition.
  Conditions typically return true or false.
 A loop will continue running until the defined condition returns false.

 * for loop declare:-
 * for loop declare a 3 type 
   1/initialzatio(let i=0)
   2/condition(i<10)
   3/finalExpression(i++)

 for (initialization; condition; finalExpression) {
  // code
   }

*/
// 1. Iterate through integers from 0-8:
for (let i = 0; i <= 8; i++){
     console.log(i);
}

// 2. Use break to exit out of a for loop before condition is false:
// break statement
// continue statement
for (let i = 1; i < 10; i+=2){
     if (i === 7) {
          break;
     }
     console.log( "total elephants: ",i);
}
// Exceeding the Bounds of an Array
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// ======================================
/*
for...in loop:
for...in loop used a object
The for...in loop iterates over the properties of an object.
for...in loop declare:-
for(property in object){
     // code
}
*/
// 1. Iterate over the properties of an object and log its name and value to the
// console:
const furts = {
     a: 'mango',
     b: 'banana',
     c:'orange'
}
for (let key in furts) {
     console.log(key,':',furts[key]);

}
// ======================================
// for...of used in a array
for (variable of object) {
     // code
}
const arr1 = ['one', 'tow', 'three']
for (let i of arr1) {
     console.log('*',i);
}