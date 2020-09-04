
var main = document.createElement("main");
var body = document.getElementById("body");

body.appendChild(main);

var para = document.createElement("p");
var node = document.createTextNode("Jeg trener på JavaScript");
para.appendChild(node);
para.setAttribute("class", "paragraph");

main.appendChild(para);

var selectBox = document.createElement("select");
selectBox.setAttribute("id", "selectBox");

const myObj = [{id:1, data:"text"},{id:2, data:"text2"}];

var i;
for(i = 0; i < myObj.length; i++){
    let option = document.createElement("option");
    option.setAttribute("value", myObj[i].data);
    let node = document.createTextNode(myObj[i].data);
    option.appendChild(node);
    selectBox.appendChild(option);
}

main.appendChild(selectBox);

selectBox.setAttribute("style","max-width: 500px; margin: auto; display: block;");

var testBtn = document.createElement("button");
var node = document.createTextNode("Test");
testBtn.appendChild(node);

var resetBtn = document.createElement("button");
var node2 = document.createTextNode("Reset");
resetBtn.appendChild(node2);

main.appendChild(testBtn);
main.appendChild(resetBtn);

testBtn.addEventListener("click", function(){

    let e = document.getElementById("selectBox");
    let string = e.options[e.selectedIndex].value;

    para.innerHTML = reverseString(string);
}); 

resetBtn.addEventListener("click", function(){
    let lis = document.getElementsByClassName("li");

    if(lis.length <= 0){
        fillUl();
    }
}); 

var ul = document.createElement("ul");

main.appendChild(ul);

fillUl();

function fillUl(){
    var i;
    for (i = 0; i < 4; i++) {

        let li = document.createElement("li");
        li.setAttribute("class", "li");
        li.setAttribute("id", i);

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id", i);
        deleteBtn.setAttribute("class", "deleteBtn");
        let node3 = document.createTextNode("Delete " + i);
        deleteBtn.appendChild(node3);

        li.appendChild(deleteBtn);

        ul.appendChild(li);
    }

    updateClickListeners();
}

function updateClickListeners(){
    var deleteButtons = document.getElementsByClassName("deleteBtn");

    var myDeleteFunction = function() {
        let id = event.target.id;
        let item = document.getElementById(id);
        item.parentNode.removeChild(item);
    };

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', myDeleteFunction, false);
    }
}

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    reverseArray.shift();
    var joinArray = reverseArray.join("");
    return joinArray;
}