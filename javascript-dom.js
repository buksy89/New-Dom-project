console.log("hello world");
const CART_CONTAINER = document.getElementById("cart_container");
const CART_TOTAL = document.getElementById("cart_total");
const check_out_BTN = document.getElementById("check_out");
// product array
let product = [
  {
    productId: 2221,
    productImage:
      "https://banner2.cleanpng.com/20240311/fbx/transparent-iphone-iphone-case-purple-blue-apps-colorful-iphone-case-with-clear-front-1710842089511.webp",
    productTitle: "",
    productQuantity: 1,
    productPrice: 20000,
  },
  {
    productId: 22222,
    productImage:
      "https://banner2.cleanpng.com/20240311/fbx/transparent-iphone-iphone-case-purple-blue-apps-colorful-iphone-case-with-clear-front-1710842089511.webp",
    productTitle: "",
    productQuantity: 1,
    productPrice: 5000,
  },
  {
    productId: 22223,
    productImage:
      "https://banner2.cleanpng.com/20240311/fbx/transparent-iphone-iphone-case-purple-blue-apps-colorful-iphone-case-with-clear-front-1710842089511.webp",
    productTitle: "",
    productQuantity: 1,
    productPrice: 10000,
  },
  {
    productId: 22224,
    productImage:
      "https://banner2.cleanpng.com/20240311/fbx/transparent-iphone-iphone-case-purple-blue-apps-colorful-iphone-case-with-clear-front-1710842089511.webp",
    productTitle: "",
    productQuantity: 1,
    productPrice: 10000,
  },
];
// a function to display cart product.
const displayCartProduct = (productToDisplay) => {
  let result = [];
  for (let i = 0; i < productToDisplay.length; i++) {
    result.push(`<div class="flex gap-6 border items-center rounded-md shadow-md">
        <img
          src=${productToDisplay[i].productImage}
          alt="product image"
          width="50px"
        />
        <div>
          <h3 class="font-bold">${productToDisplay[1].productTitle}</h3>
          <p class="text-gray-400">${productToDisplay[i].productPrice}</p>
          <button
          onclick="deleteItemFromCart(${productToDisplay[i].productId})"
          class="bg-red-600 text-white text-xl p-1 rounded-md">
            Delete
          </button>
        </div>
        <div class="flex gap-2 items-center">
          <button onclick="increaseQuantity(${productToDisplay[i].productId})"
           class="bg-green-600 text-white text-xl p-1 rounded-md">
           
          +
          </button>
          <p>${productToDisplay[i].productQuantity}</p>
          <button onclick="decreaseQuantity(${productToDisplay[i].productId})"
          class="bg-red-600 text-white text-xl p-1 rounded-md">
            -
          </button>
        </div>
      </div>`);
  }
  CART_CONTAINER.innerHTML = result.join("");
};

// when the window load, we want to to display app the items we have in cart
window.addEventListener("DOMContentLoaded", () => {
  displayCartProduct(product);
  calculateCartTotal(product);
});

// A function to increase the quantity of the cart item.
function increaseQuantity(productId) {
  product.forEach((item) => {
    if (item.productId === productId) {
      item.productQuantity = item.productQuantity + 1;
    }
  });
  displayCartProduct(product);
  calculateCartTotal(product);
}
// A function to decrease the quantity of the cart item.
function decreaseQuantity(productId) {
  product.forEach((item) => {
    if (item.productId === productId && item.productQuantity >= 2) {
      item.productQuantity = item.productQuantity - 1;
    }
  });
  displayCartProduct(product);
  calculateCartTotal(product);
}
// A function to calculate cart total of items
function calculateCartTotal(productToCalculate) {
  let total = 0;
  productToCalculate.forEach((item) => {
    total = total + item.productQuantity * item.productPrice;
  });
  CART_TOTAL.textContent = total;
}
// delet item from cart
function deleteItemFromCart(productId) {
  let result = [];
  for (let i = 0; i < product.length; i++) {
    if (product[i].productId !== productId) {
      result.push(product[i]);
    }
  }
  product = result;
  displayCartProduct(product);
  calculateCartTotal(product);
}
function processOrder() {
  console.log(product);
  alert("Order successful. Thank you");
}
check_out_BTN.addEventListener("click", processOrder);
