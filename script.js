function updateYear() {
  const year = document.getElementById('year');

  if (!year) {
    return;
  }

  year.textContent = new Date().getFullYear();
}

function setupMessageButton() {
  const button = document.getElementById('showMessageBtn');
  const messageOutput = document.getElementById('messageOutput');

  if (!button || !messageOutput) {
    return;
  }

  button.addEventListener('click', () => {
    messageOutput.textContent =
      'Përshëndetje! Ky është një projekt HTML, CSS dhe JavaScript.';
  });
}

function setupGreeting() {
  const greetBtn = document.getElementById('greetBtn');
  const nameInput = document.getElementById('nameInput');
  const output = document.getElementById('output');

  if (!greetBtn || !nameInput || !output) {
    return;
  }

  greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();

    if (!name) {
      output.textContent = 'Shkruaj një emër para se të klikosh.';
      return;
    }

    output.textContent =
      `Përshëndetje, ${name}! Tani po punon JavaScript.`;
  });
}

function init() {
  updateYear();
  setupMessageButton();
  setupGreeting();
}

init();