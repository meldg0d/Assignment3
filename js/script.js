//APPLE
// Function to generate a random position within the tree crown for apples
function getRandomApplePosition() {
  var $tree = $('#tree'); // Assuming you have an element with class "tree" for the tree image

  var treeWidth = $tree.width();
  var treeHeight = $tree.height();
  var treeOffset = $tree.offset();

  // Define the crown boundaries within the tree image
  var crownLeft = treeOffset.left + treeWidth * 0.3;
  var crownTop = treeOffset.top + treeHeight * 0.1;
  var crownRight = treeOffset.left + treeWidth * 0.7;
  var crownBottom = treeOffset.top + treeHeight * 0.4;

  // Generate random positions within the crown boundaries
  var randomX = Math.floor(Math.random() * (crownRight - crownLeft + 1)) + crownLeft;
  var randomY = Math.floor(Math.random() * (crownBottom - crownTop + 1)) + crownTop;

  return { left: randomX, top: randomY };
}

// Set the initial position for each apple
$('.apple').each(function () {
  var randomPosition = getRandomApplePosition();
  $(this).css({ "left": randomPosition.left, "top": randomPosition.top });
});

//MOVE APPLE
// Function to generate a random position within the basket area for apples
function getRandomBasketPosition() {
  var $basket = $('.basket'); // Assuming you have an element with class "basket" for the basket image

  var basketWidth = $basket.width();
  var basketHeight = $basket.height();
  var basketOffset = $basket.offset();

  // Define the basket boundaries within the tree image
  var basketLeft = basketOffset.left + basketWidth * 0.2; // Adjust these values based on your basket image
  var basketTop = basketOffset.top + basketHeight * 0.5;
  var basketRight = basketOffset.left + basketWidth * 0.7;
  var basketBottom = basketOffset.top + basketHeight * 0.7;

  // Generate random positions within the basket boundaries
  var randomX = Math.floor(Math.random() * (basketRight - basketLeft + 1)) + basketLeft;
  var randomY = Math.floor(Math.random() * (basketBottom - basketTop + 1)) + basketTop;

  return { left: randomX, top: randomY };
}

// Function to move the apple into the basket
function moveAppleIntoBasket(apple) {
  var randomPosition = getRandomBasketPosition();
  $(apple).animate({
      left: randomPosition.left,
      top: randomPosition.top
  }, 400);
}

$(document).ready(function () {
  // Trigger moveAppleIntoBasket function when any image with class "movable-image" (apple) is clicked
  $('.movable-image').click(function () {
      moveAppleIntoBasket(this);
  });

  // Add shake effect when hovering over any image with class "apple"
  $('.apple').hover(function () {
      $(this).css("transform", "rotate(10deg)");
      $(this).animate({ "transform": "rotate(-10deg)" }, {
          duration: 100,
          complete: function () {
              $(this).css("transform", "");
          }
      });
  });
});


// Audio
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.4;
  audio.play();
});

var apple1 = new Audio("sounds/apple.mp3");
var apple2 = new Audio("sounds/apple.mp3");
var apple3 = new Audio("sounds/apple.mp3");
 
//Butterfly
var net = document.getElementById('net');
var butterfly = $('#butterfly');
var score = 0;

function moveImageRandomly(speed) {
    var maxX = $(window).width() - butterfly.width();
    var maxY = $(window).height() - butterfly.height();

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    butterfly.stop().animate({
        left: randomX,
        top: randomY
    }, speed, function() {
        moveImageRandomly(speed);
    });
}

document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    net.style.left = (mouseX - net.width / 2) + 'px';
    net.style.top = (mouseY - net.height / 2) + 'px';

    // Check for collision with the top part of the net pole
    if (isCollisionTopPole(net, butterfly)) {
        // Stop the random movement
        butterfly.stop();

        // Calculate a new position at least the size of the net away
        var minDistance = net.width; // Adjust this value as needed
        var newX = Math.max(net.offsetLeft + minDistance, Math.min($(window).width() - butterfly.width(), net.offsetLeft + net.width));
        var newY = Math.floor(Math.random() * ($(window).height() - butterfly.height()));

        butterfly.animate({
            left: newX,
            top: newY
        }, 500, function() {
            // Increase the score
            score++;
            // Update the HTML element displaying the score
            $('.score').text('SCORE: ' + score);

            // Resume the random movement
            moveImageRandomly(3000);
        });
    }
});

// Function to check collision with the top part of the net pole
function isCollisionTopPole(net, butterfly) {
    var netRect = net.getBoundingClientRect();
    var butterflyRect = butterfly[0].getBoundingClientRect();

    // Define the top part of the net pole
    var topPole = {
        top: netRect.top,
        bottom: netRect.top + netRect.height * 0.2, // Adjust this value as needed
        left: netRect.left,
        right: netRect.right
    };

    return (
        topPole.left < butterflyRect.right &&
        topPole.right > butterflyRect.left &&
        topPole.top < butterflyRect.top &&
        topPole.bottom > butterflyRect.top
    );
}

// Initial call to start the random movement
moveImageRandomly(3000);



console.log("test123")

