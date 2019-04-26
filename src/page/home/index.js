import './index.less'

initBannerSwiper();
function initBannerSwiper(){
  let s = new Swiper("#home-banner-swiper", {
    loop:true,
    pagination: '#home-banner-swiper .swiper-pagination',
  })
}

initBlockText();
function initBlockText(){
  let s = new Swiper("#swiper-block-text", {
    loop:true,
    prevButton: '.slider-block-text .swiper-button-prev',
    nextButton: '.slider-block-text .swiper-button-next',
  })
}
