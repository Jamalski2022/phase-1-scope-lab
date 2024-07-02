// Write your solution in this file!
// index.js

// Declare customerName to be 'bob' in global scope
var customerName = 'bob';

// Function to modify the customerName variable to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set the bestCustomer variable
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'some initial value';

// Function to attempt to change the leastFavoriteCustomer variable
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value';
}
