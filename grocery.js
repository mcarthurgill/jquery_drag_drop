var generateTotal = function(){
	var lastPriceAdded = parseFloat($('#grocery_list tr:last-child .item_price').text()); 
	var totalPrice = $("#total_cost").text() ? parseFloat($("#total_cost").text()) : 0;
	$('#total_cost').html((lastPriceAdded + totalPrice).toFixed(2));
}

$(document).ready(function(){
	$('.item').draggable({ helper: "clone" }, { distance: 1 }, {zIndex: 1}); 
	$('#grocery_list').droppable({
		accept: '.item',
		hoverClass: 'drop-hover',
		drop: function(event, object) {
			$(this).append($(object.draggable).clone());
			generateTotal(); 
		}
	});
});