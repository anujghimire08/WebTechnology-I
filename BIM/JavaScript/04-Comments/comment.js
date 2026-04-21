function elementAt(event) {
  // Gets the element from Event coordinates
  return document.elementFromPoint(event.clientX, event.clientY);
}
// TODO: write more cool stuff!

/*
 Gets the element from Event coordinates.
 Use like:
 var clickedEl = someEl.addEventListener("click", elementAt, false);
*/
function elementAt(event) {
  return document.elementFromPoint(event.clientX, event.clientY);
}
/* TODO: write more useful comments! */