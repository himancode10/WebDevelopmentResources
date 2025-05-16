// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));

    // Show the clicked tab content
    target.classList.add('active');
  });
});

// Smooth scrolling navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
