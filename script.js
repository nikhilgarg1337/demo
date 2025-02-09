const crisisButton = document.getElementById("crisisButton");
const crisisText = document.getElementById("crisisText");

const thoughts = [
    "Are we all just NPCs in someone else's simulation?",
    "If you clean a vacuum, are you the vacuum cleaner?",
    "What if the universe is just a giant computer's screensaver?",
    "If you teleport, are you still you, or just a copy of yourself?",
    "Why do we drive on parkways and park on driveways?",
];

crisisButton.addEventListener("click", () => {
    const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
    crisisText.textContent = randomThought;
});
