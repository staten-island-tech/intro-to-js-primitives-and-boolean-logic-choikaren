
//return immediately ends function 
//cannot redefine const

// function test () {
//     console.log("I'm a function");
// }
// test ();

// const add = function(x,y) {
//     return x+y;
// }

// console.log(add(10,20));

// const hello = function() {
//     console.log("Hello");
// }

// const bye = function() {
//     console.log("Bye");
// }

// const hiBye = function() {
//     hello();
//     bye();
//     hello();
//     bye();
// }
// hiBye ();

// const name="Thrushi"; //global variable or global space

// function displayName() {
//     const name= "kelly";
//     alert(name);
// }
// displayName();

// function displayName() {
//     const name= "kelly"; //local or function scope
    
//     function sun() {
//         console.log(name); //inner function has access to outer function
//     }
//     return sun;
// }
// const myFunc = displayName();
// myFunc();

//ARRAYs------------------------------

// const names = ["Aarthi","Vicky","Vincent","Doyle","Kelly"];
// // names.push("Karen");
// names.forEach(name => console.log(name));

const numbers = [1,2,3,4,5,6];
const add = function(x,y,z,a,b,c) {
    return x+y+z+a+b+c;
};
console.log(add(...numbers));

const students = ['Riya','Omor','Alan','Jiaya','Michael','Lisa','Richard']

console.log (students.includes('junshen'))

console.log (students.includes('Alan','Savva'))
