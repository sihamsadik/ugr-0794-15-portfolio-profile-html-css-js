
const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('hide');
    });

    document.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('header');
        const scrollThreshold = 1; 
      
        window.addEventListener('scroll', () => {
          if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        });
      });
      
    

