fetch("data/products.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(products) {
    let hotContainer = document.getElementById("hotProducts");
    let coldContainer = document.getElementById("coldProducts");
    let dessertContainer = document.getElementById("dessertProducts");

    products.forEach(function(product) {
      let card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price} AED</strong></p>
      `;

      if (product.category === "Hot Coffee") {
        hotContainer.appendChild(card);
      } else if (product.category === "Cold Drinks") {
        coldContainer.appendChild(card);
      } else if (product.category === "Desserts") {
        dessertContainer.appendChild(card);
      }
    });
  })
  .catch(function(error) {
    document.getElementById("hotProducts").innerHTML = "<p>Products could not be loaded.</p>";
    document.getElementById("coldProducts").innerHTML = "<p>Products could not be loaded.</p>";
    document.getElementById("dessertProducts").innerHTML = "<p>Products could not be loaded.</p>";
    console.log(error);
  });