import openEditModal from "./modalScreen.js";

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");

  fetch("http://localhost:3004/products")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const listItem = document.createElement("ul");

        // Add the CSS class list to the HTML items
        listItem.classList.add("product-item");
        listItem.setAttribute("data-id", product._id);


        listItem.innerHTML = `
        <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        </div>
        <div class="product-details">
          <h2 class="product-name">${product.name}</h2>
          <p class="product-price">Price: $${product.price}</p>
          <p class="product-quantity">Quantity: ${product.quantity}</p>

          
          <button class="edit-button" data-id="${product._id}">Edit</button>
          <button class="delete-button" data-id="${product._id}">Delete</button>
          
        </div>

        `;

        // Add the Edit button Listener and action (using Modal screen)
        const editButton = listItem.querySelector(".edit-button")

        editButton.addEventListener("click", () => {
          const productId = editButton.getAttribute("data-id");
          const product = products.find(item => item._id === productId);
          openEditModal(product);
        });

        // Add delete button Listnener and action
        // const deleteButton = listItem.querySelector(".delete-button");

        // deleteButton.addEventListener("click", () => {
        //   const productId = deleteButton.getAttribute("data-id");
          
        //   handleDeleteProduct(productId);
        // });

        productList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
    });
});

async function handleEditProduct(productId) {
  const editedProduct = {
    name: document.getElementById("name").value,
    price: parseFloat(document.getElementById("price").value),
    quantity: parseInt(document.getElementById("quantity").value)
  };

  try {
    const response = await fetch(`http://localhost:3004/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedProduct)
    });

    if (response.ok) {
      console.log(`Product with ID ${productId} has been updated`);
      // Optional: Update the UI or refresh the product list
    } else {
      console.error(`Failed to update product with ID ${productId}`);
    }
  } catch (error) {
    console.error("Error updating product:", error);
  }
}
export default handleEditProduct;


// Delete button click event
productList.addEventListener("click", event => {
  if (event.target.classList.contains("delete-button")) {
    const productItem = event.target.closest(".product-item");
    const productId = productItem.getAttribute("data-id");

    const shouldDelete = confirm("Are you sure you want to delete this?");
    if (shouldDelete) {
      handleDeleteProduct(productId);
    }
  }
});

async function handleDeleteProduct(productId) {
  try {
    
    const response = await fetch(`http://localhost:3004/products/${productId}`, {
      method: "DELETE",
    });
    // give a detailed log of the response
    console.log("Response Status:", response.status); 
    
    

    if (response.ok) {
      console.log(`Product with ID ${productId} has been deleted`);
      
     
      // ✅ NEEDED: Update the UI or refresh the product list
      location.reload();
    } else {
      console.error(`Failed to delete product with ID ${productId}`);
    }
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}