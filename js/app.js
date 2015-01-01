$(document).ready(function () {
	$('#add-button').click(function() {

	  var isFound = false;
		
		//search the list for category
		$('#shopping-list > li').each(function() {
			if ($(this).attr('id') == $('#category').val()) {

				//if the category is found, add the item to the category's unordered list
				$(this).children().append('<li>' + $('#item').val() 
				+ '<button class="delete">Delete</button><button class="done">Done</button></li>');
				isFound = true;
			}
		});	  

		//if the category isn't found, add it and the item in it's unoreded list
		if (isFound == false) {
			$('#shopping-list').append('<li id="' + $('#category').val() + '">'
			 + $('#category option:selected').html() + '<ul><li>' + $('#item').val() 
			 + '<button class="delete">Delete</button><button class="done">Done</button></li></ul></li>');		
		}
		$(document.body).on('click', '.delete', deleteOnClick);
		$(document.body).on('click', '.done', doneOnClick);
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
		console.log($(this).closest('li').css("text-decoration"));
		if ($(this).closest('li').css("text-decoration") == "none") {
			$(this).closest('li').css("text-decoration", "line-through");
		}
		else {
			$(this).closest('li').css("text-decoration", "none");			
		}
	}	


	$('.delete').click(deleteOnClick);
	$('.done').click(doneOnClick);

});