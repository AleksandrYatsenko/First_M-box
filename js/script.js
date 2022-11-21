
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
  
  const menuElem = document.querySelector('.header__nav'),
        burgerElem = document.querySelector('.header__burger'),
        menuItems = document.querySelectorAll('.header__link'),
        undlayForNav = document.querySelector('.underlayerForNav');
  
  const toggleMenu = () => {
    menuElem.classList.toggle('header__nav_active');
    burgerElem.classList.toggle('burger_active');
    undlayForNav.classList.toggle('hidden');
    document.body.classList.toggle('lock');
  }
  
  const closeMenu = () => {
    menuElem.classList.remove('header__nav_active');
    burgerElem.classList.remove('burger_active');
    undlayForNav.classList.add('hidden');
    document.body.classList.remove('lock');
  }

  burgerElem.addEventListener('click', toggleMenu);

  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
  
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('underlayerForNav')) {
      closeMenu();
    }
  });

  
  // ----------- modal  ---------------
  
  const over = document.querySelector('.overlay'),
        modName = over.querySelector('.modal__name'),
        modBtnReg = over.querySelector('.modal__btn_register'),
        modConfirmPass = over.querySelector('.modal__confirmPass'),
        regBtn = document.querySelector('.register__btn'),
        bodyOverflow = document.querySelector('body'),
        headerSingIn = document.querySelector('.header__singIn');
  
  const openModal = () => {
    over.classList.remove('hidden');
    bodyOverflow.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    over.classList.add('hidden');
    bodyOverflow.style.overflow = '';
    if (!modName.classList.contains('hidden')) {
      document.querySelector('.modal__reg').style.display = '';
      modName.classList.toggle('hidden');
      modConfirmPass.classList.toggle('hidden');
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
  
  // ----------- btn "register" on modal ----------
  modBtnReg.addEventListener('click', () => {
    document.querySelector('.modal__reg').style.display = 'none';
    modName.classList.toggle('hidden');
    modConfirmPass.classList.toggle('hidden');
  });

  // ---------- btn "Enter" ---------
  document.querySelector('.modal__btn').addEventListener('click', (e) => {
    e.preventDefault();
  });
  
  //  ----------- Up -------------
  const elemUp = document.querySelector('.up');
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 1300) {
      elemUp.classList.remove('hidden');
    } else if (window.scrollY <= 1300) {
      elemUp.classList.add('hidden');
    }
  });



  

