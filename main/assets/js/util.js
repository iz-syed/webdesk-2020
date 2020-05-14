// util js


var os = [
  'iphone',
  'ipad',
  'windows',
  'mac',
  'linux'];

var match = navigator.appVersion.toLowerCase().match(
  new RegExp(os.join('|'))
);

var classes = match[0] + ' ' + $.browser.name + ' Version-' + $.browser.version;
if (match) {
  $('body').addClass(classes);
};



consoleLog(classes, 'success');

consoleLog("hello-succes", "success");
consoleLog("hello-dblue", "DodgerBlue");
consoleLog("hello-error", "error");
consoleLog("hello-warn", "warning");

//$('.single-item').slick();

$(".single-item").slick({
  dots: true,
  arrows: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'></button>"
});

$(".product-detail-slider").slick({
  dots: true,
  arrows: true,
  prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'></button>"
});

// Sticky header and alter logo
// scrollTop() >= 380 Should be equal the the height of the header


$(window).scroll(function () {
  if ($(window).scrollTop() >= 380) {
    $('header .logo-nav-search').addClass('fixed-header');
    $('.logo .main-logo').addClass('hide-title');
    $('.logo .sub-logo').addClass('visible-title');
  }
  else {
    $('header .logo-nav-search').removeClass('fixed-header');
    $('.logo-nav-search .main-logo').removeClass('hide-title');
    $('.logo-nav-search .sub-logo').removeClass('visible-title');
  }
});

// left sidebar toggle

var acc = document.getElementsByClassName("toggleNav");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// search overlay

function openSearch() {
  document.getElementById("searchOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("searchOverlay").style.display = "none";
}
