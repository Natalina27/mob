function ascentText(labelClass) {
	const input = document.querySelector(labelClass);

	input.addEventListener("blur", function() {
		if (input.value.length > 0) {
			input.classList.add("form__input-up");				
		} else {
			input.classList.remove("form__input-up");	
		}
	}); 
}

ascentText(".js-ascent-text");

// При событии click на крестике нужно проверить есть ли в инпуте какой-то текст.
// Если есть, то удаляем текст из инпута.
