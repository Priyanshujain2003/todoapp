var input = document.getElementById("input-box");
var list = document.getElementById("list");

function addtask() {
    if (input.value === '') {
        alert("Please Add Your Task");
    }
    else {
        let b = document.createElement("li");
        b.innerHTML = input.value;
        list.appendChild(b);
        let btn = document.createElement("span");
        btn.innerHTML = "\u00d7";
        b.appendChild(btn);
    }
    input.value = "";
    saveData()
}

list.addEventListener("click" , function(e){
  let c = e.target.parentNode;
  list.removeChild(c)
})


// external part for save and show data
function saveData()
{
    localStorage.setItem("data" , list.innerHTML)
}

function showTask()
{
    list.innerHTML = localStorage.getItem("data");
}
showTask()