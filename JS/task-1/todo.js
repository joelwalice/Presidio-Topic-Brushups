let data = [];
const p = document.getElementById("output");

p.innerText = "Data from Localstorage : \n \n" +  localStorage.getItem("data").split(",").join("\n");

function addValue(){
    const value = document.getElementById("value").value;
    data.push(value);
    p.innerText = data.join('\n');
    localStorage.setItem("data", data);
}