function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Height in meters
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / (height * height); // BMI formula
  
    document.getElementById('result').textContent = bmi.toFixed(2); // Display BMI
  
    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal Weight';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    document.getElementById('category').textContent = `Category: ${category}`;
  
    // Display diet plan suggestions based on BMI category
    const dietPlanElement = document.getElementById('dietPlan');
    let dietPlanHTML = '';
  
    if (category === 'Underweight') {
      dietPlanHTML = '<h3>Diet Plan suggestion - Underweight </h3>';
      // Add diet plan suggestions for underweight individuals (vegetarian and non-vegetarian)
    } else if (category === 'Overweight' || category === 'Obese') {
      dietPlanHTML = '<h3>Diet Plan Suggestion - Overweight/Obese</h3>';
      
      // Add diet plan suggestions for overweight/obese individuals (vegetarian and non-vegetarian)
    } else {
      dietPlanHTML = '<p>No specific diet plan recommendations for this category.</p>';
    }
  
    dietPlanElement.innerHTML = dietPlanHTML;
  }
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('supportForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission to test validation
  
      // Validate the form fields
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.'); // Show an alert for incomplete fields
      } else {
        // Simulate form submission (Replace this with your actual form submission logic)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
  
        // Optionally, you can reset the form after successful submission
        form.reset();
      }
    });
  });
  
  