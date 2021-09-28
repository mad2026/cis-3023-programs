var $ = function(id) {
	return document.getElementById(id);
};

var calculate = function() {
	var subtotal = parseFloat($("subtotal").value);
	var taxRate = parseFloat($("tax_rate").value);
	var shipping = parseFloat($("shipping_charges").value);
	var salesTax = $("sales_tax").value;
	var total = $("total").value;

	salesTax = subtotal * (taxRate/100);
	salesTax = parseFloat(salesTax.toFixed(2));
	total = salesTax + subtotal + shipping;
	
	$("sales_tax").value = "$" + salesTax.toFixed(2);
	$("total").value = "$" + total.toFixed(2);
	return false;
	

};

 window.onload = function () 
{
    $("subtotal").value = "";
    $("tax_rate").value = "";
	$("shipping_charges").value = "";
    $("calculate").onclick = calculate;
    //$("monthly_payment").focus();
}

