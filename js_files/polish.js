function changeStatus(event) {
    event.preventDefault();
    var head = document.getElementById("projDiv");
    var bttns = head.getElementsByClassName("bttn");
    for (var i = 0; i < bttns.length; i++) {
        bttns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("hi");
            console.log(current);
            current[0].className = current[0].className.replace(" active hi", "");
            this.className += " active hi";
        });
    }
}
