let backgroundColour = Math.floor(Math.random() * 16777215).toString(16);
backgroundColour = "#" + ("000000" + backgroundColour).slice(-6);
document.body.style.backgroundColor = backgroundColour;

if (backgroundColour === "") {
    // Add in if background color is dark, then invert the h1
} else {
  let colourID = document.getElementById("colour");
  colourID.innerHTML = backgroundColour.toUpperCase();
}
