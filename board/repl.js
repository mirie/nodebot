/**
 * Board - REPL. Make functions available to REPL.
 *
 * (Can call these functions from command line after starting the program.
 * http://johnny-five.io/examples/repl/
 *
 * Setup = LED inserted into GND and 13. Minus (short leg) inserted into 13.
 *
 * This script will make on() and off() functions available in the REPL:
 * >> on()  // will turn on the LED
 * >> off() // will turn off the LED
 */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("Ready event. REPL instance auto-initialized!");

  var led = new five.Led(13);

  // Make these functions available to the the REPL instance via injection.
  this.repl.inject({
    // Allow limited on/off control access to the LED instance from the REPL.
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});
