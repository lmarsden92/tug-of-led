input.onButtonPressed(Button.A, function () {
    rope += -1
})
input.onButtonPressed(Button.AB, function () {
    rope = 2
})
input.onButtonPressed(Button.B, function () {
    rope += 1
})
let rope = 0
rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        music.playMelody("G B A G C5 B A B ", 120)
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
    } else if (rope > 4) {
        music.playMelody("G B A G C5 B A B ", 120)
        basic.showLeds(`
            . # # # .
            . # . . #
            . # # # .
            . # . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            . # . . #
            . # # # .
            . # . . #
            . # # # .
            `)
    }
})
