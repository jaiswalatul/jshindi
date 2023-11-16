const score =400
console.log(score);//400

const balance = new Number(100) //here new is a object in js
console.log(balance); //[Number: 100]

console.log(balance.toString()) //Number changes to string 
 // o/p:100
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) // 100.00
console.log(balance.toFixed(3)) // 100.000

const othnumber= 123.8986
console.log(othnumber.toPrecision(4)); //123.9
console.log(othnumber.toPrecision(3)); //124
console.log(othnumber.toPrecision(2)); //1.2e+2


const hundreads=10000000
console.log(hundreads.toLocaleString());//american version of money:10,000,000
console.log(hundreads.toLocaleString('en-IN'));//indian version of money:1,00,00,000

console.log(Number.MAX_VALUE);1.7976931348623157e+308
console.log(Number.MIN_VALUE);5e-324

/////////////////////////+++++++++++MATHS+++++++++///////////////////
console.log("next");
console.log(Math); //Object [Math] {}

// what is absolute value: It give o/p only +ve numbers

console.log(Math.abs(-4)); // It give absoolute value of number
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.round(4.5)); //5
console.log(Math.ceil(4.1));//5
console.log(Math.floor(4.9));//4

//Similarly sqrt ,power,min and many more

console.log(Math.max(4,3,7,5,9));//9
console.log(Math.min(4,3,7,5,9));//3

console.log(Math.random());// Always diffrent and between 0 and 1 :0.9852319281667279
// Sometimes it also give 0  at 0.076 to avoid this we add 1

// if you want range from 1 to 10 then
console.log((Math.random()*10) + 1);9.004754326490879

//formula for printing range of number

const min=10
const max=20
console.log(Math.random() * (max-min+1) +min);
console.log( Math.floor (Math.random() * (max-min+1) +min)); // value b/w 10 to 20
