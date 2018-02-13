const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const solarSystem = document.getElementById("planets");



planets.forEach( function(planet){
    //check to see if foreach function is connected to array
    console.log('test planet:', planet);
    //output to DOM element id planets
   let planetContainer = "";
    //use string templates to construct the DOM elements
    planetContainer += `<p>` + planet + `</p>`;
    //check planetContainer contents forEach round
    console.log('test planetContainer', planetContainer);

    solarSystem.innerHTML += planetContainer;


})

// const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]