var url = window.location.search.slice(1);
a = url.split("=");
const [key, value] = a;
window[key] = value;
console.log(productId);
b = localStorage.getItem("product");
allProduct = JSON.parse(b);
console.log(allProduct);
for(i = 0; i < allProduct.length; i++){
    if (allProduct[i].id === productId) {
        var product = allProduct[i];
        console.log(true);
    }
}
console.log(product);
let main = document.createElement("div")
main.classList.add("main")
let image = document.createElement("img")
image.setAttribute("src", `../img/${product.name}.jpg`)