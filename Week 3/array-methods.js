
//Clear Array of Duplicates and empty values
let arr = ['Laurence','Jack','Jane','','Sam','Laurence','Jack','Jane','',null,false,undefined,0,'Sam'];

let arr1 = [... new Set(arr)] //removes all duplicates.
console.log(arr1)

let arr2 = arr.filter(Boolean) //removes falsy and empty elements
console.log(arr2)
//Array Looping
arr = ['Laurence','Linda','Joe','Jane', 3];

    //ForEach
arr.forEach((item)=>{
    console.log(item)
})

    //MAP
arr1 = arr.map((item, index) => {return `${index}: ${item}`})
console.log(arr1)

    //Filter
arr2 = arr.filter((item, index) => {return `${index}: ${item}`}) //we didnt filter anything so all of them return back.
console.log(arr2)

arr1 = arr.filter(Number)
console.log(arr1)

arr2 = arr.filter((item, index) => { if(index % 2 != 0) {return item}})
console.log(arr2)

//Array Updating Adding Removing
let str1 = arr.toString();
console.log(str1)

//Map Method Examples
arr = ['Laurence',4,545,false,'Test'];
arr1 = arr.map((item, index, array)=> {return item}) //using map gonna creat a brand new independent array.
console.log(arr1)

arr2 = arr; // so both of them point the same memory location thats why a change on arr2 effects in a same way to arr. 
console.log(arr)
arr2.push("NEW")
console.log(arr)

arr1 = arr.map((item, index, array)=> {
    const temp = `${index} ${item}`
    return temp
}) 
console.log(arr1)

let arr3 = [1,2,3,4,6]
let arr4 = arr3.map(callback1)
console.log(arr4)

function callback1(item, index, array){
    console.log(item)
    return item*2
}
// ????
arr = [{first:'Laurence',last:'Svekis'},{first:'John',last:'Smith'},{first:'Sam',last:'Jo nes'}]
arr1 = arr.map(({first, last}) => {
    // console.log(first, last); 
    // return `${first} ${last}`; // ????
    debugger
    return {fullName: `${first} ${last}`} // returns new object! || {} is called object literal notation.
})
console.log(arr1)
console.log(arr1[0].fullName) // using fullName property

arr1 = arr.map(({first, last}) => ({fullName: `${first} ${last}`})) // w/o return
console.log(arr1)

//Entries Method Examples  ?????
// arr1 = ['Laurence','Svekis',100]; 
// let adder = arr1.entries(); //Note: returns an iterator obj.!
// console.log(adder);
// console.log(adder.next()); // ???
// console.log(adder.next().value);
// console.log(adder.next().value);
// console.log("==========")
// for(let item of adder){
//     console.log(item)
// }

//Array Filter Method Example

arr = ['Svekis','Laurence','test','new',5,23,54,5,1213343];
arr2 = arr.filter(checker); 
console.log(arr2);

function checker(item,index,array){ 
    //console.log(item);
    // console.log(index); 
    // console.log(array); 
    return index >=2;
}

arr3 = arr.filter((item,index)=>{
    //console.log(typeof(item) );
    return typeof(item) == 'string';
});
console.log(arr3);

const find1 = arr.findIndex(call1); console.log(find1);
const find2 = arr.findIndex(call2); console.log(find2);

function call1(item){ //console.log(item); 
    if(item === 'Svekis' ){
        return item; 
    }
}
function call2(item){ 
    if(typeof(item)=='number')
    { return item; }
}

arr1 = ['Laurence','Svekis',100]; 
let adder = arr1.entries(); //Note: returns an iterator obj.!
debugger; // worked after creating a lauch.json file and but debugger or breakpoint.
console.log(adder);
console.log(adder.next()); // ???
console.log(adder.next().value);
console.log(adder.next().value);
console.log("==========")