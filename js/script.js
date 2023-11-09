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


  function moveImageToPosition(image) {
    // Set the desired position
    var targetX = 400;
    var targetY = 700;

    // Move the clicked image to the specified position
    $(image).animate({
      left: targetX,
      top: targetY
    }, 500);
  }

  $(document).ready(function() {
    // Trigger moveImageToPosition function when any image with class "movable-image" is clicked
    $('.movable-image').click(function() {
      moveImageToPosition(this);
    });
  });