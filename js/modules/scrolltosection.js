import MenuMobile from './menu-mobile.js'
const mobile = new MenuMobile

// Scroll to section
export default class ScrollToSection {
  constructor(links,menuMobile,mobileButton) {
    this.linksInternos = document.querySelectorAll(links);
    this.menuMobile = document.querySelector(menuMobile)
    this.menuMobileButton = document.querySelector(mobileButton)

    this.getTopo = this.getTopo.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
    // this.closeMenu = this.closeMenu.bind(this)
  }

  addEventScroll() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.getTopo)
    });
  }

    getTopo(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    this.topo = topo;
    return this.scrollToTop(topo)
}
  scrollToTop(topo){
    window.scrollTo({ top: topo, behavior: 'smooth' })
    this.closeMenu();
  }

  // closeMenu(menuMobile){
  //   if(this.menuMobile.classList.contains('ativo'))
  //     this.menuMobile.classList.toggle('ativo')
  //     this.menuMobileButton.classList.toggle('change')
  // }

  init() {
    this.addEventScroll();
  }
}


// FUNCTION MENU MOBILE

