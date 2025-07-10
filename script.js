// If you ever find that 'document.querySelector(".classname")'
// returns a "null" then try the following:
//   1) put the script block beneath the body for html
//   2) put the reference for the js script after the body block in the html.

const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

let refusedList = [];
let admitList = [];
// loop starts here
for (person of people) {
  console.log(person);
  if (person == "Phil" || person == "Lola") {
    refusedList.push(person);
  } else {
    admitList.push(person);
  }
}
console.log("Refused: " + refusedList);
console.log("Admit: " + admitList);

refused.textContent += refusedList;
admitted.textContent += admitList;
