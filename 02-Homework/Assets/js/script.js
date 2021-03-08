// Displays current date and time in the p tag refreshes when the screen is refreshed
var today = new Date();
today.setMonth(2);
document.getElementById("today").innerHTML = today;
var presentDay = moment().format("LLLL");
document.getElementById("today2").innerHTML = presentDay;
// analyzes the current time which will then allow us to compare it with another number
var presentTime = parseInt(today)
var saveButton = $(".saveBtn")

// giving time blocks attributes classes and time format to be represented by
$("#6oclock").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#7oclock").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#8oclock").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#9oclock").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
$("#10oclock").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
$("#11oclock").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
$("#12oclock").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
$("#1oclock").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
$("#2oclock").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
$("#3oclock").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
$("#4oclock").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
$("#5oclock").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

$ (document). ready(function() {

      // renderSchedule();
// changing the timeblocks the to match with the present past and future
  for (let i = 1; i <= 12; i++) {
      var timeBlock = $("#" + "oclock").attr("data-time"); 
      var timeBlockInt = parseInt(timeBlock);

    if (presentTime === timeBlockInt) {
      document.getElementsByClassName("timeBlock").style.backgroundColor =
        "red";
    }
    if (presentTime > timeBlockInt) {
      document.getElementsByClassName("timeBlock").style.backgroundColor =
        "green";
    } else {
      document.getElementsByClassName("timeBlock").style.backgroundColor =
        "gray";
}}});
