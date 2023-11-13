//Primitive

//7 types: String,Number,Boolean,Null,Undefined,Symbol,BigInt


// Reference type Or NOn-Primitive
// :-Arrays,Objects,Function
//Data type of all non- primtive are Object or function

const id=Symbol(123)
const anotherid=Symbol(123)

console.log(id==anotherid)//Answer is False

const bigno=84848393829n
console.log(typeof bigno); //bigint

// Objects are always in curley brackets
let myobj={
    name:"Hitesh",
    age:22
}

//Arrays are always declared in squre brackets
const Heros=["shaktiman","nagraj","Doga"]

//Function can be stored as variables
const myfunction=function(){
    console.log("Hello world");
}

console.log(typeof Heros);


//**********Memory**********/

//Stack Memory(Used in Primitive) :  Use copy of memory
//Heap Memory (Used in Non-Primitive) : Use Reference Method


//Example of Stack

let email1="user@gmail.com"
let email2=email1
email2="atul@gmail.com"
console.log(email1);
console.log(email2);














//   Example of Heap

let userone={
    name:"hitesh",
    email:"user@google.com"
}

let usertwo=userone

usertwo.email="atul@gmail.com"

console.log(userone.email)
console.log(usertwo.email)