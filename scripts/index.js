$(document).ready(() => {
    $(".nav a").click((event) => {
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});
