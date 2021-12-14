input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # # # # #
        # . # . #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # . # .
        # . # . #
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
