// shopping-list dom code here
var addBtnElem = document.querySelector(".addBtn");
var inputElem = document.querySelector(".addItem");
var displayOutput = document.querySelector(".outputField");

var getTheShoppingList = TheShoppingList();

function addItems() {

    var inputGiven = inputElem.value;
    var takeItems = getTheShoppingList.takeList(inputGiven);

    for (var i = 0; i < takeItems.length; i++) {
        var loopList = document.createElement("div");
        loopList.classList.add("appear");
        var newContent = document.createTextNode(takeItems[i]);
        loopList.appendChild(newContent);
        displayOutput.appendChild(loopList);
    }

}
addBtnElem.addEventListener('click', addItems)