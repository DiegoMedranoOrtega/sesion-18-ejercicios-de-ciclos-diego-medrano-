input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(contador)
    }
    Caritas()
})
input.onButtonPressed(Button.AB, function () {
    contador = 1
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
    }
    Caritas()
})
input.onButtonPressed(Button.B, function () {
    contador = 0
    while (contador <= 10) {
        basic.showNumber(contador)
        contador += 2
    }
    Caritas()
})
function Caritas () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.showIcon(IconNames.Asleep)
        basic.showIcon(IconNames.Surprised)
        basic.showIcon(IconNames.Happy)
    }
}
let contador = 0
let n1 = randint(5, 10)
basic.showNumber(n1)
for (let contador = 0; contador <= n1; contador++) {
    basic.showNumber(contador)
    for (let index = 0; index < 4; index++) {
        music.playTone(988, music.beat(BeatFraction.Sixteenth))
        basic.pause(100)
    }
}
