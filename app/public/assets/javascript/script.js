// Trigger modal
$(document).ready(function() {
  $(".modal").modal();
});

// Back-end
$("#submit").click(function() {
  var user = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
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
$("#closeModal").click(function() {
  $("#name").val("");
  $("#photo").val("");
  $("#q1, #q2, #q3, #q4").val(1);
});
