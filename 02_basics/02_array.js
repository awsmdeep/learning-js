const marvel_heros=["ironman","spiderman","hulk"];
const dc_heros=["batman","superman","flash"];

const all_heros=marvel_heros.concat(dc_heros);
// console.log(all_heros);

const all_heros2=[...marvel_heros,...dc_heros];
// console.log(all_heros2);

const another_arr=[1,2,4,[2,4,5,2],3,5,[2,41,45,[43,5,6,66]]]

const real_another_arr=another_arr.flat(Infinity);
// console.log(real_another_arr);

console.log(Array.isArray("deepak"));
console.log(Array.from("deepak"));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));

