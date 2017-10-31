var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 var itemPrice = Math.floor(Math.random() * 100);
 var itemName = {}
 itemName[item] = itemPrice;
 cart.push(itemName);
 console.log( `${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    console.log("Your shopping cart is empty.");
  };
  for (var i = 0; i < cart.length; i++){
      
    }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
