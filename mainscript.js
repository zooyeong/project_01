let pos = 0;
let totalSlides = $('#slider-wrap ul li').length;
let sliderWidth = $('#slider-wrap').width();

$(document).ready(function(){
	
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	
	$('#next').click(function(){
		slideRight();
	});
	
	$('#previous').click(function(){
		slideLeft();
	});
	
	let autoSlider = setInterval(slideRight, 3000);
	
	$.each($('#slider-wrap ul li'), function() { 
		let li = document.createElement('li');
		$('#pagination-wrap ul').append(li);	   
	});
	
	pagination();
	
	$('#slider-wrap').hover(
		function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
		function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);

});
	
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
	pagination();
}

function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
	pagination();
}

function pagination(){
	$('#pagination-wrap ul li').removeClass('active');
	$('#pagination-wrap ul li:eq('+pos+')').addClass('active');
}