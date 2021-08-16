let navBtn = document.getElementById('navigation');
let myButton = document.getElementById('button');
let myCheckbox = document.getElementById('nav-toggle');
let nav = document.querySelector('.navigation__list');
let checkbox = document.getElementById('nav-toggle');
let body = document.querySelector('body');
let backToTop = document.querySelector('.backToTop');
body.removeChild(backToTop);

for (let item of nav.children) {
  item.addEventListener('click', selectMenuItem);
}

window.onload = () => {
  if (window.visualViewport.width <= 600) {
    navBtn.className = 'navigation__button show';
    myButton.className = 'navigation__button show';
  }
};

window.addEventListener('resize', () => {
  if (window.visualViewport.width <= 600) {
    navBtn.className = 'navigation__button show';
    myButton.className = 'navigation__button show';
  } else {
    navBtn.className = 'navigation__button hide';
    myButton.className = 'navigation__button hide';
  }
});

window.addEventListener('scroll', scrollFunc);

const appearOptions = {
  threshold: 1,
  rootMargin: '0px 0px 25px 0px',
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
      return;
    } else {
      return;
    }
  });
}, appearOptions);

document.querySelectorAll('.on-render').forEach((card) => {
  appearOnScroll.observe(card);
});

function scrollFunc() {
  if (window.visualViewport.width > 600) {
    var y = window.scrollY;
    if (y >= 100) {
      navBtn.className = 'navigation__button show';
      myButton.className = 'navigation__button show';
      body.appendChild(backToTop);
    } else {
      navBtn.className = 'navigation__button hide';
      myButton.className = 'navigation__button hide';
      myCheckbox.checked = false;
      if (body.contains(backToTop)) body.removeChild(backToTop);
    }
  }
}

function selectMenuItem() {
  checkbox.checked = false;
}
