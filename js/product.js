const products = {
    data: [
        {
            id: 1,
            name: "SÁCH LẬP TRÌNH PHP",
            price: "50.000đ",
            image: "../img/again.jpg",
            fullname: "Lập Trình Cơ Bản PHP Và MySQL",
            detail: "Cuốn sách Lập trình cơ bản PHP và MySQL dành cho những ai muốn học cách xây dựng và bảo trì các website sử dụng PHP và MySQL - “cặp bài trùng” ngôn ngữ lập trình và cơ sở dữ liệu được sử dụng nhiều nhất cho các ứng dụng Web hiện nay. Mục tiêu là giúp bạn trong một thời gian ngắn nhất sẽ trở thành một lập trình viên Web biết PHP và MySQL ở mức chuyên sâu.Bạn sẽ được học các nội dung cốt lõi và hoàn chỉnh cùng các đặc trưng riêng của ngôn ngữ lập trình PHP và cơ sở dữ liệu MySQL. Bên cạnh lý thuyết cô đọng, thông qua hàng trăm ví dụ từ đơn giản đến phức tạp, bạn sẽ thấy các thành phần của ứng dụng PHP và cơ sở dữ liệu MySQL phối hợp với nhau như thế nào và cách thức vận dụng trong các bài toán cụ thể."
        },

        {
            id: 2,
            name: "MACBOOK AIR",
            price: "~10.000.000đ",
            image: "../img/macbook.jpg",
            fullname: "Laptop Apple MacBook Air 13 inch M1 2020 8-core CPU/8GB/256GB/7-core GPU (MGND3SA/A)",
            detail: "Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phục được các tính năng văn phòng lẫn đồ hoạ mà bạn mong muốn, thời lượng pin dài, thiết kế mỏng nhẹ sẽ đáp ứng tốt các nhu cầu làm việc của bạn. Chip Apple M1 tốc độ xử lý nhanh gấp 3.5 lần thế hệ trước. Chiếc MacBook này được trang bị con chip Apple M1 được sản xuất độc quyền bởi Nhà Táo trên tiến trình 5 nm, 8 lõi bao gồm 4 lõi tiết kiệm điện và 4 lõi hiệu suất cao, mang đến một hiệu năng kinh ngạc, xử lý mọi tác vụ văn phòng một cách mượt mà như Word, Excel, Powerpoint,... thực hiện tốt các nhiệm vụ chỉnh sửa hình ảnh, kết xuất 2D trên các phần mềm Photoshop, AI,... máy còn hỗ trợ tiết kiệm được điện năng cao."
        },

        {
            id: 3,
            name: "SÁCH LẬP TRÌNH PYTHON",
            price: "50.000đ",
            image: "../img/python.jpg",
            fullname: "Sách - Python Cơ Bản - Bùi Việt Hà",
            detail: "Sách Python cơ bản là cuốn sách đầu tiên, cơ bản, dành cho người mới bắt đầu học ngôn ngữ lập trình này.  Sách dày 254 trang, bao gồm 16 chương, cùng với trên 350 bài tập từ đơn giản đến phức tạp, phù hợp cho mọi đối tượng từ cấp THCS, THPT hoặc sinh viên đại học. Sách cũng có thể dùng cho giáo viên dạy Tin học các trường phổ thông và đại học. Mỗi chương sẽ bắt đầu bằng mô tả mục đích của chương, tiếp theo là dãy các hoạt động kiến thức cần học và dạy. Sách có thể dùng cho việc tự học hoặc giáo viên giảng dạy trên lớp. Sau mỗi chương là phần câu hỏi, bài tập chi tiết. "
        }
        // {
        //     name: "TRISTIQUE DECK",
        //     price: "780.000đ - 1.470.000đ",
        //     image: "images/Tristique-deck.jpg"
        // },

        // {
        //     name: "FIELD TRIP DECK",
        //     price: "780.000đ - 1.470.000đ",
        //     image: "images/Fied-Trip-deck.jpg"
        // },

        // {
        //     name: "TARO RAINBOW LOGO DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/web-5.jpg"
        // },

        // {
        //     name: "NEON RAINBOW LOGO DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/web-1.jpg"
        // },

        // {
        //     name: "ORANAGE RAINBOW LOGO DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/web-2.jpg"
        // },

        // {
        //     name: "BLUE RAINBOW LOGO DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/web-3.jpg"
        // },

        // {
        //     name: "WHITE RAINBOW LOGO DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/web-4.jpg"
        // },

        // {
        //     name: "CUTIS MODEL DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/cutis.jpg"
        // },

        // {
        //     name: "CAM VU MODEL DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/cam-vu.jpg"
        // },

        // {
        //     name: "SON NGUYEN MODEL DECK",
        //     price: "780.000đ - 1.670.000đ",
        //     image: "images/son-nguyen.jpg"
        // },
    ]
}

for (let item of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", item.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)
    image.setAttribute("onclick", `goToDetail('${item.id}')`);

    let container = document.createElement("div")
    container.classList.add("container")

    let productname = document.createElement("h5");
    productname.classList.add("product-name");
    
    productname.innerText = item.name.toUpperCase();
    container.appendChild(productname);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + item.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart(this.closest('.container').querySelector('h5').innerHTML)")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

for (let item of products.data){
    let product = JSON.parse(localStorage.getItem("product"))
    if(product == null){
        product = []
    }
    n = true
    for(i = 0; i < product.length; i++){
        if (product[i].name == item.name) {
            n = false
        }
    }
    if(n == true){
        product.push({
            id: item.id,
            name: item.name,
            price: item.price, 
            images: item.image,
            fullname: item.fullname,
            detail: item.detail
        })
    }
    localStorage.setItem("product", JSON.stringify(product))
}

const addToCart = (productName) => {
    let productCart = JSON.parse(localStorage.getItem("productCart"));
    for(let i = 0; i < products.data.length; i++){
        if (products.data[i].name == productName) {
            let item = products.data[i];
            console.log(item);
        }
    }
    if(productCart == null){
        productCart = []
    }
    const productItem = productCart.find((product) => product.name = productName);
    if(productItem == true){
        item.quantity = 1;
        productCart.push(item)
    }
    else{
        item.quantity += 1
    }
    localStorage.setItem("productCart", JSON.stringify(productCart))
}
function goToDetail(id){
    window.location.href = "http://127.0.0.1:5501/page/detail.html?productId=" + id
}
