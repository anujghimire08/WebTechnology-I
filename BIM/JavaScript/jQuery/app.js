$("button").click(function () {
  $("div").toggle(1000);
  if ($(this).text() === "Hide") {
    $(this).text("Show");
  } else {
    $(this).text("Hide");
  }
});
