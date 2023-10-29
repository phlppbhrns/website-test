var addButton = document.getElementById("add-button");
var InputBox = document.getElementById("item-entry-box");
var instockGroceriesList = document.getElementById("groceries-list-instock");
var outofstockGroceriesList = document.getElementById("groceries-list-outofstock");
var deleteButton = document.getElementById("delete-all-button")
// create an event listener which acts when it hears what we define (here, it runs the addGroceryItem function)
addButton.addEventListener("click", addGroceryItem)
deleteButton.addEventListener("click", deleteAll)

function addGroceryItem() {
    // Function for the add button
    var itemText = InputBox.value;
    createNewGroceryItem(itemText, true);  // Look over this true
}

function createNewGroceryItem(itemText, inStock) {
    /* 
    Function for the add button.
    Creates a new instance for our list by first creating a li item and adding text to it via the create Text Node;
    the text is appended by the appendChild method, then the item we put together is appended to the list
    */

    var GroceryItem = document.createElement("li"); // creates (empty) list element; we need to append text like below
    var GroceryText = document.createTextNode(itemText); // creates a text node, a special container for text
    var inStockButton = document.createElement("button");
    var outOfStockButton = document.createElement("button");
    inStockButton.innerHTML = "inStock";
    outOfStockButton.innerHTML = "outOfStock";
    
    // add text to list item 
    GroceryItem.appendChild(GroceryText);

    if (inStock) {

        if (instockGroceriesList.innerHTML.includes(itemText) || outofstockGroceriesList.innerHTML.includes(itemText)) {  
            // do nothing if items is already in either instock or outofstock list
        } else {
            GroceryItem.classList.add("inStock");
            GroceryItem.appendChild(outOfStockButton);
            instockGroceriesList.appendChild(GroceryItem);
        }

    } else {

        if (outofstockGroceriesList.innerHTML.includes(itemText) || instockGroceriesList.innerHTML.includes(itemText)) {
            // do nothing if item is already in outofstock list
        } else {
            GroceryItem.classList.add("outOfStock");
            GroceryItem.appendChild(inStockButton);
            outofstockGroceriesList.appendChild(GroceryItem);
        }
    }

    // define functionality of instock and outofstock buttons

    inStockButton.addEventListener("click", function() {
        GroceryItem.removeChild(inStockButton);
        outofstockGroceriesList.removeChild(GroceryItem);
        instockGroceriesList.appendChild(GroceryItem);
        GroceryItem.appendChild(outOfStockButton);

    })

    outOfStockButton.addEventListener("click", function() {
        GroceryItem.removeChild(outOfStockButton);
        instockGroceriesList.removeChild(GroceryItem);
        outofstockGroceriesList.appendChild(GroceryItem);
        GroceryItem.appendChild(inStockButton);

    })
        
}

function deleteAll() {
    
    var instock_items = instockGroceriesList.getElementsByTagName("li");
    var outofstock_items = outofstockGroceriesList.getElementsByTagName("li");

    while (instockGroceriesList.firstChild) {
        instockGroceriesList.removeChild(instockGroceriesList.firstChild);
    }

    while (outofstockGroceriesList.firstChild) {
        outofstockGroceriesList.removeChild(outofstockGroceriesList.firstChild);
    }
}


