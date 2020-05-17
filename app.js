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
    var screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition) {
        introText.classList.add('description-appear');
    }
}

window.addEventListener('scroll',scrollAppear)

