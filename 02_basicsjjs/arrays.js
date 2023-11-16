//Arrays
const myarr=[1,2,3,4,5,"hitesh",true]
/*
1) Javascript arrays are resizable and contain mix of diffrent datatypes
2)Js array copy operations create shallow copies:changes in her
copy also changes in original copy
*/

// Declaration of Arrays
const myarr2=new Array(1,2,3,4,5,6)
console.log(myarr2[0]);

// Methods of Arrays

myarr.push(6)
myarr.push(7)
myarr.pop()
console.log(myarr);
myarr.unshift(9) // Add 9 to starting of the array
myarr.shift() // Pop out the strating element
console.log(myarr);

console.log(myarr.includes(9));// False
console.log(myarr.indexOf(9)); // -1
console.log(myarr.indexOf(5));//4

const newarr=myarr.join()

console.log(myarr); // [ 1, 2, 3, 4, 5, 'hitesh', true, 6 ]
console.log(newarr); // 1,2,3,4,5,hitesh,true,6
console.log(typeof newarr); // String


// Use of Slice and Splice

console.log("A",myarr2);
const myn1=myarr2.slice(1,3) // Take subarray from 1 to 2 3 ko nhi lenga
console.log(myn1);
/*
o/p:
A [ 1, 2, 3, 4, 5, 6 ]
[ 2, 3 ]
*/

console.log("B",myarr2);
const myn2=myarr2.splice(1,3) // take subarray from 1 to 3 but original array 
//deplete ho jayenga
console.log(myn2);
console.log("C",myarr2);
/*
o/p:B [ 1, 2, 3, 4, 5, 6 ]
[ 2, 3, 4 ]
C [ 1, 5, 6 ]
*/