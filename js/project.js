var navType 




$("nav a").on("click", function(){
	navType = $(this).attr('data-ipsum');
	$("nav a").removeClass("current");
	$(this).addClass("current");
});


$("#submit").on("click",generateText);
function generateText (){
	$("#" + navType).slideDown(500);
	$("p").showText();
}

// $("#form").on("click", function(){
// 	$("#" + navType).slideUp(500);
// //	$("p").hide();
// });




