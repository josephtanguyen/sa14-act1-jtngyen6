const feedButton = document.getElementById("feedBtn");
const playButton = document.getElementById("playBtn");
const napButton = document.getElementById("napBtn");
const petEmoji = document.getElementById("petFace");
const moodText = document.getElementById("moodText");

feedButton.addEventListener("click", () => {
  petEmoji.textContent = ":)";
  moodText.textContent = "Happy!";
  resetMood();
});

playButton.addEventListener("click", () => {
  petEmoji.textContent = ":D";
  moodText.textContent = "Excited!";
  resetMood();
});

napButton.addEventListener("click", () => {
  petEmoji.textContent = "-_-";
  moodText.textContent = "Sleepy...";
  resetMood();
});

function resetMood() {
  setTimeout(() => {
    petEmoji.textContent = ":|";
    moodText.textContent = "Normal";
  }, 5000);
}