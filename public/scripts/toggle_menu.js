/* global $ */
$(document).ready(function(){
    $(".dropmenu").on("click",function(){
        $(this).(".menulink").toggle(500);
        $('a.dropmenu').toggleClass("active");
    });
});