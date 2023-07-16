
const display = document.querySelector('.display')

const resultDisplay = document.querySelector('.result_display')

function findFactorial(num) {
	if (num >= 0) {
		if(num){
			let inValue = 1
			for (let i = 1; i <= num; i++){
				inValue = inValue * i
			}
			resultDisplay.value = inValue + ' is factorial of ' + num;
		}else{
			resultDisplay.value = 'Please input a value';
		}
	}else{
		resultDisplay.value = 'Only positive number value are allowed'
	}
}

function hideInputField(){
	display.classList.add('hidden')
	resultDisplay.classList.add('visible')
}

function showInputField(){
	display.classList.remove('hidden')
	resultDisplay.classList.remove('visible')
}