// const Riya = {
//     name: "Riya",
//     dob: "2003",
//     graduated: false,
//     age: function () {
//         console.log(this);
//         return 2020 - this.dob;
//     }

//     //these properties can only be accessed when using riya.'property' ex:riya.age
// }

// in arrow functions, they're automatically returned
// the arrow function only references to one line above, it isn't applied globally

// const homer = {
//     name: "Homer",
//     age: 32,
//     family: {
//         wife: {
//             name: "Marge",
//             age: 32
//         }
//     },

//     pets : ["cat", "dog"]
// };

// homer.family.daugther = {
//     name: "Lisa",
//     age: 8
// }

// //DESTRUCTURING ----------------------

// const {name,age} = Riya;

// const calc = {
//     add: function () {
//         return x + y;
//     }
// }
// const {add} = calc;

// const Angel = Riya; // this is not a COPY; it's a reference to
// Angel.name = "Angel";

const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones

const Dems = presidents.filter(presidents => presidents.party === "D");
console.log(Dems);

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement

const oneTermReps = presidents.filter(
    presidents => presidents.party === "R" && presidents.terms === 1
);
console.log(oneTermReps);

//3) return only the last three presidents

console.log(presidents.slice(-3));

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice

const twoTermDems = presidents.filter(
    presidents => presidents.party === "D" && presidents.terms === 2
);
console.log(twoTermDems);

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

const lyndonJohnson = presidents[10];

if (lyndonJohnson.terms === 2) {
    console.log ("LBJ served two terms")
} else {
    console.log ("LBJ was one and done")
}