var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}


button.addEventListener("click", addListAfterClick);

button.addEventListener("keypress",addListAfterKeypress);


// var button = document.getElementsByTagName("button")[0];


// button.addEventListener("click", function click() {
//     console.log("CLICK!!!!!")
// } )
// button.addEventListener("mouseenter", function click() {
//     console.log("CLICK!!!!!")
// } )
// button.addEventListener("mouseleave", function click() {
//     console.log("CLICK!!!!!")
// } )
