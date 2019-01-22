//PAPER JS
// The amount of clouds we want to make:
var count = 8;

// Create a symbol, which we will use to place instances of later:
var path = new Raster('imgs/cloud333.png');

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
  // The center position is a random point in the view:
  var center = Point.random() * view.size;
  var placedSymbol = symbol.place(center);
  placedSymbol.scale(i / count);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
  // Run through the active layer's children list and change
  // the position of the placed symbols:
  for (var i = 0; i < count; i++) {
    var item = project.activeLayer.children[i];

    // Move the item 1/20th of its width to the right. This way
    // larger circles move faster than smaller circles:
    item.position.x += item.bounds.width / 500;

    // If the item has left the view on the right, move it back
    // to the left:
    if (item.bounds.left > view.size.width) {
      item.position.x = -item.bounds.width;
    }
  }
}


// FORM SUBMIT
$('.button').on('click', function() {
  $("#form").html("<div id='thanks'><h2>Thanks for the contact! I'll be in touch shortly.</h2></div>");
  $('form :input').val('');
});



// NAVBAR COLLAPSE
$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});



// SCROLL EFFECT
$(function() {
  $(document).scroll(function() {
    var $nav = $("#navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  })
})
