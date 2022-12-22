const $input = $('input[type="text"]');
function render() {
  $("#cityname").text(weatherData.name)
  $("#temp").text(weatherData.main.temp)
  $("#feels_like").text(weatherData.main.feels_like)
  $("#description").text(weatherData.weather[0].description)
}


let weatherData, userInput

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  userInput = $input.val()
  
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=cab0aab386a9eaafef4abc55335691fd&units=imperial`
  }).then(
    function(data){
      weatherData = data;
      render();
      $input.val('');
    },
    function(error){
      $city.html("No match found");
      $temp.text("No match found");
      $feelsLike.text("No match found");
      $description.text("No match found");
      $input.val('')}
    )
}
