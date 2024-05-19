
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

    //assignTypeCode();
    closeCodeConfirm();

    $('.ui.modal').modal({
        closable: false,
        blurring: true
    });

});


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

    }

}