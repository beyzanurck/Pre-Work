// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []
function keys(obj) {
    let arrOfKeys = []
    for(let x in obj){
        arrOfKeys.push(x)
    }
    return arrOfKeys
}

let obj = { a: 1, b: 2, c: 3 };
console.log(keys(obj)); // ["a", "b", "c"]
let obj2 = { first: 'Matt', last: 'Lane' };
console.log(keys(obj2)); // ["first", "last"]
let obj3 = {};
console.log(keys(obj3)); // []


// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []
function values(obj){
    let arrOfValues = []
    for(let x in obj){
        arrOfValues.push(obj[x])
    }
    return arrOfValues
}
obj = { a: 1, b: 2, c: 3 };
console.log(values(obj)); // [1,2,3]
obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj2)); // ["Matt", "Lane", true]
obj3 = {};
console.log(values(obj3)); // []


// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []
function entries(obj){
    let keyAndValues = []
    for(let x in obj){
        let entry = []
        entry[0] = x
        entry[1] = obj[x]
        keyAndValues.push(entry)
    }
    return keyAndValues
}
//debugger;
obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj));
[["a",1], ["b",2], ["c",3]]
obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2));
[["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
obj3 = {};
console.log(entries(obj3)); // []


// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]
function pluck(arr, str){
    let values = []
    for (let index = 0; index < arr.length; index++) {
        values.push((arr[index])[str])
    }
    return values
}
console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'))
//["Tim", "Matt", "Elie"]
console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner'))
//[true, false, undefined]


// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""
function stringFromObject(obj){
    let arr = []
    for(let x in obj){
        arr.push(`${x} = ${obj[x]}`)
    }
    let str = arr.join(", ")
    return str
}
console.log(stringFromObject({ a: 1, b: '2' }));
//"a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
//"name = Elie, job = Instructor, isCatOwner = false"
console.log(stringFromObject({})); // ""


// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
function minMaxKeyInObject(obj){
    let min = Number.POSITIVE_INFINITY
    let max = Number.NEGATIVE_INFINITY
    let minMaxKey = []

    for(let key in obj){
        key = Number(key)
        if(key < min){
            min = key
        }

        if(key > max){
            max = key
        }
    }

    minMaxKey.push(min, max)
    return minMaxKey
}
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
//[1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
//[1, 4]