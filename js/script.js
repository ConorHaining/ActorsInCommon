(function($){
    $.fn.extend({
        center: function () {
            return this.each(function() {
                var top = ($(window).height() - $(this).outerHeight()) / 2;
                var left = ($(window).width() - $(this).outerWidth()) / 2;
                $(this).css({position:'absolute', margin:0, top: (top > 0 ? top : 0)+'px', left: (left > 0 ? left : 0)+'px'});
            });
        }
    }); 
})(jQuery);

$(".loading").center();

$('button').on('click', function(e) {

	$(".overlay, .loading").fadeIn(300);

	var film1 = $(".film1 h3").text(),
		film2 = $(".film2 h3").text();

	$.ajax({
		type: "GET",
		url: "app/film.php",
		data: { q1: film1, q2: film2 }
	}).done(function( msg ) {
		var json = JSON.parse(msg);
		console.log(json);

		// Update film posters
	 	$(".film1 img").attr("src", json.film1.poster);
		$(".film2 img").attr("src", json.film2.poster);

		var list1 = [1, 2, 3, 4, 5, 6];
		var list2 = ['a', 'b', 'c', 3, 'd', '4'];
		 
		for (var i in json.film1.actors) {
		    for (var j in json.film2.actors) {
		        if (json.film1.actors[i] == json.film2.actors[j]) {

		            $(".actors ul").append("<li>" + json.film1.actors[i] + "</li>");
		        }
		    }
		}

		$(".overlay, .loading").fadeOut(300);

	});
});