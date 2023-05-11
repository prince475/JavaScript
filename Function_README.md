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
