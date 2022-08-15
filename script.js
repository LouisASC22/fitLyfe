/* when the cursor goes over the nav, it opens */
function openNav() {
  document.getElementById("nav_bar").style.width = "250px";
  document.getElementById("main_div").style.marginLeft = "250px";
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* closes the nav, set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("nav_bar").style.width = "0";
  document.getElementById("main_div").style.marginLeft = "0";
}