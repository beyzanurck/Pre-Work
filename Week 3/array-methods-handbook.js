//*** determine if a value is an array 
let result = Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'])
console.log(result)

//***destructuring syntax
// let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
// console.log(tomato)
//     // before this syntax;
// let vegetables = ['🍅', '🍄', '🥕'];
// let tomato1 = vegetables[0];
// let mushroom1 = vegetables[1];
// let carrot1 = vegetables[2];

//***Assign a Default Value to a Variable
// let [tomato , mushroom = '🍄'] = ['🍅'];
// console.log(tomato); // '🍅'
// console.log(mushroom ); // '🍄'

//***How to Skip a Value in an Array
// let [tomato, , carrot] = ['🍅', '🍄', '🥕'];

// console.log(tomato); // '🍅'
// console.log(carrot); // '🥕'

//***Nested Array Destructuring
// let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
// let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];

//***How to Use the Spread Syntax and Rest Parameter 
// //rest
// let [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

// console.log(tomato); // '🍅'
// console.log(mushroom); // '🍄'
// console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]

// //spread
// const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

// const saladCloned = [...salad];
// console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

// console.log(salad === saladCloned) // false so spread operator create a new array that is different the original one. Which means their locations in memory is different.

// //***fill() array methods
// //this method changes the origal array. You can change all elements or a few selected ones.
// let colors = ['red', 'blue', 'green'];

// colors.fill('pink');
// console.log(colors); // ["pink", "pink", "pink"]

// colors = ['red', 'blue', 'green', "yellow"];
// colors.fill("pink", 0, 2) // star ,and end point not including
// console.log(colors);

// //***reverse() and sort() methods
// const names = ['tom', 'alex', 'bob'];

// console.log(names.reverse()); // changed the original one.
// console.log(names.sort()) //default one  is ascending a-z || changed the original array.

// //Array.of()
// //this method create a new array using any number of elements of any type.
// let test = Array.of(1, null, false, 0, "flower", {"name": "Alex"}, undefined)
// debugger;
// console.log(test)

//Iterator Methods
let students = [
    {
       'id': 001,
       'f_name': 'Alex',
       'l_name': 'B',
       'gender': 'M',
       'married': false,
       'age': 22,
       'paid': 250,  
       'courses': ['JavaScript', 'React']
    },
    {
       'id': 002,
       'f_name': 'Ibrahim',
       'l_name': 'M',
       'gender': 'M',
       'married': true,
       'age': 32,
       'paid': 150,  
       'courses': ['JavaScript', 'PWA']
    },
    {
       'id': 003,
       'f_name': 'Rubi',
       'l_name': 'S',
       'gender': 'F',
       'married': false,
       'age': 27,
       'paid': 350,  
       'courses': ['Blogging', 'React', 'UX']
    },
    {
       'id': 004,
       'f_name': 'Zack',
       'l_name': 'F',
       'gender': 'M',
       'married': true,
       'age': 36,
       'paid': 250,  
       'courses': ['Git', 'React', 'Branding']
    } 
];

const femaleStudents = students.filter((element, index) => {
    return element.gender === 'F';
})
debugger;
console.log(femaleStudents);

const fullNameStudents = students.map(element => { 
    return {"fullName": `${element.f_name} ${element.l_name}`}
})
debugger;
console.log(fullNameStudents)

const total = students.reduce((accumulator, student) => {
    accumulator += student.paid;
    return accumulator
}, 0) // 0 = the initial value of accumulator
console.log(total) // This method reduces an array to a single value by iterating over each element of the array.

let hasStudentBelow30 = students.some((element, index) => {
    return element.age < 30;
});
console.log(hasStudentBelow30); // returns true or false

const student = students.find((element, index) => { 
    return element.age < 30;
});
console.log(student); // the first person who is under 30 is returned.

const atLeastTwoCourses = students.every((elements, index) => {
    return elements.courses.length >= 2;
});
  
console.log(atLeastTwoCourses); // The method detects if every element of the array satisfies the condition passed in the function.


const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];
junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined
// access the elements of an array using a negative index number.
