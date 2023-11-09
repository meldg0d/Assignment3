//MAKE THE MAGIC HAPPEN
    $('.apple').each(function(){
        $(this).css({"right": (Math.random() * 400) + 200 , "top": (Math.random() * 300) + 150})
    });  

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
    }, 2000);
  }

  $(document).ready(function() {
    // Trigger moveImageToPosition function when any image with class "movable-image" is clicked
    $('.movable-image').click(function() {
      moveImageToPosition(this);
    });

    // Add shake effect when hovering over any image with class "apple"
    $('.apple').hover(function() {
      $(this).css("transform", "rotate(10deg)");
      $(this).animate({ "transform": "rotate(-10deg)" }, {
        duration: 100,
        complete: function() {
          $(this).css("transform", "");
        }
      });
    });
  });