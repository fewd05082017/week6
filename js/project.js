// There are three events that need to be defined:

// When the user clicks on a nav anchor:
// The item the user clicked on should be selected (the class 
// .current, which is predefined in CSS, can be applied).

$("nav a").on("click", function(){
	$("nav a.current").removeClass("current");
	$(this).addClass("current");
});

// When the user hits the Generate button:
// The specified number of paragraphs of the selected ipsum 
// should be revealed with a sliding animation.

$("#submit").click(function(){
	var ipsumType = $("nav a.current").attr("data-ipsum");
  


  $("button").on("click", addItem);

function addItem () {
  var message = $("input").val();
    $("ul").append("<li>" + message);
    $("input").val("");

}
// none of these worked:
  // $("<p>").append("#" + ipsumType).slideDown();
	// $(".ipsum").data("#lorem");
	// console.log($(".ipsum").data("#lorem");
	// $(ipsumType).slideDown();
	// $("#" + ipsumType).slideDown();
	// $(".ipsum").text();
	// write the data here
	console.log("expanding");
});


// .text() .append()
// or create empty array with placeholder

// When the user clicks or tabs into the form field:

// The field should clear and the revealed ipsum should disappear 
// with a sliding animation.
// You will likely need to use all of the following jQuery functions: 
// .click(), .focus(), .removeClass(), .addClass(), .data(), .slice(), 
// .find(), .hide(), .slideDown(), .slideUp(). 






$('#paragraphs').focus(function(){
	$(".ipsum").slideUp();
	console.log("working");
});