// script.js

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add a class when scrolled
    } else {
        navbar.classList.remove('scrolled'); // Remove the class when back at the top
    }
});

// You can also add hover effects using JavaScript
const menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#ff9900'; // Change background color on hover
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = ''; // Reset background color when not hovered
    });
});
