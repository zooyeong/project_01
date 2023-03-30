// var pos = 0;

// var totalSlides = $('.slide img').length;

// var sliderWidth = $('.slide').width();

// // $(document).ready(function(){
// //   $('.slide').width(sliderWidth*totalSlides);
// // });

// function slideLeft(){
//   pos--;
//   if(pos == -1){
//     pos = totalSlides-1;
//   }
//   $('.slide').css('left', -(sliderWidth*pos));
// }

// function slideRight(){
//   pos++;
//   if(pos==totalSlides){
//     pos = 0;
//   }
//   $('.slide').css('left', -(sliderWidth*pos));
// }


// const slides = document.querySelectorAll('.slide');
// let current = 0;

// showSlide();
// function showSlide(){
//   var i;
//   for(i=0; i < slides.length; i++){
//     slides[i].style.display = 'none';
//   }
//   current++;
//   if(current > slides.length) {
//     current = 1;
//   }
//   for(i = 0; i < slides.length; i++){
//     slides[current-1].style.display = "block";
//     setTimeout(showSlide, 2000);
//   }
// }

// function showSlide(){
//   for(let i = 0; i<slides.length; i++){
//     slides[i].animate(
//       {
//         transform: [
//           // 'translateX(0px)',
//           'translateX(-1280px)'
//         ]
//       },
//       {
//         duration: 1000,
//         fill: 'backwards',
//         easing: 'ease'
//       }
//     );
//   }
//   current++;
//   if(current > slides.length){
//     current = 1;
//   }
// }

// showSlide();

//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	
	/*****************
	BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
    //next slide 	
	$('#next').click(function(){
		slideRight();
	});
	
	//previous slide
	$('#previous').click(function(){
		slideLeft();
	});
	
	
	
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 

	   //create a pagination
	  var li = document.createElement('li');
	  $('#pagination-wrap ul').append(li);	   
	});
	
	//counter
	countSlides();
	
	//pagination
	pagination();
	
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
	
	

});//DOCUMENT READY
	


/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	
	//*> optional
	countSlides();
	pagination();
}


/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	
	//*> optional 
	countSlides();
	pagination();
}



	
/************************
 //*> OPTIONAL SETTINGS
************************/
function countSlides(){
	$('#counter').html(pos+1 + ' / ' + totalSlides);
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}
