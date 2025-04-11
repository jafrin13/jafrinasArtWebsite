// ==================================================
// Mobile Responsive Menu Toggle
// ==================================================
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// ==================================================
// Slider Functionality: Slide Items Next/Prev
// ==================================================
// Mobile-responsive check: run slider functionality only if screen width is greater than 768px
if (window.innerWidth > 768) {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').prepend(items[items.length - 1]);
    });
} 

// ==================================================
// Modal Popup for "See More" Slider Items
// ==================================================
document.addEventListener("DOMContentLoaded", function() {
    const seeMoreButtons = document.querySelectorAll('.slider__container .content button');
  
    seeMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Traverse up to the closest .item container
        const item = this.closest('.item');
        // Get the background image value from inline style (e.g., url("..."))
        let bgImage = item.style.backgroundImage;
        // Remove the url(" and ") parts to extract the raw URL
        bgImage = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
        // Set the modal image src attribute to the background image URL
        document.getElementById('modalImage').src = bgImage;
        // Display the modal
        document.getElementById('myModal').style.display = "block";
      });
    });
  
    // Close the modal when the "close" span is clicked
    const closeBtn = document.querySelector('.modal .close');
    closeBtn.addEventListener('click', function() {
      document.getElementById('myModal').style.display = "none";
    });
  
    // Close the modal when the user clicks anywhere outside the image
    window.addEventListener('click', function(event) {
      const modal = document.getElementById('myModal');
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
});
  