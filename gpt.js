document.addEventListener('DOMContentLoaded', function() {
  // Rest of your existing code
  
  const showQRCodeButton = document.getElementById('showQRCode');
  const qrCodeModal = document.getElementById('qrCodeModal');
  
  showQRCodeButton.addEventListener('click', function() {
    $('#qrCodeModal').modal('show');
  });
document.addEventListener('DOMContentLoaded', function() {
  const itemsList = document.getElementById('items');
  const cartItemsContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  const paidAmountInput = document.getElementById('paid-amount');
  const calculateButton = document.getElementById('calculate');
  const balanceElement = document.getElementById('balance');
  const checkoutButton = document.getElementById('checkout');

  let cartItems = [];
  let total = 0;

  // Add event listener to all "Add to Cart" buttons
  itemsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
      const item = event.target.parentNode;
      const itemName = item.querySelector('.item-name').textContent;
      const itemPrice = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));

      // Add item to cart items
      cartItems.push({ name: itemName, price: itemPrice });

      // Update cart display
      const cartItem = document.createElement('li');
      cartItem.textContent = `${itemName}: $${itemPrice.toFixed(2)}`;
      cartItemsContainer.appendChild(cartItem);

      // Update total
      total += itemPrice;
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
  });

  // Checkout button event listener
  checkoutButton.addEventListener('click', function() {
    paidAmountInput.value = total.toFixed(2); // Load checkout value into paid amount field
  });

  // Calculate balance
  calculateButton.addEventListener('click', calculateBalance);

  function calculateBalance() {
    const paidAmount = parseFloat(paidAmountInput.value);

    if (isNaN(paidAmount)) {
      balanceElement.innerText = 'Invalid amount';
      return;
    }

    const balance = paidAmount - total;

    if (balance < 0) {
      balanceElement.innerText = 'Insufficient payment';
    } else {
      balanceElement.innerText = 'Balance: $' + balance.toFixed(2);
    }
  }
});
