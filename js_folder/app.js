




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
    event.preventDefault(); // this line prevents the thankyou message from disappearing
    document.getElementById('contactForm').style.display = 'none'; // hide the form
    document.getElementById('thankYouMessage').style.display = 'block';
});






///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



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

