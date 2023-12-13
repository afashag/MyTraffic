new Swiper('.swiper', {
  freeMode: true,
  slidesPerView: 3.5,
  centeredSlides: true,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  });





// let questItems = document.querySelectorAll(".quest-item")



// questItems.forEach(item => {
//     item.addEventListener("click", (event)=>{
        
//         let questArrow = event.currentTarget.querySelector('.quest-item__arrow')
        
//         let questTexts = event.currentTarget.querySelector('.quest-item__text')

//         questArrow.classList.toggle('quest-item__arrow-active')
//         questTexts.classList.toggle('quest-item__text-active')

//     })
// })

