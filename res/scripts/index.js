function id(el){
    return document.getElementById(el);
}

var mainTitle = id("main-title");
var mainPanel = id("main-panel");

var backgroundChoices = [
    "background-main-3.jpg",
    "background-main-4.jpg",
    "background-main-9.jpg",
    "background-main-10.jpg",
    "background-main-12.jpg"
]

var backgroundToUse = backgroundChoices[Math.round(Math.random() * (backgroundChoices.length - 1))];
document.body.style.backgroundImage = "url(res/" + backgroundToUse + ")";

if(
    backgroundToUse == "background-main-3.jpg" ||
    backgroundToUse == "background-main-12.jpg"
){
    mainTitle.style.color = "white";
}

function centerText(){
    var height = mainTitle.parentNode.offsetHeight;
    mainTitle.style.lineHeight = height + "px";
}

centerText();

document.body.onresize = centerText;