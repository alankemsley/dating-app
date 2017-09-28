// Upon page load...
$(document).ready(function() {
  // Listen for modal trigger
  $(".modal").modal();
  // Set default quiz values to 1
  $("#q1, #q2, #q3, #q4").val(1);
});

// Submit quiz
$("#submit").click(function() {
  var user = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val()]
  };
  var currentURL = window.location.origin;
  if ($("#name").val() !== "" || $("#photo").val() !== "") {
    $.post(currentURL + "/api/matches", user, function(data) {
      $("#modal").modal("open");
      $("#matchName").text(data.name);
      $("#matchPhoto").attr("src", data.photo);
    });
  } else {
    Materialize.toast("Please enter all the required information.", 2000);
  }
});

// Close modal and clear values
$("#close").click(function() {
  $("#name").val("");
  $("#photo").val("");
  $("#q1, #q2, #q3, #q4").val(1);
});
