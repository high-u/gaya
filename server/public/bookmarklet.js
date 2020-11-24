const newElement123 = document.createElement("div");
newElement123.setAttribute('style','position: fixed; left: 0; top: 0; z-index:999999; background-color: #e0e0e0; padding: 10px; border-radius: 0 0 6px 0; filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));');

const labelRoom123 = document.createTextNode("🔑");
newElement123.appendChild(labelRoom123);

const inputRoomKey123 = document.createElement("input");
inputRoomKey123.setAttribute("type","text");
inputRoomKey123.setAttribute("size","20");
inputRoomKey123.setAttribute("id","roomkey123");
inputRoomKey123.setAttribute("style","color: black; background-color: #c0c0c0; border: 1px solid #c0c0c0; border-radius: 4px; display: inline-block; padding: 8px; margin: 0 12px 0 0;");
newElement123.appendChild(inputRoomKey123);

const labelMessage123 = document.createTextNode( "💬");
newElement123.appendChild(labelMessage123);

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
  "😇", "😍", "🥳", "😱", "😭", "😲", "🙇‍♂️", "🍺", "🍥", "🍣"
];
for (emoji of emojis) {
  const optionEmoji01 = document.createElement("option");
  optionEmoji01.setAttribute("value", emoji);
  datalistEmoji123.appendChild(optionEmoji01);
}

newElement123.appendChild(inputMessage123);
newElement123.appendChild(datalistEmoji123);

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
    fetch('http://localhost:3000/xxx', {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
      inputMessage123.value = "";
    });
  }
});
let gtTime123 = new Date().getTime();
setInterval(async () => {
  const roomKey = inputRoomKey123.value;
  if (roomKey) {
    const gtTime = gtTime123;
    const res = await fetch(`http://localhost:3000/message?room=${roomKey}&time.gt=${gtTime}`);
    const data = await res.json();
    if (data.length > 0) {
      gtTime123 = data[data.length - 1].time;
      let plusHeight = 0;
      for (e of data) {
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
        console.log(e.message.length);
        if (e.message.length <= 2) {
          fontSize = 72;
        }
        messageDiv.setAttribute('style',`font-weight: bold; font-size: ${fontSize}px; color: white; text-shadow: black 0 0 8px; position: fixed; z-index:9999999; top: ${height}px; left: 0; transform: translate(0, ${height}px); opacity: 0; animation-name: fade-in; animation-duration: 5000ms; animation-iteration-count: 1;`);

        let messageText = document.createTextNode(e.message);
        messageDiv.appendChild(messageText);

        document.body.appendChild(messageDiv);
      }
    }
  }
}, 1000);
