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
        var cookieKeyValues = document.cookie.split('; ');
      for (var i = 0; i < cookieKeyValues.length; i++) {
        var cookieKeyValue = cookieKeyValues[i];
        var pos = cookieKeyValue.indexOf("=");
        var name = cookieKeyValue.substring(0, pos);
        var value = cookieKeyValue.substring(pos + 1);
        _hash[name] = decodeURIComponent(value);
      }
    };

    ckMon.fn = ckMon.prototype;
    /**
     * set cookies
     * @param  {String} name
     * @param  {*} value
     * @param  {Number} days
     */
    ckMon.fn.set = function (name, value, days) {
        var expires = "", date = new Date();

        if (days >= 1) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }

        document.cookie = name + "=" + value + expires + "; path=/";
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

