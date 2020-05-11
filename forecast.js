$(document).ready(function() {
    $("#submitForecast").click(function() {
        return getForecast();
    });
});

function getForecast() {
    var city = $("#city").val();
    var days = $("#days").val();

    if (city != "" && days != "") {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" +
                city +
                "&units=metric" +
                "&cnt=" +
                days +
                "&APPID=27bdb9e6e424bf2ff464f50b36d3b3aa",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                var table = "";

                for (var i = 0; i < data.list.length; i++) {
                    table += "<tr>";

                    table += "<td>" + data.list[i].weather[0].icon + "</td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                    table += "<td>" + data.list[i].main.temp_min + "&deg;C</td>";
                    table += "<td>" + data.list[i].main.temp_max + "&deg;C</td>";
                    table += "<td>" + data.list[i].main.pressure + "&hPa</td>";
                    table += "<td>" + data.list[i].main.humidity + "&%</td>";
                    table += "<td>" + data.list[i].wind.speed + "m/s</td>";
                    table += "<td>" + data.list[i].wind.deg + "&deg;C</td>";

                    table += "</tr>";
                }

                $("#forecastWeather").html(table);

                $("#city").val("");
                $("#days").val("");
            },
        });
    } else {
        $("#error").html(
            "<div class='alert alert-danger alert-dismissible fade in' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a> City field cannot be empty</div>"
        );
    }
}