"use strict"
let score="33abc"
let score2=null
let score3=undefined //atul

console.log(typeof score);
console.log(typeof(score))

let valueinnumber =Number(score)
let valueinnumber1 =Number(score2)
let valueinnumber2 =Number(score3)


console.log(typeof(valueinnumber));
console.log(valueinnumber)//NaN:not a number
console.log(valueinnumber1) //0
console.log(valueinnumber2)//NaN:not a number

let abc=1;
let booleanis=Boolean(abc);
console.log(booleanis);

//:0=false
//: 1=true
//: ""=false
//: "hitesh"=true


let somenumber=33
let somestring=String(somenumber)
console.log(somestring);//33
console.log(typeof somestring);//string


//***************OPERATION****************//

let value =3
let negvalue=-value;
console.log(negvalue);

let str1="hello"
let str2=" everyone"
let str3=str1+str2
console.log(str3);

console.log("1"+2); //12
console.log("1"+2+3); //123
console.log(1+2+"3"); //33
console.log("1"+2+3); //123
console.log(1+"2"+3); //123

console.log(+true)//1
console.log(+"");//0
