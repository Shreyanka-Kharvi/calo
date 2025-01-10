document.addEventListener('DOMContentLoaded', function() {
    const activityInput = document.getElementById('activityInput');
    const activityTypeInput = document.getElementById('activityTypeInput');

    // Define the types of activities for each main activity
    const activityTypes = {
        running: ['Sprinting', 'Long-distance', 'Interval'],
        jogging: ['Leisurely', 'Moderate', 'Fast'],
        walking: [
            'Brisk',
            'Speed Walking',
            'Slow',
            'Fitness Walking',
            'Casual Walking',
            'Barefoot Walking on the Lawn',
            'Backward Walking'
        ]
    };

    // Event listener for changes in the main activity dropdown
    activityInput.addEventListener('change', function() {
        const selectedActivity = this.value;
        activityTypeInput.innerHTML = '<option value="">Select Type</option>'; // Reset options

        // Populate the second dropdown based on the selected activity
        if (selectedActivity) {
            activityTypes[selectedActivity].forEach(function(type) {
                const option = document.createElement('option');
                option.value = type.toLowerCase().replace(/ /g, '-'); // Create a value for the option
                option.textContent = type; // Set the display text for the option
                activityTypeInput.appendChild(option); // Add the option to the dropdown
            });
        }
    });

    // Handle form submission
    document.getElementById('calorieForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('weightInput').value);
        const height = parseFloat(document.getElementById('heightInput').value);
        const duration = parseFloat(document.getElementById('durationInput').value);
        const activityType = document.getElementById('activityInput').value;
        const activityLevel = document.getElementById('activityLevelInput').value;

        let caloriesPerMinute;

        // Set calories burned per minute based on activity type
        switch (activityType) {
            case 'running':
                caloriesPerMinute = 10; // Example value
                break;
            case 'jogging':
                caloriesPerMinute = 8; // Example value
                break;
            case 'walking':
                caloriesPerMinute = 5; // Example value
                break;
            default:
                caloriesPerMinute = 0;
        }

        const totalCaloriesBurned = caloriesPerMinute * duration;
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        document.getElementById('caloriesBurned').innerText = `Calories Burned: ${totalCaloriesBurned.toFixed(2)} kcal`;
        document.getElementById('bmiResult').innerText = `BMI: ${bmi}`;
        document.getElementById('results').style.display = 'block';
    });
});