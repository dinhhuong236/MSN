// Code below to make a working example
var btt = document.getElementById("profile");
var toDoLists = document.getElementById("toDoLists");
console.log("Hello world!");

var id = 1,
  classList = "classList",
  myDateString = "xx/xx/xxxx",
  myTimeString = "hh:mm:ss",
  topic = {
    value: "Topic"
  },
  textarea = {
    value: "Text in text area"
  };

// Here below, your code modified
btt.addEventListener('click', function() {

  // Creates a div and fill it with the html you wanted
  var elements = document.createElement("div");
  elements.innerHTML +=
            "<h1>This is the text which has been inserted by JS</h1>";


  toDoLists.appendChild(elements);
  // id++ // Disabled because fixed values for example !
})