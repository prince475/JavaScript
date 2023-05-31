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
    let fruits = ["mangoes", "apples", "oranges"] - an array of string literals
    let prime = [2, 3, 5, 7, 11] - an array of 5 numeric elements
    let empty = [] - an array with no elements
    let misc = [1.1, true, "a",] - an array of various types * trailing comma
```
Array values:
- can be constants or arbitrary expressions

```js
    let base = 1024; let table = [base, base+1, base+2, base+3];
```
- any literal can contain object literals or other array literals

```js
    let b = [[1, {x: 1, y: 2,}], [2,{x: 3, y: 4}]]
```

Sparse arrays - is an array literal that contain multiple commas in a row, with no value between them.
```js
    let count = [1,,3] - elements at index 0 and 2. no element at index 1
    let undefs [,,] - an array with no elements but a length of 2
```

### The Spread Operator
In ES6 you can use 'spread operator' ..., to include elements of one array within an array literal
```js
    let a = [1, 2, 3];
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
    let digits = [.."012345AB"]
    digits => ["0","1", "2", "3", "4", "5", "A", "B"]
```
Set objects are iterable, an easy way to remove duplicate elements from an array is to convert the array to a set and then immediately convert the set back to an array using the spread operator.

```js
    let letters = [..."hello world"]
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

```js

```

### Array.from()

This another array factory method introduced in ES6.
It expects an iterable or array-like object as its first argument and returns a new array that contains the elements of that object. With an iterable argument, the Array.from(iterable) works like the spread operator [...iterable] does. It is also a simple way to make a copy of an array:

```js
    let copy = Array.from(original);
```

Array.from() is also important because it defines a way to make a true-array copy of an array-like object. Array-like objects are non-array objects that have a numeric length property and have values stored with properties whose names happen to be integers.

Note: When working with client side JavaScript, the return values of some web browser methods are array-like, and it can be easier to work with them if you first convert them to true arrays.

```js
    let truearray = Array.from(arraylike);
```

Array.from() also accepts an optional second argument. If you pass a function as the
second argument, then as the new array is being built, each element from the source
object will be passed to the function you specify, and the return value of the function
will be stored in the array instead of the original value

## Reading and Writing Array Elements

To access an element of an array we use the [] operator and a reference to the array should appear to the left of the brackets. An arbitrary expression that has a non-negative integer value should be inside the brackets. This syntax is what is used to read and write the value of an element in array.

```js
    let a = ["earth"];    // Starting with one element array
    let value = a[0];     // Read element 0
    a[1] = 3.14;          // Write element 1

    let i = 2;
    a[i] = 3;             // Writing element 2
    a[i + 1] = "welcome"; // Write element 3
    a[a[i]] = a[0];       // Read element 0 and 2, write element 3

    a.length => 4
```

We can also refer to arrays as specialized kinds of objects. The [] used to access array elements work similarly to [] used to access regular objects in JavaScript. JavaScript converts a numeric array index you specify to a string and then uses that string as a property name which can also be done using regular objects. too.

```js
    let o = {};   // create a plain object
    o[1] = "one"; // index it with an integer
    o["1"]        // => "one"; numeric and string property names are the same.
```

It is helpful to clearly distinguish an array index from an object property name. All indexes are property names, but only property names that are integers between 0 and 2^32 – 2.
All arrays are objects.

You can also index an array using negative numbers or that are not integers(like float type). When you do this, the number is converted to a string, and that string is used as the property name like so:

```js
    a[-1.23] = true; // This creates a property name "-1.23"
```

Since the name is not a non-negative integer, it is treated as a regular object property and not an array index.

Also, if you index an array with a string that happens to be a non-negative integer, it behaves as an array index, not an object property. And the same is also true if you use a floating point number that is the same as an integer:

```js
    a["100"] = 0; // This will be the 1001st element of the array.
    a[1.00] = 1;  // Array index 1. same as a[1] = 1;
```

With this behavior of array indexes being simply a special type of object property names it means that JavaScript arrays have a notion of an "out of bounds" error. If you query an nonexistent property of any object, you don't get an error, you simply get undefined. This is just true for arrays as it is for objects:

```js
    let a = [true, false]; // This array has elements at index 0 and 1
    a[2]                   // => undefined: no element in this index
    a[-1]                  // => undefined: no property with this name.
```

## Sparse Arrays

A sparse array is an array in which the elements do not have a contiguous indexes starting at 0. For this type of array, the value of the length property is greater than the number of elements:

```js
    let a = new Array(5);  // no elements, but a.length is 5
```

Sparse arrays can be created with the Array() constructor or simply by assigning to an array index larger than the current array length.

```js
    a = [];                // Create an array with no elements and length = 0.
    a[1000] = 0;           // Assignment adds one element but sets length to 1001
```

Arrays that are sufficiently sparse are typically implemented in a slower, more memory efficient way than dense arrays are, and looking up elements in such an array will take about as much time as a regular object property lookup.
Note that when you omit a value in an array literal (using repeated commas as in [1,,3]), the resulting array is sparse, and the omitted elements simply do not exist:

```js
    let a1 = [,];          // This array has no elements and length 1
    let a2 = [undefined];  // This array has one undefined element
    0 in a1                // => false: a1 has no element with index 0
    0 in a2                // => true: a2 has the undefined value at index 0
```

## Array Length

Every array has a length property, and it is this property that makes arrays different from regular JavaScript objects. For arrays that are dense (i.e., not sparse), the length property specifies the number of elements in the array.
Its value is one more than the highest index in the array:

```js
    [].length               // => 0: the array has no elements
    ["a", "b", "c"].length  // => 3: highest index is 2, length is 3
```

For sparse arrays, the length property is greater than the number of elements and all we can say about it is that length is guaranteed to be larger than the index of every element in the array. Or, put simply, an array (sparse or not) will never have an element whose index is greater than or equal to its length.
This two array properties are what define the two special behavior that arrays have. That is:

- If you assign a value to an array element whose index i is greater than or equal to the array's current length, the value of the length property is set to i+1.

- Arrays implement in order to maintain the length invariant is that, if you set the length property to a non-negative integer n smaller than its current value, any array elements whose index is greater than or equal to n are deleted from the array:

```js
    a = [1,2,3,4,5];         // start with a 5-element array.
    a.length = 3;            // a is now [1,2,3].
    a.length = 0;            // Delete all elements. a is [].
    a.length = 5;            // Length is 5, but no elements, like new Array(5).
```

- You can also set the length property of an array to a value larger than its current value. This does not actually add any new elements to the array; it simply creates a sparse area at the end of the array.

## Adding and Deleting Array Elements

The simplest way to add elements to an array is to just assign values to new indexes:

```js
    let a = [];               // start with empty array
    a[0] = "zero";            // and add elements to it
    a[1] = "one";
```

You can also use the push() method to add one or more values to the end of an array:

```js
    let a = [];               // start with an empty array
    a.push("zero");           // add a value at the end. a = ["zero"]
    a.push("one", "two");     // add two more values. a = ["zero", "one", "two"]
```

pushing a value is the same as assigning the value to a[a.length].
Other methods include:

- unshift() method inserts a value at the beginning of an array, shifting the existing array elements to higher indexes.
- The pop() method is the opposite of push(): and it removes the last element of the array and it returns it, reducing the length of an array by 1.
- shift() method removes and returns the first element of the array, reducing the length by 1 and shifting all elements down to an index one lower than their current index.

```js
    let q = [];                // an empty array
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
    b.pop();                   // b == []; returns 1
```

You can also delete array elements with delete operator, just as you can delete object properties.

```js
    let a = [1, 2, 3];
    delete a[2];               // a now has no element at index 2
    2 in a                     // => false: no array index 2 is defined
    a.length                   // => 3: delete does not affect array length
```

Deleting does not alter the array length property and does not shift elements with higher indexes down to fill in the gap that is left by the deletion action. It makes the array sparse.
It similar to assigning undefined to that value.
You can also remove elements from the end of an array simply by setting the length property to the new desired length.

- we have a general array method called splice() method. it is general for inserting, deleting, or replacing array elements. it alters the array length property and shifts array elements to higher or lower indexes.

## Iterating Arrays

