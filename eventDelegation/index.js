document.getElementById('my').addEventListener('click',(event) => {
    if(event.target.tagName === 'LI'){
        alert('Clicked on '+ event.target.textContent)
    }
})
//

//A technique that allows u to manage events for multiple elements efficiently 
// by using a single event listener
// to the common element rather than attaching the event listener
// on the each individual eleement



//Event delegation in JavaScript is a technique for handling events efficiently,
//  particularly when dealing with a large number of similar elements
//  or dynamically added elements. 
// It leverages the concept of event bubbling, where an event triggered on a child element propagates up the DOM tree to its parent elements.