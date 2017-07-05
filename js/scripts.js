$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cats").prepend("<li>Meow!</li>");
    $("ul#dogs").prepend("<li>Aw Aw!</li>");
  });

  $("button#dog").click(function() {
    $("ul#dogs").prepend("<li>Aw Aw!</li>");
    $("ul#cats").prepend("<li>Meow!</li>");
  });

  $("button#both").click(function() {
    $("ul#dogs").prepend("<li><img width='100%' src='img/dog2.jpeg'></li>");
    $("ul#cats").prepend("<li><img width='100%' src='img/cat2.jpeg'></li>");
    $("ul#dogs").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cats").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
