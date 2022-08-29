
/*==================== SHOW AND HIDE HAMBURGER MENU ====================*/  

var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}


/*==================== ONSCROLL NAV-BAR BACKROUND COLOR ====================*/
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 260);
   
});

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== CURRENT DATE FOR FOOTER ====================*/ 
var date = new Date();
document.querySelector(".current-date-year").innerHTML = date.getFullYear();

