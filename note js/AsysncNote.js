/* Asynchronous js

* First go to --> https://medium.com/@badabee440/learning-asynchronous-javascript-617734807131 before anything else...

*/



/*

  As we all know, JavaScript code is Synchronous and Single-threaded and we can think of our JavaScript code as a list of instructions that our browser completes one by one. It basically runs the code line by line where each line must be completed before the next one starts, and this can be referred to as an event loop.

  Asynchronous code is anything that gets queued up on another queue and not on the event loop so other statements/code can be run without the async code blocking the event loop. For example, you may want to prepare a meal and also do the dishes, you don’t have to wait until the food is ready before you wash your dishes you can do it while the food gets cooked. Sending an HTTP request is like cooking, the request takes a certain amount of time to complete but then the event loop has already moved on to the next line of code. We will learn about three of the most common ways of handling asynchronous code and how to implement them.



Callbacks
  Callback functions can be referred to as the old school method of writing asynchronous code. Callbacks are passed as an argument to an asynchronous function and called when all the asynchronous activities are done.

  Using a lot of callbacks can lead to something known as callback hell as we tend to have lots of nested code that’s usually hard to read. Now we’ll talk about a method that helps us write neat code asynchronously.



Promises
  A promise is an object that may produce a single value some time in the future. It takes an anonymous function which in turn takes two arguments, resolve and reject. Resolve for when the promise returns valid data and Reject when it encounters an error. Promises serve the same purpose as callbacks but they’re a bit more powerful.

  Promises are great for asynchronous programming especially when you don’t want the JavaScript to block the execution of the code for example, when we make API requests, we use a promise so the task can happen in the background. We append '.then' to the promise whenever we have a function that we want to call after the promise has been resolved.



Async/Await
  An async function is a function that returns a promise. It is quite similar to promises but their syntaxes differ. Promises have .then that we have to chain to our code but the async function uses async and await to achieve the same aim. In simpler terms, the await keyword basically says “Pause the function till I have something”. Note that we use the await keyword in front of any function that returns a promise and the await keyword can only work in a function marked as async. Once the promise is resolved, the function moves to the next line and awaits the next move.



Conclusion
  We covered the basics of asynchronous code and talked about three different methods of implementation:

Callbacks: This is the old school method and it is passed as an argument to an asynchronous function. It is essential we learn this method.

Promises: This is a very common technique as it is widely used, and it produces a single value sometime in the future. And '.then' to act on the value resolved and '.catch' to act on the value rejected

Async/Await: This method uses promises but in a more readable and easy to understand way. In order to catch errors try {} and catch {} are used

*/


