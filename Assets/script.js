// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

$(document).ready(function () {
  $(".saveBtn").on("click", function (e) {
      let inputText = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      localStorage.setItem(time, inputText);
  });


  function timeblock() {
    // obtains the hour of the day based on computer
    hour = moment().hours();
    console.log(hour);

    $(".time-block").each(function () {
        var theHour= parseInt($(this).attr("id").split("-")[1]);

        if (hour === theHour) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        } 
        else  if (hour > theHour) {
          $(this).removeClass("present");
          $(this).removeClass("future");
          $(this).addClass("past");
        } 
        else {
          $(this).addClass("future");
        }
    })
  }

  timeblock();
  var interval = setInterval(timeblock, 15000);
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
})