 /*learn babel
https:www.youtube.com/watch?v=1RMhlSH27BY&list=WL&index=2*/
/*

|| Lesson 1 : Data Types: ||

Javascript provide 7 different types of data types that can be used within javascript, Most common types are strings and numbers. underfined, null(nothing), boolean, symbol, number and object.


1) boolean: means true or false. 

2) string: this is just any sort of text. 

3) symbol: a primitive value that is unique.

4) number is a number.

5) object: can store a lot of different key value peers.



There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).

console.log(NaN == NaN)
 → false

NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.

*/




















/*

|| Lesson 2 : Variable Declarations ||

Variable is basically a label to point to the data.

There are 3 ways to declare a variable in javascript. var, let and const.


Storing Values With Assignment Operator. 

The (=) sign is the assignment operator.

** you end all line in the javascript with a semi-colon (;) **
uppercase and lowercase are vital and crucial part of naming variables so in case of naming a variables it is advisable to start with a lowercase and the next word starts with an uppercase .eg. (myVar) (studyOperator)


Calculations in Javascript

Adding Numbers in javascript
(answers can be checked in the console)
var sum = 10 + 10;

suntracting Numbers 
var difference = 46 - 5;

multiplying Numbers
var product = 8 * 5;

dividing Numbers
var quotient = 6 / 3;


Incrementing Numbers
for eg.
var myVar = 87;
2 ways to increment numbers
long method
myVar = myVar + 1;
short method
myVar++;

Decrementing Numbers
for eg.
var myVar = 12;
2 ways to increment numbers
long method
myVar = myVar - 1;
short method
myVar--;

Decimal Numbers
the multiplication and division is same with intergers


Remainder Operator

the remainder operator looks like a percent sign, And it gives the remainder of the division of any two numbers.

The remainder operator is often used to to determine if a number is even or odd.

setup
var bobbles;
bobbles = 11 % 3;


Compound Assignment with Augmented Addition.
same for Augmented(subtraction, multiplication and division).
eg.

var a = 3;
var b = 17;
var c = 12;
var d = 4.3;

only modify code below this line

long method
a = a + 12;
b = 9 - b;
c = c * 7;
d = d / 14;

short method
a += 12;
b -= 9;
c *= 7;
d /= 14;



Variable Declarations with Let and Const

The let and Const is the new way to create a variable, in ES6 people don't use 'var' anymore we use let and Const and there is a difference between the let and the Const keyword

The Let is like the var dosen't have much difference and the Const on the other hand is for variable declaration but with a constant value....
examples below

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);  This console log shows error because the value giving to a const dosen't change overTime


Another difference with ES6 is that variables declared with 'var' are function scoped and variable declared with 'Let' and 'Const' are blocked scoped...
examples below


ES5
function driversLicence5(passedTest) {

  if (passedTest) {
    console.log(firstName);
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

When we say 'function scoped'! we mean inside a function or within a the scope of a function. So we mean once the var is declared in a function it can be called anywhere in the function, as you see above in the ES5 example you will notice we called the variable outside the if statement and it will work because it still under the scope of the function. And you will also notice that we commented out a console of the firstName variable before we declared and in the console it will only return undefined as explained earlier when we started the Js lecture


ES6
function driversLicence6(passedTest) {

  if (passedTest) {
    console.log(firstName);

    let firstName = 'John';
    const yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);

We said that the 'let' and 'const' were block scoped meaning that as we declared them in the if block ( meaning btw those curly braces {} ) They can only be called btw those curly braces and thus calling them outside wouldn't work. And as for the console.log before we declared it is not only going to return undefined but it's gonna return an error preventing other code for going through until it is fixed

Any variable declared using the let keyword is assigned the block scope.

And some more instances of let and Const...

function driversLicence6(passedTest) {

  let firstName;  We assigned a value to the let variable in the if statement and It worked
  const yearOfBirth; But dosen't work for Const, it has to be declared here

  if (passedTest) {
    firstName = 'John';
    yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true); Error in the console


Another Example

using var
function checkScope() {
  "use strict"
  var i = '"function scope"';
  if (true) { anything in here --> {} is a block quote
    var i = '"block scope"';
    console.log("Block scope i is; ", i);
  }
  here i equals block scope
  console.log("Function scope i is; ", i);
  return i;
}
checkScope();

using let
function checkScope() {
  "use strict"
  let i = '"function scope"';
  if (true) { anything in here --> {} is a block quote
    let i = '"block scope"';
    console.log("Block scope i is; ", i);
  }
  here i is gonna be function scope because this console is no longer in any block quote (if). so it goes back to the original scope
  console.log("Function scope i is; ", i);
  return i;
}

checkScope();


function checkScope() {
  "use strict"
  let i = '"function scope"';
  if (true) { anything in here --> {} is a block quote
    let i = '"block scope"';
    console.log("Block scope i is; ", i);
  }
  Another issue on let is that it only display on the block quote it is in, it dosen't get out of it like the above (if) statement the [let] in it stays in the if so the console.log below is gonna display error unlike var which it just continue carry along the variable.
  console.log("Function scope i is; ", i);
  return i;
}

checkScope();





Declare a Read-Only Variable with the const keyword...

The [const] variable has all the features of [let] but it's also read only.

You can not re-assign a const.

Also the name of the const variable should always be in capital letter.

In most instances you should only use [const] or [let]..

setup
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";

  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");



Mutate an Array Declared with const...

const s = [5, 7, 2];
function editInPlace() {
  wrong method or mutating a declared array in a const.
  s = [2, 5, 7];

  Instead you call out each array by js numbering starting from 0 always remember this.
  s[0] = 7;
  s[1] = 2;
  s[2] = 5;
}
this below is necessary for the [s] console to work according to the mutated array and i don't know why yet.
editInPlace();

console.log(s);



Another instance... Test this for all 3 variable declaration and explain the result

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

*/






















/*

|| Lesson 3 : Strings ||

string: Anytime you have some characters surrounded by quotation mark (double(""), single('') or backticks(``)) that is called a string or string literals.

eg.
var firstName = "Corden";
var lastName = "Rubben";


Escaping Literal Quotes in Strings.
/eg.
var myVegan = "I am a \"double quoted\" string inside a \"double quote\"";
console.log(myVegan)


Quoting Strings with single Quotes.. and backticks are also useful

var myVegan = 'I am a "double quoted" string inside a "double quote"';
var myVegan = `'I am a "double quoted" string inside a "double quote"'`;


Escaping Sequences in Strings

/*****
CODE OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return 
\t      tab
\b      backspace
\f      form feed
******


Concatening Strings with Plus Operators...
meaning combining multiples string in one variable.

var myVegan = "I come first. " + "I come second."

b) with Plus Equals Operators...
var myVegan = "This is the first sentence. "
myVegan += "This is the second sentence."


****** always put appropriate space*******


Contstructing Strings with Variables...
var ourName = "free Code Camp"

only change code below this line
var myStr = "Our name is " + ourName + ", and we are here to help!";


Appending Variables to Strings...
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";

only change code below this line
myStr += someAdjective;

For more than two
var neymarJr = "Biggest Club";
var mane = " In the world"
var vanDijk = "Liverpool is the ";
var AA = " and the Premier League."

vanDijk += neymarJr + mane + AA;



Find Length of String...
Setup
var lastNameLength = 0;
var lastName = "lovelace";


only change code below this line
lastNameLength = lastName.length; more info....

****NOTE: what ever number you have in lastNameLength the (.length) is gonna override it almost like nothing was there in the first place



Bracket Notation to Find First Character in String..
Setup
var firstLetterofLastName = "";
var lastName = "Lovelace";

only change code below this line
firstleterofLastName = lastName[0];
the console log will highlight the first letter of the (var lastName) which is "L".


*****javascipt counts from 0 so to get the 2nd letter [1], to get 3rd letter [2], and so on.*****


Bracket Notation to Find Last Character in String...

Setup
var lastName = "lovelace";

only change code below this line.
var tooLong = lastName[lastName.length - 1];


Bracket Notation to Find Nth-to-Last Character in String..
var lastName = "Lovelace";

var secondToLastLetterofLastName = lastName[lastName.length - 2];

***[....-1] gives me "e" from lovelace
***[....-2] gives me "c" from lovelace
***[....-3] gives me "a" from lovelace





String Immutability...
strings are immutable meaning they cannot be altered once created but this does not mean they cannot be changed, just the individual characters literal cannot be changed.
eg.
var myBry = "Jello World"

only change code below this line
myBry[0] = "H"; Error
myBry = "Hello World"





Word Blanks...

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  Your code is below this line.
  var result = ""; 
  result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
  Your code is above this line.
return result;
}

Change the words here to test your function.
and multiple console can be made..
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

***Note: you can add more than one-word to the variable name(in the console.log)****



Create Strings using Template Literals...

Template Literals are a special type of string that makes creating complex strings easier.

A few advantages of using Template Literal are..
  *   You can make multi-line strings
  *   You can single or double quotation mark without escaping them
  *   You can put variable right in the string


features of Template Literals

1. Template Literal

Examples below...

let firstName = 'John';
let lastName = 'Oliver';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


ES6 Template Literal (``)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);



2. Multi-line strings

Examples below...

let name1 = 'Etinosa';
let name2 = 'Enogie'


ES5
var eg = 'Hello\n' + 'World'


ES6
let eg = `${name1}
${name2}`;
console.log(eg);


setup
const person = {
  name: "Freddie King Jr",
  age: 19
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;


setup
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}<li>`)
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);



Methods and Properties of Strings

let fruit = 'banana';
let moreFruits = 'banana\napple\norAnges\npineapple';
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('an'), moreFruits.indexOf('app', 8));
console.log(fruit.search('an'), moreFruits.search(/oranges/i))
console.log(fruit.lastIndexOf('a'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.substr(1, 5));
console.log(fruit.substring(1, 5));
console.log(fruit.charAt(4));
console.log(moreFruits.match(/[a]/g)) gi
console.log(fruit[3]);   starts from 0
console.log(fruit.split(''));
console.log(moreFruits.split('\n'));
console.log(fruit.split('n'));



New Method
  a. startsWith();
  b. endsWith();
  c. includes();
  d. repeat();
  e. trim()


let firstName = 'John';
let lastName = 'Oliver';

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));  Returns 'true' since the string starts with J
console.log(n.endsWith('er'));  Returns 'true' since n ends with er
console.log(n.includes(' '));  Returns 'true' since the n string includes a ' '(space)
console.log(`${firstName}`.repeat(5));  Repeats the firstName 5 times
console.log(`${firstName} `.repeat(5));  If you are looking for space between the repeated names



const rp = '          Availability is everything of course        ';
console.log(rp)
const rpBeef = rp.trim('')
console.log(rpBeef)


*/


















/*

|| Lesson 4 : Arrays ||


New
Store Multiple Values with Arrays...
var myArray = ["Quincy", 1];



Nested Arrays(aka, Multi-dimensional Arrays)...
var myArray = [["Bulls", 23], ["White Sox", 45]];



Access Array Data with Indexes...
Setup
each number is an index for eg. (50)
var myArray = [50, 60, 70, 80]; 

Only change code below this line.
var myData = myArray[0];



Modify Array Data with Indexes...
unlike string immutability you can change the individual index of arrays.

Setup
var myArray = [50, 60, 70];

Only change code below this line.
myArray[2] = 22;
When I console.log(myArray), It will be [50, 60, 22];



Access Multi-Dimensional Arrays With Indexes...

Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];


Only change code below this line.
var myData = myArray[2][1];
to target 8 in (var myArray).



Manipulate Arrays with push()...

Setup
var myArray = [["John", 23], ["cat", 2]];

Only change code below this line.
myArray.push(["dog", 3]);
myArray now equals [["John", 23], ["cat", 2], ["dog" 3]];



Manipulate Arrays with pop()...
minusArray now equals ["cat", 2], and myArray now equals [["John", 23]];
Adding the pop effect to the original variable is going to remove the last value in the array(more like delete it).

setup
var myArray = [["John", 23], ["cat", 2]];

Only change code below this line
var minusArray = myArray.pop();



Manipulate Arrays with shift()...
similar to the pop funtion only that it remove the first element.

minusArray now equals ["John", 23], and myArray now equals [["cat", 2]];

setup
var myArray = [["John", 23], ["cat", 2]];

Only change code below this line
var minusArray = myArray.shift();



Manipulate Arrays with unshift()...

setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); removes the first element.

only change code below this line.
myArray.unshift(["Paul", 35]);

myArray now equals [["Paul", 35], ["dog", 3]];

like push but it adds the element to the beginning of the array and returns the new length of the array.



Shopping List...

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 5]];



Other Methods and Properties of Array


let fruits = ['banana', 'apple', 'orange', 'pineapples'];
let fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[3]);

fruits[1] = 'pear';
console.log(fruits);
console.log('to string', fruits.toString());  Opposite of split
console.log(fruits.join(' * '));

console.log(fruits[4]);
fruits[fruits.length] = 'grapes';
console.log(fruits[4]);


let vegetables = ['asparagus', 'tomato', 'brocoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);

console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());  alphabetically




Manipulate Arrays with sort()....

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function (a, b) { return a - b }));  ascending
console.log(someNumbers.sort(function (a, b) { return b - a }));  descending



Pushing numbers in arrays using loops
let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);



Arrays in ES6 / E2015

In this class we are going to be affecting those boxes in the html document and then change the color and we are using querySelectorAll to get the boxes and as always we will be converting the returned nodeList to array using ES5 method ES6 method

const boxes = document.querySelectorAll('.box');

ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = 'dodgerblue';
});



ES6
var boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'grey');


Even shorter method
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



And after changing the color we want to signify that we have changed them by changing the text saying 'I changed to blue'.

To do that for each boxes we need a loop and normally we use forEach and map but they don't accept 'continue' or 'break' keyword which is a problem for us using ES5 and the way around it is to use for loop but ES6 has an even better way using the forOf loop

ES5
Comment out ES6 example 1
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === 'box blue') {
    continue;
  }

  boxesArr5[i].textContent = 'I changed to blue!';
}



ES6
Comment out ES5 && ES6 example (shorter method)

And we changed the if statements, it still say the same thing but we use the new includes method saying if the className includes blue


for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to blue!';
}



Find and FindIndex Methods

let's talk about 2 new methods that allows us to find elements in the Arrays

Now assuming that we have a group of children and only one of them is of full age and let's now find out who and how old that person is

ES5
var ages = [12, 17, 8, 21, 14, 11];

var fullAge = ages.map(function (cur) {
  return cur >= 18;
});
console.log(fullAge);  for True or false
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);  To know the number with the indexOf 3 in the previous console.log

 To avoid all the stress above let's look at ES6


ES6
Using the findIndex method which accepts a callback function that returns the indexOf the element required. And the find method that just retrieve the element for you with the specified condition

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));




New Method() for Arrays

1.  Array.of()
let prices = Array(200)
console.log(prices);   It logs 200 as it's length which is very strange to fix that we use Array.of()

let price6 = Array.of(200);
console.log(price6);




2. Array.fill()
let prices = [500, 700, 1000, 1500, 200];
 prices.fill(2000);
prices.fill(2000, 3);
console.log(prices);

let names = ['James', 'Joshua', 'Emmal', 'Osas', 'Gabriel', 'Isaac'];
names.fill('Divine', 2, 3);
console.log(names);




Array.copyWithin()
let prices = [500, 600, 700, 800, 900, 1000, 1500];
prices.copyWithin(3, 1);
 3 is the index the copying should take place(800) and 1 is the index to fill 3 (600 takes over 800 in index 1)
console.log(prices);

let prices6 = [500, 600, 700, 800, 900, 1000, 1500];
prices6.copyWithin(4, 1, 4) 
console.log(prices6);


 =============================================
practice on methods like every, isArray, lastIndexOf, some, values
 =============================================


*/



















/*

|| Lesson 5 : Functions ||

New
Write Reusable Code with Functions...

function reusable() {
  console.log("Good Morning");
}
reusable(); run code



Passing Values to Function with Arguments...
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.

setup
function reality(c, f) {
  console.log(c + f);
}
reality(6, 7);

function myFunction(a, b) {
  console.log(a - b);
}
myFunction(10, 5);



Global and Local Scope in Functions


Global Scope and Functions...
  Scope refers to the visibility of variables.
  Variables which are defined outside of a function block have Global scope.
  Global scope means that can be seen everywhere in your javascript.
  var (variable not under a function)   ...Global
  normal variable with no (var)         ...Global



Local Scope and Functions....
  Variable which are declared within a function have local scope



Global vs. Local Scope in Functions...

var myOuterWear = "T-Shirt";

function myOutfit() {
  var myOuterWear = "sweater"; more effective than the global scope here
  return myOuterWear;
}

console.log(myOutfit());
console.log(myOuterWear); this will highlight the global scope



Return a Value from a Function with Return...
you can return value from a function with the return statement in a function.

setup
function timesFive(num) {
this return statement
  return num * 4 
}

only change the code below
console.log(timesFive(2));




Understanding Undefined Value Returned from a Function...

if you don't specify a return value, the return value is just undefined.

setup
var sum = 2;

only change the code below
function addFive() {
  sum += 5;
}
console.log(sum);
console.log(addFive()); the result is underfined because  there is no return statement..



Assignment with a Returned Value...
var processed = 0;

function processArg(leb) {
  return (leb + 4) / 5;
}

processed = processArg(16);
console.log(processed); now processed equals 4...




Prompt and Alert method

function greeting(yourName) {
  var result = 'Hello ' + yourName;
  console.log(result)
}

var name =  prompt('What is your name?');
greeting(name);

Now without creating any variable or function type in this code and go to your browser
alert('Good morning')



Stand in Line...

In Computer science a queue is an abstract data structure where items are kept in order, New items can be added to back of queue(Enqueue) while old items are removed from the front of the queue(Dequeue).

The JSON.stringify is just a way to change an array in a string, that can easily be printed out to the screen.

function myBabe(arr, item) {
  arr.push(item);
  return arr.shift(); practical for making a queue in Js
}

var textArray = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(textArray));
console.log(myBabe(textArray, 6));
console.log("After: " + JSON.stringify(textArray));




Blocks and IIFEs(Immediately Invoked Function Expressions)

There is a new way of writing IIFEs in ES6 with the idea that let and const are block scoped. As seen earlier a block is defined by those curly braces {} and the 'var' keyword isn't bound by block

To call iife in ES6 is as easy as you see below just by typing {} and since the const and let are block scoped it's private and can't be called outside the block

{
  const a = 1;
  let b = 2;
  var c = 3; Not private
}

console.log(c); will display in the console
console.log(a + b);


The purpose of the (iife) is data privacy it's a function you can't call because

(1) It dosen't really have a name.../ and then
(2) the (iife) it's a function that was kinda never declared [ it's more like a function that is there but it isn't at the same time ].  And as the name says it's more of an expression and less of a function declaration

In this class we created a game using (IIFE)

*   The idea of the game is that you win if the your random score number is more than or equal to 5


(iife) without a parameter
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


(iife) with a parameter of (goodLuck)
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5); You see that last bracket with the input (5) is where you replace the parameter with the input


*/




















/*

|| Lesson 6 : Boolean ||


New
Boolean Values...

As said earlier booleans are another data type in javascript, they are only 2 values true & false...

They are basically on & off switches, where true is on & false is off...

no quotation marks



Use Conditional Logic with If Statements...

An (if) statement is use to make decisions in code.

The Key word (if) tells Js to execute the code in the curly braces{} under certain conditions defined in the parentases

simple example
function avengers(endGame) {
  // True
  if (endGame) {
    return "Yes, that is true";
  }
  // False
  return "No, that is false";
}

console.log(avengers(true));




Comparison in Javascript

* With the Equality Operator...

There are many comparison operator in Js that will return a boolean of true or false.

The most common is the equality operator. And it it's often used in an (if) statement.

the double equal sign (==) is used to check if the value is equal to a certain number or string etc.. It's also known as the Equality Operator.

setup
function insane(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(insane(10));
not equal.



* With the Strict Equality Operator(===)...

The differnce btw this and the Equality Operator(==), is that it attempts to convert both values being compared to a common type.

While the Strict Equality Operator(===) does not do the type conversion.

3 === 3 Evaluate to true
3 === '3' Evaluate to false

3 == 3 Evaluate to true
3 == '3' Evaluate to true



Practice Comparing Different Values...

Equality Operator
function compareEquality(a, b) {
  if (a == b) {
    return "Equal"
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));


strict Equality Operator.
function compareEquality(a, b) {
  if (a === b) {
    return "Equal"
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));




* With the the Inequality Operator...

setup
function insane(val) {
  if (val != 12) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(insane(10));
not equal.



* With the Stict Inequality Operator...

in this example we just checking if 10 does not equal to 17.
function myName(Imade) {
  if (Imade !== 17) {
    return false
  }
  return true
}
console.log(myName(10));



* With the Logical and Operator...

function greaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10"
  }
  return "10 or Under"
}
change this value to test
console.log(greaterThan(20));



* With the Greaater Than or Equal To Operator...

function greaterThanOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over"
  }
  return "Less than 10"
}
change this value to test
console.log(greaterThan(15));



* With the Less Than Operator...

function LessThanOrEqual(val) {
  if (val < 25) {
    return "Under 25";
  }
  if (val < 55) {
    return "Under 55"
  }
  return "55 or Over"
}
change this value to test
console.log(LessThanOrEqual(55));



* With the Less Than Or Equal To Operator...

function lessOrEqual(game) {
  if (game <= 12) {
    return "Less Than or Equal to 12";
  }
  if (game <= 24) {
    return "Less Than or Equal to 24";
  }
  return "More Than 24";
}
console.log(lessOrEqual(13));



* With the Logical and Operator 2...

if statement nesting
function logical(nba2k) {
  if (nba2k <= 50) {
    if (nba2k >= 25) {
      return "Yes";
    }
  }
  return "No";
}
console.log(logical(26));

shorter method
function logical(nba2k) {
  if (nba2k <= 50 && nba2k >= 25) {
    return true
  }
  return false
}
console.log(logical(27));

OR (||) STATEMENT...

when it is useful...
instead of doing this
function logicalOr(dream) {
  if (dream < 10) {
    return "Outside";
  }
  if (dream > 20) {
    return "Outside";
  }
  return "Inside"
}
console.log(logicalOr(25));

We just use the or statement
function logicalOr(dream) {
  if (dream < 10 || dream > 20) {
    return "Outside";
  }
  return "Inside"
}
console.log(logicalOr(25));






Else Statment...

when an if statement is true normally the block of code right after the if statement will be evaluated. And if it's not true nothing happens.

But with an else statement an alternate block of code can be executed when it's not true.

for example.
....instead of doing this
if (val > 5) {
  result = "Bigger than 5";
}
if (val <= 5) {
  result = "5 or Smaller";
}...

...We do this
if (val > 5 ) {
  result = "Bigger than 5";
} else {
  result = "5 or Smaller";
}




Else If Statements...

function elseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(elseIf(8));



Logical Order in If Else Statements...

  When using else if statement order is very important. 

  Less Than (<) [equals] increase in Number.
  Greater Than (>) [equals] decrease in Number.

  this (note) below answers the reason behind the rules above

****
Note: Once the first condition is meant it dosen't even check for the rest condition so the proper order must be taken else if keeps repeating the return of the first condition.
****








Chaining If Else Statements...

notice the numbers from small to Huge. Also take notes on the operators. if it's greater than it goes from huge to small.

function chainReaction(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(chainReaction(10));




Golf Code...

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}
console.log(golfScore(5, 2));

*****
Strokes         Return
1           "Hole-in-one!"
<= par - 2      "Eagle"
par - 1         "Birdie"
par             "Par"
par + 1         "Bogey"
par + 2     "Double Bogey"
>= par + 3      "Go Home!"
******




Switch Statements...

instead of using chained (else if) statements you can use a switch statement.

A switch statement can test a value and can have many case statements which define various possible values.

it's sign is directly same value as the strict equality sign (===), but not the same.

the break is to make sure it dosen't read any more code besides the one in each case statements.

setup
function caseInSwitch(val) {
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Omega";
      break;
  }
  return answer;
}
console.log(caseInSwitch(4));




Default Option in Switch Statements....

the default option is more like else in an if/else statement.

setup
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = '"Apple"';
      break;
    case "b":
      answer = '"Ball"';
      break;
    case "c":
      answer = '"Cat"';
      break;

    default:
      answer = '"Error"';
      break;
  }
  return answer;
}
console.log(caseInSwitch("b"));


var scoreJohn = (200 + 120 + 103) / 3;
var scoreMike = (116 + 194 + 123) / 3;

console.log(scoreJohn, scoreMike);

switch (true) {
  case scoreJohn > scoreMike:
    console.log('John\'s team wins with ' + scoreJohn + ' points');
    break;
  case scoreJohn < scoreMike:
    console.logMike\'s team wins with ' + scoreMike + ' points');
    break;
  default:
    console.log('it\'s a Draw');
    break;
}


Switch Case Statements without needing break due to the return attribute

Practical Example
  checking occupation
var Occupation = function(job, firstName) {
  switch(job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Lisbon';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(Occupation('teacher', 'Andrew'));
console.log(Occupation('retired', 'Ludacris'));
console.log(Occupation('designer', 'James'));




Multiple Identical Option in Switch Statements.

sometimes you want a switch statement where multiple inputs have same output.

setup
function multipleId(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = '"Low"';
      break;
    case 4:
    case 5:
    case 6:
      answer = '"Medium"';
      break;
    case 7:
    case 8:
    case 9:
      answer = '"High"';
      break;
  }
  return answer;
}
console.log(multipleId(4));



Replacing If Else Chains with Switch...

you can replace the else if statement with switch by removing the else if and whatever operator there is and just use case, but first change the if to switch statement first.



Returning Boolean Values from Functions...

normally to get a boolean value in a function you would have to type.

.....if (a > b) {
    return true;
} else {
    return false
}...

but a far normal method.
function early(a, b) {
  return a < b;
}
console.log(early(15, 12));
result will be false when you get the output using console.log()



Returning Early Pattern from Functions...

setup
function abTest(a, b) {

  early return
  if (a < 0 || b < 0) {
    return undefined;
  }


  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-3, 3));





Counting Cards...
And just in case you are lost it's a card game.

var count = 0;

function cc(card) {
  var holdbet = 'Hold';
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; same as count = count + 1;
      break;
      if the case is 7,8 & 9 we are not gonna do nothing because the count remains the same according to the game,
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; same as count = count - 1;
      break;
  }
  if (count > 0) {
    holdbet = 'Bet';
  }
  we are also gonna return if (we are going to hold or bet) which is a variable(holdbet) above.

  the semi-colon below is for the space between the count and holdbet return.
  return count + " " + holdbet;
}


cc(2); cc('3'); cc(7); cc('J'); cc('A');
console.log(cc(4));





Conditional (Ternary) Operator

Use the Conditional (Ternary) Operator....

The Ternary  Operator is like a one line if statement.

The Ternary Operator is written like this.

  condition ? statement-if-true : statment-if-false;

simple example

function checkEqual(a, b) {
  now this is never ever gonna be useful like this because it's the same as the last return, It was written to simply explain the ternary operator
  return a === b ? true : false;


  return a === b;
}

console.log(checkEqual(1, 1));




Use Multiple Conditional (Ternary) Opertors...

One of the great things about Conditional or Ternary Operators you can nest them within each other which gives them even more power.

setup
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0));


Using ternary operator to check if John is old enough to drink;
var firstName = 'John';
var age = 19;

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


*/





















/*

|| Lesson 7 : Iteration ||


Iterate with While Loops......
Loops allow you to run the same code multiple times.

A while Loop runs while a specified condition is true and stops once it's no longer true.

setup
var myArray = [];

var i = 0;
while (i < 5) {
  put or push i into the myArray variable.
  myArray.push(i);
  this is to increment(add) i so it's stop at the 4 because the params says (i < 5).
  i++;
}
console.log(myArray);




Iterate with For Loops....

A For Loop is the most common type of loop in Js.

here is an Example of for Loop.

** for (var b = 0; b < 2; b++); **
As Written above you start with the keyword (for) and then we have the paranteses with three different items in it separated by semi-colon.

The first item in the paranteses is the Intialization.

The Intialization happens before any of code inside the loop runs.
The second item is the Condition.
The third is the Final Expression.


setup
var myArray = [];
e Intialize i to equal 1.
the condition of this loop is that (i) will continue to run from 1 - 6 (keynote: less than 6) and stops once it gets to 5.
The final Epression is to increment the number continuously till it get to the number before 6(which is 5)
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);

we kept pushing(Iterated) (i) 5 different times, and each time, a new digit is added to the array, and the end of each pushing(Iterated) we incremented(i++) so it push a larger number into the array(myArray).


setup
var myArr = [2, 3, 4, 5, 6];
var total = 0;

in the second item where i is less than (myArr.length) meaning counting the Indexes from 0-4 in Js
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);




Iterate Odd Numbers with a For Loop...

Loop don't just have to increment one at a time.

setup
var myArray = [];

for (var c = 1; c < 13; c += 2) {
  myArray.push(c);
}
console.log(myArray);



Count Backwards with a For Loop....

A For Loop can also be use to count backwards.

setup
var myArray = [];

for (var c = 12; c > 0; c -= 2) {
  myArray.push(c);
}
console.log(myArray);

setup
var john = ['John', 'Akim', 1995, 'Designer', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}




Loops Continue & break statements

  Using the continue statement to continue iteration after selecting the strings with the if.

  same break used in the Switch case conditional statment.
var john = ['John', 'Akim', 1990, 'Designer', false, 'blue'];

Continue
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

Break;
for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}




Iterate with For of Loop...

  Array iteration
let incomes = [62000, 67000, 75000];
let total = 0;

The income here is each number(income) in our incomes
for (const income of incomes) {
  console.log(income);
  total += income;
}



String iteration
let fullName = 'Etinosa Enogie Favour';

for (const full of fullName) {
  console.log(full);
}



Challenge note::
This exercise show you that even though inc iterates through the incomes2 and we added 5000. The incomes2 value dosen't change because the inc in for of loop isn't made to update or chnage any value only to iterate through it.
let incomes2 = [65000, 62500, 75000];

for (let inc of incomes2) {
  console.log(inc += 5000);
}

console.log(incomes2);




Nesting For Loops....

If you have a multi-dimensional or nested array you can use nested For Loops to access all the array elements.

setup
function multiplyAll(arr) {
  var product = 1;

  arr.length is gonna pass off as 3, because the arrays in the multiplyAll is 3 arrays although nested.
  arr[i].length is the length of each nested array, and (j) The variable that we are incrementing is also for the nested array
  for (var i = 0; i < arr.length; i++) {
    for nested arrays (j)
    for (var j = 0; j < arr[i].length; j++) {
      [i]is for the array in the multiplyAll and [j] is for the nested array in [i]
      product *= arr[i][j];
    }
  }
  return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);




Iterate with Do...While Loops...

The Different Btw a While Loop and A Do...While Loop.


A While loop always check the condition before it runs any code within the loop,... A Do..While loop will  always run at least one time and then it will check the condition

setup
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i--;
} while (i > 5)

console.log(i, myArray);





Profile Lookup....

setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing", "Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {

  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if the name passed in is in the array.
      return contacts[i][prop] || "No such property"
    }
  }
  if the name pass in is not in the array it should return below
  return "No such contact";
}
var data = lookUpProfile("Harry", "lastName");

var data = lookUpProfile("Harry", "Baby");

var data = lookUpProfile("Interest", "lastName");


console.log(data);


*/



















/*

|| Lesson 8 : Javascript Object ||

Object are similar to a arrays except but instead of using index to assess data you use properties.

The properties are anything before the colon.

The values are the things after the colon.

var ourDog = {
  "name": "Leo",
  "legs": 4,
  "tails": 1,
  "friends": ["everyone"]
};



Accessing Object Properties

* With Dot Notation...

there are 2 ways to access a property on an object.

under this topic we will be focusing on the one which is Dot Notation.

setup.
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat; now the (hatValue) variable is highlighting the value {ballcap} in the [hat] property in the testObj variable. In order words it means (hatValue = ballcap).

var shirtValue = testObj.shoes; the {cleats} value in the "shoes" property, in the test.Obj variable. (shirtValue = cleats).




* With Bracket Notation....

Without dot notation you can also access the property(values) in a variable.

You can use bracket notation anytime but it is required if the name has a space in it.

setup.
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"]; (entreeValue = hamburger);
var sideValue = testObj['my side']; (sideValue = veggies);




* With Variables....

Bracket Notation can also be used to look up object propperties using variables.

setup.
var testObj = {
  12: "Namath",
  16: "Motana",
  19: "Unitas"
};

var playerNumber = 16; this equals 16.
var player = testObj[playerNumber]; We use the player to look up the motana value. (player = "Motana");




Updating Object Properties....

setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"] does not necessary have to be in arrays[]..
};

myDog.name = "Happy Coder"; the variable myDog name property have being updated from "coder" to "happy coder"
console.log(myDog);




Add New Properties to an Object...

You can add new properties to an Object using dot or bracket notation.

setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof!"; using the dot notation to add the a property of "bark" and a value of "woof!"
console.log(myDog);

myDog['Tiger'] = "roar"; using the bracket notation to add the property of "Tiger" and a value of "roar".
console.log(myDog);




Delete Properties From an Object....

setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof!"
};

delete myDog.bark; This deletes the bark property as well as the value.
delete myDog["friends"];




Using Objects for Lookups....

Objects can be thought of as a key value storage, like a dictionary.

setup
function phoneticLookup(val) {
  var result = "";

  Replacing the switch statement
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];

  replaced by the object above with the lookup variable.
  /*switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
      break;
    } ***

  return result;
}
console.log(phoneticLookup("echo"));




Testing Objects for Properties....

You can check if an object has a property with the (hasOwn) property.

setup
var myObj = {
  "gift": "pony",
  "pet": "kitten",
  "bed": "sleigh"
};

the function below is made to check if the myObj above have the specific property.
function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found"
  }
}

console.log(checkObj("gift")); when you type any sort of text that is not on the myObj variable(object), it going to return "Not Found".



Prevent Object Mutation...

As seen from the topic above a const declaration alone cannot not prevent your data from mutation.

Whenever you have an object and you don't want to change or be mutated use.....
[Object.freeze(name of the variable you are freezing)];




Object Method
  A method is a function in an Object


This is the long way to put a function within an object

const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};

short Method
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);




Setting property in a Method with the 'this' keyword

var john = {
  firstName: 'John',
  lastName: 'Oliver',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function() {
    setting a new property in method
    var age = 2018 - this.birthYear;
    console.log(age)
  }
};
console.log(john);
john.calcAge();


let student = {
  first: 'Rafeh',
  last: 'Greg',
  age: 30,
  height: 170,
  studentInfo: function() {
    return this.first + '\n' + this.last + '\n' + this.age;
  }
}

console.log(student.first);
console.log(student.last);
student.first = 'Jimmy';  change value
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());




Manipulating Complex Objects...

A Js Object is a way to store flexible data

for example
var myMusic = [
  {
    "artist": "Dj Khalid",
    "title": "Higher",
    "release_year": 2018,
    "formats": [
      "YouTube video",
      "Spotify",
      "Apple Music"
    ],
    "Platinum": true
  },

  Another record
  {
    "artist": "Take Off",
    "title": "Casper",
    "release_year": 2018,
    "formats": [
      "YouTube video",
      "Spotify",
      "Apple Music"
    ]
  }
];



Accessing Nested Objects...

When accessing nested values in object you can use both dot and bracket notation.

setup
var myDict = {
  "car": {
    "inside": {
      "glove box": "maps",
      "Passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myDict.car.inside["glove box"];
console.log(gloveBoxContents);

var outside = myDict.car.outside["trunk"];
console.log(outside);



Accessing Nested Arrays....

Array bracket notation can be changed to access nested arrays.

setup
var myPlants = [
  0 Js counting
  {
    "type": "flowers",
    list: [
      "rose",     0
      "tulip",    1
      "dandelion" 2
    ]
  },
  1 array Js counting
  {
      "type": "trees",
      list: [
        "fir",      0
        "pine",     1
        "birch"     2
      ]
  }
];

var trees = myPlants[1].list[0];
console.log(trees);




Record Collection....

In this test we are about to do, each record has an id(2548 etc.)

var collection = {

  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1998",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

this Json variable below is to keep a copy of the original collection above for more test.. I dont fully understand it yet,.....[[[]]]
var collectionCopy = JSON.parse(JSON.stringify(collection));

the function below is what we are gonna be using to update(change) the collection from the id to property and value, And returning the collection is very key.

function updateRecords(id, prop, value) {
  this first if focus on any value with an empty string, if there is an empty string("") in the any value, it will delete the prop & value.
  if (value === "") {
    delete collection[id][prop];
  } The next condition we are looking for is if the property(prop) is tracks so we can push unto the end of the array

  the condition here is if the tracks property is empty we need to create it, if it exist, it will equal itself.. Or If it dosen't we are going to create it
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  }
  The default condition involving only the else..

  Meaning if the value isn't blank and the property isn't tracks,... Then the property will just involve the value.
  else {
    collection[id][prop] = value;
  }

  return collection;
}
if there is track in in the id already it's not gonna recreate a new one it's just gonna continue by adding the value instead and recreate a new property when there is no tracks depends on the property you write
updateRecords(1245, "tracks", "music");
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));

more practice here incase you don't remember the basics... ]


 =========================================
Converting the string to object using json
let students = `[
  {
    "name": "Greg",
    "age": 25,
    "height": 170
  },
  {
    "name": "Rafeh",
    "age": 28,
    "height": 180
  }
]`

console.log(JSON.parse(students)[1].name);




Write Concise Object Literal Declarations Using Simple Fields...


If you know that you want create an object where the key{name of the block statement in the object} is the same as the variables and the value is the value of the value of the variable.

Long Method.
same with the variable
const createPerson = (name, age, gender) => {
  return {
the key object and it's value passed in are the same.
    name: name,
    age: age,
    gender: gender
  };
}
console.log(createPerson("Tommy Hilfiger", 45, "male"));


short Method..
const createPerson = (name, age, gender) => ( {name, age, gender });

console.log(createPerson("Tommy Hilfiger", 45, "male"));


*/



















/*

|| Lesson 9 : Arrow Functions ||


Use Arrow Functions to Write Concise Anonymous Functions....

This function below is an anonymous function because
  * It dosen't have a name.
  * It is assign to a variable but there is no word right before the function keyword to assign the name to the function.

var magic = function() {
  return new Date();
};

Whenever you have an anonymous function you can convert it into an arrow function, (that makes it a lil quicker to write). [Example below]

var magic = () => {
  return new Date();
}

And we can shorten this even more. ([below is the condition for shorten it even more.])

[if we are just returning one value here; we don't need the return keyword, and the curly braces{}].
you can use [var] below tho. I personally choose to change it [no reason behind it].

const magic = () =>  new Date();


Write Arrow Function with Parameters

Just like a normal function you can pass arguments to Arrow Function.

setup

long Method
const myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
}

short Method
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));





Write Higher Order Arrow Functions...

Arrow Function works really well with Higher Order Functions. such as Maps, Filter and Reduce[more details on these functions later]. But the main thing to know about them is that they take functions as argument for processing collections of data.

Whenever one function takes another function as an argument that a good time for an Arrow Function.


Note: In the Map method we have access to the current element, the current index and the entire years array ( array in this project )

Create the array of the Project called years...

const years = [1990, 1965, 1982, 1937];


ES5
var ages5 = years.map(function(el) {
  return 2019 - el;
})
console.log(ages5);

ES6
Arrow Function with one argument
let ages6 = years.map(el => 2019 - el);
console.log(ages6);


Two Arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);


With more than one line of Code
For more than one line of code you actually get to use the curly braces and the return keyword if need be
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;

  return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);


And remember if you have any argument or you have more than one argument that's when you specify this --> (); else you can '_ =>'




Another Example

setup
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

what we are gona do here is that we are going to update the function below[precisely we going to compute the square of only the positive integers in the array and we want to filter out anything that's not a positive integer. and that's the point of the filter and map function]

But the main focus of this class is the arrow function that i am passing into filter and map function.

The line is much more succinct because of the arrow function.

A map function takes a function as it's argument.
const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);





Write Higher Order Arrow Functions... (2)

The Default Parameters kicks in when the argument is not specified or is undefined.

In order to create more flexible functions you can use default parameters.


setup
The value equals 3 is me creating a default parameter, that wasn't there before.

const increment = (function() {
  return function increment(number, value = 3) {
    return number + value;
  };
})(); extra bracket needed ==> to call the iife function??


in the below console.log the value is passed in so it will ignore the default parameter in the increment function.
console.log(increment(5, 2));

in the below console.log the value is not passed in it so it will take the default value in the function above[which is 3].
console.log(increment(5));





Arrow Functions: Lexical `This` Keyword

So maybe the biggest advantage of using the arrow functions is that they share the surrounding 'this' keyword, so this means that unlike normal functions, Arrow functions don't get their own 'this' keyword. They simply use the this keyword of the function they are written in and so we say that they have a Lexical 'this' variable


ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is the box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

This will definitely return undefined in the place of the this keyword and the only way around that is to use that self variable and make the value equal this and put 'self' in place of this in the addEventListener
}
box5.clickMe();

The two this variable under the clickMe function in the addEventListener will return underfined because as said earlier in our first Js note, we said that a regular function call can't access the this keyword of the object only the method in the object, and the function called in the addEventListener is a regular function call and now you see below what we meant when we said the Arrow function share the surrounding 'this' keyword

ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is the box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

box6.clickMe();


So if you want to start using ES6 and arrow functions today then the best practice is to actually always use arrow functions when you need to preserve the value of 'this' keyword



For example number 2

    We created a function constructor called Person and it has one parameter and one item on it's construction and then we created a prototype function with the Person function constructor and the name of the function is called myFriends5 and in the myFriends5 function we created a variable and the variable is returned a mapLoop through the myFriends5 parameter  Note: The friends parameter was prep for an array called peeps

    And the phrase 'window object' must be in your explaination


    And now the only way to go around this is to add the bind method to the callback function in the map because remember the bind method creates a copy of the function so we add bind to the function and then add 'this' keyword as it's parameter of the function and since in the myFriends5 function you can access the name property it can actually work.

    And so we can basically pass the bind method to create a copy of the function and set it manually to the 'this' keyword because in the myFriends5 function you can access the 'this' variable to get the name property in the function constructor



function Person(name) {
  this.name = name;
}

ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function (el) {
    return this.name + ' is friends with ' + el
  }.bind(this));

  console.log(arr);
}

var peeps = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(peeps);



ES6
Person.prototype.myFriends6 = function (friends) {

  var arr = friends.map(el => `${this.name} is friends with ${el}`);
  console.log(arr);
}

new Person('Mike').myFriends6(peeps);


*/


















/*


|| Lesson 10 : First Class Functions ||


First Class Functions: Passing Functions As Arguments

*   A function is an instance of the Object type

*   A function behaves like any other object

*   We can store functions in a variable

*   We can pass a function as an argument to another function

*   We can return a function from a function

And because of all of the above we have First-Class Functions



In this Class we created an Array[years] in which we perform series of calculations with using functions
  Here are the Steps
    1}  We first created a function[arrayCalc] that takes other functions as input(parameters)

    2}  In other for the function[arrayCalc] to go through all the values in the years[array]. We created a forLoop to go through each an every value in the years[array]

    3}  And we created a variable[arrRes] in the function[arrayCalc] to push all the result we get from the series of calculations

    4}  We then created different functions[calculateAge, isFullAge, maxHeartRate] for different calculations and we store them in different variables namely:[ages, fullAges, rates]



var years = [1990, 1965, 1937, 2005, 1995];

Calculations based on the values above

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

Multiple functions called for the (fn) parameter in arrayCalc
function calculateAge(el) {
  return 2019 - el
}

function isFullAge(el) {
  return el >= 18
}

Creating a function to calculate maximum heart rate
The maximum heart rate is the highest rate measured in beats by minute that a person can reach when exercising and it's calculated based on the age of a person (just a fancy ass function, nothing twisted going on)

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.067 * el))
  } else { return -1 }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);




First Class Functions: Functions Returning Functions

*   Functions are always First-Class functions in Js because they are effectively objects


In this Class we created a function[interviewQuestion(job) with job as the parameter] that returns function

1}  Let's Imagine that you are going for an interview and depending on the job you are going for there are separate 'interviewQuestion' for each jobs[ for this example: we used teacher and designer ]

2}  And the 'teacherQuestion' is obviously going to be different from the 'designerQuestion' question

3}  So now the function[interviewQuestion] returns different functions[questions] base on the application you came for [ using the (if) statement ]. So now meaning the function(s) returned has a Question for you ( in which we used the [console.log] to ask the question in the console )

4}  And if you came for the teacher interview; a variable is assigned that equals the 'interviewQuestion' function with the 'teacher' input like this || variable = interviewQuestion( 'teacher' ) ||

5}  Each of the functions returned has a parameter of name [ function(name) ] Now remember all functions come with parameter(s) :: Anyway the name parameter is there to fill in your name ::

6} And in order to present your name --> :: --> variable( 'John' )



Practical
function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function (name) {
      console.log('What subject do you teach, ' + name + '?');
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

Assigned Variable
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

I never explained this in the theory upTop but these assigned variable are basically functions now ::
((more like this --> :: --> { function teacherQuestion(name) } because we returned a function to these variable that's why we can easily assign the (name) parameter to them :: Examples. below ::

designerQuestion('Lucia');
teacherQuestion('Abel');

If you don't feel like assigning a variable
interviewQuestion('teacher')('Mark');


*/






















/*

|| Lesson 11 : Objects and Functions ||


Inheritance And Prototype Chain

Everything is an Object: Inheritance And Prototype Chain (well, almost everything)

These below are not objects they are Primitives but everything else that isn't here is an object

*   Numbers
*   Strings
*   Booleans
*   Undefined
*   Null

Inheritance in Js is made possible through the prototype property that every object has

Every JavaScript object has a prototype. All objects in JavaScript inherit their methods and properties from their prototypes.

Practical Example

Object Constructor
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Proving that prototype is a property
Creating a method using the prototype property

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth);
}

Creating a property using the prototype
Person.prototype.waiter = 'Mr. Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 2000, 'designer');
var abigail = new Person('Abigail', 1995, 'pilot');


Proving every object created from the object constructor has a prototype property inherited from the constructor function which is called '_proto_'
so john.__proto__ === Person.prototype
john.calculateAge();
jane.calculateAge();
abigail.calculateAge();

console.log(john.waiter);
console.log(jane.waiter);
console.log(abigail.waiter);


For simple Verification
console.log(john instanceof Person)
This will console.log true because john is an |instanceof| person 'Remember what instance is':
  Meaning john is an object created out of the person contstructor
true
console.log(john.hasOwnProperty('job'));
The |hasOwnProperty| is a method from the |Object prototype| which in the case verifies that 'job' is a property from the john object
true
console.log(john.hasOwnProperty('calculateAge'));
The |hasOwnProperty| method here prints out false because it only sees the object created from the object contstructor literal and can't see the ones created using the prototype property
false


************** **************** *************** ****************** **************** *
************** **************** *************** ****************** **************** *
What Happens when the "new" Operator is used


1) The New operator creates a new empty object

2) The New operator ensures that the |this| variable which by default points to the Global Execution Context(or the Global Object) now points to the new empty object that is ||student1||

3) Our '__proto__' is added. 'student1.__proto__' will now point to the Person.prototype

4) After Everything is done, our new 'student1' object is returned to our new 'student1' variable

************** **************** *************** ****************** **************** *
************** **************** *************** ****************** **************** *




********************* ********************* ***************
SUMMARY

    1) Every Js object has a |Prototype Property| which makes inheritance possible in Js

    2) The Prototype property of an object is where we put methods and properties that we want |other objects to inherit|

    3) The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it

    4) When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found |and that is the ::prototype chain| and if not found it ends in 'null'

    5) The prototype object is shared among all objects created with that constructor function. This means we can add method and properties to the prototype that all of our objects can use ||This is called Inheritance||

    More details on (5)
      Every Object you create in javascript[objects like: arrays, function, objects, etc] has a prototype property(__proto__) inherited from the |Object Constructor|
        Now the |Object Constructor| has all the method you use in Js like( .toUpperCase(), .toString(), .pop(), .shift(), .push() etc.. ) these mentioned and more are created by the prototype property of the Object Constructor, Now that's why you never created these function(preferrably called method) you just call them and it works because of Inheritance(they inherited it just like when 'john' inherited calculateAge() when we use the 'Person' prototype property)

          Even function constructor is a '__proto__' of the Object Constructor 'prototype'

    Just for clarification
    ||instance|| are the objects created from the Object or (function) constructor

********************* ********************* ***************




Object.create

This is basically the object that act as a prototype and then we create objects based on this prototype

var personProto = {
  calculateAge: function () {
    console.log(2016 - this.yearOfBirth);
  }
}

In this case you will be shown 2 ways to do it(create object)

(1)
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


(2)
Object.create() allows us to create object with more atrribute options like (configurable, enumerable, writable and value) and this example we will be using only the value attribute

var jane = Object.create(personProto, {
  name: { value: 'Jane' },
  yearOfBirth: { value: 1997 },
  job: { value: 'designer' }
});

console.log(jane.name);



Primitives Vs. Objects

Primitives
  Primitives actually store the data given to them

var a = 23
var b = a;
a = 49;

console.log(a, b);
a (49)
b (23) b stored the data it was given

Objects
  They just like copy what you have and not neccessarily storing it as their own
var obj1 = {
  name: 'John',
  age: 26
};

var obj2 = obj1;

obj1.age = 30;
console.log(obj1.age); 30
console.log(obj2.age); 30 dosen't store ...just copy



Function

Passing a primitive and an Object in function

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'Dubai';
}

change(age, obj); Note: We do not pass object into a function but only the reference that points to the object

console.log(age)
console.log(obj.city);


*/




















/*

|| Lesson 12 : Closures ||

Closure: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time

The inner function will have access to the variables in the outer function scope, even after the outer function has returned

Among other things, closures are commonly used to give objects data privacy


Now due to our understanding of closure we can write our code like this which is a better method than the example at (ix)

function interviewQuestion(job) {
  return function(name) {
    if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Jonas');

If you don't feel like referring it to a variable
interviewQuestion('teacher')('John');




More examples
function retirement(retirementAge) {
  var a = ' years left until retirement.';
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
retirementGermany(2000);
var retirementEngland = retirement(64);
retirementEngland(1996);

If you don't feel like referring it to a variable
 retirement(66)(1990);


**************** *********************** ***************** *********************  ************ *
************** ******************* ************************* ***************** *************** *
Closures SUMMARY ::

An inner function has always access to the variables and prameters of its outer function, even after the outer function has returned.
**************** *********************** ***************** *********************  ************ *
************** ******************* ************************* ***************** *************** *


*/




















/*

|| Lesson 13 : Bind, Call and Apply ||

In a nut-shell this methods allows us call a function and set the 'This' variable manually


In this Class we used the
1)  call() method
2)  bind() method
3)  And shed a little light on the apply() method;


CALL

var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
    } else if (style === 'friendly') {
      console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    }
  }
};

john.presentation('formal', 'morning');

I want emily to have the presentation method in the john  object
var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
};


The first argument in the call method is the this variable :: --> ::  call(firstArgument)
And then we set the 'this' variable to 'emily'

john.presentation.call(emily, 'friendly', 'afternoon');





BIND

  The bind method dosen't instantly call the function but create a copy of the function to store in somewhere and has its keyword set to the provided value

  The bind Method return a function(thereby turning the variable into a function)

  Currying in Javascript is just a technique in which we create a function based on another function but with some preset(reset the parameter(s) into different input) parameters 


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');


var emilyFriendly = john.presentation.bind(emily, 'formal');

emilyFriendly('afternoon');


simple Example
let foo = {
  x: 3
}

let bar = function () {
  console.log(this.x)
}

bar() Undefined

const boundFunc = bar.bind(foo)
boundFunc()


Another Example using the exercise we used in first-Class function (remember it's function that we created and it takes other functions as input)

few changes
*   We added a new parameter to the isFullAge function (limit)
*   We also added a new variable (fullAge), therein lies the point of the whole project

Reason for the changes
In the first example of the First-Class function topic we had a fixed isFullAge(return el >= 18), Now in the real world(or real life) fullage varies like the US = 18, and countries like Japan has a fullage of 20

So we recreated an isFullAge there for ensuring that it could be used for all countries not just the ones whose full Age are > or = 18

var years = [1990, 1965, 1937, 2005, 2000];


function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el
}

function isFullAge(limit, el) {
  return el >= limit
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAge = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullAge);



Some real life Use of bind

Click(event) Handlers
  To track click and perform an action after a click that might require us to store information in an object

let logger = {
  x:0,
  updateCount: function() {
    this.x++
    console.log(this.x)
  }
}

  It could be done like this, the usual method

document.querySelector('button').addEventListener('click', function() {
  logger.updateCount()
})

  But we've had to create an unnecessary anonymous function to allow the this keyword to stand correct in the updataCount() function

document.querySelector('button').addEventListener('click', logger.updateCount.bind(logger))




APPLY

  The apply method is a function based method meaning it's is used for functions when accepting parameters on the function in an Array.

  The apply method has 2 arguments
    1) the this keyword which points to the function
    2) the array of parameters

Simple Example...
function sum(a, b) {
  return a + b
}

const age = [20, 25]
console.log(sum.apply(null, age));



Another Example
  *   Using the special variable 'arguments' in the function
  *   Giving the function unlimited parameters for proper use using the for loop;
  *   Using the apply method for completion of the project.


function sum() {
  let summy = 0;
  for (var i = 0; i < arguments.length; i++) {
    summy += arguments[i]
  }
  return summy
}

console.log(sum.apply(null, [10, 25, 10, 25, 5, 15]))



Another Example
    *   making use of the this keyword

function sum() {
  console.log(this)
  let summy = 0;
  for (var i = 0; i < arguments.length; i++) {
    summy += arguments[i];
  }

  console.log(summy);
}

sum.apply({
  name: 'Dominic',
  age: 56
}, [10, 15, 20, 25, 1, 20])



************ ********************** ******************** ****************** ***************** ************ *
***************** ***************** ************** *************** ************** ******************* **** *

SUMMARY!!
*   The first argument in the call, bind and apply method is the this variable :: --> ::  call(firstArgument)
*   And we explained Currying when using the bind Method
*   The apply method is for caryying out task of a function on an array sin erroneo

************ ********************** ******************** ****************** ***************** ************ *
***************** ***************** ************** *************** ************** ******************* **** *


*/





















/*

|| Lesson 14 : Generate Random Fractions ||


Math.random

  There is a simple way to create a random decimal number in Js, it's with the (Math.random() function)

easy setup
function randomFraction() {
  return Math.random();
}

console.log(randomFraction());



Generate Random Whole Numbers...

  Often you want a random whole number instead of a random decimal number.. That can be accomplished using (Math.floor())


  this variable (specifically the (Math) part)below is gonna create a whole number from 0 - 19
var randomNumberBtw0and19 = Math.floor(Math.random() * 20);

function random() {
  return Math.floor(Math.random()* 5);
}

console.log(random(), randomNumberBtw0and19);



Generate Random Whole Number within a Range...

setup
Range function
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);



Use the parseInt Function...

The parseInt function takes a string and returns it an interger.

setup
function convertToInterger(blue) {
  return parseInt(blue)
}
console.log(convertToInterger("56"));



Use the parseInt Function with a Radix...

  The parseInt Function can also be used with a radix.

  The Radix specify the base of the number in the string such as base 2 or 7 etc..

setup
function binaryNumber(str) {
  return parseInt(str, 2);
}

console.log(binaryNumber("1111"));


*/
























/*


|| Lesson 15 : Destructuring ||

So Destructuring gives us a very convenient way to extract data from a data structure like an object or an array

In this pratical it's just going to be destructuring a variable to several other variables using ES5 and ES6 methods

Destructuring in Arrays

ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];


ES6
const [name, age] = john or ['John', 26];
console.log(name);
console.log(age);


let john = ['John', 26, 'house', false, 'line', 'Franca']

const [name, age, clg, , , hope] = john;
console.log(name)
console.log(age);
console.log(clg);
console.log(hope);


Destructuring in Objects still under ES6

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};


And in the object destructuring we use curly braces
const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);


And if you feel like changing the names meaning you don't want the variable name to match the keyname
const { firstName: first, lastName: last } = obj;
console.log(first);
console.log(last);



A more practical example, here we are going to return some variables from a function and appoint other variables to it using destructuring

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);


Another Example

a)
function addressMaker(city, state) {
  const newAddress = {city, state};
  console.log(newAddress);
}

addressMaker('Benin', 'Edo');



b)
function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: 'Nigeria'
  };

  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({ city: 'Benin', state: 'Edo'});



b)(i)
function addressMaker(address) {
  const newAddress = {
    city: address.city,
    state: address.state,
    country: 'Nigeria'
  };

  return newAddress;
}

console.log(addressMaker({ city: 'Benin City', state: 'Edo state'}));



setup
Here we are going to use destructuring to obtain the average temperature for tomorrow from the Imper Object [AVG_TEMPERATURES]

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {

  in this variable we assigned the [tempOfTomorrow] with the [tomorrow] value
  const { tomorrow : tempOfTomorrow} = avgTemperatures;

  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));






Destructuring Assignment with Nested Objects...

setup
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: {min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  nested
  const { tomorrow : { max :  maxOfTomorrow}} = forecast;

  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));



Use Destructuring Assignment to Assign Variables from Arrays...

The difference btw destructuring from Arrays & destructuring from an object is that you cannot specify which element from the array to go into a variable it just goes in order.

However the only way it will work below at the first constant.

setup
const [z, x, , , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

We are gonna use destructuring to swap a and b values
let a = 8, b = 6, c = 9;
(() => {
  [a, b, c] = [b, c, a]
})();
console.log(a);  6
console.log(b);  9
console.log(c);  8



Use Destructuring Assignment with the Rest Operator...

We can Destructuring with the rest operator to reassign array elements.

setup
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  this [ , ,] removed the first two contents in the source variable
  const [ , , ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);



Use Destructuring Assignment to Pass an Object as a Function's Parameters...

You can use destructuring assignment to pass an object as a function's parameter.

this commonly used with API calls, when are getting information from an ajax or api request, it will often have a lot more information than what you need and you can use destructuring to get it down to what you need.


setup
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {

  instead of doing all this a much easy way
    return function half(stats) {
      return (stats.max + stats.min) / 2.0;
    };

  the destructured method
  return function half({ max, min}) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
written stats here is gonna make look the value of max and min and follow the directions in the function.
console.log(half(stats));


*/





















/*


|| Lesson 16 : Spread Operator ||


Arrays

console.log([...'😙😍😉😋🥰🤩😶😅😎😂'])

    The new spread operator is a very convenient way to expand element of an array in places of argument and function calls

It expands an already exist arrays or it spreads out an array.

You can only use it in an Argument, To a function or in an array literal.


setup
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = arr1;
  arr1[0] = 'potato'
})();
although we set [arr1] to [potato] [arr2] is still affected because they are equal to the each other in the function.
console.log(arr2);

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
  here [arr2] is no longer equal to [arr1] but it is equal to the spread of one, so any changes of [arr1] will not affect it
  arr2 = [...arr1];
  arr1[0] = 'potato'
})();
console.log(arr2);



Now imagine that we want a function with four arguments (addFourAges) of simple addition calculation and we also create an array to use the function calculation

Different way of doing it using ES5 & ES6

function addFourAges(a, b, c, d) {
  return a + b + c + d
}

ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
Now what this apply method will do is that it will call this addFourAges on the ages array and replace the addFourAges argument with the values of the ages array


ES6
The spread operator (...)
const sum3 = addFourAges(...ages);
console.log(sum3)


Another Example
let eg1 = [1, 2, 3, 4, 5, 6];
let eg2 = [...eg1];
eg2.push(true)
console.log(eg1);
console.log(eg2);


Another Example with Object
let exp1 = {
  firstName: 'Etinosa',
  lastName: 'Enogie'
}

let exp2 = {
  ...exp1
}

console.log(exp2);

using object, the spread operator functions almost same as Object.assign with only one or to differences

const mergeUser = Object.assign(users, users2)

Ensuring that users & users2 are objects

Another use case for the spread operator
Let's say we have 2 family smith and miller and using arrays and we want to add them together to another variable of bigFamily

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller]; In here we added another string in the bigFamily array called Lily
console.log(bigFamily);


Using spread operator to copy (like splice method)
let arr = ['a', 'b', 'c'];
let arr2 = arr;

arr2.push('d')

console.log(arr2)
console.log(arr)

You will notice the above console.logs will be the same meaning the original element (arr) has 'd' in it's array
so for that not to happen You use the spread...

let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

console.log(arr)

arr2.push('d')
arr[0] = 'g'

console.log(arr2)
console.log(arr)  not-affected


Using spread operator in Math.min or max
Math.min
--> normal usage Math.min(1, 2, 3, 45, -2) -2

--> Using array
let minn = [1, 2, 3, 45, -2]
console.log(Math.min(minn)) return NaN

--> Using spread...
let minn = [1, 2, 3, 45, -2]
console.log(Math.min(...minn)) return -2
bonus
console.log(minn.indexOf(Math.min(...minn)))

Math.max()

old method
Math.max.apply(null, [1, 2, 3])

console.log(Math.max(1, 3, 5));
console.log(Math.max([1, 3, 5]));
console.log(Math.max(...[1, 3, 5]));



For deeply-nested array
const nestedArray = [['a'], ['b'], ['c']]
const nestedCopy = [...nestedArray];

console.log(nestedCopy)

nestedArray[0][0] = 'y'
console.log(nestedArray)
console.log(nestedCopy)

spread... makes a shalow copy of nested array and it mutates when the original form is changed

A deep copy would require a library like lodash or Ramda's R.clone() method

Another use case is that we can use it( the spread operator ) on other structure so not just on arrays but also nodeLists

So to explain what was written above we are going to use an example where we link the text in the html and all the boxes and change all their textColor to purple

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes]  The reason why the spread operator is in the boxes and not in the h variable is because the boxes contain the nodeList 'querySelectorAll' remember and as seen above the the spread operator works for nodeList and now to convert and change it to arrays and then change the color

Array.from(all).forEach(cur => cur.style.color = 'purple');


*/




















/*


|| Lesson 17 : The Rest Parameters ||


In this lecture and the next one we are gonna be talking about default function parameters so let's start with Rest parameter right away

So rest parameter allows us to pass an abitrary number of arguments into a function and use this argument in that function

Now Rest parameters looks exactly the same as the Spread operator but the Rest parameter are exact opposite of the Spread operator and the reason is that the Spread operator recieves an array and turn them into single values but the Rest parameter receives a couple of single values and transforms them into an array when we call a function with multiple parameters


Use the Rest Operator with Function Parameters...

The Rest Operator allows you to create a function that takes a variable number of arguments.

setup
without the rest Operator 
const sum = (function() {
  return function sum(x, y, z) {
    const args = [ x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));
with the rest Operator, you no longer need to create args variable but look closely.
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
And with this Rest Operator the number of Indexes in the sum is not limited to just 3
console.log(sum(1, 2, 3, 4, 5, 6));




Now suppose we want to create a function that recieves an abitrary number of years and then prints to the console whether each person corresponding to these years is of fullage or not


In this ES5 example we used the 'arguments' keyword that all function has access to and then converted it to an array using our Array.prot.... hack and loop over the array with some conditions and with all that set and done we can pass an endless number of arguments to our function when we call it
ES5
function isFullAge5() {
  console.log(arguments)
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function (cur) {
    console.log((2019 - cur) >= 18);
  });
}

 isFullAge5(1995, 2002, 2013, 1997, 1900);


As you are probably wondering in the ES5 example we console.log arguments and in the ES6 we console.log the years argument and why that is because..

In the ES5 when we console.log arguments we immediately called the isFullAge5 function and passed on those years you see above and it printed out the arguments as an array like object Because the same way 'Array' is a function constructor with properties so the same thing with arguments but the years we input in the function call becomes the property of the arguments Array like object and then we needed to turn them to arrays in order to work with it

And in ES6 we did the same thing for (...years) and when we immediately called the function the parameter(1995...) passed on where already in an array so we just carried on with the loop
ES6
function isFullAge6(...years) {
  console.log(years);
  years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1995, 2002, 2013, 1997, 1900);

So the big difference btw the Spread operator and the Rest parameter is actually the place in which we use them, The spread operator is used in the function call, while the Rest parameter is used in a function declaration to accepts an abitrary number of parameters



Comment out the previous lecture
Unlike the first example that tells us if the person( parameters ) are full of age, this is gonna tell us at what age is full of age

And to do that the function has to have it's own ageLimit, we added a limit argument in ES5 and then in the forEach loop it wouldn't be '>= 18' it would be '>= limit' and then in the 'Array.prot...' for changing the arguments to array, the final call method applied gets another input of 1 which signifies that the slice and overall changing the argument to Array should start from the length of 1 instead of 0


While in the ES6 all you have to do is add the limit to the function declaration ( separate with (,) ) and then add it to the loop and you are good to go

ES5
function isFullAge5(limit) {
  console.log(arguments)
  var argsArr = Array.prototype.slice.call(arguments, 1);

  argsArr.forEach(function (cur) {
      console.log((2019 - cur) >= limit);
  });
}

 isFullAge5(18, 1995, 2002, 2013, 1997, 1900);



ES6
function isFullAge6(limit, ...years) {
  console.log(years);
  years.forEach(cur => console.log((2019 - cur) >= limit));
};

isFullAge6(18, 1995, 2002, 2013, 1997, 1900);


*/



















/*

|| Lesson 18 : Default Parameters ||

Default parameters are a very straight forward concept, we use them whenever we want one or more parameter of a function to be preset, so we want them to have a default value
In the ES5 we need some what of a fixed lastName and Nationality for the smith family and to do that we used the tenary operator for both

In the ES6 all we need to do is give the default value when we declare the properties

ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'England' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'England') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1998);
var emily = new SmithPerson('Emily', 1999, 'Lorenzo', 'Spain');





Another Example...

relating to numbers


In this scenerio the numArray parameter is not defined at all so us calling the function is not gonna work instead it prints out an error

function add(numArray) {
    let total = 0;
    numArray.forEach(elmt => {
        total += elmt;
    });
    console.log(total);
}

add();


With defaults parameters it helps the numArray have a defualt parameter if it is called without a parameter: here it's an empty array.

function add(numArray = []) {
    let total = 0;
    numArray.forEach(element => {
        total += element;
    });
    console.log(total);
}

add([10, 20, 30]);


*/




















/*

|| Lesson 19 : Maps ||

So a very common use of Js object is to use them as harsh Maps which simply means that we map string keys to abitrary values and we did that alot earlier in the course especially in the basic section for example in those simple john object, back then we had simple keys like name, age and so on and we map simple values to them too and all that is called a harsh Map.

Up until ES6 we had to use object for that but now in ES6 we have something better and that's Maps, So a Map is a key value data structure in ES6 and one of the big differences is that in Maps we can use anything for the keys even objects


.set()
const question = new Map();
question.set('Question', 'What is the official name of the lastest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Corrcet answer :)');
question.set(false, 'Wrong, please try again!');

.get()
console.log(question.get('Question'));  In other to see the value in the console


.has()
if (question.has(4)) {  has is for checking if the question has a key of 4
     question.delete(4) to delete
     console.log('Answer 4 is here')
}


.clear()
To literally empty the question map
 question.clear();

 Using the forEach loop
question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

 The question.entries returns all entries of our question map and we can then use destructuring to store the keys and value in 2 separate values

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));


Reasons why Maps are better than Objects
1.  Maps allows us to use any type of keys we please from strings, boolean and numbers..

2.  Maps are very iterable meaning we can easily loop through and manipulate data with them

3.  It really easy to get the size of the map using the size property and that can be very handy

4.  And finally because we can easily add and remove data from the map so all of these are really strong arguments


*/
