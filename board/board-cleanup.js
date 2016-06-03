/**
 * Board - Cleanup in 'exit' event.
 *
 * http://johnny-five.io/examples/board-cleanup/
 *
 * Setup = LED inserted into GND and 13. Minus (short leg)
 * inserted into GND.
 */

var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.on();

  this.on("exit", function() {
    led.off();
  });
});
