const calculate = document.getElementById('calculate');

function calculating () {
    const emptyString = String()
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    if (name !== emptyString && height !== emptyString && weight !== emptyString) {
        const bmi = (weight / (height * height)).toFixed(2);
        let bmiRating = emptyString;
        
        if (bmi < 16 ) {
            bmiRating = 'you are severe thinness.'
        } else if (bmi >= 16 && bmi < 17) {
            bmiRating = 'you are medium thinness.'
        } else if (bmi >= 17 && bmi < 18.5) {
            bmiRating = 'you are mild thinness.'
        } else if (bmi >= 18.5 && bmi < 25) {
            bmiRating = 'you are healthy.'
        } else if (bmi >= 25 && bmi < 30) {
            bmiRating = 'you are overweight.'
        } else if (bmi >= 30 && bmi < 35) {
            bmiRating = 'you are obese Class I.'
        } else if (bmi >= 35 && bmi < 40) {
            bmiRating = 'you are obese Class II.'
        } else if (bmi >= 40) {
            bmiRating = 'you are obese Class III.'
        }

        result.textContent = `${name}, your BMI is ${bmi}, ${bmiRating}`;
    } else {
        result.textContent = 'Fill all fields.';
    }
}

calculate.addEventListener('click', calculating);