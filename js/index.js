/**
 * Created by vladkanash on 12/12/15.
 */
$(document).ready(function() {

    var contactLink = $('.new_post');
    var form = $('#form');

    contactLink.click(function(evt) {
        if (form.is(':hidden')) {
            form.slideDown('slow');
        } else {
            form.slideUp('slow');
        }
        evt.preventDefault();
    });
});