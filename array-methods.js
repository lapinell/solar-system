const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

planets.forEach( function(planet){
    //check to see if foreach function is connected to array
    console.log('test planet:', planet);
    //output to DOM element id planets
   let planetContainer = "";
    //use string templates to construct the DOM elements
    planetContainer += `<p>` + planet + `</p>`;
    //check planetContainer contents forEach round
    console.log('test planetContainer', planetContainer);

    planetEl.innerHTML += planetContainer;

});


/*
    Use the map method to create a new array where the 
    
        //MDN example
            var kvArray = [{key: 1, value: 10}, 
                {key: 2, value: 20}, 
                {key: 3, value: 30}];

            var reformattedArray = kvArray.map(obj =>{ 
            var rObj = {};
            rObj[obj.key] = obj.value;
            return rObj;
            })
            // reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

            // kvArray is still: 
            // [{key: 1, value: 10}, 
            //  {key: 2, value: 20}, 
            //  {key: 3, value: 30}]

    first letter of each planet is capitalized. 
    
    Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let solarSystem = [];
const capitalizeName = planets.map( function(planet) {
    console.log("planet is:", planet);
    //Split the array item/string into an array of letters
    let planetParts = planet.split("");
    console.log('The parts of this planet are:', planetParts);
    //find first letter
    const itemZero = planetParts[0];
    console.log("first letter is:", itemZero);
    //Capatalize the first item (index 0) using toUpperCase()
    let capitalize = itemZero.toUpperCase();
    console.log('Capitalized part is:', capitalize);
    //remove old item 0
    planetParts.shift();
    console.log('planet without itemZero:', planetParts);
    //insert Capatilized item back into the array as new item 0
    planetParts.unshift(capitalize);
    console.log('new parts:', planetParts);
    //Join the array back into a string
    newPlanet = planetParts.join("");
    console.log("new planet:", newPlanet);
    //Return to the new array
    solarSystem.push(newPlanet);
    console.log(solarSystem);
    return solarSystem;
})

console.log(solarSystem);
solarSystem.forEach( function(planet){
    //check to see if foreach function is connected to array
    console.log('test planet:', planet);
    //output to DOM element id planets
   let planetContainer = "";
    //use string templates to construct the DOM elements
    planetContainer += `<p>` + planet + `</p>`;
    //check planetContainer contents forEach round
    console.log('test planetContainer', planetContainer);

    planetEl.innerHTML += planetContainer;

});
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
function filterItems (item) {
    return solarSystem.filter(function(planet) {
        return planet.toLowerCase().indexOf(item.toLowerCase()) > -1;
    })
}

console.log(filterItems('e'));
// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]


let sentence = words.reduce(
    function(a, b) {
        return a + " " + b;
    },
    ""
);

console.log('the sentence is', sentence);
