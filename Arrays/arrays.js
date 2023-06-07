const hello = '12345'

console.log(typeof hello);
console.log(typeof parseInt (hello));
console.log(typeof +hello);

//Array .length

   [].length               // => 0: the array has no elements
   ["a", "b", "c"].length  // => 3: highest index is 2, length is 3

    a = [1,2,3,4,5];         // start with a 5-element array.
    a.length = 3;            // a is now [1,2,3].
    a.length = 0;            // Delete all elements. a is [].
    a.length = 5;            // Length is 5, but no elements, like new Array(5).

// Reading and writing arrays

    let a = ["earth"];        // Starting with one element array
    let value = a[0];         // Read element 0
    a[1] = 3.14;              // Write element 1

    let i = 2;
    a[i] = 3;                 // Writing element 2
    a[i + 1] = "welcome";     // Write element 3
    a[a[i]] = a[0];           // Read element 0 and 2, write element 3

    // a.length => 4

// Adding and deleting arrays

    let a = [];                // start with empty array
    a[0] = "zero";             // and add elements to it
    a[1] = "one";

// using push, pop, shift and unshift array methods

    let a = [];                // start with an empty array
    a.push("zero");            // add a value at the end. a = ["zero"]
    a.push("one", "two");      // add two more values. a = ["zero", "one", "two"]

    let q = [];                    // an empty array
    q.push(1,2);               // q == [1,2]
    q.shift();                 // q == [2]; returns 1
    q.push(3);                 // q == [2,3]
    q.shift();                 // q == [3]; returns 2
    q.shift();                 // q == []; returns 3

    let a = [];                // a = []
    a.unshift(1);              // a = [1]
    a.unshift(2);              // a = [2, 1]
    a = [];                    // a = []
    a.unshift(1,2);            // a = [1,2]

    let b = []                 // b == []
    b.push(1,2)                // b == [1,2];
    b.pop();                   // b == [1]; returns 2
    b.push(3);                 // b == [1,3]
    b.pop();                   // b == [1]; returns 3
    b.push([4,5]);             // b == [1,[4,5]]
    b.pop()                    // b == [1]; returns [4,5]
    b.pop();


// Iterating Arrays
    let letters = [..."Hello world"];  // An array of letters
    let string = '';
    for (let letter of letters) {
        string += letter
    }
    string    // => "Hello world"; we reassembled the original text

// deleting Arrays
 let a = [1, 2, 3];
    delete a[2];               // a now has no element at index 2
    2 in a                     // => false: no array index 2 is defined
    a.length                   // => 3: delete does not affect array lengt
