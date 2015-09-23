/**
 Aaron Goshine
 https://github.com/aaron-goshine/cookiemonster
 */

var cookieMonStore = (function () {
    "use strict";
    if (!document.cookie) {
        return false;
    }

    var ckMon = new Function();
    var _hash = {};
    var _generateHash = function(){
        var cookieString = document.cookie.split(';');
        for (var i = 0; i < cookieString.length; i++) {
            if (cookieString.indexOf("=")) {
                var pair = cookieString[i].split("=");
                _hash[trim(pair[0])] = trim (pair[1]);
            }
        }
    };
    var trim = function(str){
        return str.replace(/\s/gi,'');
    };

    ckMon.fn = ckMon.prototype;
    ckMon.fn.set = function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }

        document.cookie = trim(name) + "=" + (value) + expires + "; path=/";
        _generateHash();
    };

    ckMon.fn.get = function (name) {
        return _hash[name] || null;
    };

    ckMon.fn.getHash = function(){
        _generateHash();
        return _hash;
    };

    ckMon.fn.delete = function (name) {
        this.set(name, "", -1);
        _generateHash();
    };

    _generateHash();

    return new ckMon();

}());

