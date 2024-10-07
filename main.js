window.onload = function() {
    document.getElementById("subscription").addEventListener("submit", alertSubFunc());
}    

function alertSubFunc() {
    alert("Subscriber " + element.attributes["added"].value);
}
