$(document).ready(function(){
	$("nav ul li:first-child").click(function(){
		console.log("hamburger clicked!")
		// $("nav ul li:not(:first-child)").toggle();
		$("nav").toggleClass("show");
	})

  
});