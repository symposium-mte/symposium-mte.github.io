function toggleMenu() {
var menu = document.getElementById("menu");
if (menu.style.display === "flex") {
menu.style.display = "none";
} else {
menu.style.display = "flex";
}
}

document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});


