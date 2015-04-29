this.onfetch = function(event) {
	var url = decodeURIComponent(event.request.url),
	urlToMatch ='./catchme.html',
	responseText = 'request caught by service worker';
	
	if(url===urlToMatch){
		event.respondWith(new Response(responseText));
	}
};