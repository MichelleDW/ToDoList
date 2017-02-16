//Check off Specific Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
	//stops event from bubbling up
});

$("input[type='text']").keypress(function(event){
	//13 is code for enter key
	if(event.which === 13){
		//grabbing new Todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
	 
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});