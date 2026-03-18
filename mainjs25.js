let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

// 2 
function multiply(...numbers){
    return numbers.reduce((total,num )=> total*num);
}
console.log(multiply(3,3,2));