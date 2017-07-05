$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cats").prepend("<li>Meow!</li>");
    $("ul#dogs").prepend("<li>Aw Aw!</li>");
  });

  $("button#dog").click(function() {
    $("ul#dogs").prepend("<li>Aw Aw!</li>");
    $("ul#cats").prepend("<li>Meow!</li>");
  });
});
