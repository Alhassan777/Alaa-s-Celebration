// script.js

document.getElementById('blenderButton').addEventListener('click', function() {
    // Reference to the blender button
    var blenderButton = this;

    // Play congratulatory sound (optional)
    var audio = document.getElementById('congratsAudio');
    if (audio) {
        audio.play();
    }

    // Add whirlpool animation to emojis
    document.getElementById('emojis').classList.add('fade-out');

    // Show animation container (Alaa's picture and Meta's logo)
    document.getElementById('animationContainer').style.display = 'block';

    // Start fade-out by adding 'hide-button' class to the blender button
    blenderButton.classList.add('hide-button');

    // Listen for the end of the opacity transition to hide the button completely
    blenderButton.addEventListener('transitionend', function() {
        blenderButton.style.display = 'none';
    }, { once: true }); // Ensures the listener is removed after it's called

    // After animation duration, hide emojis and show final message
    setTimeout(function() {
        document.getElementById('emojis').style.display = 'none';
        // Do NOT hide the animation container to keep Alaa's picture and Meta's logo visible
        // document.getElementById('animationContainer').style.display = 'none';
        document.getElementById('finalMessage').style.display = 'block';
    }, 2000); // Duration matches the CSS animation duration
});
