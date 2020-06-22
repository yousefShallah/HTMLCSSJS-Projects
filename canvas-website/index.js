window.onscroll = function() {myFunction()};

var nav = document.getElementById('navBar');
var sticky = nav.offsetTop;
console.log(nav);

function myFunction() {
    if (window.pageYOffset > sticky) {
      nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
  }
