let arr = [2, 3, 4];
let newArr = arr.map(x => {
    return x * x;
});
// console.log(arr);
// console.log(newArr);

function myMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let temp = callback(arr[i], i, arr);
        newArr.push(temp);
    }
    return newArr;
}
let m1 = myMap(arr, x => { 
    return x * x * x;
});
let m2 = myMap(arr, x => { 
    return `${x} + '-checked'`;
});
// console.log(arr);
// console.log(m1);
// console.log(m2);

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let names = ['sumaiya', 'arman', 'rifat', 'fahim', 'sumon','muntasir'];
let f1 = arr1.filter(x => { 
    return x % 2 === 0;
});
let f2 = names.filter(e => { 
    return e.length > 5;
});
// console.log(f2);
// console.log(arr1);
// console.log(f1);

function myFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let f3 = myFilter(arr1, val => { 
    return val > 4;
});
// console.log(f3);
let f4 = myFilter(names, name => { 
    return name[0] === 's';
});
console.log(f4);