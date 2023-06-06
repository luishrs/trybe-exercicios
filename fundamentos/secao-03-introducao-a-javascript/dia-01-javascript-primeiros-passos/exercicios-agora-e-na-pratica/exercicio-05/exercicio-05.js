let angleA = -30;
let angleB = 90;
let angleC = 60;
let SumAnglePositive;
let SumAngle = (angleA + angleB + angleC)
if (SumAngle > 0) {
    SumAnglePositive = SumAngle
} else {
    console.log('Ângulo inválido');
}
if (SumAngle == 180 && SumAngle > 0) {
    console.log(true)
} else if (SumAngle != 180 && SumAngle > 0) {
    console.log(false);
}