basic.forever(function () {
    basic.showString("OLYCKA NARA")
    basic.showIcon(IconNames.StickFigure)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . . . . #
        # . . # .
        # . # . .
        # # . . .
        # # # . .
        `)
    basic.showNumber(50)
    basic.clearScreen()
})
