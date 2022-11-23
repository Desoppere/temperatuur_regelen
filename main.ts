function temp () {
    if (input.buttonIsPressed(Button.A)) {
        Temp += 1
        basic.showString("T=")
        basic.showNumber(Temp)
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.B)) {
        Temp += -1
        basic.showLeds(`
            # # # . .
            . # . # #
            . # . . .
            . # . # #
            . . . . .
            `)
        basic.clearScreen()
        basic.showNumber(Temp)
        basic.pause(500)
    }
}
let Temp = 0
Temp = 22
basic.forever(function () {
    temp()
})
