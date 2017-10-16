// Names and Inputs
var hacker1 = "manuel";
console.log ("the driver name is " + hacker1);
var hacker2 = prompt ("¿Como te llamas?");
console.log ("the navigator name is " + hacker2);

// Conditionals
if (hacker1.length>hacker2.length) {
  console.log("the driver has the longest name, it has " + hacker1.length + "characters");
} else if (hacker1.length<hacker2.length) {
  console.log("I, navigator got the longest name, it has " + hacker2.length + "characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops
hacker1minCase = hacker1;
hacker1 = hacker1.toUpperCase();
var nomEspacio = [];
/*
for (var i=0; i < hacker1.length;i++) {
   if (i< hacker1.length-1){
    nomEspacio.push(hacker1[i]+" ");
   }else{
     nomEspacio.push(hacker1[i]);
   }
}*/
nomEspacio = hacker1.split("");
nomEspacio = nomEspacio.join(" ");
nomEspacioReversed = hacker1minCase.split("");
nomEspacioReversed.reverse();
nomEspacioReversed = nomEspacioReversed.join("");
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
