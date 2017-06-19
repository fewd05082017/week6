// TO DO: 
// anchor on click function to select ipsum-done
// removeClass when clicked to next anchor-done
// button on click/key press function
// accordion slideDown/slideUp function
// binding accordion slideDown/slideUp to button on click function

// NEW FUNCTION STARTS BELOW FOR ANCHOR CLICK
// i found this solution on stackoverflow.com, 
// but it uses api that i don't understand: (e.target).closest

$("a").click(function(e) {
	$("a").removeClass("current");
		$(e.target).closest("a").addClass("current");
});


 // NEW FUNCTION STARTS BELOW FOR BUTTON CLICK
// troubleshot this forever, couldnt find a way to make the paragraph text apper

$("#submit").click(function(){
    var ipsumType = $("a.current").attr("data-ipsum");
    $("#" + ipsumType).slideDown();
    console.log("expanding");
});

// $("#submit").click(function(expand){
//     var ipsumType = $("a.current").attr("data-ipsum");
//     var findIpsum = $["#lorem", "#bacon", "#beer", "#hipster"];
//     $("#" + ipsumType).slideDown();
//     console.log("expanding");
// });

$('#paragraphs').focus(function(){
    $(".ipsum").slideUp();
    console.log("working");
});


// on click, see the anchor, recognize that ID, target its corresponding p and slidedown
// $("#submit").click(function(){
//     var ipsumType = $("a.current").attr("data-ipsum");
//    	$("#" + ipsumType).slideDown();
// 	console.log("expanding");
// });

