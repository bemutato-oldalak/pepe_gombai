document.addEventListener("DOMContentLoaded", () => {
    setActiveElement("fooldal-route");
});

document.getElementById("scroll-to-rolunk").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("rolunk").scrollIntoView({ behavior: "smooth" });
    setActiveElement("scroll-to-rolunk");
});

document.getElementById("scroll-to-szarvasgomba").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("szarvasgomba").scrollIntoView({ behavior: "smooth" });
    setActiveElement("scroll-to-szarvasgomba");
});

document.getElementById("scroll-to-webshop").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("webshop").scrollIntoView({ behavior: "smooth" });
    setActiveElement("scroll-to-webshop");
});

document.getElementById("scroll-to-kapcsolat").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("kapcsolat").scrollIntoView({ behavior: "smooth" });
    setActiveElement("scroll-to-kapcsolat");

});

let currentElementName = null;

function setActiveElement(elementName){
    if(currentElementName){
        document.getElementById(currentElementName).classList.remove("active");
    }
    currentElementName = elementName;
    document.getElementById(elementName).classList.add("active");
}