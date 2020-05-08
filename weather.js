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
                console.log(data);
                $("#showWeather").html(data);
            },
        });
    } else {
        $("#error").html("<div>City field cannot be empty</div>");
    }
}