let fitImg = "https://cdn.glitch.global/6afc4efa-71e4-4ea1-b370-4279fc8fce5d/fitLyfe.png?v=1660663056696";



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

function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('underImg');
      
    for (let i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}