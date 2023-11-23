// Get all anchor elements on the page
var allLinks = document.getElementsByTagName('a');

// Loop through the anchor elements and print their href attribute (URL)
for (var i = 0; i < allLinks.length; i++) {
    console.log(allLinks[i].href);
    // window.open(allLinks[i].href, "_blank");
}

var button = document.createElement("button");

// Set button properties
button.id = "fixedButton";
button.innerHTML = "Open first 5 links";
button.onclick = function() {
    // alert("Button clicked!");
    // Add your custom logic here
    for (var i = 0; i < 5; i++) {
        window.open(allLinks[i].href, "_blank");
    }
};

// Append the button to the body
document.body.appendChild(button);
setInterval(function() {
    var button = document.getElementById("fixedButton");
    button.style.transform = "scale(1.5)";
    setTimeout(function() {
        button.style.transform = "scale(1)";
    }, 500);
}, 5000);