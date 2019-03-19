function ascentText(labelClass) {

	const input = document.querySelector(labelClass);

	input.addEventListener("blur", function() {
		if (input.value.length > 0) {
			input.classList.add("form__input-up");				
		} else {
			input.classList.remove("form__input-up");	
		}

		appearCross();
	}); 
}

ascentText(".js-ascent-text");

		// for (i = 0; i < input.length; i ++) {
		// 	[i].click = this.function();
		// }

var inputs = document.querySelectorAll(".input");
var i;
		for (i = 0; i < inputs.length; i ++) {
			inputs[i].addEventListener("click", function() {
		if (inputs.value.length > 0) {
			inputs.classList.add("form__input-up");				
		} else {
			inputs.classList.remove("form__input-up");	
		}

		appearCross();
	}); 
}


function clearField() {
	const input = document.querySelector(".js-ascent-text");
	const crossInput = document.querySelector(".js-clear-field");

	crossInput.addEventListener("click", function() {
			input.value = "";		
			appearCross();
	});
}


clearField();





function appearCross() { 
	const input = document.querySelector(".js-ascent-text");
	const closeBtn = document.querySelector(".input-close-btn");


	if (input.value.length > 0) {
		closeBtn.style.display = "block";
	} else {	
		closeBtn.style.display = "none";
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


