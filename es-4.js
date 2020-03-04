let arr = [2, 11, 5, 3, 7, 15, 1, 6, 9, 10];
// let max = arr.reduce((prev, current) => { 
//     return Math.max(prev,current);
// },0);
// console.log(max);

function myReduce(arr, callback, acc) {
    for (let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i]);
    }
    return acc;
}
let max1 = myReduce(arr, (prev, current) => { 
    return Math.max(prev, current);
},0);
let min = myReduce(arr, (prev, current) => { 
    return Math.min(prev, current);
},arr[0]);
// console.log(max1);
// console.log(min);
let objs = [{ id: 101, name: 'anik' }, { id: 102, name: 'dola' }, { id: 103, name: 'nova' }];
let arr1 = [11, 5, 7, 8, 21, 34, 55, 76, 9, 10, 12, 19];
let f = arr1.find(val => {
    return val === 19;
});
let f2 = arr1.findIndex(val => { 
    return val === 9;
});
// console.log(f2);
let f1 = objs.find(name => { 
    // console.log(name);
    return name.id == 103;
});
// console.log(f1);

function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}
function myFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            return i;
        }
    }
}

let mf1 = myFind(arr1, val => { 
    return val === 9;
});
let mf2 = myFindIndex(arr1, val => { 
    return val === 9;
});
console.log(mf1, mf2);