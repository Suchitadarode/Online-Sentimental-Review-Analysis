const analyzeBtn = document.getElementById('analyzeBtn');
const movieNameInput = document.getElementById('movieName');
const reviewInput = document.getElementById('reviewInput');
const reviewsDiv = document.getElementById('reviews');

analyzeBtn.addEventListener('click', () => {
    const movieName = movieNameInput.value.trim();
    const review = reviewInput.value.trim();

    if (movieName === '' || review === '') {
        alert('Please enter both the movie name and the review.');
        return;
    }

    const sentiment = analyzeSentiment(movieName, review);

    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
        <p><strong>Movie:</strong> ${movieName}</p>
        <p><strong>Review:</strong> ${review}</p>
        <p><strong>Sentiment:</strong> ${sentiment}</p>
    `;

    reviewsDiv.appendChild(reviewElement);

    // Clear input fields after adding review
    movieNameInput.value = '';
    reviewInput.value = '';
});

function analyzeSentiment(movieName, review) {
    // Placeholder function for sentiment analysis
    // You would replace this with your actual sentiment analysis logic
    // For example, using a machine learning model or a sentiment analysis API
    // This function should return the sentiment (positive, negative, neutral) based on the review
    return 'Positive';
}