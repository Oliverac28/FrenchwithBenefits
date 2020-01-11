
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

/*Text Change*/

 var delayInMilliseconds = 5000; //5 seconds
 var text = ["Apprendre le Français","Rencontrer une communauté","J'aime les thons farcis"];
 var x;
 x = 0;

 //while( x < 3) {
 	setTimeout (function() {
  		
 		document.getElementById("herotext").innerHTML = text[1];
  
 	}, delayInMilliseconds);
	
 	setTimeout (function() {
  		
 		document.getElementById("herotext").innerHTML = text[2];
  
 	}, delayInMilliseconds);

 	setTimeout (function() {
  		
 		document.getElementById("herotext").innerHTML = text[3];
  
 	}, delayInMilliseconds);
  x = x + 1;
	
  if (x === 2){
 		x = 0;
 	}
  

// Modal

function openImage(imgs) {
	console.log("click");
  var expandImg = document.getElementById("expandedImg");
  var modal = document.getElementById("modal_id");
  expandImg.src = imgs.src;
  modal.style.display = "block";
	returnImage(imgs.src);
}

function returnImage(x){
	return x;
}
	



//function clickImage(){
//	var imageClicked = document.getElementsByTagName();
//}
// 
//function getImage(){
//	var imageActive = document.getElementsByTagName(clickImage());
//	var modalClass = document.getElementById('modal_id');
//	
//	return imageActive;
//	
//	console.log("imageActive")
//}
//
//function setImage(){
//	
//}

//function displayModal(){
//	var modalClass = document.getElementById('modal_id');	
//	modalClass.style.display = "block";
//	console.log(modalClass);
//}
//
//
//
function closeModal(){
	var modalClass = document.getElementById(modal_id);	
	modalClass.style.display = "none";
	console.log(modalClass);
	
}

function close(){
	document.getElementById("intro").intro.style.display = "none";
	}

function errorFunction(){
	console.log("error");
}
 

 

