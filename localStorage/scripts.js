/**
*
HTML5 storage options
-webstorage: localStorage OR sessionStorage
	key / value
	relative to the DOMAIN
	LS, persists. SS, deleted after close the browser
-IndexedDB
	broser object to store data
-Web SQL database:
	not active, forget it
-offline web applications (OWA) :
	file to be cached
*
**/

(function () {

	var el = $('.output');

	localStorage.setItem('city', 'Amsterdam');

	el.text(localStorage.getItem('city'));

	sessionStorage.setItem('slogan', 'Heldhaftig, Vastberaden, Barmhartig');

	el.append('<p>' + sessionStorage.getItem('slogan') + '</p>');

})();





