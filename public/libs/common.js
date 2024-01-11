
// get query string
function GetParameterValues(param) {
  var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < url.length; i++) {
    var urlparam = url[i].split('=');
    if (urlparam[0] == param) {
      return urlparam[1];
    }
  }
}

// Function to validate email
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// return the language of the country code
function LanguageByCountry(country_code) {

  for (i = 0; i < country_language.length; i++) {
    if (country_language[i].code == country_code)
      return country_language[i].lang_code;
  }

  // if the country is not found, return EN
  return 'EN';
}

// return the language of the country code
function getFullCountry(country_code) {

  for (i = 0; i < country_language.length; i++) {
    if (country_language[i].code == country_code)
      return country_language[i].name;
  }

  // if the country is not found, return EN
  return 'EN';
}

// return the language of the country code
function getFullLanguage(country_code) {

  for (i = 0; i < country_language.length; i++) {
    if (country_language[i].code == country_code)
      return country_language[i].lang;
  }

  // if the country is not found, return EN
  return 'EN';
}

// return the correct language abreviation
function CheckLanguage(lang) {
  lang = (lang != null && lang != "") ? lang.toUpperCase().substring(0, 2) : "";

  switch (lang) {
    case 'EN':
    case 'DE':
    case 'ES':
    case 'FR':
    case 'HR':
    case 'IT':
    case 'PL':
    case 'PT':
    case 'RO':
      return lang;

    default:
      return 'EN';
  }
}

// load the respective language js file
function LoadLanguageJs(lang, callback_fct = function () { }) {
  // make sure the language abreviation is valid
  lang = CheckLanguage(lang);

  // load the new language
  var script = document.createElement('script');
  script.src = 'libs/type/answers-' + lang.toLowerCase() + '.js';
  document.head.appendChild(script);

  // when the new language is loaded
  script.addEventListener('load', callback_fct);
}