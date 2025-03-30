const box = document.getElementById("messageBox");
if(box.innerText == "") {
    const botDiv = document.createElement("div");
    botDiv.className = "bot";
    botDiv.innerHTML =
        "<strong>BOT</strong><br>Hi! I'm a simple chatbot. Ask me anything!";
    botDiv.style.backgroundColor = "lightgreen";
    botDiv.style.borderRadius = "10px";
    botDiv.style.padding = "10px";
    botDiv.style.margin = "5px";
    botDiv.style.width = "fit-content";
    botDiv.style.maxWidth = "80%";
    botDiv.style.wordWrap = "break-word";
    botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    botDiv.style.textAlign = "left";
    botDiv.style.color = "black";
    botDiv.style.fontSize = "14px";
    botDiv.style.fontFamily = "Arial, sans-serif";
    box.append(botDiv);
}

function addMessage() {
  let message = document.getElementById("message-input").value;
  let youDiv = document.createElement("div");
  if (message == "") {
    alert("Please enter a message");
    return;
  }
  document.getElementById("message-input").value = "";
  youDiv.className = "you";
  youDiv.innerHTML = "<strong>YOU</strong><br>" + message;
  youDiv.style.backgroundColor = "lightblue";
  youDiv.style.borderRadius = "10px";
  youDiv.style.padding = "10px";
  youDiv.style.margin = "5px";
  youDiv.style.width = "fit-content";
  youDiv.style.maxWidth = "80%";
  youDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  youDiv.style.textAlign = "left";
  youDiv.style.color = "black";
  youDiv.style.fontSize = "14px";
  youDiv.style.fontFamily = "Arial, sans-serif";
  box.append(youDiv);
  if (message.includes("How are you?")) {
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot";
      botDiv.innerHTML =
        "<strong>BOT</strong><br>I'm doing well, thank you! How can I assist you today?";
      botDiv.style.backgroundColor = "lightgreen";
      botDiv.style.borderRadius = "10px";
      botDiv.style.padding = "10px";
      botDiv.style.margin = "5px";
      botDiv.style.width = "fit-content";
      botDiv.style.maxWidth = "80%";
      botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      botDiv.style.textAlign = "left";
      botDiv.style.color = "black";
      botDiv.style.fontSize = "14px";
      botDiv.style.fontFamily = "Arial, sans-serif";
      box.append(botDiv);
    }, 2000);
  } else if (message.includes("What is your name?")) {
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot";
      botDiv.innerHTML =
        "<strong>BOT</strong><br>My name is ChatBot. What's yours?";
      botDiv.style.backgroundColor = "lightgreen";
      botDiv.style.borderRadius = "10px";
      botDiv.style.padding = "10px";
      botDiv.style.margin = "5px";
      botDiv.style.width = "fit-content";
      botDiv.style.maxWidth = "80%";
      botDiv.style.wordWrap = "break-word";
      botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      botDiv.style.textAlign = "left";
      botDiv.style.color = "black";
      botDiv.style.fontSize = "14px";
      botDiv.style.fontFamily = "Arial, sans-serif";
      box.append(botDiv);
    }, 2000);
  } else if (message.includes("What is your favourite colour?")) {
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot";
      botDiv.innerHTML =
        "<strong>BOT</strong><br>My favorite color is blue. What's yours?";
      botDiv.style.backgroundColor = "lightgreen";
      botDiv.style.borderRadius = "10px";
      botDiv.style.padding = "10px";
      botDiv.style.margin = "5px";
      botDiv.style.width = "fit-content";
      botDiv.style.maxWidth = "80%";
      botDiv.style.wordWrap = "break-word";
      botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      botDiv.style.textAlign = "left";
      botDiv.style.color = "black";
      botDiv.style.fontSize = "14px";
      botDiv.style.fontFamily = "Arial, sans-serif";
      box.append(botDiv);
    }, 2000);
  } else if (message.includes("What is your favourite food?")) {
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot";
      botDiv.innerHTML =
        "<strong>BOT</strong><br>I love pizza! What's your favorite food?";
      botDiv.style.backgroundColor = "lightgreen";
      botDiv.style.borderRadius = "10px";
      botDiv.style.padding = "10px";
      botDiv.style.margin = "5px";
      botDiv.style.width = "fit-content";
      botDiv.style.maxWidth = "80%";
      botDiv.style.wordWrap = "break-word";
      botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      botDiv.style.textAlign = "left";
      botDiv.style.color = "black";
      botDiv.style.fontSize = "14px";
      botDiv.style.fontFamily = "Arial, sans-serif";
      box.append(botDiv);
    }, 2000);
  } else if (message.includes("Bye")) {
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot";
      botDiv.innerHTML =
        "<strong>BOT</strong><br>Bye! Have a great day!";
      botDiv.style.backgroundColor = "lightgreen";
      botDiv.style.borderRadius = "10px";
      botDiv.style.padding = "10px";
      botDiv.style.margin = "5px";
      botDiv.style.width = "fit-content";
      botDiv.style.maxWidth = "80%";
      botDiv.style.wordWrap = "break-word";
      botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      botDiv.style.textAlign = "left";
      botDiv.style.color = "black";
      botDiv.style.fontSize = "14px";
      botDiv.style.fontFamily = "Arial, sans-serif";
      box.append(botDiv);
    }, 2000);
  } else {
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.className = "bot";
      botDiv.innerHTML = "<strong>BOT</strong><br>I'm not trained for this";
      botDiv.style.backgroundColor = "lightgreen";
      botDiv.style.borderRadius = "10px";
      botDiv.style.padding = "10px";
      botDiv.style.margin = "5px";
      botDiv.style.width = "fit-content";
      botDiv.style.maxWidth = "80%";
      botDiv.style.wordWrap = "break-word";
      botDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
      botDiv.style.textAlign = "left";
      botDiv.style.color = "black";
      botDiv.style.fontSize = "14px";
      botDiv.style.fontFamily = "Arial, sans-serif";
      box.append(botDiv);
    }, 2000);
  }
}
