# Arrays in JavaScript
This is a fundamental datatype in Js.
An array is an ordered collection of values.

### Properties of Arrays
```
- Each value is called an element
- An element has a numeric position in the array called an index
- Arrays in JS are untyped(an array element can be of any type and different elements of the same array maybe of different types)
- Array elements may even be objects or arrays.
- Arrays in JS are zero based and used 32-bit indexes. First element is always o indexed.
- Arrays are dynamic (can grow or shrink if need be)
- Every JavaScript array has a length property.
```
### Inheritance
Arrays inherit properties from Array.prototype, which defines a rich set of array manipulation methods.

## Creating Arrays
You can create Arrays using;

```
- Array literals
- The ... spread operator on an iterable object
- The Array() constructor
- The Array.of() and Array.from() factory methods
```
### Array Literals
Its by far the simplest way to create an array.
An array literal is simply "A comma separated list of array elements within square brackets"
```js
    eg. let fruits = ["mangoes", "apples", "oranges"] - an array of string literals
    let prime = [2, 3, 5, 7, 11] - an array of 5 numeric elements
    let empty = [] - an array with no elements
    let misc = [1.1, true, "a",] - an array of various types * trailing comma
```
Array values:
- can be constants or arbitrary expressions

```js
     eg let base = 1024; let table = [base, base+1, base+2, base+3];
```
- any literal can contain object literals or other array literals

```js
    eg let b = [[1, {x: 1, y: 2,}], [2,{x: 3, y: 4}]]
```

Sparse arrays - is an array literal that contain multiple commas in a row, with no value between them.
```js
    eg let count = [1,,3] - elements at index 0 and 2. no element at index 1
    let undefs [,,] - an array with no elements but a length of 2
```

### The Spread Operator
In ES6 you can use 'spread operator' ..., to include elements of one array within an array literal
```js
    eg let a = [1, 2, 3];
    let b = [0, ...a, 4]; -t this will be b == [0, 1, 2, 3, 4]
```
The spread operator is a convenient way to create a (shallow) copy of an array;
```js
    let original = [1, 2, 3];
    let copy = [...original]
    copy[0] = 0; - modifying the copy does not change the original
    original[0] => 1
```
Spread operators also work on any iterable object. Also string are iterable and you can use the spread operator to turn a given string into an array of single character strings

```js
    eg let digits = [.."012345AB"]
    digits => ["0","1", "2", "3", "4", "5", "A", "B"]
```
Set objects are iterable, an easy way to remove duplicate elements from an array is to convert the array to a set and then immediately convert the set back to an array using the spread operator.

```js
    eg let letters = [..."hello world"]
    [...new Set(letters)] => ["h", "e", "l", "o", "", "w", "r", "d"]
```

### The Array() Constructor

This another way of creating arrays. Array().

This can be invoked in three distinct ways:

- Call it with no arguments: this creates an empty array with no elements and is equivalent to the array literal [].

```js
    let a = new Array();
```

- Call it with a single numeric argument, which specifies length: This technique creates an array with the specified length. this form of the Array() constructor can be used to preallocate an array when you know in advance how many elements will be required.
- Note: That non values are stored in the array, and the array index properties "0", "1", and so on are not even defined for the array.

```js
    let a = new Array(10);
```

- Explicitly specify two or more array elements or a single non-numeric element for the array: Here the constructor arguments become the elements of the new array. Using an array literal is almost always simpler than this usage of the Array() constructor.

```js
    let a = new Array(5, 4, 3, 2, 1, "testing, testing");
```

### Array.of()

- When the Array() constructor function is invoked with one numeric argument, it uses that argument as an array length. But when invoked with more than one numeric argument, it treats those arguments as elements for the array to be created. Which means that the Array() constructor cannot be used to create an array with a single numeric element.
- The Array.of() function addresses this problem in that it creates and returns a new array, using its argument values (regardless of how many of them there are) as the array elements.

```js
    Array.of()            // => []; returns empty array with no arguments
    Array.of(10)          // => [10]; can create an array with a single numeric argument
    Array.of(1,2,3)       // => [1,2,3]

```
