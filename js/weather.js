const API_KEY = '63e635dc3a63bddf8e9ed8239d622f15'

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat}, ${lon}`);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:nth-child(2)')
        const temper = document.querySelector('#weather span:last-child')
        temper.innerText = data.temp;
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        // then 일반 함수도 괜찮음
    });
}
function onGeoError() {
    alert("can't fine you. No wheather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);