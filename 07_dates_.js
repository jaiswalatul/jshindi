"use strict"
 //// Dates
 let mydate = new Date();
 console.log(mydate); // 2023-11-15T06:21:27.771Z not Readable
 console.log(mydate.toString()); // Wed Nov 15 2023 11:52:22 GMT+0530 (India Standard Time)
 console.log(mydate.toDateString()); // Wed Nov 15 2023
 console.log(mydate.toISOString()); //2023-11-15T06:23:59.829Z
 console.log(mydate.toJSON()); // 2023-11-15T06:23:59.829Z
 console.log(mydate.toLocaleDateString()); // 11/15/2023
 console.log(mydate.toLocaleString()); // 11/15/2023, 11:56:14 AM
 console.log(mydate.toLocaleTimeString()); //11:57:03 AM
 console.log(typeof mydate); // object

 console.log("------------------Next");

//------Creation of my own date------------//

// let createdate=new Date(2023,0,23)
// let createdate=new Date(2023,0,23,5,45,20)
// let createdate=new Date("2023-11-15") //11/15/2023 yy/mm/dd
let createdate=new Date("11-15-2023") //11/15/2023 mm/dd/yy
console.log(createdate.toLocaleString());

// Months are started from 0(January) in js

let timestamp=Date.now()
console.log(timestamp);//1700030746691 this is exact abhi ki date in milisecond
console.log(createdate.getTime()); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.

console.log(Date.now()); //this is exact abhi ki date in milisecond
//Conversion in seconds
console.log(Math.floor(Date.now()/100));//this give alue in seconds


console.log(mydate.getDay() + 1);// 4 i.e Wednesday
console.log(mydate.getMonth() + 1);// 11 i.e November

// ctrl + space give property in vscode

mydate.toLocaleString('default' , {weekday:"long",})
console.log(mydate.toLocaleString('default' , {weekday:"long",})); // Wednesday
console.log(mydate.toLocaleString('default' , {weekday:"short",})); // Wed


