// JavaScript for adding the "pressed" effect
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Add the "pressed" class when the button is clicked
        button.classList.add('pressed');
        
        // Remove the "pressed" class after a short delay (e.g., 100ms)
        setTimeout(() => {
            button.classList.remove('pressed');
        }, 100);
    });
});
