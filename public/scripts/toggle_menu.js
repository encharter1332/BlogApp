/* global $ */
$(document).ready(function(){
    $(".dropmenu").click(function(){
        $(this).next(".menulink").toggle(500);
        $(this).toggleClass("active");
    });
});