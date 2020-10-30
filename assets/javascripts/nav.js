let scrollpos = window.scrollY
const nav = document.querySelector("nav")
const header = document.querySelector("header")
const nav_height = nav.offsetHeight

const add_class_on_scroll = () => nav.classList.add("shrink-nav")
const remove_class_on_scroll = () => nav.classList.remove("shrink-nav")

const remove_class_top = () => nav.classList.remove("nav-top")
const add_class_top = () => nav.classList.add("nav-top")



window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= nav_height) {
    add_class_on_scroll()
    remove_class_top()
   }
  else {
    remove_class_on_scroll()
    add_class_top()
  }
})
