
let slider = tns({
  container: '.shows__slider',
  items: 6,
  nav: false,
  loop: true,
  rewind: true,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 3
    },
    700: {
      gutter: 30
    },
    900: {
      items: 6
    }
  }
});
