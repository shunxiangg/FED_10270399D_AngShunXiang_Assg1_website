


// Toggle Menu
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

// Toggle the 'active' class on the navigation links when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && event.target !== menuIcon) {
        navLinks.classList.remove('active');
    }
});

/////////////////////////////////
// contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('contactForm').style.display = 'none'; // hide the form
    document.getElementById('thankYouMessage').style.display = 'block';
});


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


// Store items modal
function showModal(title, imageSrc, shortDescription, longDescription) {
    // Set the content of the modal (title, image, descriptions)
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalShortDescription').innerText = shortDescription;
    document.getElementById('modalLongDescription').innerText = longDescription;

    // Show the modal
    const modal = document.getElementById('productModal');
    modal.style.display = 'block';  // change the style to block to show the modal
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// Function to filter store items by price
function filterByPrice() {
    // Get the selected price range
    const priceRange = document.getElementById('price-range').value;

    // Get all the store items
    const items = document.querySelectorAll('.item');

    // Loop through all the items and show/hide based on the price range
    items.forEach(item => {
        const priceText = item.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));

        let showItem = false;   // Variable to decide whether to show or hide the item


        switch (priceRange) {
            case 'all':
                showItem = true;
                break;
            case '0-50':
                if (price <= 50) showItem = true;
                break;
            case '51-100':
                if (price > 50 && price <= 100) showItem = true;
                break;
            case '101-150':
                if (price > 100 && price <= 150) showItem = true;
                break;
            case '151-200':
                if (price > 150 && price <= 200) showItem = true;
                break;
            case '201-9999':
                if (price > 200) showItem = true;
                break;
        }

        // Show or hide the item based on the price range
        item.style.display = showItem ? 'block' : 'none';
    });
}
