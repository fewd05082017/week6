// I know this is incomplete, but I was stumped by how to connect the functions and display the correct number of paragraphs

// when anchor selected add class current - X
// when class added, remove from others - X
// connect data-ipsum to ipsum ID - 
function chooseIpsum (){
	$("a").removeClass("current");
	$(this).addClass("current");
	var ipsumChoice = "#" + $("a").attr("data-ipsum");
	// registers here, but does not carry to other functions
};

// identify value of input - X
// connect with ipsum ID 
// expand div - X
// display number of paragraphs input
// define the number of p from 1-10
function displayIpsum (){
	var numberOfGrafs = $("#paragraphs").val();
	$(".ipsum").slideToggle(500);
	// $(ipsumChoice).slideToggle(500); DOES NOT WORK; not recognizing value of ipsumChoice
};

// when input changed collapse div then run displayIpsum
// function nested within displayIpsum
function resetIpsum (){

};

$("a").on("click", chooseIpsum);

$("#submit").on("click", displayIpsum);