// $("nav a"). on("click", ClickNavi);
// $("#submit").on("click", ClickSubmit);
// $("#paragraphs").on("focus", ShowParagraph);

// $(document).ready(function() {
//   $("nav a").on("click", function() {
//     $("nav a").removeClass("current");
//     $(this).addClass("current");
//   });

// $(document).ready(function() {
//   $("nav a").on("click", function() {
//     $("nav a").removeClass("current");
//     $(this).addClass("current");
//   });





//   // $("#submit").on("click", function() {
//   //   var selector = "#" + $("nav a.current").data("ipsum");
//   //   var numParagraphs = $("#paragraphs").val();
//   //   $(".ipsum").hide();
//   //   $(selector)
//   //     .find("p")
//   //     .slice(0, numParagraphs)
//   //     .show();
//   //   $(selector).slideDown(400);
//   // });




//   $("#submit").on("click", function() {
//   var selector = "#" + $("nav a.current").data("ipsum");
//   var numParagraphs = $("#paragraphs").val();
//   $(".ipsum").hide();
//   var paragraphs = $(selector).find("p");
//     paragraphs = paragraphs.slice(0, numParagraphs);
//     paragraphs.show();
//     $(selector).slideDown(400);
//   });

//   $("#paragraphs").on("focus", function() {
//     $("#paragraphs").val("");
//     $(".ipsum").hide();
//     // slideUp(1000, function() {
//       $("p").hide();
//   });
// });



function handleNavClick() {
  $("nav a").removeClass("current");
  $(this).addClass("current");
}

function handleSubmitClick() {
  var selector = "#" + $("nav a.current").data("ipsum");
  var numParagraphs = $("#paragraphs").val();
  $(".ipsum").hide();
  
  var paragraphs = $(selector).find("p");
  paragraphs = paragraphs.slice(0, numParagraphs);
  paragraphs.show();
  $(selector).slideDown(400);
}

function handleParagraphFocus() {
  $("#paragraphs").val("");
  $(".ipsum").slideUp(400);
  $("p").hide();
}

$("nav a"). on("click", handleNavClick);
$("#submit").on("click", handleSubmitClick);
$("#paragraphs").on("focus", handleParagraphFocus);
