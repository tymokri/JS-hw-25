"use strict";

// Task 1

const indexOf = (arr, searchElement, fromIndex = 0) => {

    for (let i = fromIndex; i < arr.length; i += 1) {

        if(arr[i] === searchElement) return i;

    }

    return -1;
}

let arrExample = [3, 5, 1, 5, 6, 1];

console.log(indexOf(arrExample, 5, 2));
console.log(indexOf(arrExample, 1, 1));
console.log(indexOf(arrExample, 13, 3));

// Task 2

const lastIndexOf = (arr, searchElement, fromIndex) => {

    if(!fromIndex) fromIndex = arr.length - 1;

    for (let i = fromIndex; i >= 0; i -= 1) {

        if(arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

let arrExample = [3, 5, 1, 5, 6, 1];

console.log(lastIndexOf(arrExample, 5, 2));
console.log(lastIndexOf(arrExample, 5, 5));
console.log(lastIndexOf(arrExample, 8, 3));

// Task 3

const find = (arr, callback) => {

    for(let i = 0; i < arr.length; i += 1) {

        if(callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
}

let arrExample = [-3, 5, 1, 5, 6, 1, {name: "Alex"}, [4, 5, 6]];

const searchElement = find(arrExample, (item, index, arr) => {
    return item === 6;
});

console.log(searchElement);

// Task 4

const findIndex = (arr, callbackFunction) => {

    for(let i = 0; i < arr.length; i += 1) {

        if(callbackFunction(arr[i], i, arr)) {
            return i;
        }
    }

    return -1;
}

let arrExample = [-3, 5, 1, 5, 6, 1, {name: "Alex"}, [4, 5, 6]];

console.log(
    findIndex(arrExample,
        (item, index, arr) => {
            return item === 8;
    })
);

// Task 5

function includes(arr, searchElement, fromIndex ) {

    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] === searchElement) return true;
    }

    return false;
}

let arrExample = [3, 5, 1, 5, 6, 1];

console.log(includes(arrExample, 6, 1));
console.log(includes(arrExample, 8, 0));

// Task 6

const every = (arr, callbackFunction) => {

    for (let i = 0; i < arr.length; i += 1) {

        if (!callbackFunction(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
}

let arrExample = [-3, 5, 1, 5, 6, 1];

console.log(
    every(arrExample,
        (item) => {
            return item > 0;
        }
    )
);

// Task 7

const some = (arr, callbackFunction) => {

    for (let i = 0; i < arr.length; i += 1) {

        if (callbackFunction(arr[i], i, arr)) {
            return true;
        }
    }

    return false;
}

let arrExample = [-3, 5, 1, 15, 6, 10];

console.log(
    some(arrExample,
        (item) => {
            return item > 10;
        }
    )
);