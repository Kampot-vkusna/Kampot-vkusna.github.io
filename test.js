let widthIncrement = 200;
let animationInterval;
let direction = 1;
let isRightState = false;

const testButton = document.getElementById('test-button');
const testContainer = document.getElementById('test-container');

// Function for continuous width animation
function animateWidth() {
    testContainer.style.width = widthIncrement + 'px';
    
    if (widthIncrement >= 500 || widthIncrement <= 200) {
        direction = direction * (-1);
    }
    
    widthIncrement += direction;
}

// Start the continuous width animation
animationInterval = setInterval(animateWidth, 1);

// Toggle button click handler
testButton.addEventListener('click', () => {
    isRightState = !isRightState;
    
    if (isRightState) {
        testButton.classList.add('clicked');
        testButton.style.transform = 'rotate(500deg)';
        testContainer.style.backgroundColor = 'purple';
    } else {
        testButton.classList.remove('clicked');
        testButton.style.transform = 'rotate(0deg)';
        testContainer.style.backgroundColor = 'transparent';
    }
});