document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const navMenu = document.querySelector('.nav__list');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  
    // Project Filtering
    const categoryButtons = document.querySelectorAll('.category__btn');
    const projectItems = document.querySelectorAll('.project__item');
  
    categoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(b => b.classList.remove('active-work'));
        // Set active class for the clicked button
        btn.classList.add('active-work');
  
        const selectedCategory = btn.getAttribute('data-category');
        projectItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          // Show item if category is 'all' or matches
          if (selectedCategory === 'all' || itemCategory === selectedCategory) {
            item.style.display = 'flex';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });