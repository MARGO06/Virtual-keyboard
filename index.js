//create textarea
let textarea = document.createElement("textarea");
textarea.className = "text";
document.body.append(textarea);

//create english keyboard
let div = document.createElement("div");
div.className = "keyboard";
document.body.append(div);

//create rows
let divRow = document.createElement("div");
divRow.className = "row";
div.append(divRow);

let divRow2 = divRow.cloneNode(true);
divRow2.querySelector(".row");
divRow.after(divRow2);

let divRow3 = divRow.cloneNode(true);
divRow3.querySelector(".row");
divRow2.after(divRow3);

let divRow4 = divRow.cloneNode(true);
divRow4.querySelector(".row");
divRow3.after(divRow4);

let divRow5 = divRow.cloneNode(true);
divRow5.querySelector(".row");
divRow4.after(divRow5);