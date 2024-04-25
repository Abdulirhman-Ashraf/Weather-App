let apiBase = `https://api.openweathermap.org/data/2.5/weather?q=`;
let apiKey = "5e950be15af49b475695991a409bc6aa";
async function get(city) {
  if (city != "") {
    const response = await fetch(
      `${apiBase}${city}&appid=${apiKey}&lang=PT&units=metric`
    );
    const data = await response.json();
    console.log(data);
    let c = data.main["temp"];
    let cloud = data.weather[0].main;
    let icon = data.weather[0].icon;
    let icons = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.querySelector(
      `h3`
    ).innerHTML = `<img src= ${icons}><br> ${Math.round(c)} °C<br> ${cloud} `;
  } else {
  }
}
