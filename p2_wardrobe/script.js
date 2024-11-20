const temperatureSlider = document.getElementById("tempSlider");  // Corrected ID
const rainCheckbox = document.getElementById("rainCheck");        // Corrected ID
const suggestionText = document.getElementById("clothingSuggestion");  // Corrected ID

temperatureSlider.addEventListener("input", updateSuggestion);
rainCheckbox.addEventListener("change", updateSuggestion);

function updateSuggestion() {
  const temp = temperatureSlider.value;
  const rain = rainCheckbox.checked;

  let suggestion = "";

  if (temp >= 80 && !rain) {
    suggestion = "T-shirt and shorts!";
  } else if (temp <= 60 && rain) {
    suggestion = "Coat and umbrella!";
  } else {
    suggestion = "Check the weather for more suggestions!";
  }

  suggestionText.textContent = suggestion;
}