$(document).ready(function() {

  $("#wp").click(function() {
    $("body").css({
      "background-color": "#ffffff"
    });
    $("#w").toggle();
  });

  $("#lemonp").click(function() {
    $(this).attr("src", "assets/lemon.png");
    $("body").css({
      "background-color": "#ffffcc"
    });
    $('#lemon').toggle();
  });

  $("#sunsetp").click(function() {
    $(this).attr("src", "assets/light-yellow.png");
  });

  $("#summerp").click(function() {
    $(this).attr("src", "assets/deep-yellow.png");
  });

  $("#orangep").click(function() {
    $(this).attr("src", "assets/orange.png");
    $("body").css({
      "background-color": "#ffccb3"
    });
  });

  $("#sunp").click(function() {
    $(this).attr("src", "assets/orange-red.png");
  });

  $("#rosep").click(function() {
    $(this).attr("src", "assets/rose.png");
  });

  $("#skyp").click(function() {
    $(this).attr("src", "assets/light-blue.png");
  });

// left

  $("#oceanp").click(function() {
    $(this).attr("src", "assets/deep-blue.png");
  });

  $("grassp").click(function() {
    $(this).attr("src", "assets/grass.png");
  });

  $("#treesp").click(function() {
    $(this).attr("src", "assets/deep-green.png");
  });

  $("#dirtp").click(function() {
    $(this).attr("src", "assets/dirt.png");
  });

  $("#brickp").click(function() {
    $(this).attr("src", "assets/brick walls.png");
  });

  $("#brownp").click(function() {
    $(this).attr("src", "assets/brown.png");
  });

  $("#rainp").click(function() {
    $(this).attr("src", "assets/gray.png");
  });

  $("#blackp").click(function() {
    $(this).attr("src", "assets/black.png");
  });

});
