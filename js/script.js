const mobileMenuBtn = document.querySelector('#mobileMenuBtn')
const mobileMenu = document.querySelector('#mobileMenu')
const closeMobileMenu = document.querySelector('#closeMobileMenu')

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-active')
  mobileMenuBtn.setAttribute('aria-expanded', 'true')
})

closeMobileMenu.addEventListener('click',()=>{
  mobileMenu.classList.remove('is-active')
  mobileMenuBtn.setAttribute('aria-expanded', 'false')
})