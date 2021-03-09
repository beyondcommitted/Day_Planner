// Declration of Global Variables
var today = moment().format("HH");
// analyzes  and converts the current date and time which will then allow us to compare it with another number
var presentTime = parseInt(today);
var saveButton = $(".saveBtn");

// giving time blocks attributes classes and time format to be represented by
$("#6oclock").attr("data-clock", moment("6:00 am", "h:mm a").format("HH"));
$("#7oclock").attr("data-clock", moment("7:00 am", "h:mm a").format("HH"));
$("#8oclock").attr("data-clock", moment("8:00 am", "h:mm a").format("HH"));
$("#9oclock").attr("data-clock", moment("9:00 am", "h:mm a").format("HH"));
$("#10oclock").attr("data-clock", moment("10:00 am", "h:mm a").format("HH"));
$("#11oclock").attr("data-clock", moment("11:00 am", "h:mm a").format("HH"));
$("#12oclock").attr("data-clock", moment("12:00 pm", "h:mm a").format("HH"));
$("#1oclock").attr("data-clock", moment("1:00 pm", "h:mm a").format("HH"));
$("#2oclock").attr("data-clock", moment("2:00 pm", "h:mm a").format("HH"));
$("#3oclock").attr("data-clock", moment("3:00 pm", "h:mm a").format("HH"));
$("#4oclock").attr("data-clock", moment("4:00 pm", "h:mm a").format("HH"));
$("#5oclock").attr("data-clock", moment("5:00 pm", "h:mm a").format("HH"));
// renders the values set in the local storage to the page
  $(document).ready(function() {
renderSchedule();
//   applies the date in text to the p tag(top of the page) with the id of presentDay
  var presentDay = moment().format("LLLL");
  document.getElementById("presentDay").innerHTML = presentDay;

  // for loop cycling through the timeBlocks by checking for the value which is qual to each id
  for (var i = 1; i <= 12; i++) {
    var timeBlock = $("#" + i + "oclock").attr("data-clock");
    var timeBlockInt = parseInt(timeBlock);

    // changing the timeblocks color to match with the present past and future criteria based on the comparisons between presentTime and timeBlockInt
    if (presentTime > timeBlockInt) {
      $("#" + i + "oclock").addClass("past");
    }
    if (presentTime === timeBlockInt) {
      $("#" + i + "oclock").addClass("present");
    }
    if (presentTime < timeBlockInt) {
      $("#" + i + "oclock").addClass("future");
    }
  }
// Listens for the click of the save button
  saveButton.on("click", function () {
    // variable that will make hourBlock the key
    var hourBlock = $(this).attr("data-event");

    // variable that will be the value of the input 
    var event = $("#" + hourBlock + "oclock").val();

    // save that value in hourBlock/timeBlock as the users event to local storage
    localStorage.setItem(hourBlock, event);
  });

  //   Retrieves users inputs from local storage and populate the hourBlocks event value
  function renderSchedule() {
    for (var j = 1; j <= 12; j++) {
      $("#" + j + "oclock").val(localStorage.getItem(j));
    }
  
  saveButton.on("mouseenter", function () {
    $(this).addClass("saveBtn");
  });

  saveButton.on("mouseleave", function () {
    $(this).removeClass("saveBtn");
  });
  }});
  

