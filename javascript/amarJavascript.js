// Income and Expenses Error_handle function
function Income_Expenses_Error_handle(
	totalInCome,
	food_cost,
	rent_cost,
	cloth_cost
) {
	// totalInCome error handel

	if (totalInCome == '') {
		document.getElementById('error_total-Income').innerHTML =
			'** Please Fill in Number';
		return false;
	} else if (isNaN(totalInCome)) {
		document.getElementById('error_total-Income').innerHTML =
			'Enter Only Number';
		return false;
	} else if (totalInCome < 0) {
		document.getElementById('error_total-Income').innerHTML =
			'Less Than Zero is Not allowed';
		return false;
	}
	// End totalInCome error handel

	// food_cost  error handel

	if (food_cost == '') {
		document.getElementById('error_food-Cost').innerHTML =
			'** Please Fill in Number';
		return false;
	} else if (isNaN(food_cost)) {
		document.getElementById('error_food-Cost').innerHTML =
			'Enter Only Number';
		return false;
	} else if (food_cost < 0) {
		document.getElementById('error_food-Cost').innerHTML =
			'Less Than Zero is Not allowed';
		return false;
	}
	// End food_cost  error handel

	// rent_cost  error handel
	if (rent_cost == '') {
		document.getElementById('error_rent-Cost').innerHTML =
			'** Please Fill in Number';
		return false;
	} else if (isNaN(rent_cost)) {
		document.getElementById('error_rent-Cost').innerHTML =
			'Enter Only Number';
		return false;
	} else if (rent_cost < 0) {
		document.getElementById('error_rent-Cost').innerHTML =
			'Less Than Zero is Not allowed';
		return false;
	}
	// End  rent_cost error handel

	// cloth_cost  error handel

	if (cloth_cost == '') {
		document.getElementById('error_clothes-Cost').innerHTML =
			'** Please Fill in Number';
		return false;
	} else if (isNaN(cloth_cost)) {
		document.getElementById('error_clothes-Cost').innerHTML =
			'Enter Only Number';
		return false;
	} else if (cloth_cost < 0) {
		document.getElementById('error_clothes-Cost').innerHTML =
			'Less Than Zero is Not allowed';
		return false;
	}
	// End  cloth_cost error handel

	// total expeness.................
	// calculate total expancess
	const total_expancess =
		parseInt(food_cost) + parseInt(rent_cost) + parseInt(cloth_cost);

	document.getElementById('total-Expenses').innerText = total_expancess;
	// Total balance.................
	document.getElementById('total-balance').innerText =
		totalInCome - total_expancess;

	// cloth_cost  error handel

	if (totalInCome < total_expancess) {
		document.getElementById('error_total-Expenses').innerHTML =
			'** Total Income is Less Than Total Expancess';

		document.getElementById('total-Expenses').innerText = '0';
		document.getElementById('total-balance').innerText = '0';
		return false;
	}

	// empty all error
	document.getElementById('error_total-Income').innerHTML = '';
	document.getElementById('error_food-Cost').innerHTML = '';
	document.getElementById('error_rent-Cost').innerHTML = '';
	document.getElementById('error_clothes-Cost').innerHTML = '';
	document.getElementById('error_total-Expenses').innerHTML = '';

	// End  cloth_cost error handel
}

// Income and Expenses main function
function Income_Expenses() {
	const totalInCome = document.getElementById('total-Income').value;
	const food_cost = document.getElementById('food-Cost').value;
	const rent_cost = document.getElementById('rent-Cost').value;
	const cloth_cost = document.getElementById('clothes-Cost').value;

	Income_Expenses_Error_handle(
		totalInCome,
		food_cost,
		rent_cost,
		cloth_cost
	);
}

// Income and Expenses submit button
document
	.getElementById('income-submit-button')
	.addEventListener('click', function (event) {
		event.preventDefault();
		Income_Expenses();
	});

//   End of all Income and Expenses

//........................................................................
// save balance submit button

function Saving_Balance_Error_handle(saveInput) {
	// totalInCome error handel

	if (saveInput == '') {
		document.getElementById('error_save-balance').innerHTML =
			'** Please Fill in Number';
		return false;
	} else if (isNaN(saveInput)) {
		document.getElementById('error_save-balance').innerHTML =
			'Enter Only Number';
		return false;
	} else if (saveInput < 0) {
		document.getElementById('error_save-balance').innerHTML =
			'Less Than Zero is Not allowed';
		return false;
	}

	// getting total balance
	const totalbalance = parseInt(
		document.getElementById('total-balance').innerText
	);

	// getting total Income
	const totalIncome = parseInt(
		document.getElementById('total-Income').value
	);

	// claculate parcent  saving-percent
	const saveMult = totalIncome * parseInt(saveInput);
	const total_save_balance = saveMult / 100;

	//getting saving percent
	document.getElementById('saving-amount').innerText = total_save_balance;

	// getting remaining balance
	const remaining_Balance = totalbalance - total_save_balance;
	document.getElementById('Remaining-Balance').innerText =
		remaining_Balance;

	// empty all error
	document.getElementById('error_save-balance').innerHTML = '';
}

//...................................................................

function Saving_Balance() {
	const saveInput = document.getElementById('save-balance').value;
	const saving_amount = document.getElementById('saving-amount').innerText;
	const total_balance = document.getElementById('total-balance').innerText;

	Saving_Balance_Error_handle(saveInput);
}

//...................................................................

document
	.getElementById('button-saving-balance')
	.addEventListener('click', function (event) {
		event.preventDefault();
		Saving_Balance();
	});
