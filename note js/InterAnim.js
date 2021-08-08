/*

Intersection Observer

  The intersection observer is an html5 api that tracks an element when it enters a viewport or screen

  First is to create an observer object
    let observer = new IntersectionObserver(callback, options)

  The first parameter of the intObs is a callback function

  The second parameter is options which is an object that takes three properties the root, rootmargin, threshold so
      {
        root: value,
        rootMargin: value,
        threshold: value
      }

  The root is literally the entire viewport (i.e the entire screen), you can choose to set to null of don't even add it at all

  The rootMargin is like the css margin element it adds margin to the viewport if you wish; it takes a string
      rootMargin: '-250px 0'

  The reason it's -250px is because you want to obsever 250px into the body, not out of it; so that means you want 250px from the top and from the bottom and 0 from left and right

  The threshold takes a number and the use of threshold is asking at what percentage does the intObs observe the element (although you don't add percentage to the value of threshold)
      threshold: 0.05

  To observe an element in the html you call the '.observe' method from the observer created and it takes the html element to watch as the parameter

  The callback function takes in 2 params

  The first parameter is an array of element(s) you choose to observe, and it's commonly called entries 

  So to work with each entry you have to loop through and decide what to do with it

  Each entry have access to several property like 'isIntersecting' which checks if the element has entered the viewport 
      others are
        entry.target, entry.time, entry.intersectionRatio etc...

  The second params in the callback function is the observer object created, for example if you only want to affect the element once in the callback function you can add 
    secondParms.unobserve(entry.target)

  The second Params is the observer object created...

  
  Observe the following code create a container element containing 30 paragraph and observe the each paragraph below

  || HTML
  <div class="container"><p> Dummy Test </p> * 30</div>

  || CSS
  .container {
    margin: 150px;
  }

  .container p {
    color: #777;
    font-size: 1.6rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    line-height: 1.6;
    padding: 1rem;
    border: 1px solid #eee;
    margin: 1rem 0;
    transform: translateX(-100%);
    transition: transform 0.5s linear;
    //opacity: 0;
  }

  .container p.active {
  opacity: 1;
  transform: translateX(0)
}

  .container p: nth - child(5n) {
  color: cornflowerblue;
}

  .cover {
  position: fixed;
  top: 200px; right: 0;
  bottom: 200px; left: 0;
  background - color: hsla(30deg, 40 %, 80 %, 0.5);
}

  || JS
  document.addEventListener('DOMContentLoaded', () => {
      let options = {
        root: null,
        rootMargin: '-200px 0px',
        threshold: 0.05
      };
      let htmlArr = Array.from(document.querySelectorAll('.container p'))

      let observer = new IntersectionObserver(beTouching, options)
      htmlArr.forEach(p => observer.observe(p))

    })

    function beTouching(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        } else {
          if (entry.target.classList.contains('active')) {
            entry.target.classList.remove('active')
          }
        }
      })
    }

*/














/*

RequestAnimationFrame

  RequestAnimationFrame is a another option for continous animation like setInterval 

  With the setInterval there is a given amount of time for something to happen continously

  But with RequestAnimationFrame there isn't really a given amount of time; it works whenever the window or html repaint itself 

  So for every time the window repaint itself RequestAnimationFrame takes action

  Another thing to note in the RequestAnimationFrame is that the browser pauses the animation if you leave the screen (i.e go to another tab)

  function paint() {
    number++
    output.textContent = number // create an element with class or id as 'output'

    if (number < 300) {
      requestAnimationFrame(paint)
    }
  }

  //requestAnimationFrame(paint)
  // paint()

  Instead of calling the requestAnimationFrame outside the function you also can just call the function

  The difference is that by calling the requestAnimationFrame it adds a property called the highResolutionDOMTimeStamp

*/















/*

MutationObservers

  The MutationObservers watches the DOM for changes to any element in the DOM

  The first step is to create a MutationObservers object 
      let observer = new MutationObserver(callback);

  The observe the element we use 
      observer.observe(nodeElement, config)

  The config is an object containing several properties and these are the conditions of which the MutationObserver is going to observe, it has 7 properties

  The config || options must have one of these three properties or it's going to return an error
    childList, attributes, characterData

  The other four properties work in conjunction with one of those three and all are boolean except the attributeFilter which is an array

    attributes: track changes made to the attributes,
    attributeOldValue: track the old attribute value,
    attributeFilter: An array of the attribute you want to watch (if you want to be specific)
    childList: track every in the node element (the text, child element, anything in the node element given)
    subtree: track deeper into the element down to changes in the child element of the node we are observing
    characterData: tracks character data
    characterDataOldValue: track character data old value

  The callback function takes in a mutationList and array like object 

  The array contains all the changes that has being made to the node element that's being observe by the conditions given; the element in the mutationList are called records

  The element in the mutationList have access to the 
    'target', 'addNodes', 'removedNodes', 'OldValue' , 'attributeName', 'attributeNamespace', ''nextSibling', 'previousSibling', 'type' 

  The type returns a string of the conidition that change eg. attributes or childList etc...

  The observer.disconnect() stops watching the element you asked it to watch and also you can track all the changes without the mutationList by calling 'observer.takeRecords()'


  let observer;

    document.addEventListener('DOMContentLoaded', init)

    function init() {
      let p = document.querySelector('main > p');
      p.addEventListener('click', changes)

      let config = {
        attributes: true,
        attributeOldValue: true,
        attributFilter: ['data-thing', 'title', 'style'],
        childList: true,
        subtree: true,
        characterData: false,
        characterDataOldValue: false
      }

      observer = new MutationObserver(mutated)
      observer.observe(p, config)
    }

    function changes(ev) {
      let p = ev.currentTarget

      let span = document.createElement('span')
      span.textContent = 'THE FUNNY COMMENT YOU ASKED FOR !'

      p.textContent = ` This is the new Content `;
      p.setAttribute('data-thing', 123)
      p.appendChild(span)
      p.title = 'never Mind the Change'
    }

    function mutated(mutationList) {
      console.log(mutationList)
      for (let mutation of mutationList) {
        if (mutation.type == 'childList') {
          console.log(`A child node has been added or remove.`)
        } else if (mutation.type == 'attributes') {
          console.log(`The ${mutation.attributeName} attribute was modified`)
        }
      }
    }

*/