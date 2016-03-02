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
		}
		
	}
	
})();