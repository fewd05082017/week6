// There are three events that need to be defined:

// When the user clicks on a nav anchor:

// The item the user clicked on should be selected (the class .current, which is predefined in CSS, can be applied).

// When the user hits the Generate button:

// The specified number of paragraphs of the selected ipsum should be revealed with a sliding animation.

// When the user clicks or tabs into the form field:

// The field should clear and the revealed ipsum should disappear with a sliding animation.

// You will likely need to use all of the following jQuery functions: .click(), .focus(), .removeClass(), .addClass(), .data(), .slice(), .find(), .hide(), .slideDown(), .slideUp(). Check the jQuery documentation for what each of these do: https://api.jquery.com/

// Your solution should be generic enough that you could add one or many more ipsums to the list and have it still work.





// adding the current class to clicked anchor
$("a").on("click", changeIpsum);

function changeIpsum() {
	$(".current").removeClass();
	$(this).addClass("current");	
}

// Adding Ipsum text
$("#submit").on("click", addIpsum);

function addIpsum() {
var number = $("input").val();
alert(currentIpsum);

}






// Notes:
// The display of <p> and .ipsum are set to "none". 
// When a user clicks the button, I should change the display of the id of the current anchor.

// When a user clicks an anchor, I need to remove the "current" class from all other anchors.
// Then I need to give the clicked anchor a "current" class.

// Then I need to change the display of the paragraphs in that class (or id?).
// I should find the current class and retain that information.
// Possibly I need to change the height of the div in that class to acommodate all the text (or make it scroll! CSS overflow i think.)

// I don't know how to determine how many paragraphs to show, but i'll figure that out later. 
// Something to do with the data attributes?

// When a user clicks a different anchor, I need to change the paragraphs of the previous anchor back to display:none.
