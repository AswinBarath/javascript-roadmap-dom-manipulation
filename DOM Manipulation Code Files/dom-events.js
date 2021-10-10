var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

var ulRead = document.getElementById("read");
function createListElement2() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ulRead.appendChild(li);
    input.value = "";
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement2();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement2();
    }
}


button.addEventListener("click", addListAfterClick);

button.addEventListener("keypress", addListAfterKeypress);


// var button = document.getElementsByTagName("button")[0];

// // 1
// button.addEventListener("click", function click() {
//     console.log("CLICK!!!!!")
// } )


// // 2
// button.addEventListener("mouseenter", function click() {
//     console.log("Mouse pointer just entered")
// } )

// // 3
// button.addEventListener("mouseleave", function click() {
//     console.log("Mouse pointer just left")
// } )