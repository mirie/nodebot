/**
 * Board - Specify port.
 *
 * http://johnny-five.io/examples/board-with-port/
 *
 * Setup = LED inserted into GND and 13. Minus (short leg)
 * inserted into 13.
 */

var five = require("johnny-five"),
  board = new five.Board({
    // Johnny-Five will try its hardest to detect the port for you, however
    // you may also explicitly specify the port by passing it as an optional
    // property to the Board constructor like this:
    port: "/dev/cu.usbserial-DN01DTNF"
  });

// The board's pins will not be accessible until the board has fired off a
// ready event.
board.on("ready", function() {
  // This is creating a new LED on pin 13.
  this.pinMode(13, this.MODES.OUTPUT);

  // This is blinking the LED at a rate of 500 ms.
  this.loop(500, function() {
    this.digitalWrite(13, this.pins[13].value ? 0 : 1);
  });
});
