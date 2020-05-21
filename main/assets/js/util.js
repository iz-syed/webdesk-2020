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
  if ($(window).scrollTop() >= 130) {
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


//  footer section
$(".footboxone h5").click(function(){
  $(".footboxone").toggleClass("collapse");
});

$(".footboxtwo h5").click(function(){
  $(".footboxtwo").toggleClass("collapse");
});

$(".footboxthree h5").click(function(){
  $(".footboxthree").toggleClass("collapse");
});



$('#hello').hide('slide', {direction: 'left'}, 1000);

//Product filter icon(sidebar show hide)

var closeIcon = $('<div class="mob-sidebar-title"><strong>CATEGORIES</strong><span class="closeicon"><svg viewBox="0 0 32 32"><polyline points="32,3.3 20.9,14.4 19.3,16 20.9,17.6 32,28.7 28.7,32 17.6,20.9 16,19.3 14.4,20.9 3.3,32.1 0,28.8 11.1,17.6 12.7,16 11.1,14.4 0,3.3 3.3,0 14.4,11.1 16,12.7 17.6,11.1 28.7,0 32,3.3 "></polyline></svg><span/></div>');
$('.product-sidebar .left-sidebar').prepend(closeIcon);

closeIcon.click(function() {
//$('.product-sidebar').fadeToggle('slow');
 }); 


$('.productFilter,.closeicon').click(function(){
    $('.product-sidebar').fadeToggle('');
    //$('.products-listing-grid').fadeIn(3000);
});


//Product filter icon active
$(".productFilter").click(function(){
  $(this).toggleClass("filter_active");
});