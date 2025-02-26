const axios = require('axios');

// Example user preferences for testing
const userPreferences = {
    muscle_group: 'Abdominals',
    equipment: 'Bands',
    difficulty_level: 'Intermediate'
}; 

// Sends user preferences to Microservice A.
axios.post('http://localhost:3001/preferences', userPreferences)
    .then(response => {
        console.log('Recommended exercises:', response.data);
    })
    .catch(error => {
        if (error.response) {
            console.error('Error:', error.response.data);
        } else {
            console.error('Error:', error.message);
        }
    });