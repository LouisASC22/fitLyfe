/* when the cursor goes over the nav, it opens */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main_div").style.marginLeft = "250px";
}

/* closes the nav, set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main_div").style.marginLeft = "0";
}