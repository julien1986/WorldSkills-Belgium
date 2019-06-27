require("normalize.css/normalize.css");
require("./styles/index.scss");

import "./script/ajax.js";

window.addEventListener("load", function() {
    let barre_header = document.querySelector(".barre_header");
    let burger = document.querySelector("#burger");
    if (document.querySelector(".codeconf") != "undefined") var codeconf = document.querySelector(".codeconf");
    function affiche_menu() {
        burger.classList.add("active");
        document.body.classList.add("scrollnone");
        barre_header.classList.remove("invisible");
        if (window.innerWidth < 412 && codeconf != null) codeconf.style.display = "none";
    }
    function cache_menu() {
        console.log("on cache le menu");
        barre_header.classList.add("invisible");
        burger.classList.remove("active");
        document.body.classList.remove("scrollnone");
        if (codeconf != null) codeconf.style.display = "block";
    }

    burger.addEventListener("click", function() {
        console.log(this.classList.contains("active"));
        if (burger.classList.contains("active") == false) {
            affiche_menu();
        } else cache_menu();
    });

    document.querySelector("#recherche").addEventListener("click", function(evt) {
        console.log(evt.target.tagName);
        if (evt.target.tagName != "INPUT") document.querySelector(".menu").classList.toggle("recherche");

        if (document.querySelector(".menu").classList.contains("recherche")) {
            document.querySelector("input[type='search']").focus();
        }
    });

    window.addEventListener("resize", function() {
        //cache_menu();
    });

    cache_menu();

    if (document.querySelector(".speakers") !== null) {
        let speakers = document.querySelectorAll(".speakers li");

        speakers.forEach(function(elem) {
            elem.addEventListener("click", function(evt) {
                if (window.innerWidth < 412) evt.preventDefault();
                if (elem.classList.contains("active")) {
                    console.log(elem.querySelector("a").href);
                    window.location = elem.querySelector("a").href;
                }
                if (document.querySelector(".speakers li.active") !== null) document.querySelector(".speakers li.active").classList.remove("active");

                evt.currentTarget.classList.toggle("active");
                setTimeout(function() {
                    window.location.hash = elem.id;
                }, 400);
            });
        });
    }
});

/*
document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    pluginsTriggerElement.onclick = () => {
        pluginsElement.classList.toggle(pluginsVisibleClass);
    }
});
*/
