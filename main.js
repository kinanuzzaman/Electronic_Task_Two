import './style.scss'


const menu = document.querySelector('#menu');
const drawer = document.querySelector('.left-drawer');
menu.addEventListener('click', () => {
  if (drawer.style.display == "none") {
    drawer.style.display = "block";
  } else {
    drawer.style.display = "none";
  }
})

const myFunction = x => {
  if (x.matches) {
    drawer.style.display = "none";
  } else {
    drawer.style.display = "block";
  }
};

const x = window.matchMedia("(max-width: 700px)");
myFunction(x);
x.addEventListener("change", myFunction);
