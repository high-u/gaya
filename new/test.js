// const x =  require("faye/client/faye-browser");

// const script123 = document.createElement("script");
// script123.src = "https://cdn.jsdelivr.net/npm/faye@1.4.0/client/faye-browser.js";
// document.body.appendChild(script123);

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

// const labelRoom123 = document.createTextNode("🏠");
// roomWrapper.appendChild(labelRoom123);

const inputRoomKey123 = document.createElement("input");
inputRoomKey123.setAttribute("type","text");
inputRoomKey123.setAttribute("size","20");
inputRoomKey123.setAttribute("id","roomkey123");
inputRoomKey123.setAttribute("placeholder","Room Name");
inputRoomKey123.setAttribute("style","color: black; background-color: #ddd; border: 1px solid #ddd; border-radius: 4px; display: inline-block; padding: 8px; margin: 0 12px 0 0;");
roomWrapper.appendChild(inputRoomKey123);

const inputKey = document.createElement("input");
inputKey.setAttribute("type","text");
inputKey.setAttribute("size","20");
inputKey.setAttribute("id","inputKey");
inputKey.setAttribute("placeholder","Key");
inputKey.setAttribute("style","color: black; background-color: #ddd; border: 1px solid #ddd; border-radius: 4px; display: inline-block; padding: 8px; margin: 0 12px 0 0;");
roomWrapper.appendChild(inputKey);


const enterRoom = document.createElement("Button");
roomWrapper.appendChild(enterRoom);
const enterText = document.createTextNode("Enter");
enterRoom.appendChild(enterText);
enterRoom.onclick = () => {
  const sub = CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(`${inputRoomKey123.value}\t${inputKey.value}`));
  console.log("sub", sub);
  client.subscribe(`/${sub}`, function(message) {
    console.log('Got a message: ', message.text);
  });
}

const gayaWrapper = document.createElement("div");
newElement123.appendChild(gayaWrapper);

const inputMessage123 = document.createElement("input");
inputMessage123.setAttribute("type","text");
inputMessage123.setAttribute("list","emoji");
inputMessage123.setAttribute("size","40");
inputMessage123.setAttribute("id","message123");
inputMessage123.setAttribute("placeholder","words");
inputMessage123.setAttribute("style","color: black; background-color: #ddd; border: 1px solid #ddd; border-radius: 4px; display: inline-block; padding: 8px;"); 

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
    const pub = CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(`${inputRoomKey123.value}\t${inputKey.value}`));
    console.log("pub", pub);
    client.publish(`/${pub}`, {
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

