const height = 10;
let empty = " ";
const star = "*";

for(let i = 1; i <= height; i+=2){
    let space = Math.floor((height - i) / 2);
    console.log(empty.repeat(space) + star.repeat(i));

} 
console.log("Merry Christmas ! ")