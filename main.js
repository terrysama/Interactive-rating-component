$(document).ready(()=> {
    $('#thanks-state').hide();

    $('form').submit(event => {
        event.preventDefault();
        let rating = $('input.btn-check:checked');
        if (rating.length < 1) {
            const err = $('.error-block');
            // create error message dynamically
            err.append(
                '<div class="invalid-tip fade-in-out">' + 
                'Please choose a rating from 1 - 5. </div>'
            );
            // set timeout to delete error
            $('.invalid-tip').each(function() {
                setTimeout(() => {
                    $(this).remove();
                }, 4000);
            });
        }
        else {
            let ratingVal = rating.val();
            $('#rating-value span').text(ratingVal);
    
            $('#rating-state').hide();
            $('#thanks-state').show();
        }
    })
});

