const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const sumPoints = (rightAnswer, studentAnswer) => {
    let count = 0;
    if (rightAnswer === studentAnswer) {
        count += 1;
    }
    if (rightAnswer !== studentAnswer) {
        count -= 0.5;
    }
    if (studentAnswer === 'N.A') {
        count = 0
    }
    return count
}

const examCorrector = (rightAnswer, studentAnswer, callback) => {
    let count = 0;
    for (let index = 0; index < rightAnswer.length; index += 1) {
        const corretion = callback(rightAnswer[index], studentAnswer[index]);
        count += corretion;
    }
    return count;
}

console.log(examCorrector(RIGHT_ANSWERS, STUDENT_ANSWERS, sumPoints));