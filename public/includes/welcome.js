
    // load the language according to the query string
    var language = GetParameterValues('lang');
    const referral = GetParameterValues('ref');

    function startTeleType(lang) {
      LoadLanguageJs(lang, function () {
        $('#para-msg').teletype({
          text: home_msgs,
          typeDelay: 10,
          backDelay: 0,
          cursor: '▋',
          delay: 3000,
          loop: 0,
          preserve: false
        })
      });
    }

    // set the language according to the current country
    function ajaxLoadRegion() {

      if (language != null && language != "") {
        $('#para-dropbox-language').dropdown('set selected', language);
        startTeleType(language);
      }

      $.ajax({
        type: 'POST',
        url: '/whatcountry/',
        contentType: 'application/json',
        data: JSON.stringify({}),
        timeout: 15000,
        success: function (data) {

          // language is not defined in querystring: load the detected one
          if (language == null || language == "") {
            startTeleType(LanguageByCountry(data.country));
            language = LanguageByCountry(data.country);
            $('#para-dropbox-language').dropdown('set selected', language);
            console.log("Language loaded: " + language);
          }

          // there is a defined language in querystring and it is different than the detected
          // in this case show the modal
          else if (language != LanguageByCountry(data.country)) {
            $("#para-country").text(getFullCountry(data.country));
            $("#para-language").text(getFullLanguage(data.country));

            $("#para-btn-change-lang").click(function () {
              window.location.href = "welcome.html?lang=" + LanguageByCountry(data.country);
            });

            $("#para-modal-language").modal('show');
          }

        },

        // in case of error or timeout - load English
        error: function (error) {
          startTeleType('EN');
          $('#para-dropbox-language').dropdown('set selected', 'en');
          console.log("Error loading language.");
        }

      });
    }

    // callback function for onChange in the language dropdown
    function changeLanguageWelcome(value, text, $selectedItem){
      if(value != language){
        window.location.href = "welcome.html?lang="+value+'&langModal=no';
      }
    }

    $(document).ready(function () {

      $('.ui.dropdown').dropdown({
        onChange: changeLanguageWelcome
		  });

      // just start teletype without a message
      $('#para-msg').teletype({
        text: ["^2000loading your language, please wait..........."],
        typeDelay: 200,
        backDelay: 0,
        cursor: '▋',
        delay: 3000,
        loop: 0,
        preserve: false
      });

      $('#para-btn-start').click(function () {

        formEmail = $('#email').val().toLowerCase();

        // invalid email
        if (!isValidEmail(formEmail)) {
          alert('Bad email');
        }

        // valid email
        else {
          $.ajax({
            type: 'POST',
            url: '/newsession/',
            contentType: 'application/json',
            data: JSON.stringify({ email: formEmail, ref: referral }),
            success: function (data) {
              window.location.href = "/internal.html?session=" + data.session + "&lang=" + CheckLanguage(language);
            },
            error: function (error) {
              alert('Error ajax');
            }
          });
        }

      });

      // check the current country
      ajaxLoadRegion();

    });