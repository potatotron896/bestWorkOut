import AnimaScroll from './modules/animaScroll.js'
import MenuMobile from './modules/menu-mobile.js'
import ScrollToSection from './modules/scrolltosection.js'


const animaScroll = new AnimaScroll('.js-scroll')
animaScroll.init();


const menuMobile = new MenuMobile('.menu-mobile-button', '.menu-nav ul')
menuMobile.init();

const scrollToSection = new ScrollToSection('a[href^="#"]', '.menu-nav ul', '.menu-mobile-button')
scrollToSection.init();