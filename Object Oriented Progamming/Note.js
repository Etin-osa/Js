/*

The four core concept of object programming language are
*    Encapsulation
*    Abstraction
*    Inheritance
*    Polymorphism


Encapsulation:
     "Reduces commplexity" and places the properties and method in he same environment which leads to less parameter in the function and "increase reusability".

Abstraction:
     Hite details and commplexity and isolate impact of changes

Inheritance:
     Eliminate redundant code

Polymorphism:
     Refactor ugly switch case statement
*/







/*

Lesson 1

* Creating Obejects
* Factories and Constructors
* Primitives and Reference Types
* Working with properties
* Private Properties
* Getters / Setters


// Factory function
function createCircle(radius) {
     return {
          radius,
          draw: function() {
               console.log('draw')
          }
     }
}

const circle = createCircle(1);
console.log(circle);




// Every object in js have a property called constructor which reference to the object or function use in creating that object

*    in js everything is an object even functions.... Explain this

*    Primitives are copied by their value

*    Objects are copied by their references





Adding and Removing properties..

function Createcircle(radius) {
     this.radius = radius;
     this.dream = function() {
          console.log('dream')
     }
}

const circle = new Createcircle('Late!!')
To add
circle.arc = { value: '360deg'}
console.log(circle);


To delete
delete circle.dream
console.log(circle);





Enumerate properties

function Createcircle(radius) {
     this.radius = radius;
     this.dream = function () {
          console.log('dream')
     }
}
const circle = new Createcircle(10);


// To enumerate through the object use the for in loop
for (let keys in circle) {
     if (typeof circle[keys] !== 'function') 
          console.log(keys);
}


// To get all the keys in an object use object.keys and it returns an array
const kids = Object.keys(circle)
console.log(kids)


// to check if the object has a certain element use the in operator
if ('radius' in circle) 
     console.log('Circle has a radius!!');










Abstraction
Main point of abstraction is

*    To hide the details
*    show the essentials

The trick is to create the method and properties without the this keyword


function Createcircle(radius) {
     this.radius = radius;

     let noReal = 'Real Madrid';
     const clima = { Madrid: 'bright', Barcelona: 'rain'}

     let defaultLlocation = function() {
          return {
               clear: 'clear',
               fuck: function() {
                    console.log('yas!!')
               }
          }
     }

     this.dream = function () {
          console.log(noReal)
          let reciever = defaultLlocation();
          console.log(reciever)
     }
}

const circle = new Createcircle(10);
console.log(circle)








To reference properties created due to Abstraction

function Createcircle(radius) {
     this.radius = radius;

     let noReal = 'Real Madrid';
     this.getnoReal = function() {
          return noReal
     }

     this.dream = function () {
          console.log('dream')
     }
}

const circle = new Createcircle(10);
console.log(circle)





Using the object.property syntax
function Createcircle(radius) {
     this.radius = radius;

     let noReal = { 
          largest: 'Real Madrid',
          finest: 'Barcelona'     
     };

     this.dream = function () {
          console.log('dream')
     }

     Object.defineProperty(this, 'noReal', {
          // just to see it 
          get: function() {
               return noReal;
          },

          // To affect the property or (ies) in the noreal object
          set: function(value) {
               if (!noReal.finest) {
                    noReal.finest = value
               }
          }
     })
}

const circle = new Createcircle(10);
circle.noReal.finest = 'Valencia';

console.log(circle);
*/


/*
1)   John.start();

     *    Get a timer in second
     *    set the timer
     *    Iterate the timer

2)   John.stop()

     *    Get the current timer
     *    stop the current timer


3)   john.duration

     *    Get the number of seconds counted

4)   john.reset() 

     *    Get the the current timer
     *    Reset it to 0

An conditional statement so none of the method can be called more than once consecutively

*/

