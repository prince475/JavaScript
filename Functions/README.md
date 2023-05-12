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
```js
    fun(){}
```
- using arrow functions
```js
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

```js
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
```js
    This function expression defines a function that squares its argument.
    Note that we assign it to a variable

    const square = function(x) {
        return x*x;
    };

```
### Arrow Functions
In ES6 you can define functions using a particualry compact syntax known as arrow functions. Here an arrow is used => to separate function parameter from the function body and the function key word is not used. since it is an expression instead of a statement there is also no need for a function name.
The general form of an arrow function is a comma-separated list of function parameters in parenthesis, followed by the => arrow, followed by the function body in curly braces;
```js
    const sum = (x, y) => { return x + y; };
```

- if the body of the function is a single return statement, you can omit the return keyword, the semicolon and its curly braces and simply write the body of the function as the expression whose value is to be returned.

```js
    const sum = (x, y) => x + y;
```

- For a case where the function has exactly one parameter, you can omit the parentheses around the parameter list:

```js
    const polynomial = x => x*x + 2*x + 3;
```

- However it is also important to note that, an arrow function with no arguments at all must be written with an empty pair of parentheses.

```js
    const constantFunc = () => 42;
```

- Note: when writing an arrow function, you must not put a new line between the
function parameters and the => arrow.

- Also, if the body of your arrow function is a single return statement but the expression to be returned is an object literal, then you have to put the object literal inside parentheses to avoid syntactic ambiguity between the curly braces of a function body and the curly braces of an object literal:

```js
    correct use
    const f = x => { return {value: x}; }; f() retuns an object
    const g = x => ({ value: x }); g() retuns an object

```

``` js
    incorrect use
    const h = x => { value: x }; h() returns nothing
    const i = x => { v: x, w: x }; Syntax error


```

- The concise syntax of arrow functions makes them ideal when you need to pass one function to another function, which is a common thing to do with array methods like map() , filter() , and reduce()

```js
    Make a copy of an array with null elements removed.
    let filtered = [1,null,2,3].filter(x => x !== null); // filtered == [1,2,3]

    Square some numbers:
    let squares = [1,2,3,4].map(x => x*x); // squares == [1,4,9,16]
```
### Nested Functions
In Javascript it is also possible to nest functions within other functions.

```js
    function hypotenuse(a, b) {
        function square(x) { return x*x; }
        return Math.sqrt(square(a) + square(b));
    }

```

- Nested Functions, can access the parameters and variables of the function (or functions) they are nested within.

## Invoking Functions
The JavaScript code that makes up the body of a function is not executed when the function is defined, but rather when it is invoked.
Javascript functions can be invoked in five ways:
- As functions
- As methods
- As constructors
- Indirectly through their call() and apply() methods
- Implicitly, via JavaScript language features that do not   appear like normal function invocations

### Function Invocation
Functions are invoked as functions or as methods with an invocation expression.
```
- Invocation expressions consist of a function expression that evaluates to a function object followed by an open parenthesis, a comma-separated list of ZERO or more argument expressions, and a close parenthesis.

- In an invocation, each argument expression (the ones between the parentheses) is evaluated, and the resulting values become the arguments to the function. These val‐
ues are assigned to the parameters named in the function definition. In the body of the function, a reference to a parameter evaluates to the corresponding argument value.

- For regular function invocation, the return value of the function becomes the value of
the invocation expression

-NOTE: If the function returns because the interpreter reaches the end, the return value is undefined . If the function returns because the interpreter executes a return statement, then the return value is the value of the expression that follows the return or is undefined if the return statement has no value
```
### Method invocation
A method is nothing more than a JavaScript function that is stored in a property of an object.
What it means therefore is, if you have a function f and an object o, you can define a method named m of o as follows:

```js 
    defining the method m() of the object o
     o.m = f;

     we invoke the method as follows
     o.m();

     or, if m() expects two arguments, it might be invoked as follows
     o.m(x, y);
```

- The code above shows an invocation expression that includes a function expression o.m and two argument expressions, x and y.
- The function expression is itself a property access expression, and this means that the function is invoked as a method rather than as a regular function.
- Arguments and return value of a method invocation are handled exactly as described for regular function invocation.

The main difference between method invocation and function invocation, is the invocation context. Property access
expressions consist of two parts: an object (in this case o ) and a property name ( m ). In a method-invocation expression like this, the object o becomes the invocation context, and the function body can refer to that object by using the keyword this .

```js
    let calculator = { // An object literal
        operand1: 1,
        operand2: 1,
        add() {    // We're using method shorthand syntax for this function
            // Note the use of the this keyword to refer to the containing object.this.result = this.operand1 + this.operand2;
        }
    };
    calculator.add(); // A method invocation to compute 1+1.
    calculator.result // => 2
```

- Most method invocations use the dot notation for property access, but property access expressions that use square brackets also cause method invocation. The following are both method invocations;

``js`
    o["m"](x,y); // Another way to write o.m(x,y).

    a[0](z) // Also a method invocation (assuming a[0] is a function).
```

- Method invocations may also involve more complex property access expressions:

```js
    customer.surname.toUpperCase(); // Invoke method on customer.surname

    f().m(); // Invoke method m() on return value of f()
```

- Methods and the this keyword are central to the object-oriented programming paradigm. Any function that is used as a method is effectively passed an implicit argument—the object through which it is invoked. Typically, a method performs some sort of operation on that object, and the method-invocation syntax is an elegant way to express the fact that a function is operating on an object.

- consider the following example

```js
    rect.setSize(width, height);
    setRectSize(rect, width, height);

    The hypothetical functions invoked in these two lines of code may perform exactly the same operation on the (hypothetical) object rect , but the method-invocation syntax in the first line more clearly indicates the idea that it is the object rect that is the primary focus of the operation.
```
### Method Chaining
When you write a method that does not have a return value of its own, consider having the method return this . If you do this consistently throughout your API, you will enable a style of programming known as method chaining 1 in which an object can be named once and then multiple methods can be invoked on it:

```js
    new Square().x(100).y(100).size(50).outline("red").fill("blue").draw();
```

- Note: If a nested function is invoked as a method, its this value is the object it was invoked on. If a nested function (that is not an arrow function) is invoked as a function, then its this value will be either the global object (non-strict mode) or undefined (strict mode).

### Common Mistakes during invocation
The assumption that a nested function defined within a method and invoked as a function can use this to obtain the invocation context of the method.

```js
    example demonstration
    let o = {                  // An Object o
        m: function() {        // Method m of the Object
            let self = this;   // save the 'this' value in a variable
            this === o         // => true: 'this' is the object o.
            f();               // Now call the helper function f()

            function f() {     //A nested function f
                this === o     // => false: 'this' is global or undefined
                self === o     // => true: self is the outer 'this' value
            }
        }
    };
    o.m();                     // Invoke the method m on the object o.
```

- Inside the nested function f() , the this keyword is not equal to the object o . This iswidely considered to be a flaw in the JavaScript language, and it is important to be
aware of i.
- one common workaround. Within the method m , we assign the this value to a variable self , and within the nested function f , we can use self instead of this to refer to the containing object.
- another workaround to this issue is to convert the nested function f into an arrow function, which will properly inherit the this value:

```js
   const f = () => {
        this === o // true, since arrow functions inherit this
    };

    Functions defined as expressions instead of statements are not hoisted, so in order to make this code work, the function definition for f will need to be moved within the method m so that it appears before it is invoked.
```

- Another workaround is to invoke the bind() method of the nested function to define a new function that is implicitly invoked on a specified object:

```
    const f = (function() {
        this === o // true, since we bound this function to the outer this
    }).bind(this);
```
