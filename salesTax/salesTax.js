var $ = function(id) {
	return document.getElementById(id);
};

var calculate = function() {
	var subtotal = parseFloat($("subtotal").value);
	var taxRate = parseFloat($("tax_rate").value);
	var shipping = parseFloat($("shipping_charges").value);
	var salesTax = $("sales_tax").value;
	var total = $("total").value;

	salesTax = subtotal * (taxRate/100) + shipping;
	total = salesTax + subtotal;
	$("sales_tax").value = salesTax;
	$("total").value = total;
	return false;
	

};
/*
var calculate = function()
 {
    floatMonthlyPayment = parseFloat($("monthly_payment").value);
    intLoanTerm = parseInt($("loan_length").value);
    floatTotalCost = parseFloat(floatMonthlyPayment * intLoanTerm);  
    $("total_cost").value = floatTotalCost;
 }
 */
 window.onload = function () 
{
    $("subtotal").value = "";
    $("tax_rate").value = "";
	$("shipping_charges").value = "";
    $("calculate").onclick = calculate;
    //$("monthly_payment").focus();
}

