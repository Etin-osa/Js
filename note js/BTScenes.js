/* Any weird symbol you see in this lesson just note that it signifies an important point */

/*

Javascript Engines.....

    \\What Happens Once we Run Our Code\\

A Js Engine is a program that executes Js code.

    Examples of Js Engines are (google's v8 engine, reNode, JsCore, spidermonkey)

    The first thing that happens inside the Engine is the parser




A Parser reads our code line by line and checks if the syntax of the code are correct.

    (i)
    Meaning the parser knows the Js code and how it should be written in order to be valid. If there is a mistake it's throws back our error and stops the execution. If everything is correct then the parser produces a data structure known as the Abstract syntax Tree..

    (ii)
    The Abstract syntax Tree is then translated to Machine Code.
      The Machine code is no longer a Js code but it's now more like a set of instructions that can be executed directly by a computer's processor and it's only when our code have being coverted to machine code that it actually runs our code.

*/





/* 

Javascript Engines...(2).

EXECUTION CONTEXTS AND THE EXECUTION STACK


Execution Context is like a box or a container which stores variables and in which a piece of our code is evaluated and executed. 

    The default execution context is a the global execution context (meaning variable that's not in a function).

    Simply, Where a piece of code is being executed that is called Execution Context, and it’s an Object.

    There can only be one global execution context in a program.

    So everything that is displayed in the global context is automatically get attached to the window object in the browser (window like your browser window and it's also known as a global object).

    (assuming we already called a variable of lastName, following the statment above)
    It is done succesfully in the browser console 
    lastName === window.lastName //true

    
    Note: That variable created in outside of a function is a global variable hence in the global execution context, while variable and data created in a function is store in their own execution context. Each execution context for each function 
    
    
    Execution stack is how the execution context are placed on the order in which they(the execution context) are arranged.
    








(2b).
Javascript Engines...

Execution Context In Details: Creation And Execution Phases And Hoisting.

    Before this class continues just know that we can associate an execution context with an object(meaning we can refer to the execution context as an object and the code stored is referred to as a property in an object) and we will be calling it an execution context object.


Now the Execution Context Obejct has 2 phases The Creation and The Execution phases, below are the properties in the 2 phases

    1.  Creation phase
        A) Creation of the Variable Object(VO)

        B) Creation of the scope chain

        C) Determine value of the 'this' variable



    2.  Execution phase
        The code in the function that generated the current execution context is ran line by line (and if it's a global context then it's a global code that is executed).




A)  Variable Object(VO)
        It will contain function argument, function declaration, inner function declaration and inner variable or variable declaration. Just for clarificationn the Variable Object(VO) is what stores all the defined variables or function in it's Execution Context
            Function declaration, pointing to the function and variable declaration are commonly called Hoisting

********************* /
Note: Each execution context has an object which stores a lot of important data that the function will use while it's running and this happens even before the code is executed.

********************* /




Hoisting...
(In Practice)

(i)
Hoisting in Function Literal

    Calling function in function literal

calculateAge(1998); 
function calculateAge(year) {
  console.log(2019 - year);
}

Now the above function was called even before declaring the function (clearifying the Note @ line. 99)




(ii)
Hoisting in Function Expressions

retirement(2000);
var retirement = function(year) {
  console.log(65 - (2019 - year));
}

Now the function called before it's being declared in the function expressions will not work.



(iv)
Hoisting in Variables

console.log(age);
var age = 23;       Undefined.


  The variable directly below is in the global execution context.
var age = 23;

function table() {
  while the the variable here is in the Variable Object(VO) in the Execution Context Object.
  var age = 65;
  
  console.log(age);
}

table();
console.log(age);
Even if both of the variable are name (age) there are 2 seperate variable each in it's own execution context.

************************
Hoisting is more effectively defined when a function is being called before we even create it, like the first example
************************

*/






/*

(2b)i)
Javascript Engines...

Scoping And The Scope Chain

    Scoping basically answers the question 'where can we access a certain variable'

    In Js each new function creates a scope: the space/environment in which the variables it defines are accessible.

    The only way to create a new scope is create a new function unlike other programming language where to create scope is using the if, for & while statements

    In Js there is something also called lexical scoping

Lexical scoping: A function that is lexically within another function gets access to the scope of the outer function

    So locally scope variable are not visible to their parent element, Meaning you can access the parent element with the inner(lexical) function and also you can access global variable with the local scope function/variable but you can't access the inner function with the parent function. This is called the Scope Chain



*********** ************* ********** ******* ******************* ************* *********** ************** *********** **************
*********** ************* ********** ********* ************* ********************* ************** ************ ************* *******
*********** ************* ********** ************************ ********************** ****************** *************** ************
The Difference between Execution Stack and the Scope Chain is that the

Execution Stack is the order in which functions are called

The Scope Chain is the Order in which functions are written lexically

So the order in which function are called does not determine the scope of the variable within these function

So it's the execution context that stores the scope chain of each function in a variable object but they do not have an effect on the scope chain itself

*********** ************ ********** ************* *********** ************** *********************** ******************** ********** 
*********** ************* ********* ************ ***************** *********** ******** ********************** ********************
*********** ************* ********* ******** ****************** ****************** ***************** ************ **** *************









(2b)ii)

Javascript Engines...

The 'This' Keyword

Regular function call: the 'this' keyword points at the global object(the window object, in the browser)

    function calculateAge(year) {
      console.log(this);
      In chrome this refers to the window object in a regular function call. Proving the above thoery
    }



Method call: the 'this' variable points to the object that is calling the method

    var john = {
      name: 'John',
      yearOfBirth: 1990,
      calculateAge: function() {
        The 'this' keyword here points out the object john
        console.log(this);
      }
    }

john.calculateAge();


Practical 2
var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    console.log(this);
    console.log(this.yearOfBirth);

    This function is a regular funtion call so the 'this' keyword will refer to the window object
    function innerFunction() {
      console.log(this);
    }
    innerFuction();
  }
}

john.calculateAge();

********** ***************** **************** *************** ********************************** ****************** ************ ***
********** ***************** **************** *************** ********************************** ****************** ************ ***
The 'this' keyword is not assigned a value until a function where it is defined is actually called 
    In simple English
        You have to call the method in which the 'this' keyword is placed before it is actually assigned a value
********** ***************** **************** *************** ********************************** ****************** ************ ***
********** ***************** **************** *************** ********************************** ****************** ************ ***






Method Borrowing

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function () {
    // console.log(this);
    console.log(2019 - this.yearOfBirth);
  }
}

john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1999
}
here the method calculateAge in the john object is borrowed by the mike object
mike.calculateAge = john.calculateAge;

mike.calculateAge();
*/
