function base () {
    if (input.buttonIsPressed(Button.A)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -53)
        control.waitMicros(5000)
        wuKong.stopAllMotor()
    }
    if (input.buttonIsPressed(Button.B)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 51)
        control.waitMicros(5000)
        wuKong.stopAllMotor()
    }
}
function garra () {
    if (input.buttonIsPressed(Button.A)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
        control.waitMicros(20000)
        wuKong.stopAllMotor()
    }
    if (input.buttonIsPressed(Button.B)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        control.waitMicros(20000)
        wuKong.stopAllMotor()
    }
}
input.onButtonPressed(Button.AB, function () {
    control.waitMicros(6000)
    if (modo == 0) {
        basic.showLeds(`
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        modo = 1
    } else {
        if (modo == 1) {
            modo = 2
            basic.showLeds(`
                . # # # .
                . . . # .
                . # # # .
                . # . . .
                . # # # .
                `)
        } else {
            if (modo == 2) {
                modo = 0
                basic.showLeds(`
                    . # # # .
                    . # . # .
                    . # . # .
                    . # . # .
                    . # # # .
                    `)
            }
        }
    }
})
function codo () {
    if (input.buttonIsPressed(Button.A)) {
        angulo_codo = angulo_codo + 1
        wuKong.setServoAngel(wuKong.ServoList.S0, angulo_codo)
        control.waitMicros(4993)
    }
    if (input.buttonIsPressed(Button.B)) {
        angulo_codo = angulo_codo - 1
        wuKong.setServoAngel(wuKong.ServoList.S0, angulo_codo)
        control.waitMicros(4938)
    }
}
let angulo_codo = 0
let modo = 0
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # . # .
    . # # # .
    `)
modo = 0
angulo_codo = 5
wuKong.setServoAngel(wuKong.ServoList.S0, angulo_codo)
basic.forever(function () {
    if (modo == 0) {
        base()
    }
    if (modo == 1) {
        codo()
    }
    if (modo == 2) {
        garra()
    }
})
