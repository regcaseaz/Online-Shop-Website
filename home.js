// This is just a placeholder for JavaScript code
console.log("JavaScript code can be added here if needed");

// Get all product elements
const products = document.querySelectorAll('.product');

// Add click event listener to each product
products.forEach(product => {
  product.addEventListener('click', function() {
    // Get product details
    const productName = this.querySelector('p:nth-child(2)').textContent;
    const price = this.querySelector('p:nth-child(3)').textContent;
    const ratings = this.querySelector('p:nth-child(4)').textContent;

    // You can also get image source, sizes, etc. if needed

    // Display product details in modal
    showProductDetails(productName, price, ratings);
  });
});

function showProductDetails(productName, price, ratings) {
  const modalContent = document.querySelector('.product-details');
  modalContent.innerHTML = `
    <div class="product-details-left">
      <img src="larger-image.jpg" alt="${productName}">
    </div>
    <div class="product-details-right">
      <h2>${productName}</h2>
      <p>Price: ${price}</p>
      <p>Ratings: ${ratings}</p>
      <!-- Add sizes, quantity, and add to bag button here -->
    </div>
  `;

  const modal = document.getElementById('productDetailsModal');
  modal.style.display = 'block';
}

function closeProductDetailsModal() {
  const modal = document.getElementById('productDetailsModal');
  modal.style.display = 'none';
}
