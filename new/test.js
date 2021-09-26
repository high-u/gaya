// const x =  require("faye/client/faye-browser");

// const script123 = document.createElement("script");
// script123.src = "https://cdn.jsdelivr.net/npm/faye@1.4.0/client/faye-browser.js";
// document.body.appendChild(script123);

var client = new Faye.Client('http://localhost:8000/');

// const alice = gun.get('key3').put({name: 'alice', age: 22});
// alice.on(function(node){
//   console.log('Subscribed to Alice!', node);
// });


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

function draggable3(child) {

  //要素の取得
  // var elements = document.getElementsByClassName("drag-and-drop");

  let element = child.parentElement;

  //要素内のクリックされた位置を取得するグローバル（のような）変数
  var x;
  var y;

  //マウスが要素内で押されたとき、又はタッチされた際の関数
  // for(var i = 0; i < elements.length; i++) {
  //     elements[i].addEventListener("mousedown", mdown, false);
  //     elements[i].addEventListener("touchstart", mdown, false);
  // }
  child.addEventListener("mousedown", mdown, false);
  child.addEventListener("touchstart", mdown, false);

  //マウスが押された際の関数
  function mdown(e) {

      //クラス名に .drag を追加
      this.classList.add("drag");

      //タッチデイベントとマウスのイベントの差異を吸収
      if(e.type === "mousedown") {
          var event = e;
      } else {
          var event = e.changedTouches[0];
      }

      //要素内の相対座標を取得
      x = event.pageX - this.offsetLeft;
      y = event.pageY - this.offsetTop;

      //ムーブイベントにコールバック
      document.body.addEventListener("mousemove", mmove, false);
      document.body.addEventListener("touchmove", mmove, false);
  }

  //マウスカーソルが動いた際の関数
  function mmove(e) {

      //ドラッグしている要素を取得
      var drag = document.getElementsByClassName("drag")[0];

      //同様にマウスとタッチの差異を吸収
      if(e.type === "mousemove") {
          var event = e;
      } else {
          var event = e.changedTouches[0];
      }

      //フリックしたときに画面を動かさないようにデフォルト動作を抑制
      e.preventDefault();

      //マウスが動いた場所に要素を動かす
      drag.style.top = event.pageY - y + "px";
      drag.style.left = event.pageX - x + "px";

      //マウスボタンが離されたとき、またはカーソルが外れたとき発火
      drag.addEventListener("mouseup", mup, false);
      document.body.addEventListener("mouseleave", mup, false);
      drag.addEventListener("touchend", mup, false);
      document.body.addEventListener("touchleave", mup, false);

  }

  //マウスボタンが上がった際の関数
  function mup(e) {
      var drag = document.getElementsByClassName("drag")[0];

      //ムーブベントハンドラの消去
      document.body.removeEventListener("mousemove", mmove, false);
      drag.removeEventListener("mouseup", mup, false);
      document.body.removeEventListener("touchmove", mmove, false);
      drag.removeEventListener("touchend", mup, false);

      //クラス名 .drag も消す
      drag.classList.remove("drag");
  }

}

// https://q-az.net/elements-drag-and-drop/
function draggable2(child) {
    //要素の取得
    // var elements = document.getElementsByClassName("drag-and-drop");

    //要素内のクリックされた位置を取得するグローバル（のような）変数
    var x;
    var y;

    let elements = child.parentElement;
    //マウスが要素内で押されたとき、又はタッチされたとき発火
    // for(var i = 0; i < elements.length; i++) {
        elements.addEventListener("mousedown", mdown, false);
        elements.addEventListener("touchstart", mdown, false);
    // }

    //マウスが押された際の関数
    function mdown(e) {

        //クラス名に .drag を追加
        this.classList.add("drag");

        //タッチデイベントとマウスのイベントの差異を吸収
        if(e.type === "mousedown") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //要素内の相対座標を取得
        x = event.pageX - this.offsetLeft;
        y = event.pageY - this.offsetTop;

        //ムーブイベントにコールバック
        document.body.addEventListener("mousemove", mmove, false);
        document.body.addEventListener("touchmove", mmove, false);
    }

    //マウスカーソルが動いたときに発火
    function mmove(e) {

        //ドラッグしている要素を取得
        var drag = document.getElementsByClassName("drag")[0];

        //同様にマウスとタッチの差異を吸収
        if(e.type === "mousemove") {
            var event = e;
        } else {
            var event = e.changedTouches[0];
        }

        //フリックしたときに画面を動かさないようにデフォルト動作を抑制
        e.preventDefault();

        //マウスが動いた場所に要素を動かす
        drag.style.top = event.pageY - y + "px";
        drag.style.left = event.pageX - x + "px";

        //マウスボタンが離されたとき、またはカーソルが外れたとき発火
        drag.addEventListener("mouseup", mup, false);
        document.body.addEventListener("mouseleave", mup, false);
        drag.addEventListener("touchend", mup, false);
        document.body.addEventListener("touchleave", mup, false);

    }

    //マウスボタンが上がったら発火
    function mup(e) {
        var drag = document.getElementsByClassName("drag")[0];

        //ムーブベントハンドラの消去
        document.body.removeEventListener("mousemove", mmove, false);
        drag.removeEventListener("mouseup", mup, false);
        document.body.removeEventListener("touchmove", mmove, false);
        drag.removeEventListener("touchend", mup, false);

        //クラス名 .drag も消す
        drag.classList.remove("drag");
    }

}

function draggable(child) {
  let element = child.parentElement;

  child.addEventListener("mousedown", mdown, false);
  // elements.addEventListener("touchstart", mdown, false);

  function mdown(event) {

    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;
  
    element.style.position = 'absolute';
    element.style.zIndex = 1000;
    document.body.append(element);
  
    // moveAt(event.pageX, event.pageY); いらなそうなので、取ってみている。動いている。
  
    // ボールを（pageX、pageY）座標の中心に置く
    function moveAt(pageX, pageY) {
      element.style.left = pageX - shiftX + 'px';
      element.style.top = pageY - shiftY + 'px';
    }
  
    // (3) mousemove でボールを移動する
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    // document.addEventListener('touchmove', onMouseMove);
  
    // (4) ボールをドロップする。不要なハンドラを削除する
    function onMouseUp(event) {
      console.log("onmouseup");
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    }
    element.addEventListener('mouseup', onMouseUp);
    // element.addEventListener('touchend', onMouseUp);
  };
  
  // child.ondragstart = function() { いらなそうなので、取ってみている。動いている。
  //   return false;
  // };
  
}


const newElement123 = document.createElement("div");
newElement123.setAttribute('style','position: fixed; left: 0; top: 0; z-index:999999; background-color: #fff; padding: 10px; border-radius: 6px; filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.2));');

// draggable2(newElement123);
const dragArea = document.createElement("div");
dragArea.setAttribute("style","cursor: move; width:20px;height:20px;background-color:gray;");
newElement123.appendChild(dragArea);
draggable(dragArea);

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
    hoge(message.text);
  });
}

const gayaWrapper = document.createElement("div");
newElement123.appendChild(gayaWrapper);

const inputMessage123 = document.createElement("input");
inputMessage123.setAttribute("type","text");
inputMessage123.setAttribute("list","emoji");
inputMessage123.setAttribute("autocomplete","on");
inputMessage123.setAttribute("size","40");
inputMessage123.setAttribute("id","message123");
inputMessage123.setAttribute("placeholder","words");
inputMessage123.setAttribute("style","color: black; background-color: #ddd; border: 1px solid #ddd; border-radius: 4px; display: inline-block; padding: 8px;"); 

const datalistEmoji123 = document.createElement("datalist");
datalistEmoji123.setAttribute("id", "emoji");
datalistEmoji123.setAttribute("style", "background-color: rgba(255, 255, 255, 1);");

const emojis = {
  "thumb1": "👍", 
  "thumb2": "👏", 
  "thumb3": "🙌", 
  "thumb4": "🙏", 
  "thumb5": "👀", 
  "thumb6": "😀", 
  "thumb7": "🥺", 
  "thumb8": "🤔", 
  "thumb9": "🤯", 
  "thumb10": "😂",
  "thumb11": "😇", 
  "thumb12": "😍", 
  "thumb13": "🥳", 
  "thumb14": "😱", 
  "thumb15": "😭", 
  "thumb16": "😲", 
  "thumb17": "🙇", 
  "thumb18": "🍺", 
  "thumb19": "🍥", 
  "thumb20": "🍣",
  "thumb21": "🙈", 
  "thumb22": "🙉", 
  "thumb23": "🙊", 
  "thumb24": "🍕", 
  "thumb25": "🍵", 
  "thumb26": "🥂", 
  "thumb27": "🍻", 
  "thumb28": "🎊",
  "thumb29": "🎉"
};
for(let k of Object.keys(emojis)) {
  const optionEmoji01 = document.createElement("option");
  optionEmoji01.setAttribute("label", k);
  optionEmoji01.setAttribute("value", emojis[k]);
  datalistEmoji123.appendChild(optionEmoji01);
}

gayaWrapper.appendChild(inputMessage123);
gayaWrapper.appendChild(datalistEmoji123);


const sendWords = document.createElement("Button");
roomWrapper.appendChild(sendWords);
const textSend = document.createTextNode("Send");
sendWords.appendChild(textSend);
sendWords.onclick = () => {
  const pub = CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(`${inputRoomKey123.value}\t${inputKey.value}`));
  console.log("pub", pub);
  client.publish(`/${pub}`, {
    text: inputMessage123.value
  });
}
gayaWrapper.appendChild(sendWords);


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

