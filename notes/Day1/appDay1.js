// let age = 45;
// if (age < 18) {
//     console.log("You are a child");
// }
// else if (age == 18) {
//     console.log("happy Birthday");
// }
// else {
//     console.log("you are over 18");
// }

console.log("connected");

let light = "green";
if (light === "green") {
    console.log("go");
} else if (light === "yellow") {
    console.log("caution!");
} else {
    console.log("stop");
}

let kristyIntolerant = true;
let baoBaoIntolerant = true;

if (kristyIntolerant === true && baoBaoIntolerant === true) {
    console.log("Only almond milk");
} else if (kristyIntolerant === true || baoBaoIntolerant === true) {
    console.log("Get both almond and regular milk");
} else {
    console.log("Only regular milk");
}

let temperature = 80;
if (temperature < 68) {
    console.log ("too cold");
} else if (72 > temperature ) {
    console.log ("perfect");
} else if (76 > temperature) {
    console.log ("warm");
} else {
    console.log ("too hot");
}
