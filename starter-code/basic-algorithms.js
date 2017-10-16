// Names and Inputs
var hacker1 = "manuel";
console.log ("the driver name is " + hacker1);
var hacker2 = prompt ("¿Como te llamas?");
console.log ("the navigator name is " + hacker2);

// Conditionals
if (hacker1.length>hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + "characters");
} else if (hacker1.length<hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + "characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
hacker1minCase = hacker1;
hacker1 = hacker1.toUpperCase();
var nomEspacio = [];
nomEspacio = hacker1.split("").join(" ");
nomEspacioReversed = hacker1minCase.split("").reverse().join("");
console.log(nomEspacio);
console.log(nomEspacioReversed);
var isEqual = hacker1.toUpperCase().localeCompare(hacker2.toUpperCase());
switch(isEqual){
  case 0:
    console.log("What?! You both got the same name?");
    break;
  case 1:
    console.log("The driver's name goes first");
    break;
  case -1:
    console.log("Yo, the navigator goes first definitely");
    break;
}

// BONUS TIME
var newName = prompt("New string please!");
var hacker1Palin = newName.split("").reverse().join("");
if (newName == hacker1Palin){
  console.log("Es un palindromo");
}
else{
  console.log("NO Es un palindromo");
}

// BONUS TIME 2

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec metus dui. Maecenas a mi quis nibh dignissim luctus. Cras facilisis facilisis suscipit. Vestibulum interdum, dolor ut blandit vehicula, turpis sapien elementum ipsum, vitae tincidunt ligula neque in nunc. Aliquam erat volutpat. In eleifend dictum venenatis. Nam sit amet libero malesuada, elementum purus vel, vulputate diam. In in vehicula sapien. Aenean sapien urna, fringilla eu dictum id, rhoncus a urna. Aenean lacus elit, convallis eget fermentum a, congue ut dui. Morbi luctus feugiat purus, eget viverra arcu gravida quis. Quisque dictum vitae arcu sit amet suscipit. Proin congue, sem in tincidunt condimentum, odio purus rhoncus nunc, ac pulvinar nisl leo vitae sem. Nam euismod placerat nisi.Nulla porta augue eget ex aliquet facilisis. Mauris a molestie ante, eu luctus sapien. Nunc nec laoreet odio. Nunc eu efficitur velit, at mattis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec accumsan tortor et tortor ornare lacinia. Etiam sit amet neque a leo venenatis commodo et id purus. Ut eget mattis augue, et ornare arcu.Proin et ex sit amet risus aliquam interdum. Curabitur rutrum venenatis nunc, vel cursus turpis venenatis nec. Mauris vestibulum lacus turpis, in aliquam dui pulvinar et. Aliquam nunc libero, faucibus ut felis in, varius porttitor odio. Praesent rhoncus erat est, vitae tincidunt dolor tempor quis. Cras volutpat cursus pulvinar. Suspendisse sodales elementum odio, ac elementum est pellentesque in. Duis cursus nulla at quam venenatis, vel finibus tortor cursus.";
console.log("loremIpsum tiene "+loremIpsum.split(" ").length+" palabras");
// count the number of times the latin word et appears
console.log("Lorem tiene et un total de: "+loremIpsum.match(/et/g).length);
