var url = window.location.search.slice(1);
a = url.split("=");
const [key, value] = a;
window[key] = value;
console.log(productId);
var productId = productId
b = localStorage.getItem("product");
allProduct = JSON.parse(b);
for(i = 0; i < allProduct.length; i++){
    if (allProduct[i].id == productId) {
        var product = allProduct[i];
    }
}
var image_container = document.createElement("div");
image_container.classList.add("image_container");
let image = document.createElement("img");
image.setAttribute("src", product.images);
image_container.appendChild(image);
let container = document.getElementById("container");
container.appendChild(image_container);
let text = document.createElement("div");
text.classList.add("text");
let fullname = document.createElement("h3");
fullname.classList.add("fullname");
fullname.innerHTML = "Tên đầy đủ sản phẩm: " + product.fullname;
let details = document.createElement("p");
details.innerHTML = product.detail;
text.appendChild(fullname);
text.appendChild(details);
container.appendChild(text);