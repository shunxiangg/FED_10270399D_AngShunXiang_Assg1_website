




// Toggle Menu
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && event.target !== menuIcon) {
        navLinks.classList.remove('active');
    }
});

// // Filter photos by category
// function filterPhotos() {
//     const filterValue = document.getElementById('photo-filter').value;
//     const photos = document.querySelectorAll('#gallery img');
    
//     photos.forEach(photo => {
//         photo.classList.remove('active');
//         if (filterValue === 'all' || photo.classList.contains(filterValue)) {
//             photo.classList.add('active');
//         }
//     });
// }



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from actually submitting

    // Hide the form and display the thank you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});




// // Function to open modal with product details
// function showModal(title, imgSrc, description) {
//     document.getElementById('modal-title').textContent = title;
//     document.getElementById('modal-img').src = imgSrc;
//     document.getElementById('modal-desc').textContent = description;
    
//     // Show the modal
//     document.getElementById('myModal').style.display = 'block';
// }

// // Function to close the modal
// function closeModal() {
//     document.getElementById('myModal').style.display = 'none';
// }

// // Close modal when clicking outside the modal content
// window.onclick = function(event) {
//     const modal = document.getElementById('myModal');
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }




let modalItemName = '';
let modalItemPrice = 0;
let cartTotal = 0;

function showModal(title, imageSrc, shortDescription, longDescription, price) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalShortDescription').innerText = shortDescription;
    document.getElementById('modalLongDescription').innerText = longDescription;

    modalItemName = title;
    modalItemPrice = price;

    document.getElementById('productModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// function addModalItemToCart() {
//     if (modalItemName && modalItemPrice) {
        
//         let cartItemsList = document.getElementById('cartItems');
//         let newItem = document.createElement('li');
//         newItem.innerText = `${modalItemName} - $${modalItemPrice.toFixed(2)}`;
//         cartItemsList.appendChild(newItem);

//         cartTotal += modalItemPrice;
//         document.getElementById('cartTotal').innerText = 'Total: $' + cartTotal.toFixed(2);

//         closeModal();
//     }
// }

function addToCart(name, price) {
    // Add item to cart directly from the store page
    let cartItemsList = document.getElementById('cartItems');
    let newItem = document.createElement('li');
    newItem.innerText = `${name} - $${price.toFixed(2)}`;
    cartItemsList.appendChild(newItem);

    cartTotal += price;
    document.getElementById('cartTotal').innerText = 'Total: $' + cartTotal.toFixed(2);
}


function showModal(title, imageSrc, shortDescription, longDescription) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalShortDescription').innerText = shortDescription;
    document.getElementById('modalLongDescription').innerText = longDescription;

    const modal = document.getElementById('productModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

function filterByPrice() {
    // Get the selected price range from the dropdown
    let priceRange = document.getElementById('price-range').value;
    let [minPrice, maxPrice] = priceRange.split('-').map(Number);

    // Get all product items
    let items = document.querySelectorAll('.store-items .item');
    
    // Loop through each item and check its price
    items.forEach(item => {
        // Find the price of the product inside the item
        let priceText = item.querySelector('.product-price').innerText;
        
        // Extract the price from the text (removing '$' and converting to a number)
        let price = parseFloat(priceText.replace('$', '').trim());

        // Show or hide the item based on the selected price range
        if (price >= minPrice && price <= maxPrice) {
            item.style.display = 'block'; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}
