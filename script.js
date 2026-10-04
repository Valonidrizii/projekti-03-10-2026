document.getElementById('showMessageBtn').addEventListener('click', () => {
  alert('Përshëndetje! Ky është një projekt HTML, CSS dhe JavaScript.');
});

const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const output = document.getElementById('output');

const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();

  if (!name) {
    output.textContent = 'Shkruaj një emër para se të klikosh.';
    return;
  }

  output.textContent = `Përshëndetje, ${name}! Tani po punon JavaScript.`;
});
