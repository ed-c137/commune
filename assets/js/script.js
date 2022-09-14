$(function() {
    console.log( "ready!" );

    $('.js-menu-togle').on('click', function() {
        $('.navbar__nav-list').toggleClass('navbar__nav-list--open');
    });
    $('.dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        $(e.target).parent().toggleClass('dropdown--open');
    });

    //close menu on click outside
    $(document).on('click', function(e) {
        console.log();
        if (!$(e.target).closest('#site-header').length) {
            $('.navbar__nav-list').removeClass('navbar__nav-list--open');
            $('.dropdown').removeClass('dropdown--open');
        }
    });
});