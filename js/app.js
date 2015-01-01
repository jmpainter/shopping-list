$(document).ready(function () {
	$('#add-button').click(function() {

	  var isFound = false;
		
		//search the list for category
		$('#shopping-list > li').each(function() {
			if ($(this).attr('id') == $('#category').val()) {

				//if the category is found, add the item to the category's unordered list
				$(this).children().append('<li>' + $('#item').val() 
				+ '<a class="fa fa-check done"></a><a class="fa fa-close delete"></a></li>');
				isFound = true;
			}
		});	  

		//if the category isn't found, add it and the item in it's unoreded list
		if (isFound == false) {
			$('#shopping-list').append('<li id="' + $('#category').val() + '">'
			 + $('#category option:selected').html() + '<ul><li>' + $('#item').val() 
			 + '<a class="fa fa-check done"></a><a class="fa fa-close delete"></a></li></ul></li>');		
		}
		//try to unbind the envent first to prevent multiple event handlers
		$('.done').off('click');
		$('delete').off('click');
		$('.done').click(doneOnClick);	
		$('.delete').click(deleteOnClick);
	});

	function deleteOnClick (){
		console.log($(this).closest('li').siblings().length);
		if ($(this).closest('li').siblings().length == 0) {
			$(this).closest('li').parent().parent().remove();
		}
		else {
			$(this).closest('li').remove();
		}
	}

	function doneOnClick (){
		console.log('doneOnClick called, current text-decoration state: ' + $(this).closest('li').css("text-decoration"));
		if ($(this).closest('li').css("text-decoration") == "none") {
			console.log('setting state to line-through');
			$(this).closest('li').css("text-decoration", "line-through");
		}
		else {
			console.log('setting state to none');
			$(this).closest('li').css("text-decoration", "none");			
		}
	}	


	$('.delete').click(deleteOnClick);
	$('.done').click(doneOnClick);

});