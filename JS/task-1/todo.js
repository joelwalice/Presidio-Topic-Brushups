let data = JSON.parse(localStorage.getItem("data")) || [];
const p = document.getElementById("output");

function updateDisplay() {
    p.innerHTML = "";
    if (data.length > 0) {
        const header = document.createElement("h3");
        header.innerText = "Data from LocalStorage:";
        p.append(header);
    }

    // Display each task with toggle button
    data.forEach((item, index) => {
        const div = document.createElement("div");
        div.style.marginBottom = "10px"; 

        const textSpan = document.createElement("span");
        textSpan.innerText = `${index + 1}. ${item.value} - `;

        const btn = document.createElement("button");
        btn.innerText = item.task ? "Completed" : "Not Completed";
        btn.style.cursor = "pointer";
        btn.style.marginLeft = "10px";
        btn.onclick = () => toggleTask(index);

        div.append(textSpan);
        div.append(btn);
        p.append(div);
    });
}

function addValue() {
    const value = document.getElementById("value").value;
    if (value.trim() === "") return; 
    data.push({ value, task: false });
    localStorage.setItem("data", JSON.stringify(data)); 
    updateDisplay();
}

function toggleTask(index) {
    data[index].task = !data[index].task;
    localStorage.setItem("data", JSON.stringify(data));
    updateDisplay();
}

updateDisplay();
