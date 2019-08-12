// shopping-list tests here
describe("The Shopping List", function () {
    it("should be able to add any item to the list", function () {
        var addList = TheShoppingList();

        addList.takeList("Apple", 1.00);
        addList.takeList("Rice", 12.50);
        addList.takeList("bread", 15.90);
        assert.deepEqual([
            { itemName: 'Apple', price: 1.00 },
            { itemName: 'Rice', price: 12.50 },
            { itemName: 'bread', price: 15.90 }],
            addList.getList());
    });

    it("should be able to give item with given price in Rands", function () {
        var ItemwithPrice = TheShoppingList();

        ItemwithPrice.takeList("Apple", 1.00)
        assert.equal("Apple: R1.00", ItemwithPrice.takeList());
    });

    it("Must give an error message if the budget set has been exceeded", function () {
        var error = TheShoppingList();

        error.getPrice(27.00)
        error.getPrice("Apple", 1.00);
        error.getPrice("Rice", 12.00);
        error.getPrice("bread", 15.00);
        assert.equal("Items added have exceeded your budget!", error.errorMessage());
    });
});

