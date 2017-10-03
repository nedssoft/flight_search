$("#searchBtn").on("click", function(){
	const url = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';
	var searchValue = $("#searchValue").val();
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchValue + "&format=json&callback=?";

	$.ajax({
		type: "GET",
		url: url,
		async: false,
		dataType:"json",
		success: function(data){
			for(var i = 0; i < data[1].length; i++){
				$("#pageView").prepend("<div> <a href="  + data[3][i] + "><h2>" + data[1][i] + "</h2><p>" + data[2][i] + "</p></a></div>");
			}
		}
		// error: function(){
		
		// }
	});
});

