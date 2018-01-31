$(document).ready(() => {
    $(".nav-item a").click((event) => {
        $(".nav-item").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});

function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value + '%0D%0A' + `From: ${name}`;
    var win = window.open(`mailto:zhilinch@umich.edu?subject=${subject} &body=${message}`);
    if (win && win.open && !win.closed) win.close();
}
