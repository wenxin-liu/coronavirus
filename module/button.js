//Get the button
let mybutton = document.getElementById("btn-back-to-top");

//Get the container
let container = document.getElementById("top-container")

// When the user scrolls down 20px from the top of the container, show the button
container.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (container.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  container.scrollTop = 0;
}
