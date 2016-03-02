var CookieManager = (function () {

	return {
		
		//basic values to create a cookie:
		setCookie: function (name, value, expires) {
			
			if (!name || !value || !expires) {
				return;
			}
			
			var today = new Date(),
				expiration = new Date();
			
			//calculate a future date from today to the expires date
			//getTime returns a timestamp for that object, a miliseconds value
			expiration.setTime(today.getTime() + 3600000 * 24 * expires);
			
			//core operation to create a cookie
			//document.cookie = "name=value;expires=x";
			document.cookie = name + "=" + escape(value) + ";expires=" + expiration.toGMTString();
			document.cookie;
		},
		
		//use the cookie name to find a cookie and set a passed date
		deleteCookie: function (name) {
		
			if (document.cookie) {
			   document.cookie = name + '=;expires=' + new Date().toGMTString(); 
			}
			
		},
		
		//use a regexp to examine the string in document.cookie. It contains all the cookies stored. We find
		//the fragment that exactly starts with name and ends with "=", and it returns an array [allthecookie, empty string, cookie value]
		getCookie: function (name) {
			match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
			if (match) return match[2];
		}
		
	}
	
})();