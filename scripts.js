$('.header-bar').on('click', '.menu-button', bigMenu)

function bigMenu(event) {
    $('.header-bar nav, .header-bar input').toggleClass('big-menu')
    $('.header-bar').toggleClass('taller')
}