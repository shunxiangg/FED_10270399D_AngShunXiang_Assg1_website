




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









// Filter photos by category
function filterPhotos() {
    const filterValue = document.getElementById('photo-filter').value;
    const photos = document.querySelectorAll('#gallery img');
    
    photos.forEach(photo => {
        photo.classList.remove('active');
        if (filterValue === 'all' || photo.classList.contains(filterValue)) {
            photo.classList.add('active');
        }
    });
}





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






function showModal(title, imageSrc, shortDescription, longDescription) {
    // Set the modal elements with the passed data
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalShortDescription').innerText = shortDescription;
    document.getElementById('modalLongDescription').innerText = longDescription;

    // Show the modal
    const modal = document.getElementById('productModal');
    modal.style.display = 'block';
}

function closeModal() {
    // Hide the modal
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}
















