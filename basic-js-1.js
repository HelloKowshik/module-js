let std = {
    id: 1011,
    name: 'John Doe',
    address: 'R#34,New Jersy,USA'
};
// console.log(std)
let arr = [34,54,67,122,12,78];
// let max = arr[0];
// let min = arr[0];
// for(let i = 0;i<arr.length;i++){
//   if(arr[i]>max){
//     max = arr[i];
//   }
//   if(arr[i]<min){
//       min = arr[i]; 
//     }
// }
// console.log(max, min);

function getMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0; i<arr.length;i++){
      if(arr[i]>max){
        max = arr[i];
      }
      if(arr[i]<min){
        min = arr[i];
      }
    }
    return `Max Value: ${max} AND Min Value: ${min}`; 
  }
  let r1 = getMaxMin(arr);
console.log(r1);
  
let  numbers = [10,20,30];
function sumOfArray(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum+= arr[i];
}
console.log(sum)
}
sumOfArray(numbers);

let arr11 = [34,34,78,23,34,34,54,67,122,12,78,12];
function uniqueArr(arr){
    let newArr = [];
  for(let i =0;i<arr.length;i++){
    let index = newArr.indexOf(arr[i]);
    if(index == -1){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  }
uniqueArr(arr);

var s = 'hello world';
let str = 'I am a dev ops in js';
function revStr(str){
  var rev = '';
  for(let i = 0;i<str.length;i++){
    rev = str[i] + rev;
  }
  return rev;
}
console.log(revStr(s));
console.log(revStr(str));

var sentence = "I am hardworking. I am serious. I am sure I will do it";
var reverse = sentence.split('').reverse().join('')
;
console.log(reverse)