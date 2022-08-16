let Fitlyfe.png = img



/* when the cursor goes over the nav, it opens */
function openNav() {
  document.getElementById("nav_bar").style.width = "250px";
  document.getElementById("main_div").style.marginLeft = "250px";
  document.querySelector("a").style.padding = "8px 8px 8px 32px";
  document.querySelector("a").style.fontSize = "25px";
  document.querySelector("a").style.color = "#818181";
  document.querySelector("a").style.display = "block";
}

/* closes the nav, set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("nav_bar").style.width = "0";
  document.getElementById("main_div").style.marginLeft = "0";
  document.querySelector("a").style.padding = "25px 0";
  document.querySelector("a").style.fontSize = "16px";
  document.querySelector("a").style.color = "currentColor";
  document.querySelector("a").style.display = "inline-block";
}