var speakWord = "Hello";
function speak(name) {
  console.log(speakWord + " " + name);
}
var speakWord = "Good Bye";
function speak(name) {
  console.log(speakWord + " " + name);
}
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker(names[i]);
      function byeSpeaker(names) {
        console.log("Good Bye " + names);
      }
    }else {
      helloSpeaker(names[i]);
      function helloSpeaker(names) {
        console.log("Hello " + names);
      }
    }
 }
}
)();