
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

document.querySelector('.showsPrev').addEventListener('click', function () {
  slider.goTo('prev')
});
document.querySelector('.showsNext').addEventListener('click', function () {
  slider.goTo('next')
});

document.querySelector('.moviesPrev').addEventListener('click', function () {
  slider2.goTo('prev')
});
document.querySelector('.moviesNext').addEventListener('click', function () {
  slider2.goTo('next')
});



// document.addEventListener('DOMContentLoaded', () => {

//   const sliderBox = document.querySelector('.shows__slider'),
//         arrowNext = document.querySelector('.arrowNext'),
//         links = sliderBox.querySelectorAll('.shows__link');

//   arrowNext.addEventListener('click', () => {
//     let index;
//     links.forEach((item, i) => {
//       if(item.classList.contains('shows__link_active')) {
//         index = i;
//         item.classList.remove('shows__link_active');
//       } 
//     });
//     index++;
//     if(index === links.length) {
//       index = 0;
//       links[index].classList.add('shows__link_active');
//     } else {
//       links[index].classList.add('shows__link_active');
//     }
    
//   });
// });
