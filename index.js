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

//create numbers and letters
//divRow
let divElement = document.createElement("div");
divElement.className = "key Backquote";
divRow.append(divElement);
let span = document.createElement("span")
span.className = "en";
span.innerHTML = "`";
divElement.append(span);

let divElement1 = document.createElement("div");
divElement1.className = "key Digit1";
divElement.after(divElement1);
let span1 = span.cloneNode("span")
span1.querySelector = ".en";
span1.innerHTML = "1";
divElement1.append(span1);

let divElement2 = document.createElement("div");
divElement2.className = "key Digit2";
divElement1.after(divElement2);
let span2 = span.cloneNode("span")
span2.querySelector = ".en";
span2.innerHTML = "2";
divElement2.append(span2);

let divElement3 = document.createElement("div");
divElement3.className = "key Digit3";
divElement2.after(divElement3);
let span3 = span.cloneNode("span")
span3.querySelector = ".en";
span3.innerHTML = "3";
divElement3.append(span3);

let divElement4 = document.createElement("div");
divElement4.className = "key Digit4";
divElement3.after(divElement4);
let span4 = span.cloneNode("span")
span4.querySelector = ".en";
span4.innerHTML = "4";
divElement4.append(span4);

let divElement5 = document.createElement("div");
divElement5.className = "key Digit5";
divElement4.after(divElement5);
let span5 = span.cloneNode("span")
span5.querySelector = ".en";
span5.innerHTML = "5";
divElement5.append(span5);

let divElement6 = document.createElement("div");
divElement6.className = "key Digit6";
divElement5.after(divElement6);
let span6 = span.cloneNode("span")
span6.querySelector = ".en";
span6.innerHTML = "6";
divElement6.append(span6);

let divElement7 = document.createElement("div");
divElement7.className = "key Digit7";
divElement6.after(divElement7);
let span7 = span.cloneNode("span")
span7.querySelector = ".en";
span7.innerHTML = "7";
divElement7.append(span7);

let divElement8 = document.createElement("div");
divElement8.className = "key Digit8";
divElement7.after(divElement8);
let span8 = span.cloneNode("span")
span8.querySelector = ".en";
span8.innerHTML = "8";
divElement8.append(span8);

let divElement9 = document.createElement("div");
divElement9.className = "key Digit9";
divElement8.after(divElement9);
let span9 = span.cloneNode("span")
span9.querySelector = ".en";
span9.innerHTML = "9";
divElement9.append(span9);

let divElement10 = document.createElement("div");
divElement10.className = "key Digit0";
divElement9.after(divElement10);
let span10 = span.cloneNode("span")
span10.querySelector = ".en";
span10.innerHTML = "0";
divElement10.append(span10);

let divElement11 = document.createElement("div");
divElement11.className = "key Minus";
divElement10.after(divElement11);
let span11 = span.cloneNode("span")
span11.querySelector = ".en";
span11.innerHTML = "-";
divElement11.append(span11);

let divElement12 = document.createElement("div");
divElement12.className = "key Equal";
divElement11.after(divElement12);
let span12 = span.cloneNode("span")
span12.querySelector = ".en";
span12.innerHTML = "=";
divElement12.append(span12);

let divElement13 = document.createElement("div");
divElement13.className = "key row__backspace Backspace";
divElement12.after(divElement13);
let span13 = span.cloneNode("span")
span13.querySelector = ".en";
span13.innerHTML = "Backspace";
divElement13.append(span13);

//divRow2
let divElement14 = document.createElement("div");
divElement14.className = "key row__tab Tab";
divRow2.append(divElement14);
let span14 = document.createElement("span")
span14.className = "en";
span14.innerHTML = "Tab";
divElement14.append(span14);

let divElement15 = document.createElement("div");
divElement15.className = "key KeyQ";
divElement14.after(divElement15);
let span15 = document.createElement("span")
span15.className = "en";
span15.innerHTML = "q";
divElement15.append(span15);

let divElement16 = document.createElement("div");
divElement16.className = "key KeyW";
divElement15.after(divElement16);
let span16 = document.createElement("span")
span16.className = "en";
span16.innerHTML = "w";
divElement16.append(span16);

let divElement17 = document.createElement("div");
divElement17.className = "key KeyE";
divElement16.after(divElement17);
let span17 = document.createElement("span")
span17.className = "en";
span17.innerHTML = "e";
divElement17.append(span17);

let divElement18 = document.createElement("div");
divElement18.className = "key KeyR";
divElement17.after(divElement18);
let span18 = document.createElement("span")
span18.className = "en";
span18.innerHTML = "r";
divElement18.append(span18);

let divElement19 = document.createElement("div");
divElement19.className = "key KeyT";
divElement18.after(divElement19);
let span19 = document.createElement("span")
span19.className = "en";
span19.innerHTML = "t";
divElement19.append(span19);

let divElement20 = document.createElement("div");
divElement20.className = "key KeyY";
divElement19.after(divElement20);
let span20 = document.createElement("span")
span20.className = "en";
span20.innerHTML = "y";
divElement20.append(span20);

let divElement21 = document.createElement("div");
divElement21.className = "key KeyU";
divElement20.after(divElement21);
let span21 = document.createElement("span")
span21.className = "en";
span21.innerHTML = "u";
divElement21.append(span21);

let divElement22 = document.createElement("div");
divElement22.className = "key KeyI";
divElement21.after(divElement22);
let span22 = document.createElement("span")
span22.className = "en";
span22.innerHTML = "i";
divElement22.append(span22);

let divElement23 = document.createElement("div");
divElement23.className = "key KeyO";
divElement22.after(divElement23);
let span23 = document.createElement("span")
span23.className = "en";
span23.innerHTML = "o";
divElement23.append(span23);

let divElement24 = document.createElement("div");
divElement24.className = "key KeyP";
divElement23.after(divElement24);
let span24 = document.createElement("span")
span24.className = "en";
span24.innerHTML = "p";
divElement24.append(span24);

let divElement25 = document.createElement("div");
divElement25.className = "key BracketLeft";
divElement24.after(divElement25);
let span25 = document.createElement("span")
span25.className = "en";
span25.innerHTML = "[";
divElement25.append(span25);

let divElement26 = document.createElement("div");
divElement26.className = "key BracketRight";
divElement25.after(divElement26);
let span26 = document.createElement("span")
span26.className = "en";
span26.innerHTML = "]";
divElement26.append(span26);

let divElement27 = document.createElement("div");
divElement27.className = "key Backslash";
divElement26.after(divElement27);
let span27 = document.createElement("span")
span27.className = "en";
span27.innerHTML = "\\";
divElement27.append(span27);

let divElement28 = document.createElement("div");
divElement28.className = "key row__delete Delete";
divElement27.after(divElement28);
let span28 = document.createElement("span")
span28.className = "en";
span28.innerHTML = "Del";
divElement28.append(span28);