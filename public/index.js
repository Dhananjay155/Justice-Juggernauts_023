// index .js

// nav bar  burger 

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  navbarLinks.classList.toggle('active');
});


// nav burger finish