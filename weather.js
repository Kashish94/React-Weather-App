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
        $("#error").html("<div>City field cannot be empty</div>");
    }
}

function showResults(data) {
    return (
        "<h3>Current Weather for " +
        data.name +
        ", " +
        data.sys.country +
        "</h3>" +
        "<p>Temperature: " +
        data.main.temp +
        "&deg;C</p>" +
        "<p>Humidity: " +
        data.main.humidity +
        "</p>" +
        "<p>Pressure: " +
        data.main.pressure +
        "</p>" +
        "<p>Temperature: " +
        data.main.temp_min +
        "</p>" +
        "<p>Temperature: " +
        data.main.temp_max +
        "</p>" +
        "<p>Wind Speed: " +
        data.wind.speed +
        "</p>"
    );
}