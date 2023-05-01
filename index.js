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

//divRow3
let divElement29 = document.createElement("div");
divElement29.className = "key row__caps CapsLock";
divRow3.append(divElement29);
let span29 = document.createElement("span")
span29.className = "en";
span29.innerHTML = "CapsLock";
divElement29.append(span29);

let divElement30 = document.createElement("div");
divElement30.className = "key KeyA";
divElement29.after(divElement30);
let span30 = document.createElement("span")
span30.className = "en";
span30.innerHTML = "a";
divElement30.append(span30);

let divElement31 = document.createElement("div");
divElement31.className = "key KeyS";
divElement30.after(divElement31);
let span31 = document.createElement("span")
span31.className = "en";
span31.innerHTML = "s";
divElement31.append(span31);

let divElement32 = document.createElement("div");
divElement32.className = "key KeyD";
divElement31.after(divElement32);
let span32 = document.createElement("span")
span32.className = "en";
span32.innerHTML = "d";
divElement32.append(span32);

let divElement33 = document.createElement("div");
divElement33.className = "key KeyF";
divElement32.after(divElement33);
let span33 = document.createElement("span")
span33.className = "en";
span33.innerHTML = "f";
divElement33.append(span33);

let divElement34 = document.createElement("div");
divElement34.className = "key KeyG";
divElement33.after(divElement34);
let span34 = document.createElement("span")
span34.className = "en";
span34.innerHTML = "g";
divElement34.append(span34);

let divElement35 = document.createElement("div");
divElement35.className = "key KeyH";
divElement34.after(divElement35);
let span35 = document.createElement("span")
span35.className = "en";
span35.innerHTML = "h";
divElement35.append(span35);

let divElement36 = document.createElement("div");
divElement36.className = "key KeyJ";
divElement35.after(divElement36);
let span36 = document.createElement("span")
span36.className = "en";
span36.innerHTML = "j";
divElement36.append(span36);

let divElement37 = document.createElement("div");
divElement37.className = "key KeyK";
divElement36.after(divElement37);
let span37 = document.createElement("span")
span37.className = "en";
span37.innerHTML = "k";
divElement37.append(span37);

let divElement38 = document.createElement("div");
divElement38.className = "key KeyL";
divElement37.after(divElement38);
let span38 = document.createElement("span")
span38.className = "en";
span38.innerHTML = "l";
divElement38.append(span38);

let divElement39 = document.createElement("div");
divElement39.className = "key Semicolon";
divElement38.after(divElement39);
let span39 = document.createElement("span")
span39.className = "en";
span39.innerHTML = ";";
divElement39.append(span39);

let divElement40 = document.createElement("div");
divElement40.className = "key Quote";
divElement39.after(divElement40);
let span40 = document.createElement("span")
span40.className = "en";
span40.innerHTML = "'";
divElement40.append(span40);

let divElement41 = document.createElement("div");
divElement41.className = "key row__enter Enter";
divElement40.after(divElement41);
let span41 = document.createElement("span")
span41.className = "en";
span41.innerHTML = "Enter";
divElement41.append(span41);

//divRow4
let divElement42 = document.createElement("div");
divElement42.className = "key row__shift ShiftLeft";
divRow4.append(divElement42);
let span42 = document.createElement("span")
span42.className = "en";
span42.innerHTML = "Shift";
divElement42.append(span42);

let divElement43 = document.createElement("div");
divElement43.className = "key KeyZ";
divElement42.after(divElement43);
let span43 = document.createElement("span")
span43.className = "en";
span43.innerHTML = "z";
divElement43.append(span43);

let divElement44 = document.createElement("div");
divElement44.className = "key KeyX";
divElement43.after(divElement44);
let span44 = document.createElement("span")
span44.className = "en";
span44.innerHTML = "x";
divElement44.append(span44);

let divElement45 = document.createElement("div");
divElement45.className = "key KeyC";
divElement44.after(divElement45);
let span45 = document.createElement("span")
span45.className = "en";
span45.innerHTML = "c";
divElement45.append(span45);

let divElement46 = document.createElement("div");
divElement46.className = "key KeyV";
divElement45.after(divElement46);
let span46 = document.createElement("span")
span46.className = "en";
span46.innerHTML = "v";
divElement46.append(span46);

let divElement47 = document.createElement("div");
divElement47.className = "key KeyB";
divElement46.after(divElement47);
let span47 = document.createElement("span")
span47.className = "en";
span47.innerHTML = "b";
divElement47.append(span47);

let divElement48 = document.createElement("div");
divElement48.className = "key KeyN";
divElement47.after(divElement48);
let span48 = document.createElement("span")
span48.className = "en";
span48.innerHTML = "n";
divElement48.append(span48);

let divElement49 = document.createElement("div");
divElement49.className = "key KeyM";
divElement48.after(divElement49);
let span49 = document.createElement("span")
span49.className = "en";
span49.innerHTML = "m";
divElement49.append(span49);

let divElement50 = document.createElement("div");
divElement50.className = "key Comma";
divElement49.after(divElement50);
let span50 = document.createElement("span")
span50.className = "en";
span50.innerHTML = ",";
divElement50.append(span50);

let divElement51 = document.createElement("div");
divElement51.className = "key Period";
divElement50.after(divElement51);
let span51 = document.createElement("span")
span51.className = "en";
span51.innerHTML = ".";
divElement51.append(span51);

let divElement52 = document.createElement("div");
divElement52.className = "key Slash";
divElement51.after(divElement52);
let span52 = document.createElement("span")
span52.className = "en";
span52.innerHTML = "/";
divElement52.append(span52);

let divElement53 = document.createElement("div");
divElement53.className = "key row__arrow ArrowUp";
divElement52.after(divElement53);
let span53 = document.createElement("span")
span53.className = "en";
span53.innerHTML = "▲";
divElement53.append(span53);

let divElement54 = document.createElement("div");
divElement54.className = "key row__shift-right ShiftRight";
divElement53.after(divElement54);
let span54 = document.createElement("span")
span54.className = "en";
span54.innerHTML = "Shift";
divElement54.append(span54);

//divRow5
let divElement55 = document.createElement("div");
divElement55.className = "key row__ctrl ControlLeft";
divRow5.append(divElement55);
let span55 = document.createElement("span")
span55.className = "en";
span55.innerHTML = "Ctrl";
divElement55.append(span55);

let divElement56 = document.createElement("div");
divElement56.className = "key row__meta MetaLeft";
divElement55.after(divElement56);
let span56 = document.createElement("span")
span56.className = "en";
span56.innerHTML = "Win";
divElement56.append(span56);

let divElement57 = document.createElement("div");
divElement57.className = "key row__alt AltLeft";
divElement56.after(divElement57);
let span57 = document.createElement("span")
span57.className = "en";
span57.innerHTML = "Alt";
divElement57.append(span57);

let divElement58 = document.createElement("div");
divElement58.className = "key row__space Space";
divElement57.after(divElement58);
let span58 = document.createElement("span")
span58.className = "en";
span58.innerHTML = " ";
divElement58.append(span58);

let divElement59 = document.createElement("div");
divElement59.className = "key row__alt-right AltRight";
divElement58.after(divElement59);
let span59 = document.createElement("span")
span59.className = "en";
span59.innerHTML = "Alt";
divElement59.append(span59);

let divElement60 = document.createElement("div");
divElement60.className = "key row__arrow ArrowLeft";
divElement59.after(divElement60);
let span60 = document.createElement("span")
span60.className = "en";
span60.innerHTML = "◀";
divElement60.append(span60);

let divElement61 = document.createElement("div");
divElement61.className = "key row__arrow ArrowDown";
divElement60.after(divElement61);
let span61 = document.createElement("span")
span61.className = "en";
span61.innerHTML = "▼";
divElement61.append(span61);

let divElement62 = document.createElement("div");
divElement62.className = "key row__arrow ArrowRight";
divElement61.after(divElement62);
let span62 = document.createElement("span")
span62.className = "en";
span62.innerHTML = "▶";
divElement62.append(span62);

let divElement63 = document.createElement("div");
divElement63.className = "key row__ctrl-right ControlRight";
divElement62.after(divElement63);
let span63 = document.createElement("span")
span63.className = "en";
span63.innerHTML = "Ctrl";
divElement63.append(span63);

let windows = document.createElement("h2");
windows.className = "text2";
windows.innerHTML = "Клавиатура создана в операционной системе Windows"
document.body.append(windows);

//add keydown
const text = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const key = document.querySelectorAll(".key");

  document.addEventListener("keydown",function(event){
      for(let i=0; i<key.length; i=i+1){
          if( key[i].getAttribute("class").includes(event.code)){
              key[i].classList.add("active");
            }
        }
        }) 
//add keyup
        document.addEventListener("keyup",function(event){
          for(let i=0; i<key.length; i=i+1){
              if( key[i].getAttribute("class").includes(event.code)){
                  key[i].classList.remove("active");
                }
            }
            }) 

