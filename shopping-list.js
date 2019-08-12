// shopping list factory function here
function TheShoppingList() {
    var listOfItems = [];
    var thePrice = 0;

    function takeList(itemName, price) {
        var shoppingList = {
            itemName,
            price
        };
        listOfItems.push(shoppingList);

        return itemName + ":" + " R" + price;
    }
    function getPrice(price) {
        thePrice = price;
    }
    function errorMessage() {
        if (listOfItems > thePrice) {
            return "Items added have exceeded your budget!"
        }
    }

    function getList() {
        return listOfItems;
    }

    return {
        takeList,
        getList,
        getPrice,
        errorMessage
    }
}