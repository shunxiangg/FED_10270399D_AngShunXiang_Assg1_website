




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





document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from actually submitting

    // Hide the form and display the thank you message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});














///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
// function addToCart(name, price) {
//     // Add item to cart directly from the store page
//     let cartItemsList = document.getElementById('cartItems');
//     let newItem = document.createElement('li');
//     newItem.innerText = `${name} - $${price.toFixed(2)}`;
//     cartItemsList.appendChild(newItem);

//     cartTotal += price;
//     document.getElementById('cartTotal').innerText = 'Total: $' + cartTotal.toFixed(2);
// }


// function showModal(title, imageSrc, shortDescription, longDescription) {
//     document.getElementById('modalTitle').innerText = title;
//     document.getElementById('modalImage').src = imageSrc;
//     document.getElementById('modalShortDescription').innerText = shortDescription;
//     document.getElementById('modalLongDescription').innerText = longDescription;

//     const modal = document.getElementById('productModal');
//     modal.style.display = 'block';
// }

// function closeModal() {
//     const modal = document.getElementById('productModal');
//     modal.style.display = 'none';
// }
let cartTotal = 0;
let allItems = [
    {
        name: "Retro Steampunk Table Lamp",
        price: 140,
        description: "Vintage industrial metal water pipe lamp",
        img: "imgs_folder/table_lamp.webp"
    },
    {
        name: "Vintage Indian Ceramic Pickle Jar",
        price: 92,
        description: "Hand-painted orange and green jar",
        img: "imgs_folder/pickle_jar.webp"
    },
    {
        name: "Vintage Mini Tea Set Porcelain",
        price: 23,
        description: "13-piece floral porcelain set",
        img: "imgs_folder/mini_tea_set.webp"
    },
    {
        name: "Infityle Classic Retro Game Console",
        price: 32,
        description: "620 games, 8-bit video console",
        img: "imgs_folder/retro_game_console.webp"
    },
    {
        name: "Mini Classic Game Machine",
        price: 60,
        description: "26 games with keychain console",
        img: "imgs_folder/mini_game_machine.webp"
    },
    {
        name: "In the Night Garden Talking Makka Pakka",
        price: 66,
        description: "Soft and cuddly Makka Pakka plush",
        img: "imgs_folder/makabaka.webp"
    },
    {
        name: "Gramophone Wooden Working Antique Audio Wind-up Record Player",
        price: 153,
        description: "Wooden gramophone with wind-up mechanism",
        img: "imgs_folder/record_player.webp"
    },
    {
        name: "Vintage Metal Tin Canister With Handle Strawberries Design",
        price: 25,
        description: "Vintage tin canister with strawberry design",
        img: "imgs_folder/tin-canister.webp"
    },
    {
        name: "Vintage RETRO-1532 Guitar",
        price: 260,
        description: "Rare vintage guitar with rich tone",
        img: "imgs_folder/store_guitar.jpg"
    },
    {
        name: "Vintage Band T-Shirt",
        price: 30,
        description: "Stylish band logo design shirt",
        img: "imgs_folder/store-tshirt-white.webp"
    }
];

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
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////


function filterByPrice() {
    // Get the selected price range from the dropdown
    let priceRange = document.getElementById('price-range').value;

    // Get all product items
    let items = document.querySelectorAll('.store-items .item');
    
    // If 'Display All' is selected, show all items
    if (priceRange === 'all') {
        items.forEach(item => {
            item.style.display = 'block'; // Show all items
        });
        return; // Exit the function as we don't need to filter further
    }
    
    // Otherwise, split the price range and convert to numbers
    let [minPrice, maxPrice] = priceRange.split('-').map(Number);

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



//adding items to cart
// app.js

function addToCart(itemName, itemPrice) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Add the new item to the cart
    cartItems.push({ name: itemName, price: itemPrice });
    
    // Save the updated cart back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Optionally, show a confirmation to the user
    alert(`${itemName} has been added to your cart!`);
}
