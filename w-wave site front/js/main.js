let validation = new JustValidate('#form',{
  errorLabelStyle: {
    color: 'red'
  }
})

validation.addField('#what-u-say', [
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Ошибка,минимум 3 символа'
  }
])
validation.addField('#name', [
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Ошибка,минимум 3 символа'
  }
])
validation.addField('#email', [
  {
    rule: 'required',
    errorMessage: 'Ошибка'
  },
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'Ошибка,минимум 3 символа'
  },
  {
    rule: 'email',
    errorMessage: 'ошибка'
  }

])


const element = document.querySelector('.select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
	position: 'bottom'
});

var swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },

  });


document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById ('search-form__open').addEventListener('click', (e)=> {
    document.getElementById ('search-form').classList.add('search-form__show')
  })
})

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById ('search-form__open').addEventListener('click', (e)=> {
    document.getElementById ('search-form__open').classList.add('search-btn-hidden')
  })
})


document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById ('accordion-button').addEventListener('click', (e)=> {
    document.getElementById ('accordion-header').classList.add('accordion-header__colapsed')
  })
})


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
      document.querySelector(".header-top").classList.toggle("open")
      document.querySelector(".header-top-nav").classList.toggle("open")
      document.querySelector(".header-bottom-nav").classList.toggle("open")
      document.querySelector(".header-bottom").classList.toggle("open")
      document.querySelector(".header-top").classList.toggle("position")
    })
  })


document.addEventListener("DOMContentLoaded", (e) =>{
    document.getElementById("podcasts__btn"),addEventListener("click", (e) =>{
        document.querySelector(".podcasts__item").classList.toggle("display-block")
    })
})


let  artistsBtn = document.querySelector(".artists__btn");
let guestsCard = document.querySelector(".guests-card");

artistsBtn.forEach(function(element){
    element.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      artistsBtn.forEach(function(btn){ btn.classList.remove('artists__btn--active')});
      e.currentTarget.classList.add('artists__btn--active');

      guestsCard.forEach(function(element){ element.classList.remove('guests-card--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('guests-card--active');
    });
  });

