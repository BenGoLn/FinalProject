// get query string from url (optional) or window
var url = window.location.search.slice(1);
productId = url.split("=");

// ham find

const product = localStorage.getItem("productCall");
console.log(product);
let productCall = JSON.parse(product);