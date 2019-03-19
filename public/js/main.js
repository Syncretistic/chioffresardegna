/* eslint-env jquery, browser */
$(document).ready(() => {
    $('#test').click(function() {
        $.ajax({
            type: 'POST',
            url: '/post/new',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                title: 'tokken',
                content: 'tokken'
            }),
            success: console.log('success'),
            error: console.log('error')
        });
    });

  // Place JavaScript code here...

});
