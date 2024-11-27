// cart.js

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
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

// Function to remove an item from the cart
function removeFromCart(itemName) {
    cart = cart.filter(cartItem => cartItem.name !== itemName);
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
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.name);

        listItem.appendChild(removeButton);
        cartItemsContainer.appendChild(listItem);
    });

    cartTotalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Update cart display on page load
window.onload = () => {
    updateCartDisplay();
};

// Proceed to checkout (basic functionality)
document.getElementById('proceedCheckout').onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to checkout...");
    // Add further checkout logic here (e.g., redirect to payment gateway)
};
