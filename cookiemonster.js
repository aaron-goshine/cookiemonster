/**
 Aaron Goshine
 https://github.com/aaron-goshine/cookiemonster
 */

var cookieMonStore = (function () {
    "use strict";
    if (!navigator.cookieEnabled) {
        return false;
    }
    var ckMon = new Function();
    var _hash = {};
    var _generateHash = function () {
        var cookieString = document.cookie.split(';');
        for (var i = 0; i < cookieString.length; i++) {
            if (cookieString.indexOf("=")) {
                var pair = cookieString[i].split("=");
                _hash[trim(pair[0])] = trim(pair[1]);
            }
        }
    };
    var trim = function (value) {
        if(!value) return;
        var value = value.replace(/\s/gi, '')
        return (!!(Number(value))? Number(value) : value );
    };

    ckMon.fn = ckMon.prototype;
    /**
     * set cookies
     * @param  {String} name
     * @param  {*} value
     * @param  {Number} days
     */
    ckMon.fn.set = function (name, value, days) {
        var expires;
        var date = new Date();

        if (days >= 1) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }

        document.cookie = trim(name) + "=" + (value) + expires + "; path=/";
        _generateHash();
    };

    /**
     * retrieves cookies by name
     * @param {String} name
     * @returns {*|null}
     */
    ckMon.fn.get = function (name) {
        return _hash[name] || null;
    };
    /**
     * retrieves a key value pair of all the available cookies.
     * @returns {{}}
     */
    ckMon.fn.getHash = function () {
        _generateHash();
        return _hash;
    };
    /**
     * remove cookies by name
     * @param {String} name
     */
    ckMon.fn.delete = function (name) {
        this.set(name,"",null);
    };

    _generateHash();

    return new ckMon();

}());

