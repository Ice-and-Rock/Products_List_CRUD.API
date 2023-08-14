
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");

  fetch("http://localhost:3004/products")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const listItem = document.createElement("ul");

        // Add the CSS class list to the HTML items
        listItem.classList.add("product-item");

        listItem.innerHTML = `

        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-details">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">Price: $${product.price}</p>
          <p class="product-quantity">Quantity: ${product.quantity}</p>
        </div>

        `;
        productList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
});
