//create textarea
let textarea = document.createElement("textarea");
textarea.className = "text";
document.body.append(textarea);

//create english keyboard
let div = document.createElement("div");
div.className = "keyboard";
document.body.append(div);

//create row
let divRow = document.createElement("div");
divRow.className = "row";
div.append(divRow);

//create rowRu
let divRowRU = document.createElement("div");
divRowRU.className = "row2";
div.append(divRowRU);

//create letters and numbers (english)
const elementRow1 = ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
                    "Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","Del",
                    "CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter",
                    "Shift","z","x","c","v","b","n","m",",",".","/","▲","Shift",
                     "Ctrl","Win","Alt"," ","Alt","◀","▼","▶","Ctrl"];
const elementEn = ["`","1","2","3","4","5","6","7","8","9","0","-","=",
                   "q","w","e","r","t","y","u","i","o","p","[","]","\\",
                   "a","s","d","f","g","h","j","k","l",";","'",
                   "z","x","c","v","b","n","m",",",".","/",
                   " "]
const codeRow1 = ["key Backquote","key Digit1","key Digit2","key Digit3","key Digit4","key Digit5","key Digit6",
                  "key Digit7","key Digit8","key Digit9","key Digit0","key Minus","key Equal","key row__backspace Backspace",
                  "key row__tab Tab","key KeyQ","key KeyW","key KeyE","key KeyR","key KeyT","key KeyY",
                  "key KeyU","key KeyI","key KeyO","key KeyP","key BracketLeft","key BracketRight","key Backslash","key row__delete Delete",
                  "key row__caps CapsLock","key KeyA","key KeyS","key KeyD","key KeyF","key KeyG","key KeyH","key KeyJ","key KeyK","key KeyL",
                  "key Semicolon","key Quote","key row__enter Enter","key row__shift ShiftLeft","key KeyZ","key KeyX","key KeyC",
                  "key KeyV","key KeyB","key KeyN","key KeyM","key Comma","key Period","key Slash","key row__arrow ArrowUp",
                  "key row__shift-right ShiftRight","key row__ctrl ControlLeft","key row__meta MetaLeft","key row__alt AltLeft","key row__space Space","key row__alt-right AltRight",
                  "key row__arrow2 ArrowLeft","key row__arrow2 ArrowDown","key row__arrow2 ArrowRight","key row__ctrl-right ControlRight"];
                  
                  for(let i=0; i<elementRow1.length; i++){
                    let divElement = document.createElement("div");
                        divElement.className = `${codeRow1[i]}`;
                        divRow.append(divElement);
                        let span = document.createElement("span")
                        span.className = "en";
                        span.innerHTML = `${elementRow1[i]}`;
                        divElement.append(span);
                  }
//create letters and numbers (russian)
const elementRow2 = ["ё","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
                    "Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","Del",
                    "CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter",
                    "Shift","я","ч","c","м","и","т","ь","б","ю","/","▲","Shift",
                     "Ctrl","Win","Alt"," ","Alt","◀","▼","▶","Ctrl"];
                   for(let i=0; i<elementRow2.length; i++){
                      let divElement = document.createElement("div");
                          divElement.className = `${codeRow1[i]}`;
                          divRowRU.append(divElement);
                          let spanRU = document.createElement("span")
                          spanRU.className = "ru";
                          spanRU.innerHTML = `${elementRow2[i]}`;
                          divElement.append(spanRU);
                    }


//create press keys on a physical keyboard and a virtual keyboard
let windows = document.createElement("h2");
windows.className = "text2";
windows.innerHTML = "Клавиатура создана в операционной системе Windows"
document.body.append(windows);

let windows2 = document.createElement("h2");
windows2.className = "text2";
windows2.innerHTML = "Для переключения языка коммбинация: левые Shift+Alt"
document.body.append(windows2);
let lang;
let spanElement = document.querySelectorAll('span');
                  

//local storage
for(let i=0; i<spanElement.length; i=i+1){
  if(spanElement[i].getAttribute("class").includes('en')){
    window.addEventListener('beforeunload', localStorage.setItem("lang",'en'))
    console.log('true')
  }
}
function getLocalStorage() {
  const spanElement = localStorage.getItem('lang');
  if (spanElement !== null) {
    lang = spanElement;
  }console.log("hhh")
}
window.addEventListener('load', getLocalStorage)
//add keydown
/*const text = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const key = document.querySelectorAll(".key");
let en = document.querySelectorAll(".en");

                  
document.addEventListener("keydown",function(event){
  for(let i=0; i<key.length; i=i+1){
      if( key[i].getAttribute("class").includes(event.code)){
         key[i].classList.add("active");
         if(localStorage.getItem('lang')==='en'){
            
              textarea.value += key[i].textContent
              console.log('k')
            }
          }
         }
        }
         
) 
//add keyup
document.addEventListener("keyup",function(event){
  for(let i=0; i<key.length; i=i+1){
    if( key[i].getAttribute("class").includes(event.code)){
      key[i].classList.remove("active");
    }
  }
}) 
*/

//change language keyboard
let pressed = new Set();
let ru = document.querySelectorAll(".ru");

let row = document.querySelector(".row");
let row2 = document.querySelector(".row2");



//en->ru
document.addEventListener("keydown",function(event){
  pressed.add(event.code)
    if(pressed.has("ShiftLeft")&&pressed.has("AltLeft")){
      if( localStorage.getItem('lang')==='en'){
          ru.forEach(rus => {
            rus.classList.add("active")
          });
          row2.classList.add("active");
          en.forEach(eng => {
            eng.classList.add('hidden')
          });
          row.classList.add('hidden')
          for(let i=0; i<spanElement.length; i=i+1){
            if(spanElement[i].getAttribute("class").includes('ru')){
              window.addEventListener('beforeunload', localStorage.setItem("lang",'ru'))
              console.log('rue')
            }
          }
          function getLocalStorage() {
            const spanElement = localStorage.getItem('lang');
            if (spanElement !== null) {
              lang = spanElement;
            }console.log("h")
          }
          window.addEventListener('load', getLocalStorage)
    }else{ru.forEach(rus => {
      rus.classList.remove("active")
    });
    row2.classList.remove("active");
    en.forEach(eng => {
      eng.classList.remove('hidden')
    });
    row.classList.remove('hidden')
    console.log('hello2')
      localStorage.setItem("lang",'en')
    }
  }
  })
    document.addEventListener("keyup",function(event){
      pressed.delete(event.code);
      console.log('hello')
    })
    
  /*  //add text to textarea
    for(let i=0; i<key.length; i=i+1){
    if(key[i].classList.contains('active')){
      textarea.value += key[i].textContent
      console.log('eee')
    }
  }*/


  //add keydown
const text = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const key = document.querySelectorAll(".key");
let en = document.querySelectorAll(".en");

                  
document.addEventListener("keydown",function(event){
  for(let i=0; i<key.length; i=i+1){
      if( key[i].getAttribute("class").includes(event.code)){
         key[i].classList.add("active");
            }
          }
         }
        
         
) 
//add keyup
document.addEventListener("keyup",function(event){
  for(let i=0; i<key.length; i=i+1){
    if( key[i].getAttribute("class").includes(event.code)){
      key[i].classList.remove("active");
    }
  }
}) 

//event mouse
document.querySelector('.keyboard').onclick = myClick;
function myClick(){
  for(let i=0; i<elementRow1.length; i=i+1){
  document.querySelector(".text").innerHTML += elementRow1
}}