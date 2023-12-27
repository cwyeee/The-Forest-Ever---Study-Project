
const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = navLinks.querySelectorAll('a'); // Select all links inside nav-links

menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu');
})

// For each link inside nav-links, we add an event listener
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        // If mobile-menu class is active, we remove it
        if(navLinks.classList.contains('mobile-menu')) {
            navLinks.classList.remove('mobile-menu');
        }
    });
});


// back to top button ---------------------------------------------

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > document.getElementById("home").offsetTop || document.documentElement.scrollTop > document.getElementById("home").offsetTop) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById('back-to-top').addEventListener("click", function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
