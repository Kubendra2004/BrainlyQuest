const letters = [
    { letter: 'A', example: 'Apple', image: 'img/apple.jpeg' },
    { letter: 'B', example: 'Ball', image: 'img/ball.jpg' },
    { letter: 'C', example: 'Cat', image: 'img/cat.jpg' },
    { letter: 'D', example: 'Dog', image: 'img/dog.jpg' },
    { letter: 'E', example: 'Elephant', image: 'img/elephant.png' },
    { letter: 'F', example: 'Fish', image: 'img/fish.jpeg' },
    { letter: 'G', example: 'Giraffe', image: 'img/giraffe.png' },
    { letter: 'H', example: 'Hat', image: 'img/hat.jpeg' },
    { letter: 'I', example: 'Ice cream', image: 'img/ice.jpeg' },
    { letter: 'J', example: 'Jam', image: 'img/jam.jpeg' },
    { letter: 'K', example: 'Kite', image: 'img/kite.jpg' },
    { letter: 'L', example: 'Lion', image: 'img/lion.jpeg' },
    { letter: 'M', example: 'Monkey', image: 'img/monkey.jpeg' },
    { letter: 'N', example: 'Nest', image: 'img/nest.jpeg' },
    { letter: 'O', example: 'Orange', image: 'img/orange.jpeg' },
    { letter: 'P', example: 'Penguin', image: 'img/penguin.jpeg' },
    { letter: 'Q', example: 'Queen', image: 'img/queen.jpeg' },
    { letter: 'R', example: 'Rabbit', image: 'img/rabbit.jpeg' },
    { letter: 'S', example: 'Sun', image: 'img/sun.jpeg' },
    { letter: 'T', example: 'Tiger', image: 'img/tiger.jpeg' },
    { letter: 'U', example: 'Umbrella', image: 'img/umbrella.jpeg' },
    { letter: 'V', example: 'Violin', image: 'img/violin.jpeg' },
    { letter: 'W', example: 'Whale', image: 'img/whale.jpeg' },
    { letter: 'X', example: 'Xylophone', image: 'img/xylophone.jpeg' },
    { letter: 'Y', example: 'Yacht', image: 'img/yacht.jpeg' },
    { letter: 'Z', example: 'Zebra', image: 'img/zebra.jpeg' }
];

let currentIndex = 0;

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

function displayLearning() {
    const letterButtonsContainer = document.getElementById('letterButtons');
    letterButtonsContainer.innerHTML = ''; // Clear previous buttons

    letters.forEach((currentLetter) => {
        const button = document.createElement('button');
        button.className = 'letterButton';
        button.innerText = currentLetter.letter;
        button.setAttribute('aria-label', `${currentLetter.letter} for ${currentLetter.example}`); // Accessibility

        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';

        const img = document.createElement('img');
        img.src = currentLetter.image;
        img.alt = 'Example image';
        img.className = 'tooltip-image';

        const exampleElement = document.createElement('div');
        exampleElement.className = 'exampleText';
        exampleElement.innerText = currentLetter.example;

        // Append the image and example text to the tooltip
        tooltip.appendChild(img);
        tooltip.appendChild(exampleElement);
        button.appendChild(tooltip);

        // Show tooltip on mouse enter
        button.onmouseenter = () => {
            tooltip.style.display = 'block'; // Show the tooltip
            tooltip.style.opacity = '1'; // Fade in
        };

        // Hide tooltip on mouse leave
        button.onmouseleave = () => {
            tooltip.style.display = 'none'; // Hide the tooltip
            tooltip.style.opacity = '0'; // Fade out
        };

        // Handle click event
        button.onclick = () => {
            speak(`${currentLetter.letter} for ${currentLetter.example}`);
            // No need to set currentIndex or call startTestingPhase
        };

        letterButtonsContainer.appendChild(button);
    });
}

window.onload = displayLearning;