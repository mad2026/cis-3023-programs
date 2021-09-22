var $ = function(id) {
	return document.getElementById(id);
};

var calc = function() {
	var initial = parseFloat($("loan_initial").value);
	var months = parseFloat($("num_months").value);
	var interest = parseFloat($("interest_annual").value);
	var payment = $("payment_monthly").value;
	//var total = $("total").value;

	payment = initial * ((interest/(12*100))/(1 - ((1 + (interest/(12*100))) ** (-1 * months))))
	
	$("payment_monthly").value = "$" + payment.toFixed(2);
	//$("total").value = "$" + total.toFixed(2);
	return false;
	

};

 window.onload = function () 
{
    $("loan_initial").value = "";
    $("num_months").value = "";
	$("interest_annual").value = "";
	$("payment_monthly").value = "";
    //$("calc").onclick = calc;
    //$("monthly_payment").focus();
}

