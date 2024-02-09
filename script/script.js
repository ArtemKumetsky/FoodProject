$(document).on("scroll", window, function () {
    if ($(window).scrollTop() > 200) {
        $(".slider").css("display", "flex");
    } else {
        $(".slider").hide();
    }
});

function selected_diet() {
    alert('JS не готов, тут ловить нечего.')
}
function adaptive_menu() {
    let menu = document.getElementsByClassName("adaptive-menu")[0];
    if (menu.classList.contains("adaptive-menu-closed")) {
        menu.classList.remove('adaptive-menu-closed')
        menu.classList.add('adaptive-menu-opened')
        $('.black-screen').fadeIn();
    }
    else {
        menu.classList.remove('adaptive-menu-opened')
        menu.classList.add('adaptive-menu-closed')
        $('.black-screen').fadeOut();
    }
}
function dropdown() {
    let menu = document.getElementsByClassName("dropdown-menu")[0];
    if (menu.classList.contains("dropdown-menu-closed")) {
        menu.classList.remove('dropdown-menu-closed')
        menu.classList.add('dropdown-menu-opened')
        $('.black-screen').fadeIn();
    }
    else {
        menu.classList.remove('dropdown-menu-opened')
        menu.classList.add('dropdown-menu-closed')
        $('.black-screen').fadeOut();

    }


}
function personal_data_alert() {
    let menu = document.getElementsByClassName("personal-data-screen")[0];
    if (menu.classList.contains("personal-data-closed")) {
        menu.classList.remove("personal-data-closed")
        menu.classList.add("personal-data-opened")
        $('.black-screen').fadeIn();
    } else {
        menu.classList.remove("personal-data-opened")
        menu.classList.add("personal-data-closed")
        $('.black-screen').fadeOut();
    }
}