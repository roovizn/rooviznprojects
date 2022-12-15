let validation = new JustValidate('#form',{
  errorLabelStyle: {

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

const swiper = new Swiper('.swiper', {
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
