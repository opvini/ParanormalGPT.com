var contChr = 0;
var resp = "";
var qFrase = 0;
var qFraseLen = 0;
var qAns = 0;
var currLang = 'en';
var divLAns = 'para-ans';
var langLoaded = false;
var intervalId = null;
var flagTyping = false;
var cryptKey = 17;
var language = 'en';
var intervalRef = '';
var cfgComp = 0;
var magicChr = 190;
var backspaceKey = 8;
var enterKey = 13;
var accentKeyMac = 229;
var shiftKey = 16;
var deleteKey = 8;
var capsKey = 20;
var accentsiPhone = 0;
var isComposing = false;

const TIME_INTERVAL_REFERRAL = 5000;


function getRandomNumber(n) {
	return Math.floor(Math.random() * n);
}

function encryptText(text, shift) {
	var result = "";

	for (var i = 0; i < text.length; i++) {
		// shift the char
		var char = text.charCodeAt(i) + shift;
		// include a random lower letter (97 <= letter <= 122)
		result += "" + char + String.fromCharCode(getRandomNumber(25) + 97);
	}
	return result;
}

function decryptText(text, shift) {
	var result = "";
	var number = "";

	for (var i = 0; i < text.length; i++) {
		// if the char is a number concat
		if (!isNaN(parseInt(text[i]))) {
			number += "" + text[i];
		}
		// shift it back
		else {
			number = parseInt(number) - shift;
			result += String.fromCharCode(number);
			number = "";
		}
	}

	return result;
}


function loadCommonQuestions() {
	// clean the current questions
	$("#menu-items").text("");

	// include the common questions in the selected language
	for (i = 0; i < commonQuestions.length; i++) {
		var newItem = '<a class="item" href="#">' + commonQuestions[i] + '</a>';
		$("#menu-items").append(newItem);
	}
	$("#para-commonqst-title").text(commonQuestTitle);
}


function onClickLeftMenu(arg, id) {
	if (flagTyping == false) {
		switch (arg) {
			case "ask":
			case "about":
			case "contact":
			case "donate":
			case "advertise":
			case "logout":
				onClickSimplePrompt(arg, id);
				break;
			default:
		}
	}

	else {
		alert('Wait the typing message to be finished and click here again.');
	}
}


// function when clicking in the links in the left menu 
function onClickSimplePrompt(arg, id) {
	// create new divs with the questions and the answer with a dynamic id
	var newDivId = 'tab-' + getRandomNumber(10000);
	var divAns = '<div class="paranormal-message para-answer"><span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span><span id="para-ans-' + newDivId + '"></span></div>';
	var divQuest = '<div class="paranormal-message para-question"><span class="author"><img class="ui avatar image" src="images/userprofile.png"></span><span id="para-qst-' + newDivId + '"></span></div>';

	// post a pre-defined question to contact
	$('#para-content').append(divQuest);
	$('#para-qst-' + newDivId).text(leftLinkQuestions[id]);

	// append the answer's div to start typing
	$('#para-content').append(divAns);

	// after appending the new divs, scroll vertically until the end
	scrollEnd();

	if (arg == "ask") {
		// type the pre-defined answer and the answer
		paranormalType($('#para-ans-' + newDivId), ['', leftLinkAnswers[id], ''], showLinkFriends);
	}
	else {
		// type the pre-defined answer and the answer
		paranormalType($('#para-ans-' + newDivId), ['', leftLinkAnswers[id], '']);
	}

}

// periodic function to check how many referrals accepted the invite
function countReferrals() {

	console.log("Counting referrals...");

	$.ajax({
		url: '/countreferrals/',
		method: 'POST',
		data: JSON.stringify({ session: session }),
		contentType: 'application/json',
		success: function (response) {
			if (response.count >= 2) {
				clearInterval(intervalRef);
				openIllumination();
			}
		},
		error: function (xhr, status, error) {
			console.error(error);
		}
	});
}

// ate least 2 referrals accepted the invitation
// does the illumination
function openIllumination() {
	$('#para-modal-illuminated').modal('show');
}

// type a message about the payment and show the payment button
function showPaymentButton() {

	var newDivId = 'tab-' + getRandomNumber(10000);
	var divAns1 = '<div class="paranormal-message para-answer">\
					  <span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span>\
					  <span id="para-ans-'+ newDivId + '"></span> \
					</div>';

	// append the answer's div and start typing the text, but link is shown without typing
	$('#para-content').append(divAns1);

	paranormalType($('#para-ans-' + newDivId), ['', illumTxt[1], ''], function () {

		const pay_BRL_btn = "<stripe-buy-button \
		buy-button-id='buy_btn_1O5swuFao6vkiQl3Lwoodp5T' \
		publishable-key='pk_live_51O5ry2Fao6vkiQl3BQsTQBoq0O7qn4LaCh0pWokotIFX8yJcjEgf2n8Om6i0KfoqYEID9ZCZAKUItv1WSUiKiTyh00tJuohTDv'>\
		</stripe-buy-button>";

		const pay_EUR_btn = "<stripe-buy-button \
				buy-button-id='buy_btn_1O6GtpFao6vkiQl3WlSXrrVc' \
				publishable-key='pk_live_51O5ry2Fao6vkiQl3BQsTQBoq0O7qn4LaCh0pWokotIFX8yJcjEgf2n8Om6i0KfoqYEID9ZCZAKUItv1WSUiKiTyh00tJuohTDv'>\
				</stripe-buy-button>";

		const divLink = "<div class='para-referral-link'>" + pay_EUR_btn + "</div>";
		$('.paranormal-message.para-answer:last').append(divLink);

		// after appending the new divs, scroll vertically until the end
		scrollEnd();
	});

}

// type a message about inviting friends and show the link
function showLinkFriends() {

	var newDivId = 'tab-' + getRandomNumber(10000);
	var divAns1 = '<div class="paranormal-message para-answer">\
					  <span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span>\
					  <span id="para-ans-'+ newDivId + '"></span> \
					</div>';

	// append the answer's div and start typing the text, but link is shown without typing
	$('#para-content').append(divAns1);

	paranormalType($('#para-ans-' + newDivId), ['', illumTxt[0], ''], function () {
		var link = "<a href='https://paranormalgpt.com/ref/" + session + "'>https://paranormalgpt.com/ref/" + session + "</a>";
		const divLink = "<div class='para-referral-link'>" + link + "</div>";
		$('.paranormal-message.para-answer:last').append(divLink);

		// after appending the new divs, scroll vertically until the end
		scrollEnd();
		showPaymentButton();
	});

	// start periodically checking of referrals
	//intervalRef = setInterval(countReferrals, TIME_INTERVAL_REFERRAL);
}

function loadLeftMenuLinks() {
	// clean the current links
	$("#menu-items-links").text("");

	// include the links in the selected language
	for (i = 0; i < leftMenuLinks.length; i++) {
		var newItem = '<a class="item" href="#" onclick="onClickLeftMenu(\'' + leftMenuLinks[i][1] + '\',' + i + ');">' + leftMenuLinks[i][0] + '</a>';
		$("#menu-items-links").append(newItem);
	}
	$("#para-links-title").text(leftLinksTitle);
}


function scrollEnd() {
	// vertical scroll until the end
	var newScrollHeight = $('#para-content').prop('scrollHeight');
	$('#para-content').animate({ scrollTop: newScrollHeight }, 'fast');
}


function ajaxSendData(data) {
	var question = $("#para-input").val();
	var crypText = encryptText(resp, cryptKey);

	$.ajax({
		url: '/message/',
		method: 'POST',
		data: JSON.stringify({ session: session, question: question, SSID: crypText }),
		contentType: 'application/json',
		success: function (response) {
			console.log(response);
		},
		error: function (xhr, status, error) {
			console.error(error);
		}
	});
}


function enviaForm() {
	// create new divs with the questions and the answer with a dynamic id
	var newDivId = 'tab-' + getRandomNumber(10000);
	var question = $("#para-input").val();

	var divQuest = '<div class="paranormal-message para-question"><span class="author"><img class="ui avatar image" src="images/userprofile.png"></span><span id="para-qst-' + newDivId + '"></span></div>';
	var divAns = '<div class="paranormal-message para-answer"><span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span><span id="para-ans-' + newDivId + '"></span></div>';

	// append the question and write the question as a plain text - html will not be interpreted
	$('#para-content').append(divQuest);
	$('#para-qst-' + newDivId).text(question);

	// append the answer's div to start typing
	$('#para-content').append(divAns);

	// after appending the new divs, scroll vertically until the end
	scrollEnd();

	// handle the answers when it does not exist or if it is unknown
	if (resp == "") {
		resp = unknowUser[getRandomNumber(unknowUser.length)];
	}
	else if (resp == "idk" || resp == "?") {
		resp = unknowAns[getRandomNumber(unknowAns.length)];
	}

	// prepare the answer with pre-defined phrase randomly
	qAns 	  = getRandomNumber(preAns.length);

	// prepare the next visible question
	qFrase    = getRandomNumber(frases.length);
	qFraseLen = frases[qFrase].length;

	// send data via AJAX
	ajaxSendData(question);

	// type the pre-defined answer and the answer
	paranormalType($('#para-ans-' + newDivId), ['', preAns[qAns], ' ' + resp + '!', '']);

	// clean the form and the answer for the next question
	$("#para-input").val("");
	resp = ""; contChr = 0;

	return false;
}

// callback function when language js is loaded
function LanguageLoaded() {

	// prepare the visible question
	qFrase    = getRandomNumber(frases.length);
	qFraseLen = frases[qFrase].length;

	// set the dropbox to the language
	$('#para-dropbox-language').dropdown('set selected', language);
	// load common questions in the left menu
	loadCommonQuestions();
	// load the links in the left menu in the correct language
	loadLeftMenuLinks();
	// start messages
	paranormalType($('#para-ans'), ['', connectingMsg], conectingMind);

	// define the onChange function for the dropbox
	$('#para-dropbox-language').dropdown({
		onChange: changeLanguage
	});
}

// load the language according to the query string
function LoadLanguage() {
	// load the language according to the query string
	language = CheckLanguage(GetParameterValues('lang'));
	LoadLanguageJs(language, LanguageLoaded);
}

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function handleTyping(typedChar, targetChar){

}

function addCharAnswer(inputField){
	let lastChar = inputField.val().slice(- 1);
	inputField.val( inputField.val().slice(0, -1) ); // remove typed char
	inputField.val( inputField.val() + frases[qFrase][contChr]); // include fake char
	inputField[0].scrollLeft = inputField.scrollWidth; 	// make sure the text field scrolls right
	contChr = (contChr + 1) >= qFraseLen ? 0 : contChr + 1; // circular buffer
	resp += lastChar;
}

// called when document is ready
function ParaGPT() {
	// assign the form to be sent when pressing enter
	$("#frmPrincipal").submit(function () {
		if ($("#para-input").val().length > 0) {
			enviaForm();
		}

		return false;
	});

	// set the form to be sent when button is clicked
	$('#para-send-btn').click(function () {
		if ($("#para-input").val().length > 0) {
			enviaForm();
		}
		return false;
	})

	// prepare the visible question
	qFrase    = getRandomNumber(frases.length);
	qFraseLen = frases[qFrase].length;

	// load pre-defined language
	LoadLanguage();


	// for accented chars - composing
	$("#para-input").on('compositionstart', function() {
		isComposing = true;
	});

	$("#para-input").on('compositionend', function(e) {
		isComposing = false;
		if (cfgComp) {
			addCharAnswer($(this))
		}
	});

	$("#para-input").on('input', function() { 
		
		// if any accented char is being composed ignore everything
		if(isComposing) return true;

		let inputField 	   = $(this);
		let currentValue   = inputField.val();
		let txtFieldLength = inputField.val().length;
		let lastChar 	   = currentValue.slice(- 1);

		// always reset if text field is empty
		if(txtFieldLength == 0){
			cfgComp = 0;
			contChr = 0;
			resp = '';
		}

		// start storing answer only if text field is empty
		if (lastChar === '.' && txtFieldLength == 1) {
			cfgComp = 1;
			inputField.val( inputField.val().slice(0, -1) );
			return true;
		}
		// pressed the magic key twice when text field is empty
		else if (lastChar === '.' && cfgComp == 1 && txtFieldLength == 1) {
			cfgComp = 0;
			return true;
		}
		// stop storing answer only if text field is not empty
		else if (lastChar === '.' && cfgComp == 1 && txtFieldLength > 1) {
			cfgComp = 0;
			inputField.val( inputField.val().slice(0, -1) );
			return true;
		}

		// store answer
		if (cfgComp && lastChar != '.') {
			// a new char was typed
			if (currentValue.length > resp.length ) {
				addCharAnswer(inputField);
			}
			// a char is removed (backspace)
			else if (currentValue.length < resp.length) {
				resp = resp.slice(0, -1); // Remove the last character
				contChr = (contChr - 1) <= 0 ? 0 : contChr - 1; // decrease counter char
			}
		}
	});

};


function updateLanguage() {
	var newDivId = 'tab-' + getRandomNumber(10000);
	var divAns = '<div class="paranormal-message para-answer"><span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span><span id="para-ans-' + newDivId + '"></span></div>';
	$('#para-content').append(divAns);

	// vertical scroll until the end to follow the new div
	scrollEnd();

	if (langLoaded == true) {
		// type the welcome message in the new selected language
		paranormalType($('#para-ans-' + newDivId), [welcomeMsg]);
		// load the common questions to the left menu
		loadCommonQuestions();
		// load the links in the left menu in the correct language
		loadLeftMenuLinks();
		// language ready to be loaded again
		langLoaded = false;
	}
	else {
		paranormalType($('#para-ans-' + newDivId), ['Error']);
	}
}

// switch languages
function changeLanguage(value, text, $selectedItem) {

	// selected language is diffent than the current one - avoid loading the same
	if (currLang != value) {

		// create new div to inform that the language is being changed
		var newDivId = 'tab-' + getRandomNumber(10000);
		var divAns = '<div class="paranormal-message para-answer"><span class="author"><img class="ui avatar image" src="images/paraprofile.png"></span><span id="para-ans-' + newDivId + '"></span></div>';
		$('#para-content').append(divAns);

		// load the new language
		var script = document.createElement('script');
		script.src = 'libs/type/answers-' + value.toLowerCase() + '.js';
		document.head.appendChild(script);

		// when the new language is loaded
		script.addEventListener('load', function () {
			
			// prepare the visible question
			qFrase    = getRandomNumber(frases.length);
			qFraseLen = frases[qFrase].length;

			langLoaded = true;
			currLang = value;
		});

		// vertical scroll until the end to follow the new div
		scrollEnd();

		// type to the user that the language is being changed - loading new language
		paranormalType($('#para-ans-' + newDivId), [changingLang, ''], updateLanguage);

	} // if selected language is not the same as the current one
}

