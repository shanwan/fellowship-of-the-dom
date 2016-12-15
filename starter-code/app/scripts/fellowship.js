console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
console.log('works!')

// Part 1

function makeMiddleEarth() {
  console.log('function1')
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $('body').append("<section></section>");
  $("section").attr("id","middle-earth");
  for(var i = 0; i < lands.length; i++) {
    $("#middle-earth").append('<article><h1>'+lands[i]+'</h1></article>');
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  console.log("function2");
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  $("article").first().append("<ul></ul>");
  hobbits.forEach(function(elem) {
    $("ul").append("<li class='hobbit'>"+elem+"</li>")
  })
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  console.log("function3");
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  $("li").first().append("<div id='the-ring' class='magic-imbued-jewelry'></div>")
  $("#the-ring").click(nazgulScreech)
  //very specific need to follow even the capital letter. you call the function. therefore, it is click(function()) & hence with nazgulScreech already being coded as function, you only need to click(nazgulScreech)
}

keepItSecretKeepItSafe();

// // Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  console.log("function4");
  $("article:nth-child(2)").append("<aside></aside>");
  $("aside").append("<ul></ul>");
  buddies.forEach(function(buddy) {
    $("aside>ul").append("<li class='buddy'>"+buddy+"</li>")
  })
}

makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  console.log("function5");
  $("aside>ul>li:nth-child(4)").text("Aragorn");
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  console.log("function6");
  // assemble the hobbits and move them to Rivendell
  $("article:nth-child(2)>aside>ul").append($(".hobbit").detach())
}
leaveTheShire();

// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  $("article:nth-child(2)").append("<div class='the-fellowship'></div>")
  $(".the-fellowship").append("<ul class='mix'></ul>")
  while ($("aside>ul>li").length !==0) {
    $(".hobbit").slice(0,1).appendTo(".mix")
    alert($(".hobbit").slice(0,1).text()+ " has joined your party.")
    $(".buddy").slice(0,1).appendTo(".mix")
    alert($(".buddy").slice(0,1).text()+ " has joined your party.")
  }
}

forgeTheFellowShip()
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  $(".mix>li").first().contents().replaceWith("Gandalf the White")
  $(".mix>li").first().css({"background":"white","border":"2px solid grey"})
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("Horn of Gondor has been blown")
  $(".mix>li:nth-child(9)").contents().replaceWith("<strike>Boromir</strike>")
  alert("Boromir's been killed by the Uruk-hai")
  $(".mix>li:nth-child(9)").detach()
}

hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  $("#middle-earth>article:nth-child(3)").append("<div id='mount-doom'></div>")
  $("#mount-doom").append($(".mix>li:nth-child(2)").detach())
  $("#mount-doom").append($(".mix>li:nth-child(7)").detach())
}
itsDangerousToGoAlone()

// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  $("#middle-earth>article:nth-child(3)").append("<div id='gollum'>Gollum</div>")
  $("#mount-doom").remove()
  $("#gollum").append("<div id='the-ring' class='magic-imbued-jewelry'></div>")
  $("#the-ring").click(nazgulScreech)
}

weWantsIt()
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  $("#gollum").remove()
  $("#the-ring").remove()
  $(".buddy").remove()
  $(".hobbit").remove()
  $("ul").remove()
  $("li").remove()
  makeHobbits()
}
thereAndBackAgain()
