document.getElementById('addProductForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the form inputs
    var productImage = document.getElementById('productImage').value;
    var productName = document.getElementById('productName').value;
    var productDescription = document.getElementById('productDescription').value;
  
    // Create a new product card
    var productCard = `
      <div class="col-lg-3 col-md-6">
        <div class="card">
          <img src="${productImage}" class="card-img-top" alt="${productName}">
          <div class="card-body">
            <h5 class="card-title">${productName}</h5>
            <p class="card-text">${productDescription}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      </div>
    `;
  
    // Append the new product card to the products page
    var productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML += productCard;
  
    // Reset the form inputs
    document.getElementById('productImage').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('productDescription').value = '';
  });
  