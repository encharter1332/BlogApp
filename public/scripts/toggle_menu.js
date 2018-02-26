/* global $ */
$(document).ready(function(){
    $(".dropmenu").click(function(){
        $(".menulink").toggle(500);
        $('a.dropmenu').toggleClass("active");
    });
});