$(document).ready(function() {
    $("#submitCity").click(function() {
        return getWeather();
    });
});

function getWeather() {
    var city = $("#city").val();

    if (city != "") {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&units=metric" +
                "&APPID=27bdb9e6e424bf2ff464f50b36d3b3aa",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                var widget = showResults(data);
                $("#showWeather").html(widget);

                $("#city").val("");
            },
        });
    } else {
        $("#error").html(
            "<div class='alert alert-danger alert-dismissible' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> City field cannot be empty</div>"
        );
    }
}

function showResults(data) {
    return (
        "<h3>Current Weather for " +
        data.name +
        ", " +
        data.sys.country +
        "</h3>" +
        "<p>Weather: " +
        data.weather[0].main +
        "</p>" +
        "<p>Weathe Description: " +
        data.weather[0].description +
        "</p>" +
        "<p>Temperature: " +
        data.main.temp +
        "&deg;C</p>" +
        "<p>Humidity: " +
        data.main.humidity +
        "%</p>" +
        "<p>Pressure: " +
        data.main.pressure +
        " hpa</p>" +
        "<p>Min Temperature: " +
        data.main.temp_min +
        "&deg;C</p>" +
        "<p>Max Temperature: " +
        data.main.temp_max +
        "&deg;C</p>" +
        "<p>Wind Speed: " +
        data.wind.speed +
        "m/s</p>" +
        "<p>Wind Direction: " +
        data.wind.deg +
        "&deg;C</p>"
    );
}