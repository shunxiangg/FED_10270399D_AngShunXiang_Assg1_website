
// Get the audio element, volume button, slider container, mute button
const backgroundMusic = document.getElementById('background-music');
const volumeButton = document.getElementById('volumeButton');
const muteButton = document.getElementById('muteButton');
const volumeSliderContainer = document.getElementById('volumeSliderContainer');
const volumeSlider = document.getElementById('volumeSlider');

// Show or hide volume slider when the circular button is clicked
volumeButton.addEventListener('click', function() {
    if (volumeSliderContainer.style.display === 'none') {
        volumeSliderContainer.style.display = 'flex';
    } else {
        volumeSliderContainer.style.display = 'none';
    }
});

// Adjust volume when slider is moved
volumeSlider.addEventListener('input', function() {
    backgroundMusic.volume = this.value;
});

// Toggle mute when mute button is clicked
muteButton.addEventListener('click', function() {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteButton.innerHTML = '🔇'; 
    } else {
        backgroundMusic.muted = true;
        muteButton.innerHTML = '🔊';  
    }
});

