/*

  Extra class --> setTimeOut() Function
  Extra class --> setInterval() Function
  Extra Class -->   Reduce Method
  Extra Class -->   Handling errors in Javascript
  Extra Class -->   Javascript Date object


*   Classes and subclasses -->

And then Later

*   Promises 

*   Native Modules

*/











/*

  Extra Class

    setTimeOut() Function

    setTimeout is a native JavaScript function which calls a function or executes a code snippet after a specified delay (in milliseconds).

    JavaScript setTimeout(): Main Tips

    * The JS setTimeout() method will call a function after the time specified in milliseconds (1000 ms = 1 second) has passed.

    * The specified function will be executed once.

    * To stop the timeout and prevent the function from executing, use the clearTimeout() method.

    * The JavaScript setTimeout() method returns an ID which can be used in clearTimeout() method.

    As you can see in the snippet below, the JavaScript setTimeout() function can contain several parameters:

    setTimeout(function, milliseconds, param_one, param_two, ...)

    First of all, the setTimeout JavaScript method should contain the function that you intend to apply. The second parameter sets a time when the specified function is to be called. However, it is optional, and the default value is 0. You can also specify parameters for the function you have indicated previously.

    Parameter -->	Description
      function -->	Required. Specifies the function that will be executed.
      milliseconds -->	Not required. Specifies the time the function will be executed. 0 milliseconds by default.
      param_one, param_two, --> ...	Not required. Parameters passed to the function.

Code Examples for Practice

<button class="clickable">Launch Popup</button>

let recAlert = function() {
  setTimeout(() => {
    alert('Clicked')
  }, 2000);
}
document.querySelector('.clickable').addEventListener('click', recAlert)

Eg2
    This next example will change the text of an element every 2 seconds (3 times). For this to work properly, you must set an ID of some HTML element to counter:
let counter = document.getElementById('counter')

setTimeout(() => { counter.innerHTML = '2 seconds' }, 2000);
setTimeout(() => { counter.innerHTML = '4 seconds' }, 4000);
setTimeout(() => { counter.innerHTML = '6 seconds' }, 6000);


    it’s also possible to pass setTimeout a string of code for it to execute:
    setTimeout('alert("Howdy!");', 2000);

    However, this is not advisable for the following reasons:
    It’s hard to read (and thus hard to maintain and/or debug).
    It uses an implied eval, which is a potential security risk.
    It’s slower than the alternatives, as it has to invoke the JS interpreter.

More Example
function makeTalk(animal) {
  const noises = {
    cat: 'purr',
    dog: 'woof',
    cow: 'moo',
    pig: 'oink'
  }

  console.log(`The ${animal} goes ${noises[animal]}`)
}

let getRandom = arr => arr[Math.floor(Math.random() * arr.length)]

const animals = ['cat', 'dog', 'cow', 'pig']
const ranAnim = getRandom(animals)

setTimeout(() => {
  makeTalk(ranAnim)
}, 1000);

    there’s a second method of passing parameters to a callback executed by setTimeout. This involves listing any parameters after the delay.

    With reference to our previous example, this would give us:

setTimeout(makeTalk, 1000, ranAnim);

    Unfortunately, this doesn’t work in IE9 or below, where the parameters come through as undefined. If you’re in the unenviable position of having to support IE9,


The Problem with 'this'
    Code executed by setTimeout is run in a separate execution context to the function from which it was called. This is problematic when the context of the this keyword is important:

const dog = {
  sound: 'woof',
  bark() {
    console.log(`Rover says ${this.sound}!`);
  }
};

dog.bark();
// Outputs: Rover says woof!

setTimeout(dog.bark, 50);
// Outputs: Rover says undefined!


The reason for this output is that, in the first example, this points to the dog object, whilst in the second example this points to the global window object (which doesn’t have a sound property).

To counteract this problem, there are various measures …

  * You can do this using bind,
    setTimeout(dog.bark.bind(dog), 50);

  * Use a Library
    Many libraries come with built-in functions to address this issue. For example, jQuery’s jQuery.proxy() method. This takes a function and returns a new one that will always have a particular context. In our case, that would be:
      setTimeout($.proxy(dog.bark, dog), 50);


  Canceling a Timer
    As we learned at the start of the article, the return value of setTimeout is a numerical ID which can be used to cancel the timer in conjunction with the clearTimeout function:

const timer = setTimeout(ryt, 3000);
clearTimeout(timer)

function ryt() { alert('Lets begin') }

    One potential caveat to be aware of is the fact that setTimeout is asynchronous. It queues the function reference it receives to run once the current call stack has finished executing. It doesn’t, however, execute concurrently, or on a separate thread (due to JavaScript’s single-threaded nature).

    console.log(1);
    setTimeout(() => { console.log(2); }, 0);
    console.log(3);
    // Outputs: 1, 3, 2

    Although we’re calling setTimeout with a zero second delay, the numbers are still logged out of order. This is because when setTimeout‘s timer has expired, the JavaScript engine places its callback function in a queue, behind the other console.log statements, to be executed.


    requestAnimationFrame()
    You should also be aware of requestAnimationFrame. This method tells the browser that you wish to call a specified function before the next repaint.

    When making animations, we should favor requestAnimationFrame over using setTimeout, as it will fire roughly sixty times a second, as opposed to setTimeout, which is called after a minimum of n milliseconds. By using requestAnimationFrame we can avoid changing something twice between two frame updates.

    Here’s an example of how to use requestAnimationFrame to animate a div element across the screen:
<div class="redblk"></div>

const blvk = document.querySelector('.redblk')
let leftPos = 0

function animateDiv() {
  leftPos += 1
  blvk.style.left = `${leftPos}px`
  if (leftPos < 450) requestAnimationFrame(animateDiv)
}
requestAnimationFrame(animateDiv)

You could, of course, achieve the same thing using setTimeout:
function animateDiv(){
  leftPos += 1;
  div.style.left = `${leftPos}px`;
  if (leftPos < 450) setTimeout(animateDiv, 1000/60);
}
animateDiv();

    But as mentioned, using requestAnimationFrame offers various advantages, such as allowing the browser to make optimizations and stopping animations in inactive tabs.


Note:
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
  // output is 1,2,3,4,5

  for (var i = 0; i < 6; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000);
  }
  // output is 6

*/








/*

  Extra Class

    setInterval() Function
    
    The setInterval Function is the another timer function like setTimeout major difference is that the setInterval is the time interval in which a code(or function) is executed again and again continuously while the setTimeout is only run once

    Has the same syntax and parameters as the setTimeout and it's own clearInterval()

    Code Examples
var idVar = setInterval(timer, 1000);

function timer() {
  var dateVar = new Date()
  var time = dateVar.toLocaleTimeString()
  console.log(time)
}

function myStopFunc() {
  clearInterval(idVar)
}
document.querySelector('.btn').addEventListener('click', myStopFunc)

Eg2
function move() {
  var elem = document.querySelector('.redblk')
  var width = 0
  var idVar = setInterval(change, 10)

  function change() {
    if (width === 100)
      clearInterval(idVar)
    else
      width++
      elem.style.width = width + '%'
  }
}

move()

Eg3
var idVar = setInterval(setColor, 1000);

function setColor() {
  var bk = document.body
  bk.style.backgroundColor = bk.style.backgroundColor == 'blue' ? 'red' : 'blue'
}

document.querySelector('.btn').addEventListener('click', () => {
  clearInterval(idVar)
})

Eg3b
On and Off the setInterval(setColor, 1000);
from code above
document.querySelector('.btn').addEventListener('click', () => {
  if (crim === 0) {
    crim++
    clearInterval(idVar)
  } else {
    crim = 0
    idVar = setInterval(setColor, 1000)
  }
})


Nested setTimeout
    There are two ways of running something regularly.
    One is setInterval. The other one is a nested setTimeout, like this:
  instead of:
let timerId = setInterval(() => alert('tick'), 2000);
  you can create this
let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);

    The setTimeout above schedules the next call right at the end of the current one (*).

    The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.

    Nested setTimeout allows to set the delay between the executions more precisely than setInterval.

Let’s compare two code fragments. The first one uses setInterval:
let i = 1;
setInterval(function() {
  func(i++);
}, 100)

The second one uses nested setTimeout:
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);


    For setInterval the internal scheduler will run func(i++) every 100ms:

    Did you notice?

    The real delay between func calls for setInterval is less than in the code!

    That’s normal, because the time taken by func's execution “consumes” a part of the interval.

    It is possible that func's execution turns out to be longer than we expected and takes more than 100ms.

    In this case the engine waits for func to complete, then checks the scheduler and if the time is up, runs it again immediately.

    In the edge case, if the function always executes longer than delay ms, then the calls will happen without a pause at all.

    The nested setTimeout guarantees the fixed delay (here 100ms).

    That’s because a new call is planned at the end of the previous one.


Summary
    Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) allow us to run the func once/regularly after delay milliseconds.

    To cancel the execution, we should call clearTimeout/clearInterval with the value returned by setTimeout/setInterval.

    Nested setTimeout calls are a more flexible alternative to setInterval, allowing us to set the time between executions more precisely.

    Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is used to schedule the call “as soon as possible, but after the current script is complete”.

*/










/*

Extra Class

    Reduce Method

    The reduce() method loops through an array, executing a function for each value of the array, from left to right, and reduces the array to a single value.

    Breaking it down it…
    *   loops through an array
    *   executes a function for each element of the array
    *   and reduces the array to a single value

    To better understand this let’s just walk through the syntax step by step. Let’s build out an empty function to demonstrate.

    Let’s say we have an array called arrayExample. Let’s first attach our method to it.
arrayExample.reduce()

    Second, let’s enter a callback function. This is the function that will be executed on every element as it loops through an array:
arrayExample.reduce(function() {

})

    Third, let’s talk about the reduce method parameters as this is what trips everyone up: The callback function has four parameters:

    1. accumulator – accumulates all of the callbacks’ returned values (required).
    2. element – value of the current element (required)
    3. index – index of the current element (optional)
    4. arr – the original array object (optional)

    The element is simply the array element as it loops through each time. Index is….well the index. Arr is the array object, and I have no clue the value of this array object.

    But what is this accumulator?

    Well, think about this: If we are calling a function on each element, and these elements will be reduced into one single value, there needs to be a specified value where the accumulation happens, a value that totals up the changes into a single value. This is the accumulator!!

    You will often see this called ‘total’ or ‘acc’. Let’s use acc in our examples.

    So let’s tally it up to the final syntax:
arrayExample.reduce(function(acc, element, index, array) {

})

    Example 1
    Let’s try out a simple example to start:

    Let’s take an array, and reduce the elements into one final sum.

let numbers = [0, 1, 2, 3, 4, 5, 6];

    So whenever I work with the reduce method (as well as forEach, filter, and map), I always use this four step method to build out the method:

    First, add the method to the end of our array:
numbers.reduce()

    Second, add the callback function that will be called on each element. (You can also call an already pre-defined function instead of a callback)

numbers.reduce(function(){})

    Third, we will enter our accumulator (required) and our current element (required) as arguments:

numbers.reduce(function(acc, element){})

    Finally, we will enter a condition into our function that adds the elements.

numbers.reduce(function(acc, element){
  return acc + element;
})

    And we get 21!, now here is what it is doing, broken down: https://travismedia.gumlet.io/content/images/2019/12/reduce-method-broken-down.png?q=70&w=800&dpr=1.0


  One More Parameter
    Now there is ONE MORE parameter and it’s called:
    initialValue;

    So in total we have:
arrayExample.reduce(function(acc, element, index, arr){}, initialValue)

    And simply put, the initialValue is the value by which the accumulator will start on. Let’s try an example using the initialValue:

    Let’s take a look at the same example as above, but using an initialValue.

Example 2
    So based on our example above, here is our array again:
var numbers = [0, 1, 2, 3, 4, 5, 6];
 
    …and here is our reduce function with the initialValue of 8:
numbers.reduce(function(acc, element){
  return acc + element;
}, 8)

    Now what this does, is it starts the accumulator at 8, giving us a return value of 29. Here is the breakdown showing the difference. See how the accumulator begins with 8?: https://travismedia.gumlet.io/content/images/2019/12/reduce-method-broken-down-initialvalue.png?w=800&dpr=1.0


    *** If there is no initialValue provided, the accumulator starts as the value of the first array element ***

    If there is an initialValue, this will be the initial value of the accumulator from the start. Okay, not too bad.


Example 3
    Let’s look at a final example to assure that we understand the basics of reduce().

    Let’s look at some data (State and Population):
let population = [
  {
    state: 'California',
    pop: 39780000,
  },
  {
    state: 'Virginia',
    pop: 8412000,
  },
  {
    state: 'Florida',
    pop: 20610000,
  },
  {
    state: 'Maine',
    pop: 1331000,
  },
]

    Let’s use the reduce() method to get the total population of our four states.

    console.log(population.reduce((acc, elem) => {
      return acc + elem.pop
    }, 0))

arr.reduce(callback, initialValue);

    Take the following classic example:
let value = 0
const numbers = [5, 10, 15]

for (var i = 0; i < numbers.length; i++) {
  value += numbers[i]
}

    The above will give us 30 (5 + 10 + 15). This works just fine, but we can do this with reduce instead which will save us from mutating our value variable.

    The below code will also output 30, but will not mutate our value variable (which we have now called initialValue)

    this is our initial value i.e. the starting point
const initialValue = 0;

    numbers array 
const numbers = [5, 10, 15];

    reducer method that takes in the accumulator and next item 
const reducer = (accumulator, item) => {
  return accumulator + item;
};

    we give the reduce method our reducer function and our initial value 
const total = numbers.reduce(reducer, initialValue)


Flattening an Array Using Reduce

    Let’s say we have the following array:
const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

    And let’s say for some crazy reason, JavaScript has removed the .flat method so we have to flatten this array ourselves.

    So we’ll write a function to flatten any array no matter how deeply nested the arrays are:

function flattenArray(data) {
  // our initial value this time is a blank array
  const initialValue = [];

  // call reduce on our data
  return data.reduce((total, value) => {
    // if the value is an array then recursively call reduce
    // if the value is not an array then just concat our value
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);
}

    If we pass our numArray to this method and log the result we get the following:
(12) [1, 2, 3, 10, 11, 12, 1, 2, 3, 4, 5, 6]


Final Example - Changing an Object Structure

    So with the new Pokemon game coming out, let’s pretend we have a server that sends us an array of Pokemon objects like so:
const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]

    We want to change this object to look like:
const pokemonModified = {
  charmander: { type: "fire" },
  squirtle: { type: "water" },
  bulbasaur: { type: "grass" }
};

    To get to that desired output we do the following:
const getMapFromArray = data => data.reduce((acc, item) => {
  // add object key to our object i.e. charmander: { type: 'water' }
  acc[item.name] = { type: item.type };
  return acc;
}, {});

  If we call our method like so: getMapFromArray(pokemon)

Conclusion
  So that is it! Hope you’ve now learned how the reduce method works

*/









/*


Extra Class

  Handling Errors in Javascript

throw new Error('something isn\'t right') — will create an instance of an Error in JavaScript and stop the execution of your script, unless you do something with the Error. When you start your career as a JavaScript developer, you will most likely not do that yourself, but instead you have seen it from other libraries (or the runtime) doing it, e.g. `ReferenceError: fs is not defined` or similar.


    The Error Object
    The Error object has two properties built in for us to use. The first one is the message, which is what you pass as argument to the Error constructor, e.g. new Error('This is the message') . You can access the message through the 'message' property:

const myError = new Error(‘please improve your code’)
console.log(myError.message)

    The second, very important one is the Error stack trace. You can access it through the `stack` property. The error stack will give you a history (call stack) of what files were ‘responsible’ of causing that Error. The stack also includes the message at the top and is then followed by the actual stack starting with the most recent / isolated point of the error and going down to the most outward ‘responsible’ file:

Error: please improve your code
at Object.<anonymous> (/Users/gisderdube/Documents/_projects/hacking.nosync/error-handling/src/general.js:1:79)
at Module._compile (internal/modules/cjs/loader.js:689:30)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
at Module.load (internal/modules/cjs/loader.js:599:32)
at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
at Function.Module._load (internal/modules/cjs/loader.js:530:3)
at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
at startup (internal/bootstrap/node.js:266:19)
at bootstrapNodeJSCore (internal/bootstrap/node.js:596:3)


    Throwing and Handling Errors
    Now the Error instance alone does not cause anything. E.g. new Error('...') does not do anything. When the Error gets throw n, it gets a bit more interesting. Then, as said before, your script will stop executing, unless you somehow handle it in your process. Remember, it does not matter if you throw an Error manually, it is thrown by a library, or even the runtime itself (node or the browser). Let’s have a look at how we can deal with those Errors in different scenarios.

    try .... catch
    This is the simplest, but often times forgotten way to handle errors — it does get used a lot more nowadays again, thanks to async / await, see below. This can be used to catch any kind of synchronous error. Example:

const a = 5

try {
  console.log(b) // b is not defined, so throws an error
} catch (err) {
  console.error(err) // will log the error with the error stack
}

console.log(a) // still gets executed

    If we would not wrap the console.log(b) in a try … catch block, the script execution would stop.


    … finally
    Sometimes it is necessary to execute code in either case, whether there is an Error or not. You can use the third, optional block finally for that. Often, it is the same as just having a line after the try … catch statement, but sometimes it can be useful.
const a = 5

try {
  onsole.log(b) // b is not defined, so throws an error
} catch (err) {
  onsole.error(err) // will log the error with the error stack
} finally {
  onsole.log(a) // will always get executed
}




    Enter asynchronity — Callbacks
    Asynchronity, one topic you always have to consider when working with JavaScript. When you have an asynchronous function, and an Error occurs inside of that function, your script will have continued with the execution already, so there will not be any Error immediately. When handling asynchronous functions with callbacks (not recommended by the way), you usually receive two parameters in your callback function, which look something like this:

    myAsyncFunc(someInput, (err, result) => {
      if(err) return console.error(err) // we will see later what to do with the error object.
      console.log(result)
    })

    If there is an Error, the err parameter will be equal to that Error. If not, the parameter will be `undefined` or `null`. It is important to either return something in the if(err) -block, or to wrap your other instruction in an else -block, otherwise you might get another Error, e.g. result could be undefined and you try to access result.data or similar.

*/











/*

Extra Class

  Javascript Date Object

  Getting Current Date
  
  const currentDate = new Date()

  * If you don’t pass anything to the Date constructor, the date object returned contains the current date and time.

  * You can then format it to extract only the date part as follows:

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
// "23-12-2020"

  Getting the Current Time Stamp

  * In JavaScript, a time stamp is the number of milliseconds that have passed since January 1, 1970.

  * If you instead want to get the current time stamp, you can create a new Date object and use the getTime() method.

  * If you don’t intend to support <IE8, you can use Date.now() to directly get the time stamp without having to create a new Date object.

  * Still using currentDate

const timeStamp = currentDate.getTime()

  Parsing a Date

  * Converting a string to a JavaScript date object is done in different ways.

  * The Date object’s constructor accepts a wide variety of date formats:

const date1 = new Date('Wed, 27 July 2016 13:30:00')
const date2 = new Date('Wed, 27 July 2016 07:45:00 UTC')
const date3 = new Date('27 July 2016 13:30:00 UTC+05:45')

  * You can also pass in the year, month, day, hours, minutes, and seconds as separate arguments:

const date = new Date(2016, 6, 27, 13, 30, 0);

  * Of course, you can always use ISO date format:

const date = new Date("2016-07-27T07:45:00Z");

  * However, you can run into trouble when you do not provide the time zone explicitly!

const date1 = new Date("25 July 2016");
const date2 = new Date("July 25, 2016");

  * Either of these (above) will give you 25 July 2016 00:00:00 local time.

*/











/*

Lesson 12: Classes


ECMAScript 6 (newer version of javascript) supports class concept like any other Statically typed or object oriented language. So, object can be created out of a class in javascript as well as shown below

Classes makes it easier to implement inheritance and to create object based on blue prints 

In ES5 these blue prints are called function constructor 


var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var john5 = new Person5('John', 1998, 'teacher');

console.log(john5);





The ES6 Classes has a static method which is not visible to the instances made. And the Classes are not hoisted so they can't be called before they are declared or implemented

You can also only add method to classes but not properties
//ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log('Hey there!');
  }
}

const john6 = new Person6('John', 1999, 'teacher');
console.log(john6);

Person6.greeting();



More Eg...

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  
  start () {
    console.log('Starting....');
  }
}


let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawaski', '998cc');

Adding method brake() later to the created object

bike1.brake = function () {
  console.log('Applying Brake...');
}

console.log(bike1);
console.log(bike2);

*/
















/*

Lesson 13: Classes With Subclasses


To create subclasses using ES5 method
Now we want an object ( instance ) to be created from the Athlete5 function constructor and the Athlete5 should also have the properties of the Person5 function constructor using the ES5 way

var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
}

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
}

In order to create the correct prototype chain we are gonna use object.create beacause remember object.create allows us to manually set the prototype of an object and we want the prototype of the Athlete5 to be the prototype of the Person5 so that they become connected. Note that the Person5 is the super class while the Athlete5 is the sub class.. meaning the athlete class will be inheriting from the Person5 class
Athlete5.prototype = Object.create(Person5.prototype);


The wonMedal method can only be inherited by the instances from the Athlete5 constructor function 
Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.wonMedal();
johnAthlete5.calculateAge();






ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

var johnAthlete6 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();

*/


export const journ = ['Etinosa', 'Nosa', 'Efe'];


export class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  generateNoise(sound = 'Loud noise') {
    console.log(sound);
  }

  get localAdd() {
    return `Type: ${this.type}, legs: ${this.legs}`;
  }

  static random() {
    return 10
  }
}


export class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs)
    this.tail = tail;
  }

  generateNoise(sound = 'Meow') {
    console.log(sound)
  }
}

// on Audemy.js

// Imports & Exports
// import { journ } from './AudemyNote2.js';
// let updateJourn = journ;

// updateJourn.push(2, 5)
// console.log(updateJourn);


//////////// ************************* */

// let myName = 'Etinosa';
// console.log(myName.padStart(14, 'Favour'));
// console.log(myName.padEnd(14, 'a'));

// // Challenge: use both pad(method), without the additional string and note the result.





//////////////////////

// Classes

// import { Animal, Cat } from './AudemyNote2.js';

// let dog = new Animal('Dog', 4);
// console.log(dog);
// dog.generateNoise('bark');
// console.log(dog.localAdd)

// static
// console.log(Animal.random());


// let cat = new Cat('grey', 4, 1);
// console.log(cat)
// cat.generateNoise();


// let stupidNumbers = [10, 2, 20, 25, 45, 55, 78, 65, 30, 12, 15, 50, 75];

// const canDrink = stupidNumbers.filter(age => age >= 21)

// console.log(canDrink);


// Loop through first parameter
// seperates the parameter by the length of the second

// function splitUp(arr, num) {
//      let clear = [];
//      let numer = num;

//      for (var i = 0; i < arr.length; i += num) {
//           clear.push(arr.slice(i, numer));
//           numer += num;
//      }

//      console.log(clear)

// }






/*

//New
Use class Syntax to Define a Constructor Function...

//es6 provides a syntax to help create object using the class keyword.



//Older way of create an object with the constructor function.

//Using the [new] keyword to instantiate an object

//here we are instantiating the SpaceShuttle object.

//This is the Constructor Function below
// var SpaceShuttle = function(targetPlanet) {
//     this.targetPlanet = targetPlanet;
// }

// var avatar = new SpaceShuttle('Jupiter');

// console.log(avatar.targetPlanet);


//The Class Syntax replaces the Constructor function creation.
//Modern Method.
class SpaceShuttle {
    constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
    }
}

var avatar = new SpaceShuttle('Jupiter');

console.log(avatar.targetPlanet);


//More Practice.
function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }

    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');

console.log(carrot.name);

*/


/*
//New
Use getters and setters to Control Access to an Object...

//with the class object you often want to obtain value from an object and set a value of a property within an object. These are often called getters and setters.


//Getter function are meant to simple return or get the value of an object's private variable to the user without the user directly accessing the private variable.


//setup
class Book {
  constructor(author) {
    //so the private variable is this underscore author (_author), that gets set when you construct the object.
    this._author = author;

  }

  //getter
  //And when we do get writer it's gonna return this(_author) so you never actually interate directly with this variable
  get writer() {
    return this._author;
  }

  //setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

//second Example.
function makeClass() {
  class Thermostat {
    constructor(temp) {
      //formula for farenheint
      this.temp = 5 / 9 * (temp - 32)
    }
    get temperature() {
      return this._temp
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }

  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);

//this below is going to use the getter 
let temp = thermos.temperature;
//A key thing to look at is that there are no parentheses after [.tempature(no parentheses)]. It is a variable not a function so it does not have parentheses unlike a function

//The setter 
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

//Take_Note.
//  ****** The word [this.] means that this variable next to it [eg. _temp] can only be accessible within it's class.

//  ****Whenever you start a variable with underscore [eg. _temp] it generally signify that it's a private variable [(meaning you are not supposed to access it outside of that class)].


*/