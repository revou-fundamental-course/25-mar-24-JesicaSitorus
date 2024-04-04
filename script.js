function calculateBMI() {
    var age = parseFloat(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var gender = document.getElementById('gender').value;
    
    var heightInMeter = height / 100;
    var bmi = weight / (heightInMeter * heightInMeter);
  
    var interpretation = '';
    if (gender === 'male') {
      if (age < 18) {
        interpretation = 'BMI interpretations for males under 18 vary.';
      } else {
        if (bmi < 18.5) {
          interpretation = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
          interpretation = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
          interpretation = 'Overweight';
        } else {
          interpretation = 'Obesity';
        }
      }
    } else if (gender === 'female') {
      if (age < 18) {
        interpretation = 'BMI interpretations for females under 18 vary.';
      } else {
        if (bmi < 18.5) {
          interpretation = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
          interpretation = 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
          interpretation = 'Overweight';
        } else {
          interpretation = 'Obesity';
        }
      }
    }
    
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'BMI: ' + bmi.toFixed(2) + '<br>' + 'Interpretation: ' + interpretation;
  }
  
  function resetForm() {
    document.getElementById('bmiForm').reset();
    document.getElementById('result').innerHTML = '';
  }