//create variables for the welcome message 
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', Please check your order:';
//concatenate the three variables above to create the welcome sign 
var welcome = greeting + name + message;

//create variables to hold details about the sign 
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//get the element that has the id of greeting 
var el = document.getElementById('greeting');
//replace the content with the personalized welcome message
el.textContent = welcome;

//get the element that has an id of userSign then update its contents 
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//get element that has an id of tiles then update its content

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//get element that has an id of subTotal then update its content 

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '£' + subTotal;

//get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '£' + shipping;

//get element that has an id of grandTotal then update its content 

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '£' + grandTotal;
