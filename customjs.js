var preloader = document.getElementById('loading')

function myfunction()
{
    preloader.style.display = 'none';
}

var lastScrollTop = 0;

navbar = document.getElementById("mainnav");

window.addEventListener("scroll", function(){

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop)
    {
        navbar.style.top = "-120px";
    }
    else
    {
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
})
