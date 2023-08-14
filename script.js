document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");

  fetch("http://localhost:3004/products")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}" style="max-width: 200px">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <p>Quantity: ${product.quantity}</p>
        `;
        productList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
});
