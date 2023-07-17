//objects-and-arrays
var book = {title: "A tale of two cities", author: "Charles Dickens"};

for (var p in book){
    console.log(book[p])
}

console.log(book.valueOf())

//JavaScript Object Notation: JSON
//each property should be in string notation

//convert string to js Object
var book_as_str = "{\"title\": \"A tale of two cities\", \"author\": \"Charles Dickens\"}"
var book = JSON.parse(book_as_str)
console.log(book.title)


//sparse arrays
let arr = []
arr[5] = "test"
//debugger;
console.log(arr)

//assigning a length delete some datas:
arr.length = 2
//debugger
console.log(arr)

//delete an element:
arr = [1,2,3]
delete arr[1]
console.log(arr)

//Write a javascript function named reverse which takes a string argument and returns the reversed string.

function reverse(str) {
    //"beyza" -> "azyeb"
    return str.split("").reverse().join("")
}
console.log(reverse("beyza"))

//write a comparator function to sort it.
let radius = [{radius: 5}, {radius: 9}, {radius: 2}]
radius.sort((a,b) => a.radius-b.radius)
debugger
console.log(radius)

//Write a javascript function named length_of_array, which takes an array as argument and returns the number of elements in that array (as opposed to what is given by the length property of the array).

function length_of_array(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr.hasOwnProperty(i) || arr[i] !== undefined) {
            count++;
        }
    }
    return count;
}

const array = [1, 2, 3];
array[5] = undefined;
const length = length_of_array(array);
console.log(array); // Output: 4

arr = [];
arr[0] = 1;
arr[3] = undefined;
arr[4] = null;

console.log(arr)