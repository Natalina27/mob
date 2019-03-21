function citizenship() {
	const citizen = document.querySelector(".form__citizenship-input");
	const value = citizen.options[citizen.selectedIndex].value;
	const countryOk = document.querySelector(".form__country");

		if (citizen.selectedIndex.value == 'Имею гражданство РФ') {
			countryOk.style.display = "none";
		} else {
			countryOk.style.display = "block";
		}
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



function modal() {
	const conditionInfo = document.querySelector(".condition__button"); 
	const modal = document.querySelector(".popup");
	const closeBtn = document.querySelector(".popup__close-btn");

	conditionInfo.addEventListener("click", function() {
		modal.classList.add("modal");
		modal.classList.remove("popup", "popup--condition");
	})

	closeBtn.addEventListener("click", function() {
		modal.classList.add("popup", "popup--condition");
		modal.classList.remove("modal");
	})

}

modal();



// function clearField() {

// var input = document.querySelector(".js-ascent-text");

// if (input.Value != 0) {
// 	alert("hbtrb");

// };
// }

// function clearField() { 

// var input = document.querySelector(".js-ascent-text");

// if (input.value != 0) {
// document.querySelector(".input-close-btn").style.display = "block";
// } else {document.querySelector(".input-close-btn").style.display = "none";}


// }

// clearField();


// function name() {

// var inputs = document.querySelectorAll("input");
// // var i;
// console.log(inputs);
// 		for (i = 0; i < inputs.length; i ++) {			
// 		if (inputs.value.length > 0) {
// 			inputs.classList.add("form__input-up");				
// 		} else {
// 			inputs.classList.remove("form__input-up");	
// 		}
// 	}; 
	
// }

// name();