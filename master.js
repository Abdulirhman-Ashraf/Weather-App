
let apiBase = `https://api.openweathermap.org/data/2.5/weather?q=`;
let apiKey = "5e950be15af49b475695991a409bc6aa";
async function get(city) {
  const response = await fetch(
    `${apiBase}${city}&appid=${apiKey}&lang=PT&units=metric`
  );
  const data = await response.json();
  document.querySelector(
    `h3`
  ).innerHTML = `weather in ${city}  ${data.main["temp"]} °C `;

}
