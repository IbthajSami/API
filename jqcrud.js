$(function() {
    $(document).ready(function() {
        loadRecipies();
    });
});

function loadRecipies() 
{
    $.ajax({
      url: "https://transport-vehicle-api.herokuapp.com/api/transportvehicles",
      method: "GET",
      success: function(response) {
        console.log(response);
        var transportvehicles = $("#transportvehicles");
        transportvehicles.empty();
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          transportvehicles.append(
            `<div class="recipe"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button> ${rec.body}</p></div>`
          );
          // transportvehicles.append("<div><h3>" + rec.title + "</h3></div>");
        }
      }
    });
}