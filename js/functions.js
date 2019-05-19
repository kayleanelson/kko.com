/* trigger when page is ready */
$(document).ready(function (){

	// Open External Links in New Window
	$('a').each(function() {
	var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
		$(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       	});
	   }
	});

    // Add Hashes to Header Tags
    $('article :header').each(function(){
        $(this).attr('id',$(this).text().toLowerCase().replace(/ /g, '-'));
    });
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/