$(document).ready(function() {
	showShipping();
	calcPrice();
});

function showShipping() {
	if ($('#billMail').is(":checked")) {
	  $('#shippingAddressFields').hide();
	} else {
	  $('#shippingAddressFields').show();
	}
}

$('#bookType').on('click', function() {
  calcPrice();
});

$('#billMail').on('click', function() {
  showShipping();
});
      
$('.qty-input i').click(function() {
	val = parseInt($('.qty-input input').val());

	if ($(this).hasClass('less')) {
		val = val - 1;
	} else if ($(this).hasClass('more')) {
			val = val + 1;
	}

	if (val < 1) {
		val = 1;
	}

	$('.qty-input input').val(val);
	calcPrice();
});

var dollarTotal;
var dollarTaxTotal;
var tax = 9.5;
var flatShip = 9.95;

function calcPrice() {
	if ($("#bookType").val() == "hard") {
		price = 39.95;
		$("#price").text(price);
		var finalTotal = doMath();
		$("#tax").text(dollarTaxTotal);
		$("#total").text(finalTotal);
	}
	else {
		price = 29.95;
		$("#price").text(price);
		var finalTotal = doMath();
		$("#tax").text(dollarTaxTotal);
		$("#total").text(finalTotal);
	}
}

function my_round(num) {
  return Math.round(num * 10 * 10) / 100;
}

function doMath() {
	quantity = parseFloat($("#qty").val());
	subtotal = my_round(price + flatShip);
	totalB4Tax = my_round(subtotal * quantity);
	taxEst = my_round((tax * subtotal) / 100);
	quantTax = my_round(taxEst * quantity);
	total = my_round(totalB4Tax + quantTax);
	dollarTotal = total.toFixed(2);
	dollarTaxTotal = quantTax.toFixed(2);

	return dollarTotal;
}