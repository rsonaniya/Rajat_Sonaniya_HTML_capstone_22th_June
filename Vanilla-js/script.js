const products = [
  {
    id: 1,
    title: "Women Solid Jacket",
    price: 50.0,
    originalPrice: 75.0,
    img: "./assets/img1.webp",
    description:
      "Travel jackets are taking over along with print jackets in the latest blue jackets for women summer wear. Bluetyga has navy jackets for stylish women with a flattering fit & cut. ",
  },
  {
    id: 2,
    title: "Medium 30 L Laptop Backpack",
    price: 29.0,
    img: "./assets/img2.webp",
    description:
      "Introducing the Amazon Basics Laptop Bag, equipped with 2 spacious main multi compartments with many hidden pockets and a mesh bottle holder on either side.",
  },
  {
    id: 3,
    title: "UV Protection Sunglasses",
    price: 55.0,
    originalPrice: 99,
    img: "./assets/img3.webp",
    description:
      "The John Jacobs collection features some of the most stylish and trendy sunglasses for men and women. Available in a variety of colours and shapes, it ensures you always stand out with your unique style.",
  },
  {
    id: 4,
    title: "Solid Sports/Regular Cap",
    price: 19.95,
    img: "./assets/img4.webp",
    description:
      "In every outfit or attire, fit is always a part of comfort. That’s why we’ve designed this snapback hat with an adjustable closure so it’s snug whenever you wear it",
  },
];

let cartItems = [];
let root = document.getElementById("root");
let modalDiv = document.getElementById("modal");
let modalImg = document.querySelector(".modal-img");
let modalItemName = document.querySelector(".modal-item-name");
let modalItemDesc = document.querySelector(".modal-item-desc");
let modalItemPrice = document.querySelector(".modal-item-price");
const cartIcon = document.querySelector(".cart-icon");
let mainHtml = `<div class="products-container row mt-4">`;
let currentProduct = null;
let modalInput = document.getElementById("modalInput");
let currentPage = "home";
let cartHtml = ``;

const getInitialPage = () => {
  for (let i = 0; i < products.length; i++) {
    const item = products[i];
    mainHtml += `<div
              class="card md-3 position-relative"
              style="width: 18rem"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
               onClick="replaceModalText(products[${i}])"
            >
             ${
               item.originalPrice
                 ? '<span class="badge position-absolute">Sale</span>'
                 : ""
             } 
              <img
                height="350rem"
                src=${item.img}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h6 class="card-title my-2 align-center">${item.title}</h6>
                <p class="card-text">$${item.price} ${
      item.originalPrice
        ? `<span class="discount">$${item.originalPrice}</span>`
        : ""
    }</p>
              </div>
            </div>`;
  }

  mainHtml += `</div>`;

  root.innerHTML = mainHtml;
};

const handleIncreaseCartItem = (product) => {
  const { id } = product;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      cartItems[i].quantity += 1;
      cartItems[i].total = cartItems[i].quantity * cartItems[i].price;
    }
  }

  getCartItems();
  root.innerHTML = cartHtml;
};

const handleDecreaseCartItems = (product) => {
  const { id } = product;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      if (cartItems[i].quantity > 1) {
        cartItems[i].quantity -= 1;
        cartItems[i].total = cartItems[i].quantity * cartItems[i].price;
      }
    }
  }

  getCartItems();
  root.innerHTML = cartHtml;
};

const handleDeleteFromCart = (product) => {
  cartItems = cartItems.filter((item) => item.id !== product.id);
  getCartItems();
  root.innerHTML = cartHtml;
};

const handleGotoHome = () => {
  root.innerHTML = mainHtml;
  currentPage = "home";
};

const handleCompletePurchase = () => {
  root.innerHTML = mainHtml;
  currentPage = "home";
  cartItems = [];
  getCartItems();
};

const getCartItems = () => {
  cartHtml = `<h5 class="cart-header my-4">Shopping Cart Summary</h5>
    <table class="table cart-table">
      <thead>
        <tr>
          <th colspan="3">Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
  `;
  for (let i = 0; i < cartItems.length; i++) {
    let product = cartItems[i];
    cartHtml += `<tr>
      <td class="delete-cart"  onClick="handleDeleteFromCart(cartItems[${i}])">❌</td>
      <td><img src=${product.img} width="20px" /></td>
      <td>${product.title}</td>
      <td>$${product.price}</td>
      <td class="cart-input-container">
      <button class="btn"  onClick="handleIncreaseCartItem(cartItems[${i}])">+</button>
        <span>${product.quantity}</span>
          <button class="btn"  onClick="handleDecreaseCartItems(cartItems[${i}])">-</button>
      </td>
      <td>$${product.total}</td>
    </tr>`;
  }

  cartHtml += `</tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th colspan="1">Total</th>
          <th></th>
          <td colspan="1">${cartItems.reduce(
            (total, num) => total + num.total,
            0
          )}</td>
        </tr>
        <tr>
         <th></th>
          <th></th>
          <th></th>
           <th></th>
            <th></th>
          <th><button  data-bs-toggle="modal" data-bs-target="#buyNowModal" class="btn btn-buy">Procceed To Buy</button></th>
         
        </tr>
      </tfoot>
    </table>`;
};

const replaceModalText = (product) => {
  modalImg.src = product.img;
  modalItemName.textContent = product.title;
  modalItemDesc.textContent = product.description;
  modalItemPrice.textContent = "$" + product.price;
  currentProduct = product;
};

const addToCart = () => {
  let quantity = modalInput.value * 1;
  const productInCart = cartItems.find((item) => item.id === currentProduct.id);
  if (productInCart) {
    productInCart.quantity += quantity;
    currentProduct.total = currentProduct.price * currentProduct.quantity;
  } else {
    currentProduct.quantity = quantity;
    currentProduct.total = currentProduct.price * currentProduct.quantity;
    cartItems.push(currentProduct);
  }

  currentProduct = null;

  modalInput.value = 1;
  getCartItems();
  root.innerHTML = cartHtml;
  currentPage = "cart";
};

cartIcon.addEventListener("click", () => {
  if (currentPage === "home") {
    getCartItems();
    root.innerHTML = cartHtml;
    currentPage = "cart";
  } else {
    root.innerHTML = mainHtml;
    currentPage = "home";
  }
});

const handleCompleteBuy = () => {
  root.innerHTML = `<div class="done-box" onClick="handleCompletePurchase()">
<p class="done-message">
Congratulations! Your order has been placed, click on the message to Go to homepage
</p>
</div>`;
};

getInitialPage();
