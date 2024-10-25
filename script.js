document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// document.querySelectorAll('.box').forEach(box => {
//   box.addEventListener('click', function () {
//     alert(this.querySelector('h3').textContent + ' clicked!');
//   });
// });

window.addEventListener('resize', () => {
  const panels = document.querySelectorAll(".panel");
  if (window.innerWidth < 768) {
    panels.forEach(panel => {
      panel.style.height = 'auto';  // Adjust height for smaller screens
    });
  }
});