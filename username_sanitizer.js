$(document).ready(function() {
    if (window.location.href.includes('signup')) {
        username_sanitizer();
    }
});

var delay = (function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function username_sanitizer() {
    sel_input_field = '#id_username';
    rx = /^[a-z0-9_\-]*$/;
    $(sel_input_field).on('keyup', function() {
        delay(function() {
            el = $('.form-group.field-username').find('.help-block');
            val = $(sel_input_field).val();
            remove_error_message(el);
            if (rx.test(val) == false) {
                console.log('add message');
                add_error_message(
                    el, '* please use only digits, lower case letters, hyphens or underscores'
                );
            }
        }, 500);
    });
}

function add_error_message(el, msg) {
    $('.btn-primary').addClass('disabled');
    el.removeClass('info');
    el.addClass('error');
    el.append('<p class="text-danger">* ' + msg + '</p>')
    el.find('p').text(msg);
}

function remove_error_message(el) {
    $('.btn-primary').removeClass('disabled');
    el.empty();
    el.removeClass('error');
    el.addClass('info');
}
