document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = new FormData(form);
        
        // Simple validation
        const name = formData.get('name');
        const email = formData.get('email');
        const position = formData.get('position');
        
        if (!name || !email || !position) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Simulate form submission 
        try {
            // In a real-world scenario, you'd use fetch to send to a backend
            console.log('Application Submitted:', Object.fromEntries(formData));
            
            // Show success message
            alert('Thank you for your application! We will review it shortly.');
            
            // Reset form
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            alert('There was an error submitting your application. Please try again.');
        }
    });

    // Hero section apply button
    const heroApplyButton = document.querySelector('.hero-button'); ```javascript
    heroApplyButton.addEventListener('click', function() {
        document.getElementById('applicationForm').scrollIntoView({ behavior: 'smooth' });
    });
});