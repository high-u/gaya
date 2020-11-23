let newElement123 = document.createElement("div");
newElement123.setAttribute('style','position: fixed; left: 0; top: 0; z-index:999999; background-color: #fff; padding: 8px; border-radius: 6px;');

let labelRoom123 = document.createTextNode(" Room ");
newElement123.appendChild(labelRoom123);

let inputRoomKey123 = document.createElement("input");
inputRoomKey123.setAttribute("type","text");
inputRoomKey123.setAttribute("size","20");
inputRoomKey123.setAttribute("id","roomkey123");
inputRoomKey123.setAttribute("style","color: black; border: 1px solid black; border-radius: 4px;");
newElement123.appendChild(inputRoomKey123);

let labelMessage123 = document.createTextNode( "Message ");
newElement123.appendChild(labelMessage123);

let inputMessage123 = document.createElement("input");
inputMessage123.setAttribute("type","text"); 
inputMessage123.setAttribute("size","20");
inputMessage123.setAttribute("id","message123");
inputMessage123.setAttribute("style","color: black; border: 1px solid black; border-radius: 4px;"); 

newElement123.appendChild(inputMessage123);

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
    inputMessage123.selectionStart = 0;
    inputMessage123.selectionEnd = inputMessage123.value.length + 1;

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
    }).then(response => response.json()).then(data => {});
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

      for (e of data) {
        const css = document.createElement('style');
        css.media = 'screen';
        css.type = 'text/css';
        const height = document.documentElement.clientHeight;
        const left = Math.floor(document.documentElement.clientWidth / 2);
        rules = document.createTextNode(`@keyframes fade-in{ 0% { opacity: 0; transform: translate(${left}px, 0px); } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; transform: translate(${left}px, ${height}px) } }`);
        css.appendChild(rules);
        document.getElementsByTagName('head')[0].appendChild(css);

        const messageDiv = document.createElement("div");
        messageDiv.setAttribute('style',`font-weight: bold; font-size: 24px; color: black; position: fixed; z-index:9999999; top: 0; left: 0; transform: translate(${left}px, 0px); opacity: 0; animation-name: fade-in; animation-duration: 9000ms; animation-iteration-count: 1;`);

        let messageText = document.createTextNode(e.message);
        messageDiv.appendChild(messageText);

        document.body.appendChild(messageDiv);
      }
    }
  }
}, 1000);
