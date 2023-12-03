const heros=["thor","ironman","spiderman"]
const dc_heros=["flash","batman","superman"]
// heros.push(dc_heros)
console.log(heros); // dc_heros i.e (array) ko ek single elemnt manke insert kar liya hai
// op:[ 'thor', 'ironman', 'spiderman', [ 'flash', 'batman', 'superman' ] ]

// console.log(heros[3][1]); // batman


const all_heros=heros.concat(dc_heros)
console.log(all_heros);// [ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]


// New Way

const all_new_her=[...heros , ...dc_heros]
console.log(all_new_her);
//  [ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]
// Everyone use this

const ar1=[1,2,3,[4,5,6],[7,8,[5,4,3,[1,2]]]]
const ar2=ar1.flat(Infinity)// flat (depth)
console.log(ar2);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));// [ 'H', 'i', 't', 'e', 's', 'h' ]
// It convert given datatype to array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]













