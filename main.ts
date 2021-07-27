input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    if (true) {
    	
    } else if (input.compassHeading() == 0) {
        basic.showString("N")
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
    } else {
        basic.clearScreen()
    }
})
