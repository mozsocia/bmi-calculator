// get references to the input elements and the button
const weightInput = document.getElementById('weightInput');
const heightInput = document.getElementById('heightInput');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');
console.log("jjj");
// add an event listener to the button
calculateBtn.addEventListener('click', (e) => {
  // get the values of the input fields and convert them to numbers
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Please enter valid values for weight and height');
    return;
  }

  // calculate the BMI
  const bmi = weight / (height * height);
  
  // display the result
  result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  weightInput.value = ""
  heightInput.value = ""
});