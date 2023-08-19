//burger menu
const headerContent = document.querySelector('.header__wrapper');

function onBurgerClick() {
  headerContent?.classList.toggle("opened-menu");
  if( headerContent?.classList.contains('opened-menu') ) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
//close menu on navlink click
  let allNavLinks = document.querySelectorAll('.header__menu-link');
  if (allNavLinks) {
    for (let href of allNavLinks) {
      href.addEventListener('click', function (event) {
        document.body.style.overflow = '';
        headerContent?.classList.remove("opened-menu");
      });
    }
  }
