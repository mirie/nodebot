/**
 * LED - Led
 * 
 * http://johnny-five.io/examples/led/
 * Setup = LED inserted into GND and 13. Minus (short leg) inserted into 13.
 * OR Black wire from GND to d3, Red wire from 13 to g4, 330 resistor from f4 to d4.
 * Led a3 and a4 (minus, short leg in a3).
 */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  console.log("REPL ready!");
  var led = new five.Led(13);

  // This will grant access to the Led instance from within the REPL that's
  // created when running this program. 
  // So should be able to run:
  // >> led.stop() // to stop blinking.
  // >> led.off()  // to shut it off (stop doesn't mean "off")
  // >> led.on()   // to turn on, but not to blink
  this.repl.inject({
    led: led
  });

  // Kick this off with some blinking.
  led.blink();
});
