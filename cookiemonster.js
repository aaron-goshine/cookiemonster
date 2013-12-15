/**
Gio
 TODO : Add support for local storage
 */
var cookieMonStore = (function() {
    "use strict";
    var CookieMonStore = new Function();

    CookieMonStore.fn = CookieMonStore.prototype;

    CookieMonStore.fn.setCookie = function(name, value, days) {
	if (days) {
	    var date = new Date();
	    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	    var expires = "; expires=" + date.toGMTString();
	}
	else
	    var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
    };

    CookieMonStore.fn.getCookie = function(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
	    if (c.indexOf(nameEQ) == 0)
		return c.substring(nameEQ.length, c.length);
	}
	return null;
    };
 
    CookieMonStore.fn.deleteCookie = function(name) {
	this.setCookie(name, "", -1);
    };

    return new CookieMonStore();

}());
