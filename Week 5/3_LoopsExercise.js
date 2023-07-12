// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num = 1
while(num<6){
    console.log(num)
    num++
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).


let int = 1
do {
console.log(int)
int++    
} while (int<6);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let index = 1; index < 6; index++) {
    console.log(index)    
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let loop1 = 10
while (loop1 > 0) {
    console.log(loop1)
    loop1--
}

let loop2 = 10
do {
    console.log(loop2)
    loop2--
} while (loop2>0);

for (let loop3 = 10; loop3 > 0; loop3--) {
    console.log(loop3);    
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

loop1 = 7
while (loop1 < 27) {
    console.log(loop1)
    loop1++
}

loop2 = 7
do {
    console.log(loop2)
    loop2++
} while (loop2 < 27);

for (let loop3 = 7; loop3 < 27; loop3++) {
    console.log(loop3);    
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

loop1 = 10
while (loop1 < 100) {
    console.log(loop1)
    loop1 += 10
}

loop2 = 10
do {
    console.log(loop2)
    loop2 += 10
} while (loop2 < 100);

for (let loop3 = 10; loop3 < 100; loop3+= 10) {
    console.log(loop3);    
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The reason is that the condition is not matched.
let counterFour = 1;
while (counterFour > -101) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let myFavInt = 7
for (let index = 0; index < myFavInt; index++) {
    console.log(index)    
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

for (let index = 0; index < 100; index++) {
    if(index == myFavInt){
        console.log(index + " my favorite number!")
    }
    else{
        console.log(index + " not my favorite number!")
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
    // In the for loop, the iteration variable is automatically incremented, so it's easier to use when you know how many iterations you need to do.
    // In the while loop, the loop executes as long as a specific condition is true. So it is easier to use when you have dynamically changing conditions.
    // In the do-while loop, unlike the while loop, it checks the condition at the end of the loop. So it is easier to use it when you want to execute the loop at least once, regardless of the condition being true or false.
    
// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
    console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
      console.log("inside", insideCounter);
    }
    console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
    // It was easy. I searched for the differences between the three loops.

// Email your file to us or commit your file to GitHub and email us a link.