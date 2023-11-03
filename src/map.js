const numbers = [1,2,3,4,5];

const mapped = numbers.map(
    (num) =>{return num*2} // num 1,2,3,4,5
)

const names = ['사과','망고','토마토','오렌지'];
const nameList = names.map(name=>`<li>${name}</li>`);
console.log(mapped);
console.log(nameList);