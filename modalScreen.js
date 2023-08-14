function openEditModal(product) {
    const editModal = document.getElementById("editModal");
    const modalContent = editModal.querySelector(".modal-content");
  
    // Populate form fields with product information
    // Customize the form structure based on your requirements
    modalContent.innerHTML = `
      <h2>Edit Product</h2>
      <form id="editForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="${product.name}">
        <label for="price">Price:</label>
        <input type="number" id="price" name="price" value="${product.price}">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value="${product.quantity}">
        <button type="submit">Save Changes</button>
      </form>
    `;
  
    // Show the modal
    editModal.style.display = "block";
  
    // Close the modal when the close button or outside modal is clicked
    const closeButton = editModal.querySelector(".close");
    window.onclick = event => {
      if (event.target === editModal || event.target === closeButton) {
        editModal.style.display = "none";
      }
    };
  
    // Handle form submission (you need to implement this)
    const editForm = document.getElementById("editForm");
    editForm.addEventListener("submit", event => {
      event.preventDefault();
      // Call a function to handle form submission and update the product
      handleEditProduct(product._id);
      editModal.style.display = "none";
    });
  }

  export default openEditModal;
  