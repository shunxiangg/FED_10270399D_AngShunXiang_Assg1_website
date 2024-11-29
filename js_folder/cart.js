let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart or increase its quantity
function addToCart(itemName, itemPrice) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to decrease quantity or remove an item from the cart
function removeFromCart(itemName) {
    const item = cart.find(cartItem => cartItem.name === itemName);
    if (item) {
        item.quantity--;
        if (item.quantity === 0) {
            cart = cart.filter(cartItem => cartItem.name !== itemName);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}
// Function to update the cart display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalDisplay = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;

        const listItem = document.createElement('li');
        
        // Create container for item text and buttons
        const itemTextContainer = document.createElement('div');
        itemTextContainer.classList.add('item-text'); // Add class for styling
        itemTextContainer.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        
        // Create buttons container
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('cart-item-buttons'); // Add class for styling
        
        // Add button
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.onclick = () => addToCart(item.name, item.price);

        // Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.onclick = () => removeFromCart(item.name);

        // Append buttons to button container
        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(removeButton);

        // Append item text container and button container to the list item
        listItem.appendChild(itemTextContainer);
        listItem.appendChild(buttonContainer);
        
        cartItemsContainer.appendChild(listItem);
    });

    cartTotalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}


// Show the checkout modal
function showModal() {
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'block';
}

// Hide the checkout modal
function hideModal() {
    const modal = document.getElementById('checkoutModal');
    modal.style.display = 'none';
}

// Update cart display on page load
window.onload = () => {
    updateCartDisplay();
};

// Proceed to checkout and show modal
document.getElementById('proceedCheckout').onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Show modal for checkout confirmation
    showModal();
};

// Handle modal close and confirm button
document.querySelector('.close').onclick = hideModal;
document.getElementById('confirmCheckout').onclick = () => {
    clearCart();
    hideModal();
};

// Close modal when clicking outside of it
window.onclick = (event) => {
    const modal = document.getElementById('checkoutModal');
    if (event.target === modal) {
        hideModal();
    }
};
