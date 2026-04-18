function calculateTotal() {
  let productPrice = parseFloat(document.getElementById("product").value);
  let sizePrice = parseFloat(document.getElementById("size").value);
  let quantity = parseInt(document.getElementById("quantity").value);

  let extraShot = document.getElementById("extraShot").checked ? 3 : 0;
  let whippedCream = document.getElementById("whippedCream").checked ? 2 : 0;

  let totalPriceText = document.getElementById("totalPrice");

  if (isNaN(productPrice)) {
    totalPriceText.innerText = "Please select a product first.";
    return;
  }

  let total = (productPrice + sizePrice + extraShot + whippedCream) * quantity;
  totalPriceText.innerText = "Total Price: " + total + " AED";
}

document.addEventListener("DOMContentLoaded", function () {
  let savedName = localStorage.getItem("customerName");
  let savedEmail = localStorage.getItem("customerEmail");
  let savedProduct = localStorage.getItem("lastProduct");

  let savedDataMessage = document.getElementById("savedDataMessage");

  if (savedName) {
    document.getElementById("customerName").value = savedName;
  }

  if (savedEmail) {
    document.getElementById("email").value = savedEmail;
  }

  if (savedProduct) {
    document.getElementById("product").value = savedProduct;
  }

  if (savedDataMessage && (savedName || savedProduct)) {
    savedDataMessage.innerText = "Saved Data Loaded: Welcome back " + (savedName || "Customer") + ". Your last selected product is restored.";
  }

  let form = document.getElementById("orderForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("customerName").value.trim();
    let email = document.getElementById("email").value.trim();
    let product = document.getElementById("product").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let notes = document.getElementById("notes").value.trim();
    let message = document.getElementById("formMessage");

    if (name === "") {
      message.innerText = "Name is required.";
      return;
    }

    if (email === "" || !email.includes("@")) {
      message.innerText = "Please enter a valid email.";
      return;
    }

    if (product === "") {
      message.innerText = "Please select a product.";
      return;
    }

    if (isNaN(quantity) || quantity < 1 || quantity > 10) {
      message.innerText = "Quantity must be between 1 and 10.";
      return;
    }

    if (notes.length > 100) {
      message.innerText = "Notes must be less than 100 characters.";
      return;
    }

    localStorage.setItem("customerName", name);
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("lastProduct", product);

    message.innerText = "Order submitted successfully!";
  });
});