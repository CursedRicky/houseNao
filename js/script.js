const menu = document.getElementById('menu')

const showMenu = () => {
  menu.classList.toggle('hidden')
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('eroNascosto')
    }
  });
});

const elementoNascosto = document.querySelectorAll('.nascosto');
elementoNascosto.forEach((el) => observer.observe(el));