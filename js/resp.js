//preloader
window.addEventListener('DOMContentLoaded', function (e) { 
        $('#loader').show();
        preload('./img/ai_pics1.png','./img/ai_pics2.png','./img/go_pics1.png','./img/go_pics2.png','./img/me_nomachove.png','./img/mot_pics1.png','./img/mot_pics2.png');     
}, false);     
window.addEventListener('load', function (e) {
	//wait till once time animation end
    setTimeout(function(){
        $('#loader').addClass('animated fadeOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).hide();
      	});
    },1500);
}, false);

//check android
var u = navigator.userAgent, app = navigator.appVersion;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios	
if(isAndroid == true){
	srollPageDisabled();
}else if(isAndroid == false){
	srollPage();
	//showing the tip about orientation
	$(function(){
    	orient();
	});
	$(window).bind( 'orientationchange', function(e){
	    orient();
	});
}


function srollPage(){
	$(function(){
		//call onepage_scroll
		$(".main").onepage_scroll({
		    sectionContainer: "section",    
		    easing: "cubic-bezier(0.55, 0.085, 0, 0.99)",                                                     
		    animationTime: 800,            
		    pagination: true,                
		    updateURL: false,                
		    beforeMove: function(index) {
		        if(index == 1){
		            $('body').css('background-color','#ffffff');
		            $('.backShadow').css('background-color','#ffffff');
		        }else if(index == 2){
		            $('body').css('background-color','#c8e1c4');
		            $('.backShadow').css('background-color','rgb(75, 180, 187)');
		        }else if(index == 3){
		            $('body').css('background-color','#91b4ce');
		            $('.backShadow').css('background-color','#6f6eb0');
		        }else if(index == 4){
		            $('body').css('background-color','#1af0b8');
		            $('.backShadow').css('background-color','#08b7b2');
		        }else if(index == 5){
		            $('body').css('background-color','#dedede');
		            $('.backShadow').css('background-color','#333333');
		        }else if(index == 6){
		            $('body').css('background-color','#3d3d50');
		            $('.backShadow').css('background-color','#dd0917');
		        }else if(index == 7){
		            $('body').css('background-color','#2c2c34');
		        }
		        $('.leftInfo').hide().fadeIn();
		    },  
		    afterMove: function(index) {
		        $('.leftInfo').fadeIn();
		    },  
		    loop: false,                     
		    keyboard: true,                  
		    responsiveFallback: false,                          
		    direction: "vertical"            
		});

		//after click show me more button
		$('.info button').on('click',function(){
			
	        $(this).parents('section').addClass('expand');//expand the shadow
	        $('.backBtn').removeClass('fadeOut').show();//show the back button
	        $(".onepage-pagination").hide();//hide the pagination dots
	        $('.backShadow').one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend', function(){
	            $(".main").disable();//disable onepage scroll
	            $(this).parents('.expand').addClass('in');//after expading, show the content
	            
	      });
	    });

	    //after click back button
	    $('.backBtn').on('click',function(){
	        $('section').removeClass('expand');//set the shadow to width 50%
	        $('.backBtn').addClass('fadeOut');//hide the back button
	        $(".onepage-pagination").fadeIn();//show the pagination dots
	        $('.backShadow').one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend transitionend', function(){ 
	            $(".main").enable();//enable the onepage scroll
	            $(this).parents('section').removeClass('in');//hide the content
	      	});
	    });

	    $('.showMeMore').on('mouseover',function(){
	        $('.aboutMe .uiShow').addClass('shy');
	    }).on('mouseleave',function(){
	        $('.aboutMe .uiShow').removeClass('shy');
	    });
	    $('.sunGlass').on('mouseover',function(){
	        $('.hoverHead').find('img').attr('src','img/jim_hover.jpg');
	    }).on('mouseleave',function(){
	        $('.hoverHead').find('img').attr('src','img/jim.jpg');
	    });
	    $('.backToTop').on('click',function(){
	    	$(".main").moveTo(1);
	    });
	});
	

}

function srollPageDisabled(){
	$(function(){
		$(".main").onepage_scroll({
		    sectionContainer: "section",                   
		    responsiveFallback: true                          
		});
		$('#mePage').on('click',function(){
			// var windowLocation = ;
			console.log(window.location.hostname);
			// window.location.assign("http://jimfu.github.io/me_page.html");
		});
		$('#aiPage').on('click',function(){
			window.location.assign("http://jimfu.github.io/ai_page.html");
		});
		$('#motPage').on('click',function(){
			window.location.assign("http://jimfu.github.io/mot_page.html");
		});
		$('#goPage').on('click',function(){
			window.location.assign("http://jimfu.github.io/go_page.html");
		});
		$('#resumePage').on('click',function(){
			window.location.assign("http://jimfu.github.io/resume_page.html");
		});
		$('#tkdPage').on('click',function(){
			window.location.assign("http://jimfu.github.io/tkd_page.html");
		});
		$('.backToTop').hide();
	});
}

function orient() {
    if(document.body.clientHeight < 450){
        $('#banHeight').css('display','flex');
    }else{
        $('#banHeight').hide();
    }
}

// function preload(images) {
//     if (document.images) {
//         var i = 0;
//         var imageArray = new Array();
//         imageArray = images.split(',');
//         var imageObj = new Image();
//         for(i=0; i<=imageArray.length-1; i++) {
//             imageObj.src=imageArray[i];
//         }
//     }
// }

var images = new Array()  
function preload() {  
    for (i = 0; i < preload.arguments.length; i++) {  
        images[i] = new Image()  
        images[i].src = preload.arguments[i]  
    }  
}  
