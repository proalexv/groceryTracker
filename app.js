// Grocery Shopping Tracker
// Create a Node.js application that is used to track grocery a grocery shopping list. This will be a console application that will display a grocery list created by the user. The user must be able to add an item to the list, the quantity, and the price of the item. Each item should also track whether or not it has been bought. The user should be able to remove items from the list when needed.

// Requirements
// Console Application
// Display grocery list
// Add items to grocery list
// Array of Items Objects
// Item
// Name
// String
// Quantity
// Number
// Price
// Number
// Bought
// Boolean
// Remove items from the grocery list
// Set whether the item has been bought or not


// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // Read from standard input (keyboard)
    output: process.stdout // Write to standard output (console)
});
//make an empty arrary for userinput/groceries
let userText = [];
let groceryList = [{ fruit: 'water', quantity: '3', price: '1', available: true }, { fruit: 'pumpkin', quantity: 1, price: 2, available: true }];
showList();
console.log("Hello user, what would you like to do: add | delete | deleteItem");

//this line here is essentially just taking what we write and outputing it back to the console
rl.on('line', (line) => {
    console.log(line);
    //push a string into that arrary
    userText.push(line)

    if (line === "add") {
        let fruit;
        let quantity;
        let price;
        let available;
        //FILL ME IN 
        //here I am going to take the user input and store it 
        rl.question(' What would you like to add ', (userFruit) => {
            fruit = userFruit;
            console.log(fruit);

            rl.question(' How many ', (userQuantity) => {
                quantity = Number(userQuantity);

                rl.question(' What is the price ', (userPrice) => {
                    price = Number(userPrice);

                    rl.question(' Is this iteam available for purchase, please set to true or false? ', (userBought) => {
                        available = Boolean(userBought);

                        addToArrary(fruit, quantity, price, available);
                        showList();
                        console.log("Hello user, what would you like to do: add | delete | deleteItem");
                    });
                })
            })

        })
    }
    if (line === "delete") {
        //FILL ME IN
        showList();

        rl.question(' What would you like to delete. Please give the name ', (userDelete) => {
            const userDeleteObject = groceryList.find(obj => obj.fruit === userDelete);
            if (userDeleteObject) {
                rl.question('how many would like you to take, please  take no more than we have in stock!', (userQuantityDelete) => {

                    userDeleteObject.quantity -= Number(userQuantityDelete);
                    if (userDeleteObject.quantity <= 0) {
                        userDeleteObject.available = false;
                    }
                    showList();
                    console.log("Hello user, what would you like to do: add | delete | deleteItem");
                }
                )
            } else {
                console.log("SORRY, that fruit does not exist in our database!")
                console.log("Hello user, what would you like to do: add | delete | deleteItem");
            }
        }
        )
    }

    if (line === "deleteItem") {

        rl.question(' What would you like to delete from our collection, please give the name ', (userDeleteItem) => {
            const permaDeleteObject = groceryList.find(obj => obj.fruit === userDeleteItem);
            const index = groceryList.indexOf(permaDeleteObject);
            groceryList.splice(index, 1);
            showList();
            console.log("Hello user, what would you like to do: add | delete | deleteItem");
        }
        );
    }
})

rl.once('close', () => {
    // end of input
});

function addToArrary(fruitFromUser, quantityFromUser, priceFromUser, availableFromUser) {
    let object = {
        // fields
        fruit: fruitFromUser,
        quantity: quantityFromUser,
        price: priceFromUser,
        available: availableFromUser
    }

    groceryList.push(object);
}






function showList() {
    console.log(`
    ________________________________________________
    Our current iteam list is: 
    `
    )
    for (let item of groceryList) {
        console.log(item);
    }
    console.log(`
    ________________________________________________
    
    `
    )
}