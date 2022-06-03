
// let slider = tns({
//   container: '.shows__slider',
//   items: 6,
//   nav: false,
//   loop: true,
//   center: true,
//   responsive: {
//     640: {
//       edgePadding: 20,
//       gutter: 20,
//       items: 3
//     },
//     700: {
//       gutter: 30
//     },
//     900: {
//       items: 6
//     }
//   }
// });

document.addEventListener('DOMContentLoaded', () => {

  const sliderBox = document.querySelector('.shows__slider'),
        arrowNext = document.querySelector('.arrowNext'),
        links = sliderBox.querySelectorAll('.shows__link');

  arrowNext.addEventListener('click', () => {
    let index;
    links.forEach((item, i) => {
      if(item.classList.contains('shows__link_active')) {
        index = i;
        item.classList.remove('shows__link_active');
      } 
    });
    index++;
    if(index === links.length) {
      index = 0;
      links[index].classList.add('shows__link_active');
    } else {
      links[index].classList.add('shows__link_active');
    }
    
  });
});
