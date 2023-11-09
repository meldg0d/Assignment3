//MAKE THE MAGIC HAPPEN

  function moveImageRandomly() {
    var maxX = $(window).width() - $('#butterfly').width();
    var maxY = $(window).height() - $('#butterfly').height();

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    $('#butterfly').animate({
      left: randomX,
      top: randomY
    }, 3000, moveImageRandomly);
  }

  $(document).ready(function() {
    moveImageRandomly();
  });

  $(document).ready(function () {
    $("#wateringcan").click(function () {
        $(this).toggleClass("tilt");
        if ($(this).hasClass("tilt")) {
          $("body").append('<img src="images/waterdrop.png" class="waterdrop" alt="waterdrop">')
        } 
        }
)});