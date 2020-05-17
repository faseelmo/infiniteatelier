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

function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const preview = document.querySelectorAll(".preview img");

    previews.forEach(preview => {
        preview.addEventListener("click",function(){
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small","big");
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove("preview-active"));
            preview.classList.add("preview-active");
        });
    });
}

imageGallery();