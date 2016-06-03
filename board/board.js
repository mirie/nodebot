/**
 * Board - Basic Initialization
 *
 * http://johnny-five.io/examples/board/
 *
 * Setup = LED inserted into GND and 13. Minus (short leg)
 * inserted into 13.
 */

var five = require("johnny-five"),
  board = new five.Board();

// The board's pins will not be accessible until the board
// has fired the ready event.
board.on("ready", function() {
  console.log("Yo, I'm ready Freddy!");

  // Create an LED on pin 13.
  var led = new five.Led(13);

  // Blink the LED at a rate of 500 ms.
  led.blink(500);
  led.color
});
