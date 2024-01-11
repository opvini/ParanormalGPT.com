
// global session id
session = GetParameterValues("session");

function typingMsgDone() {
    flagTyping = false;

    $('#para-input').prop('disabled', false);
    $('#para-input').attr('placeholder', typeMessageInput)
    $('#para-input').focus();
    $('#para-send-btn').addClass('link');
    $('#para-main-input').removeClass('loading');
    $('#para-dropbox-language').removeClass('disabled');

    // finished typing, stoping scrolling
    clearInterval(intervalId);
}

function typingMessage() {
    flagTyping = true;

    $('#para-input').prop('disabled', true);
    $('#para-input').attr('placeholder', receivingMsgInput)
    $('#para-send-btn').removeClass('link');
    $('#para-main-input').addClass('loading');
    $('#para-dropbox-language').addClass('disabled');

    // if it is typing, ensure that vertical scroll keeps scrolling
    intervalId = setInterval(scrollEnd, 1000);
}

function paranormalType(obj_div_msg, arr_msg, callback_fct = function () { }) {
    // disable inputs while typing an answer
    typingMessage();

    // type the answer
    obj_div_msg.teletype({
        text: arr_msg,
        typeDelay: 0,
        backDelay: 0,
        cursor: '▋',
        delay: 0,
        loop: 1,
        preserve: true,
        callbackFinished: function (teletype) { teletype.setCursor(''); typingMsgDone(); callback_fct(); }
    });
}


function conectingMind() {
    var newDivId = 'tab-' + getRandomNumber(1000);
    var divAns = '<div class="paranormal-message para-answer"><span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span><span id="para-ans-' + newDivId + '"></span></div>';
    $('#para-content').append(divAns);

    paranormalType($('#para-ans-' + newDivId), [welcomeMsg]);
}

// open dialog to confirm the code or redirect back to index
function openModal() {
    // there is no session id
    if (session == null || session == "") {
        window.location.href = "/";
    }

    // check session id
    else {
        $.ajax({
            type: 'POST',
            url: '/check_open_dialog/',
            contentType: 'application/json',
            data: JSON.stringify({ session: session }),
            success: function (data) {

                if (true == data.success)
                    $('#para-modal-email').modal('show');
                else
                    ParaGPT();

            },
            error: function (error) {
                alert('Error ajax');
            }
        });
    }

}


$(document).ready(function () {

    $('.ui.accordion').accordion();

    $('.ui.styled.accordion').on('click', function () {
        $('#menu-items').toggle();
    });

    $("#para-btn-modal-confirm").click(function () {
        codeConfirmed();
        return false;
    });

    $("#para-btn-modal-confirm-illuminated").click(function () {
        codeConfirmedIlluminated();
        return false;
    });


    isSideMenuOpen = true;

    $("#para-link-hidden-menu").click(function () {
        $('#para-side-menu').show();
        $("#para-pusher").hide();
        $('#para-footer').hide().show(0); // fix Safari render issue
        isSideMenuOpen = true;
    });

    $("#menu-logo").click(function () {
        $('#para-side-menu').hide();
        $("#para-pusher").show();
        $('#para-footer').hide().show(0); // fix Safari render issue
        isSideMenuOpen = false;
    });

    assignTypeCode();

    $('.ui.modal').modal({
        closable: false,
        blurring: true
    });

    openModal();
});

function assignTypeCode() {
    // Get all input fields with maxlength of 1
    var inputs = $('.para-code-input');

    // Attach event handler to inputs
    inputs.on('input', function () {
        var input = $(this);

        // Get the value entered in the current input field
        var value = input.val();

        // If a number is entered, move the cursor to the next input field
        if ($.isNumeric(value) && value.length === 1) {
            var currentIndex = inputs.index(input);
            var nextIndex = currentIndex + 1;

            // Check if there is a next input field
            if (nextIndex < inputs.length) {
                var nextInput = inputs.eq(nextIndex);
                nextInput.focus();
            }

            // all numbers typed, focus in the terms and conditions
            else {
                $('#para-link-terms').focus();
            }
        }

        else if (value.length === 0) {
            var currentIndex = inputs.index(input);
            var prevIndex = currentIndex - 1;

            if (prevIndex >= 0) {
                var prevInput = inputs.eq(prevIndex);
                prevInput.focus();
            }
        }

        else {
            // Ignore non-numeric characters
            input.val('');
        }
    });
}

function closeCodeConfirm() {
    $('#para-modal-email').modal('hide');
    ParaGPT();
}

// function to be executed when the confirm button is pressed
function codeConfirmedIlluminated() {
    checkTerms = $('#para-check-terms-illuminated').is(':checked');
    if (checkTerms == true)
        $('#para-modal-illuminated').modal('hide');
}

// function to be executed when the confirm button is pressed
function codeConfirmed() {

    typedCode = '' + $('#para-code-1').val() + $('#para-code-2').val() + $('#para-code-3').val();
    checkTerms = $('#para-check-terms').is(':checked');

    const post_data = {
        session: session,
        code: typedCode
    }

    if (true == checkTerms) {
        // modal loader
        $('#para-code-loader').addClass('active');

        $.ajax({
            type: 'POST',
            url: '/checkcode/',
            contentType: 'application/json',
            data: JSON.stringify(post_data),
            success: function (data) {

                // confirmation code is correct
                if (true == data.success)
                    closeCodeConfirm();
                else {
                    alert("Wrong code.");
                    $('#para-code-loader').removeClass('active');
                }

            },
            error: function (error) {
                alert('Error ajax');
            }
        });
    }

}