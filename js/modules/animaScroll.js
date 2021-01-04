export default class AnimaScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.addAtivo = this.addAtivo.bind(this)
    this.animaScroll = this.animaScroll.bind(this)
  }
  addEvent() {
    window.addEventListener("scroll", this.animaScroll);
  }

 animaScroll() {
  this.sections.forEach((section) => {
    this.sectionTop = section.getBoundingClientRect().top - this.windowMetade;
    
    this.addAtivo(section)
    
  })
}
  addAtivo(section) {
    if(this.sectionTop < 0) {
      section.classList.add('ativo');
    }
  }
  openSite(section) {
    section.classList.add('ativo');
  }

  init() {
    this.addEvent()
    this.openSite([...this.sections][0])
    console.log()
}


}