document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
      
      element.addEventListener('click', function (e) {
  
        let nextEl = element.nextElementSibling;
        let parentEl  = element.parentElement;	
  
          if(nextEl) {
              e.preventDefault();	
              let mycollapse = new bootstrap.Collapse(nextEl);
              
              if(nextEl.classList.contains('show')){
                mycollapse.hide();
              } else {
                  mycollapse.show();
                  // find other submenus with class=show
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  // if it exists, then close all of them
                  if(opened_submenu){
                    new bootstrap.Collapse(opened_submenu);
                  }
              }
          }
      }); // addEventListener
    }) // forEach
  }); 
  // DOMContentLoaded  end

  // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



document.addEventListener("DOMContentLoaded", function () {
  // Get the products dropdown and submenu
  const productsDropdown = document.getElementById("productsDropdown");
  const productsSubmenu = document.getElementById("productsSubmenu");

  // Check if the submenu should be shown initially
  const shouldShowSubmenu = sessionStorage.getItem("showProductsSubmenu") === "true";

  // Toggle the submenu visibility based on the stored state
  if (shouldShowSubmenu) {
      productsSubmenu.classList.add("show");
      productsDropdown.setAttribute("aria-expanded", "true");
  }

  // Add a click event listener to the products dropdown link
  productsDropdown.addEventListener("click", function (e) {
      e.preventDefault();
      const isSubmenuShown = productsSubmenu.classList.contains("show");

      if (!isSubmenuShown) {
          // Store the submenu state as open
          sessionStorage.setItem("showProductsSubmenu", "true");
          productsSubmenu.classList.add("show");
          productsDropdown.setAttribute("aria-expanded", "true");
      } else {
          // If the submenu is already open and the Products link is clicked again, close the submenu
          sessionStorage.setItem("showProductsSubmenu", "false");
          productsSubmenu.classList.remove("show");
          productsDropdown.setAttribute("aria-expanded", "false");
          // Reload the page to reset the dropdown state
          window.location.reload();
      }
  });
});





