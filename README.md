# Arrays in JavaScript
This is a fundamental datatype in Js.
An array is an ordered collection of values.

### Properties of Arrays
    * Each value is called an element
    * An element has a numeric position in the array called an index
    * Arrays in JS are untyped(an array element can be of any type and different elements of the same array maybe of different types)
    * Array elements may even be objects or arrays.
    * Arrays in JS are zero based and used 32-bit indexes. First element is always o indexed.
    * Arrays are dynamic (can grow or shrink if need be)
    * Every JavaScript array has a length property.


### Inheritance
Arrays inherit properties from Array.prototype, which defines a rich set of array manipulation methods.

## Creating Arrays
You can create Arrays using;
    - Array literals
    - The ... spread operator on an iterable object
    - The Array() constructor
    - The Array.of() and Array.from() factory methods

## Array Literals
Its by far the simplest way to create an array.
An array literal is simply "A comma separated list of array elements within square brackets"

    <code>
    * eg. let fruits = ["mangoes", "apples", "oranges"] - an array of string literals
    * let prime = [2, 3, 5, 7, 11] - an array of 5 numeric elements
    * let empty = [] - an array with no elements
    * let misc = [1.1, true, "a",] - an array of various types * trailing comma
    </code>
Array values;
    - can be constants or arbitrary expressions

    <code>
    eg let base = 1024; let table = [base, base+1, base+2, base+3];
    </code>
    - any literal can contain object literals or other array literals

    <code>
    eg let b = [[1, {x: 1, y: 2,}], [2,{x: 3, y: 4}]]
    </code>
Sparse arrays - is an array literal that contain multiple commas in a row, with no value between them.

    <code>
    eg let count = [1,,3] - elements at index 0 and 2. no element at index 1
    let undefs [,,] - an array with no elements but a length of 2
    </code>

## The Spread Operator
In ES6 you can use 'spread operator' ..., to include elements of one array within an array literal

    <code>
    eg let a = [1, 2, 3];
    let b = [0, ...a, 4]; -t this will be b == [0, 1, 2, 3, 4]
    </code>
The spread operator is a convenient way to create a (shallow) copy of an array;

    <code>
    let original = [1, 2, 3];
    let copy = [...original]
    copy[0] = 0; - modifying the copy does not change the original
    original[0] => 1
    </code>
Spread operators also work on any iterable object. Also string are iterable and you can use the spread operator to turn a given string into an array of single character strings
    eg let digits = [.."012345AB"]
    digits => ["0","1", "2", "3", "4", "5", "A", "B"]
Set objects are iterable, an easy way to remove duplicate elements from an array is to convert the array to a set and then immediately convert the set back to an array using the spread operator.

    <code>
    eg let letters = [..."hello world"]
    [...new Set(letters)] => ["h", "e", "l", "o", "", "w", "r", "d"]
    </code>

## The Array() Constructor

