let backgroundColour = Math.floor(Math.random() * 16777215).toString(16);
backgroundColour = "#" + ("000000" + backgroundColour).slice(-6);
document.body.style.backgroundColor = backgroundColour;

if (backgroundColour === "") {
  // TODO Add in if background color is dark, then invert the h1
} else {
  let colourID = document.getElementById("colour");
  colourID.innerHTML = backgroundColour.toUpperCase();
}

function copyToClipboard() {
  navigator.clipboard.writeText(backgroundColour);
  console.log("Copied the text: " + backgroundColour);
}

function pageRefresh() {
  location.reload(true);
}

// TODO Make text copy to clipboard when clicked on
// TODO Add other values to select (RGB etc.)
// TODO Fix the ugly colour scheme...
