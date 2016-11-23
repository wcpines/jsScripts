// ==UserScript==
// @name         LearnNoGifs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Learn without distracting gifs in
// @author       You
// @match        *learn.co/*
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    setTimeout( () => {
        var findAllGifs = document.querySelectorAll('img[src$=".gif"]');
        var allGifs = Array.from(findAllGifs);
        allGifs.forEach ( gif => gif.src = "");
    }, 3000);
})();
