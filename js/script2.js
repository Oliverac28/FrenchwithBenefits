/*Nav Bar Collapse*/
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
	setTimeout(4000);
    document.getElementById("topnav").style.top = "-100px";
  }
	setTimeout(10000);
  prevScrollpos = currentScrollPos;
}

//End Nav Bar Collapse



function closeBtn(){
  console.log("Hello");
  document.getElementById("intro").style.display = "none";
  
}

/*About Slideshow*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
 
} 

//End about slideshow

/*Modal Menu*/

function openMenu(){
  var menu = document.getElementById('menuModal');

  if (menu.style.display === "none"){
    menu.style.display = "block";
  }
  else{
    menu.style.display = "none";
  }
}

function textChange(){
  var txt1 = document.getElementById("txt1");
  var txt2 = "a community"
  var txt3 = "Benefits";
  var delayInMilliseconds = 1000; 

  console.log("textChange");
  setTimeout (function() {
    console.log("CLick");
  	
    txt1 = txt2;

    setTimeout (function() {
  		
      txt2 = txt3;
   
    }, delayInMilliseconds);
 
  }, delayInMilliseconds);

  
 
}