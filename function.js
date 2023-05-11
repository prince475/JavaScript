// function declaration

// print the name and value of each property of o. Return undefined
function printprops (o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
}

// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    console.log(Math.sqrt(dx*dx + dy*dy));

    return Math.sqrt(dx*dx + dy*dy);
}
distance(1, 2, 3, 4)

// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    console.log(x * factorial(x-1));
    return x * factorial(x-1);
}
factorial(4)

// Function expression example

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable

const square = function(x) {
    return x*x;
};
square(2)
// Function expressions can include names, which is useful for recursion.
const f = function fact(x) {
    if (x <= 1)
    return 1;
    else
    return x*fact(x-1); };
    f(2)

// Function expressions can also be used as arguments to other functions:
[3,2,1].sort(function(a,b) {
    return a-b;
});

// Function expressions are sometimes defined and immediately invoked:
let tensquared = (function(x) {
    return x*x;}(10)
    );


// Arrow Functions
const sum = (x, y) => { return x + y; };

// Make a copy of an array with null elements removed.
let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]

// Square some numbers:
let squares = [1,2,3,4].map(x => x*x); // squares == [1,4,9,16]

