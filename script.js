document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weightInput').value);
    const duration = parseFloat(document.getElementById('durationInput').value);
    const activity = document.getElementById('activityInput').value;

    const calorieData = {
        running: 10,
        cycling: 8,
        swimming: 7,
        walking: 4,
        yoga: 3,
        weightlifting: 6
    };

    const caloriesPerMinute = calorieData[activity] || 5;
    const totalCalories = (caloriesPerMinute * duration) * (weight / 70);

    const resultContainer = document.getElementById('resultContainer');
    const calorieResult = document.getElementById('calorieResult');

    resultContainer.style.display = 'block';
    calorieResult.innerHTML = `
        <i class="fas fa-fire"></i> 
        You burned approximately 
        <strong>${totalCalories.toFixed(2)} calories</strong> 
        during ${duration} minutes of ${activity}
    `;
});