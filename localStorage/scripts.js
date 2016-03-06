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

(function () {

	var db = null;

	var connectToDB = function () {
		//open a database connection and name it
		//we pass the version number we want
		var version = 1,
			req = window.indexedDB.open('idxTest', version);
			//when the version number changes this event is fired
			req.onupgradeneeded = function (ev) {
				//this node path contents the results of the DB
				db = event.target.result;
				//DB has this method to create Table w name notes,
				//and an ID that is incremented
				db.createObjectStore('notes', {
					keyPath: 'id',
					autoIncrement: true
				});
			}
			//when the connection and the upgraded was ok, succes event is fired
			req.onsuccess = function (ev) {
				db = event.target.result;
				console.dir(db);
			};
			//and if problems arises, this event is in handy
			req.onerror = function (ev) {
				console.log(ev.debug[1].message);
			}
	}

	connectToDB();

})();







