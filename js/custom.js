require('jquery');
require("waypoints/lib/jquery.waypoints.js");
window.addEventListener('DOMContentLoaded', function (e) { 
        $('#loader').show();
        // preload('./img/ai_pics1.png','./img/ai_pics2.png','./img/go_pics1.png','./img/go_pics2.png','./img/me_nomachove.png','./img/mot_pics1.png','./img/mot_pics2.png');     
}, false);


window.addEventListener('load', function (e) {
    //wait till once time animation end
    setTimeout(function(){
        $('#loader').addClass('animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).hide();
            $('.trigger').waypoint(function() {
                $(this.element).addClass('animated');
            },{offset: '70%'});
            $('.trigger-p').waypoint(function() {
                $(this.element).addClass('animated');
            },{offset: '90%'});
            $('.other-link').waypoint(function() {
                $(this.element).find('img').addClass('animated');
            },{offset: '70%'});
            $('.resume').on('click', function(){
                $('.color-ball').addClass('animated');
                $('.resume-content').slideDown();
            });
        });
    },1500);
}, false);

$(function(){
    $('.ukeas-link').on('click',function(){
        location.href = 'ukeas.html';
    });
    $('.goaway-link').on('click',function(){
        location.href = 'goaway.html';
    });
    $('.aigroup-link').on('click',function(){
        location.href = 'aigroup.html';
    });
    $('.jim').on('click',function(){
        location.href = 'index.html';
    })
})