
let width = window.screen.availWidth
    if (width >= 768) {
    $('#side-nav-toggler').prop('disabled', true)
}
$(".side-nav-toggle-btn").on('click', function () {
    let target = ($(this).attr('data-target'));
    addClassDropdownToggle(target);
    addClassActive($(this));
    addChangeIconDropdown($(this));
});

$("#side-nav-close-btn").on('click', function() {
    let target= $('#side-nav')
    target.removeClass('active')
})
$("#side-nav-toggler").on('click', function() {
    let target= $('#side-nav')
    if ($(target).hasClass('active')) {
        $(target).removeClass('active').succer({})
    }else{
        $(target).addClass('active')
    }
})

function addClassDropdownToggle(target) {   
    if ($("#"+target).hasClass('active')) {
        $("#"+target).removeClass('active');
    }else{
        $("#"+target).addClass('active');
    }
}
function addClassActive(target){
     if ($(target).hasClass('active')) {
        $(target).removeClass('active');
    }else{
        $(target).addClass('active');
    }
}

function addChangeIconDropdown(target) {
    if ($(target).children('.side-nav-icon').hasClass('fa-caret-right')) {
        $(target).children('.side-nav-icon').removeClass('fa-caret-right');
        $(target).children('.side-nav-icon').addClass('fa-caret-down');
    }else{
        $(target).children('.side-nav-icon').removeClass('fa-caret-down');
        $(target).children('.side-nav-icon').addClass('fa-caret-right');
    }
}

