
let slider = tns({
  container: '.shows__slider',
  items: 6,
  nav: false,
  gutter: 27,
  controls: false,
  mouseDrag: true,
  responsive: {
    320: {
      items: 2,
      gutter: 16
    },
    576: {
      gutter: 20,
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 6
    },
    1200: {
      gutter: 24
    }    
  }
});

document.querySelector('.showsPrev').addEventListener('click', function () {
  slider.goTo('prev')
});
document.querySelector('.showsNext').addEventListener('click', function () {
  slider.goTo('next')
});

let slider2 = tns({
  container: '.movies__slider',
  items: 6,
  nav: false,
  gutter: 27,
  controls: false,
  mouseDrag: true,
  responsive: {
    320: {
      items: 2,
      gutter: 16
    },
    576: {
      gutter: 20,
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 6
    },
    1200: {
      gutter: 24
    }    
  }
});

document.querySelector('.moviesPrev').addEventListener('click', function () {
  slider2.goTo('prev')
});
document.querySelector('.moviesNext').addEventListener('click', function () {
  slider2.goTo('next')
});

let slider4 = tns({
  container: '.actors__list',
  items: 6,
  nav: false,
  gutter: 27,
  controls: false,
  mouseDrag: true,
  responsive: {
    320: {
      items: 2,
      gutter: 16
    },
    576: {
      gutter: 20,
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 6
    },
    1200: {
      gutter: 24
    }    
  }
});

document.querySelector('.actorsPrev').addEventListener('click', function () {
  slider4.goTo('prev')
});
document.querySelector('.actorsNext').addEventListener('click', function () {
  slider4.goTo('next')
});

// -------- burger-menu ----------

const menuElem = document.querySelector('.header__nav');
const burgerElem = document.querySelector('.header__burger');
const menuItems = document.querySelectorAll('.header__link');

burgerElem.addEventListener('click', () => {
  menuElem.classList.toggle('header__nav_active');
  burgerElem.classList.toggle('burger_active');
});

// function closeMenu () {
//   menuElem.classList.remove('header__nav_active');
//   burgerElem.classList.remove('burger_active');
// }

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    menuElem.classList.toggle('header__nav_active');
    burgerElem.classList.toggle('burger_active');
  })
});

// ----------- modal  ---------------

const over = document.querySelector('.overlay'),
      regBtn = document.querySelector('.register__btn'),
      modClose = over.querySelector('.modal__close'),
      modalBtnReg = over.querySelector('.modal__btn_register'),
      bodyOverflow = document.querySelector('body'),
      headerSingIn = document.querySelector('.header__singIn');

  const openModal = () => {
    over.classList.remove('hidden');
    bodyOverflow.style.overflow = 'hidden';
  };

  const closeModal = () => {
    over.classList.add('hidden');
    bodyOverflow.style.overflow = '';
    if (!document.querySelector('.modal__name').classList.contains('hidden')) {
      document.querySelector('.modal__reg').style.display = '';
      document.querySelector('.modal__name').classList.toggle('hidden');
      document.querySelector('.modal__confirmPass').classList.toggle('hidden');
    }
  };

  headerSingIn.addEventListener('click', openModal);
  regBtn.addEventListener('click', openModal);

  over.addEventListener('click', (e) => {
    const targ = e.target;
    if(targ.classList.contains('overlay') || targ.classList.contains('modal__close')) {
      closeModal();
    }
  });

  modalBtnReg.addEventListener('click', () => {
    document.querySelector('.modal__reg').style.display = 'none';
    document.querySelector('.modal__name').classList.toggle('hidden');
    document.querySelector('.modal__confirmPass').classList.toggle('hidden');
  });

  document.querySelector('.modal__btn').addEventListener('click', (e) => {
    e.preventDefault();
  });

