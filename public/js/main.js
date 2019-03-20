/* eslint-env jquery, browser */
$(document).ready(() => {
    $('#test').click(() => {
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

    const toolbarOptions = [
        ['bold', 'italic', 'underline'], // toggled buttonss
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [ 'link', 'image', 'video', 'formula' ],
        [{ font: [] }],
        [{ align: [] }],

        ['clean'] // remove formatting button
    ];

    const options = {
        debug: 'info',
        modules: {
            toolbar: toolbarOptions
        },
        placeholder: 'Compose an epic...',
        readOnly: true,
        theme: 'snow'
    };


    const editor = new Quill('#postEditor', options);
    editor.enable();
});
