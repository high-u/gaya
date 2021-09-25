(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const x =  require("faye/client/faye-browser");

const script123 = document.createElement("script");
script123.src = "https://cdn.jsdelivr.net/npm/faye@1.4.0/client/faye-browser.js";
document.body.appendChild(script123);

var client = new Faye.Client('http://localhost:8000/');

// const alice = gun.get('key3').put({name: 'alice', age: 22});
// alice.on(function(node){
//   console.log('Subscribed to Alice!', node);
// });

const el = document.getElementById("b");
el.onclick = () => {
  const a = gun.get('key3');
  console.log(a);
};


function hoge(message) {
  // let message = "あいうえお"
  let plusHeight = 100;
  const css = document.createElement('style');
  css.media = 'screen';
  css.type = 'text/css';
  const height = Math.floor(document.documentElement.clientHeight / 2) + plusHeight;
  plusHeight += 48;
  const left = document.documentElement.clientWidth;
  rules = document.createTextNode(`@keyframes fade-in{ 0% { opacity: 0; transform: translateX(0px); } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; transform: translateX(${left}px) } }`);
  css.appendChild(rules);
  document.getElementsByTagName('head')[0].appendChild(css);
  
  const messageDiv = document.createElement("div");
  let fontSize = 24;
  
  messageDiv.setAttribute('style',`font-weight: bold; font-size: ${fontSize}px; color: white; text-shadow: black 0 0 8px; position: fixed; z-index:9999999; top: ${height}px; left: 0; transform: translate(0, ${height}px); opacity: 0; animation-name: fade-in; animation-duration: 5000ms; animation-iteration-count: 1;`);
  
  let messageText = document.createTextNode(message);
  messageDiv.appendChild(messageText);
  
  document.body.appendChild(messageDiv);
}




const newElement123 = document.createElement("div");
newElement123.setAttribute('style','position: fixed; left: 0; top: 0; z-index:999999; background-color: #fff; padding: 10px; border-radius: 6px; filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));');

const roomWrapper = document.createElement("div");

newElement123.appendChild(roomWrapper);
const labelRoom123 = document.createTextNode("🏠");
roomWrapper.appendChild(labelRoom123);

const inputRoomKey123 = document.createElement("input");
inputRoomKey123.setAttribute("type","text");
inputRoomKey123.setAttribute("size","20");
inputRoomKey123.setAttribute("id","roomkey123");
inputRoomKey123.setAttribute("style","color: black; background-color: #c0c0c0; border: 1px solid #c0c0c0; border-radius: 4px; display: inline-block; padding: 8px; margin: 0 12px 0 0;");
roomWrapper.appendChild(inputRoomKey123);

const enterRoom = document.createElement("Button");
roomWrapper.appendChild(enterRoom);
const enterText = document.createTextNode("Enter");
enterRoom.appendChild(enterText);
enterRoom.onclick = () => {
  client.subscribe('/messages', function(message) {
    console.log('Got a message: ', message.text);
  });
}



const gayaWrapper = document.createElement("div");
newElement123.appendChild(gayaWrapper);
const labelMessage123 = document.createTextNode( "💬");
gayaWrapper.appendChild(labelMessage123);

const inputMessage123 = document.createElement("input");
inputMessage123.setAttribute("type","text");
inputMessage123.setAttribute("list","emoji");
inputMessage123.setAttribute("size","40");
inputMessage123.setAttribute("id","message123");
inputMessage123.setAttribute("style","color: black; background-color: #c0c0c0; border: 1px solid #c0c0c0; border-radius: 4px; display: inline-block; padding: 8px;"); 

const datalistEmoji123 = document.createElement("datalist");
datalistEmoji123.setAttribute("id", "emoji");
datalistEmoji123.setAttribute("style", "background-color: rgba(255, 255, 255, 1);");

const emojis = [
  "👍", "👏", "🙌", "🙏", "👀", "😀", "🥺", "🤔", "🤯", "😂",
  "😇", "😍", "🥳", "😱", "😭", "😲", "🙇", "🍺", "🍥", "🍣",
  "🙈", "🙉", "🙊", "🍕", "🍵", "🥂", "🍻", "🎊","🎉"
];
for (emoji of emojis) {
  const optionEmoji01 = document.createElement("option");
  optionEmoji01.setAttribute("value", emoji);
  datalistEmoji123.appendChild(optionEmoji01);
}

gayaWrapper.appendChild(inputMessage123);
gayaWrapper.appendChild(datalistEmoji123);

document.body.appendChild(newElement123);


let compositionState = false;
inputMessage123.addEventListener("compositionstart", event => {
  compositionState = true;
});
inputMessage123.addEventListener("compositionend", event => {
  compositionState = false;
});
inputMessage123.addEventListener("keydown", event => {
  if (event.key === "Enter" && !compositionState) {
    const data = {
      roomKey: inputRoomKey123.value,
      message: inputMessage123.value
    }

    client.publish('/messages', {
      text: data.message
    });
  }
});

////////////


////////////////////

const el2 = document.getElementById("m");
el2.onclick = () => {
  hoge("いいいいいいいい")
};


},{}]},{},[1]);
