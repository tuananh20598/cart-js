//Local storage
//cookie
//session

const cart = [];

function addToCart(event) {
    // console.log(event);
    const btn = event.target;
    const cartBody = btn.parentNode;
    const name = cartBody.querySelector("h5").innerText;
    let price = cartBody.querySelector("p").innerText;
    price = price.replace(/,/g, "").replace(" vnd", "");
    price = Number(price);
    const id = btn.getAttribute("data-id");

    const product = {
        id: id,
        name: name,
        price: price,
        total: 1,
    };

    //ktra san pham co trong gio hang chua?
    if (cart[id]) {
        //Neu san pham da co trong gio hang
        const currentCart = cart[id];
        currentCart.total++;
    } else {
        //Neu chua co trong gio hang
        cart[id] = product;
    }
    //render lai gio hang
    render();
    console.log(cart);
}

function render() {
    //Hien thi vao ol
    const ol = document.getElementById("cart-list");
    let html = "";
    let totalPrice = 0;
    for (let key in cart) {
        if (cart.hasOwnProperty(key)) {
            const currentCart = cart[key];
            const total = currentCart.price * currentCart.total;
            totalPrice += total;
            // html += "<li>" + currentCart.name + " " + currentCart.total + "</li>";
            html += `
                <li>
                    <p>Id: ${currentCart.id}</p>
                    <p>Tên sản phẩm: ${currentCart.name}</p>
                    <p>Giá: ${currentCart.price}</p>
                    <p>Số lượng: ${currentCart.total}</p>
                    <button onclick="increaseProduct('${currentCart.id}')">Tăng</button>
                    <button onclick="decreaseProduct('${currentCart.id}')">Giảm</button>
                    <button onclick="deleteProduct('${currentCart.id}')">Xóa</button>
                    <input onchange="updateTotalProduct(event,'${currentCart.id}')" type="number" value="${currentCart.total}"/>
                    <p>Tổng tiền: ${total}</p>
                    <hr>
                </li>
            `;
        }
    }

    html += `
        <hr>
        <strong>
            <p>Tổng giá trị đơn hàng: ${totalPrice}</p>
        </strong>
    `;
    ol.innerHTML = html;
}

function updateTotalProduct(event, id) {
    const value = event.target.value;
    cart[id].total = value;
    render();
    // console.log(value);
}

function deleteProduct(id) {
    if (cart[id]) {
        const result = confirm("Bạn có chắc chắn muốn xoá không?");
        if (result) {
            //xoa
            delete cart[id];
        }
    }
    render();
}

//Tăng sản phẩm
function increaseProduct(id) {
    if ((onclick = true)) {
        currentCart.total++;
    }
    console.log(cart);
}