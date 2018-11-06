var inventory = [ " Breakfast Bars", " Banana Milk", " Spicy Ramen", " Regular Ramen",
		" Kimchi Dumplings","Kalbi","Hot Fries","Kimchi","Ice Cream(Any Flavor)"," Frozen Pizza Bites","Water Case"," Ramune(Any Flavor)"," High-Chews"];
var price = [ 3.99, 1.79, 1.99, 12.79, 10.95,12.79,10.95,15.99,1.89,7.99,5.99,8.79,4.99,1.99,1.29 ];
var cart = [];
var total = 0;

function addToCart(inventory) {
	cart.push(inventory);
	printCart(cart);
}



function printCart(cart) {
	for (var i = 0; i < cart.length; i++) {
		document.getElementById("cartbox").innerHTML = cart;
	}
}

function addToTotal(price) {
	total += price;
	updateTotalBox(total);
}



function updateTotalBox(total) {
	var taxTotal = (total + (total * .06));
	var grandTotal = "$" + parseFloat(taxTotal).toFixed(2);

	document.getElementById("totalbox").innerHTML = grandTotal;
}
