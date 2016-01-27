
'use strict';
var inputValue = document.getElementById('quatityOfCheckBoxes').value;

function addCheckboxes(inputValue){
	//removing all childs 
	document.getElementById('checkboxSection').innerHTML = '';
	//adding checkboxes based on new input value
	for (var i = 0; i < inputValue; i++){
		document.getElementById('checkboxSection').innerHTML += '<input onclick="countCheckedCheckboxes();countTotalCheckedCheckboxes(this)" type="checkbox"></input>'; 
	}
}

function countCheckedCheckboxes(){
	//get qty of checked checkboxes
	var checkedSum = document.getElementById('checkboxSection').querySelectorAll('input[type="checkbox"]:checked').length;
	//append sum of checked into Sum area
	document.getElementById('checkedSum').innerHTML = checkedSum;
}


function countTotalCheckedCheckboxes(currentCheckbox){
	var checkedTotalSum = document.getElementById('totalCheckedSum').innerHTML;
	
	//checking if total sum is empty
	if(checkedTotalSum === ''){
		checkedTotalSum = 0;
	}else{
		checkedTotalSum = checkedTotalSum;
	}
 
    if (currentCheckbox.checked) {
    	checkedTotalSum++;
    }

    document.getElementById('totalCheckedSum').innerHTML = checkedTotalSum;
}