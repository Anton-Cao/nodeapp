$(document).ready(function() { // only add event listeners once DOM elements are loaded
    $('#submit-button').click(function() {
        var text = $('#text').val();
        if (text.length > 0) {
            var listItem = document.createElement('li');
            listItem.innerText = text;
            $('#posts').prepend(listItem);
            $('#text').val(''); // clear the text in the input field

            // send an HTTP post request to the /newpost endpoint
            $.ajax({
                method: "POST",
                url: "/newpost",
                data: { post: text }
            });
        }
    });
});