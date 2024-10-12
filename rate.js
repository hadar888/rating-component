let selectedRate;

const handleRating = (event) => {
    const selectedButton = event.target;
    selectedRate = selectedButton.innerHTML;

    const buttons = document.querySelectorAll(".rating-button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    selectedButton.classList.add("selected");
}

const onSubmit = () => {
    const ratingDisplay = document.getElementById("selected-rating");
    ratingDisplay.textContent = selectedRate;

    const selectedRatingSection = document.getElementById("selected-rating-section");
    selectedRatingSection.style.display = 'flex';

    const ratingSection = document.getElementById("rating-section");
    ratingSection.style.display = 'none';
}