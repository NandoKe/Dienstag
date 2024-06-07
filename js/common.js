/* JS Code, der nur auf mehreren Pages verwendet wird */
function burgerMenu() {
    var burgerNav = document.querySelector('.burger-nav');
      if (burgerNav.style.display === 'none') {
        burgerNav.style.display = 'flex'
      } else {
        burgerNav.style.display = 'none';
      }
  }

document.addEventListener("DOMContentLoaded", function() {
    var burgerNav = document.querySelector('.burger-nav');
    const linksToClick = document.getElementsByClassName("nav-link");

    for (const link of linksToClick) {
        link.addEventListener("click", function() {
            window.location.href = link.href
            burgerNav.style.display = 'none'; 
        });
    }
});