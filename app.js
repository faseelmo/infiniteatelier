/*GALLERY*/
$(".gallery-retail").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
});

$(".gallery-residential").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
});

$(".gallery-office").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
      enabled: true
    }
});

/*Fade IN*/

function scrollAppear(){
    var introText = document.querySelector('.description');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(introPosition < screenPosition) {
        introText.classList.add('description-appear');
    }
}

window.addEventListener('scroll',scrollAppear)


function scrollprofileAppear(){
  var introText = document.querySelector('.divider');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.4;

  if(introPosition < screenPosition) {
      introText.classList.add('divider-appear');
  }
}

window.addEventListener('scroll',scrollprofileAppear)



function oneappear(){
  var introText = document.querySelector('.slogan-text1');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if(introPosition < screenPosition) {
      introText.classList.add('slogan-text1-appear');
  }
}

window.addEventListener('scroll',oneappear)

function twoappear(){
  var introText = document.querySelector('.slogan-text2');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if(introPosition < screenPosition) {
      introText.classList.add('slogan-text2-appear');
  }
}

window.addEventListener('scroll',twoappear)

function threeappear(){
  var introText = document.querySelector('.slogan-text3');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.7;

  if(introPosition < screenPosition) {
      introText.classList.add('slogan-text3-appear');
  }
}

window.addEventListener('scroll',threeappear)

function boxappear(){
  var introText = document.querySelector('.yellow');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.1;

  if(introPosition < screenPosition) {
      introText.classList.add('yellow-appear');
  }
}

window.addEventListener('scroll',boxappear)