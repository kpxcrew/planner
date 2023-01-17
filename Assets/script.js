// adds time to the top of page
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY'));

$(document).ready(function () {
  //event listener for dave button
  $(".saveBtn").on("click", function (e) {
      let inputText = $(this).siblings(".description").val();
      let time = $(this).parent().attr("id");
      localStorage.setItem(time, inputText);
  });


  function timeblock() {
    // obtains the hour of the day 
    hour = moment().hours();
    console.log(hour);

    $(".time-block").each(function () {
        var theHour= parseInt($(this).attr("id").split("-")[1]);
        //provides the proper color coordination based on time 
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
  // local storage
  var interval = setInterval(timeblock, 7000);
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