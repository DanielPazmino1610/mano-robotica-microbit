radio.onReceivedNumber(function (receivedNumber) {
    I = receivedNumber
})
let I = 0
radio.setGroup(0)
I = 99
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -15)
    }
    if (input.buttonIsPressed(Button.B)) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 15)
    }
    if (I == 3) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 30)
    }
    if (I == 4) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -30)
    }
    if (I == 5) {
        wuKong.setServoAngel(wuKong.ServoList.S0, 0)
    }
    if (I == 6) {
        wuKong.setServoAngel(wuKong.ServoList.S0, 30)
    }
    if (input.buttonIsPressed(Button.AB)) {
        wuKong.stopAllMotor()
    }
})
