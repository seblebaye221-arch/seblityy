// Highlight section when clicked
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('click', () => {
    section.style.backgroundColor = '#e6f7ff';
    setTimeout(() => {
      section.style.backgroundColor = '';
    }, 1000);
  });
});
