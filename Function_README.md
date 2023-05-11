# Functions in JavaScript
Functions are fundamental building blocks for JS programs.
A function is a block of JavaScript code that is defined once but may be executed or invoked multiple times. (in js functions are parameterized)

- Parameters act as identifiers. When you invoke a function, you are basically providing values or arguments for the defined function parameters.
- If a function is assigned to a property of an object, it is known as a method of that object.
- In functions we have constructors which are functions designed to initialize a newly created object

In JavaScript functions are objects and can be manipulated by programs. JavaScript can assign functions to variables and pass them to other functions.

JavaScript function definitions can be nested within other functions, and they have
access to any variables that are in scope where they are defined.

## Defining functions
- using function keyword
```
    fun(){}
```
- using arrow functions
```
    (()=>{})
```
### Function Declarations
Function declarations consist of a function keyword followed by:
```
    - An identifier that names the function. (fun() used as name of a variable)
    - A pair of parentheses around a comma-separated list of zero or more identifiers(are the parameter names of the function and behave like local variables within the body of the function)
    - A pair of curly braces.

```

- Compute the distance between Cartesian points (x1,y1) and (x2,y2).

```
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    console.log(Math.sqrt(dx*dx + dy*dy));

    return Math.sqrt(dx*dx + dy*dy);
}
distance(1, 2, 3, 4)
```
### Function Expressions
Looks a lot like function declarations, but they appear within the context of a larger expression or statement and the name is optional.
```
    This function expression defines a function that squares its argument.
    Note that we assign it to a variable

    const square = function(x) {
        return x*x;
    };

```
### Arrow Functions
In ES6 you can define functions using a particualry compact syntax known as arrow functions. Here an arrow is used => to separate function parameter from the function body and the function key word is not used. since it is an expression instead of a statement there is also no need for a function name.
The general form of an arrow function is a comma-separated list of function parameters in parenthesis, followed by the => arrow, followed by the function body in curly braces;
```
    const sum = (x, y) => { return x + y; };
```

- if the body of the function is a single return statement, you can omit the return keyword, the semicolon and its curly braces and simply write the body of the function as the expression whose value is to be returned.

```
    const sum = (x, y) => x + y;
```

- For a case where the function has exactly one parameter, you can omit the parentheses around the parameter list:

```
    const polynomial = x => x*x + 2*x + 3;
```

- However it is also important to note that, an arrow function with no arguments at all must be written with an empty pair of parentheses.

```
    const constantFunc = () => 42;
```

- Note: when writing an arrow function, you must not put a new line between the
function parameters and the => arrow.

- Also, if the body of your arrow function is a single return statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity between the curly braces of a function body and the curly braces of an object literal:

``` correct use
    const f = x => { return {value: x}; }; f() retuns an object
    const g = x => ({ value: x }); g() retuns an object

```

``` incorrect use
    const h = x => { value: x }; h() returns nothing
    const i = x => { v: x, w: x }; Syntax error


```

- The concise syntax of arrow functions makes them ideal when you need to pass one function to another function, which is a common thing to do with array methods like map() , filter() , and reduce()

```
    Make a copy of an array with null elements removed.
    let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]

    Square some numbers:
    let squares = [1,2,3,4].map(x => x*x); // squares == [1,4,9,16]
```
### Nested Functions
In Javascript it is also possible to nest functions within other functions.

```
    function hypotenuse(a, b) {
        function square(x) { return x*x; }
        return Math.sqrt(square(a) + square(b));
    }

```

- Nested Functions, can access the parameters and variables of the function (or functions) they are nested within.
