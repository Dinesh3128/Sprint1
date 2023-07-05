// Get the form element
const addProductForm = document.getElementById('addProductForm');

// Listen for form submission
addProductForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  const productImage = document.getElementById('productImage').value;
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;

  // Create a new product object
  const product = {
    image: productImage,
    name: productName,
    description: productDescription
  };

  // Perform the desired operation with the product object (e.g., add it to a list)

  // Display a success message
  Swal.fire('Success', 'Product added successfully!', 'success');

  // Reset the form
  addProductForm.reset();
});
