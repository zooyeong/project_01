let bannerEl = document.querySelectorAll('.banner_item');
let banInnerEl = document.querySelector('.ban_inner_con');
let banInA_El = document.querySelectorAll('.ban_inner li a');

for(let i=0; i<bannerEl.length; i++){
  bannerEl[i].addEventListener('mouseover', function(){
    banInnerEl.style.height = "200px";
    bannerEl[i].style.backgroundColor = "rgb(231, 147, 74)";
  });
};

for(let i=0; i<bannerEl.length; i++){
  bannerEl[i].addEventListener('mouseout', function(){
    banInnerEl.style.height = "0px";
    bannerEl[i].style.backgroundColor = "white";
  });
};

for(let i=0; i<banInA_El.length; i++){
  banInA_El[i].addEventListener('mouseover', function(){
    // banInA_El[i].style.color = "white";
    banInnerEl.style.height = "200px";
  })
}

for(let i=0; i<banInA_El.length; i++){
  banInA_El[i].addEventListener('mouseout', function(){
    // banInA_El[i].style.color = "rgb(150,150,150)";
    banInnerEl.style.height = "0px";
  })
}

banInnerEl.addEventListener('mouseover', function(){
  banInnerEl.style.height = "200px";
})
banInnerEl.addEventListener('mouseout', function(){
  banInnerEl.style.height = "0px";
})