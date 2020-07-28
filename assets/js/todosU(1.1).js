//Adding click listeners for line through
$("ul").on("click","li",function(){
	$(this).toggleClass("completed")
});
							//	_____
//Adding click listeners to the | X | 

$("ul").on("click","span",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newToDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDo + "</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(50);
});