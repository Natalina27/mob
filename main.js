function learnMoreBtn() {
	const btn = document.querySelector(".bring-info__learn-more");
	const text = document.querySelector(".bring-info__learn_more-text");

	btn.addEventListener("click", function() {
		// btn.classList.add("display-none");
		// text.classList.add("display-block");
		btn.style.display = "none";
		text.style.display = "block";
	}); 
}

learnMoreBtn();


function appearError() {
	let input = document.querySelector(".js-name-input");
	let errorPlace = document.querySelector(".js-error-name");

	input.addEventListener("blur", function() {
		if (input.value.length == 0) {
			errorPlace.innerHTML = "Укажите Ваше ФИО";
			input.classList.add("error-border");
			input.classList.remove("pseudo-hover");
		} else {
			errorPlace.innerHTML = "";
			input.classList.remove("error-border");
			input.classList.add("pseudo-hover");
		}
	});
}

appearError();

function citizenship() {

var sel = document.querySelector(".form__citizenship-input");
var value = sel.options[sel.selectedIndex].value;
var countryOk = document.querySelector(".form__country");

	sel.addEventListener("click", function() {
		if (sel.selectedIndex == 0) {
			countryOk.style.display = "none";
		} else {
			countryOk.style.display = "block";
		}
	});
}

citizenship();

function ascentText(labelClass) {
	const inputs = document.querySelectorAll(labelClass);

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("blur", function() {
			if (inputs[i].value.length > 0) {
				inputs[i].classList.add("form__input-up");				
			} else {
				inputs[i].classList.remove("form__input-up");	
			}

			appearCross();
		}); 
	}
}

ascentText(".js-ascent-text");

function clearField() {
	const inputs = document.querySelectorAll(".js-ascent-text");
	const clearField = document.querySelectorAll(".js-clear-field");

	for (let i = 0; i < clearField.length; i++) {
		clearField[i].addEventListener("click", function() {
			inputs[i].value = "";						

			if (inputs[i].value.length > 0) {
				inputs[i].classList.add("form__input-up");				
			} else {
				inputs[i].classList.remove("form__input-up");	
			}

			appearCross();
		});
	}
}

clearField();

function appearCross() { 
	const inputs = document.querySelectorAll(".js-ascent-text");
	const clearField = document.querySelectorAll(".js-clear-field");

	for (let i = 0; i < clearField.length; i++) {
		if (inputs[i].value.length > 0) {
			clearField[i].style.display = "block";
		} else {	
			clearField[i].style.display = "none";
		}
	}
}

function toggleModal(button, popup, closeButton) {
	const conditionInfo = document.querySelector(button); 
	const modal = document.querySelector(popup);
	const closeBtn = document.querySelector(closeButton);

	conditionInfo.addEventListener("click", function() {
		modal.classList.add("modal");
		modal.classList.remove("popup");
	})

	closeBtn.addEventListener("click", function() {
		modal.classList.add("popup");
		modal.classList.remove("modal");
	})

}

toggleModal(".js-open-btn-conditions", ".js-popup--condition", ".js-close-btn-conditions");
toggleModal(".js-open-btn-friend", ".js-popup--friend-condition", ".js-close-btn-friend");




