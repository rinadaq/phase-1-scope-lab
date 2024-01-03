// Write your solution in this file!

// Declare customerName to be bob in the global scope
window.customerName = 'bob';

function upperCaseCustomerName() {
  // Modify the customerName variable to uppercase
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  // Set the bestCustomer variable to 'not bob'
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  // Overwrite the bestCustomer variable with the new value
  window.bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone'; // Constant variable

function changeLeastFavoriteCustomer() {
  // Attempt to reassign the constant variable (throws an error)
  leastFavoriteCustomer = 'new person';
}

