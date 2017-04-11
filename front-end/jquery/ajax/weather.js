var APPID = "3569484daaaf0e9db08bd8a0189f6692";
$(() => {
  $("#show-weather").on('click', (event) => {
    $.get("http://api.openweathermap.org/data/2.5/weather", {
      APPID: APPID,
      zip: $("#zip").val(),
      units: 'imperial'
    })
      .then((data) => {
        $('#results').html(`<table><tr><td>ZIP CODE</td><td>${$("#zip").val()}</td></tr><tr><td>Name</td><td>${data.name}</td></tr><tr><td>Current Temp</td><td>${data.main.temp}</td></tr><tr><td>Low</td><td>${data.main.temp_min}</td></tr><tr><td>High</td><td>${data.main.temp_max}</td></tr><tr><td>Wind Speed</td><td>${data.wind.speed}</td></tr><tr><td>Wind Direction</td><td>${data.wind.direction}</td></tr><tr><td>Sunrise</td><td>${data.sys.sunrise}</td></tr><tr><td>Sunset</td><td>${data.sys.sunset}</td></tr></table>`);
        // $("#results").text(JSON.stringify(data));
      })
      .catch((err) => {
        throw err;
      });
  });

});
