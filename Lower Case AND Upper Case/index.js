var name = prompt("what's your name");
var firstChar = name.slice(0,1);
var uppercasefirst = firstChar.toUpperCase();
var restitems = name.slice(1,name.length);
var restsmall = restitems.toLowerCase();
var fullname = uppercasefirst + restsmall;
alert("Hello" + " " + fullname);