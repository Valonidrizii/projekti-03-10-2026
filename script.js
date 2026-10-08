function updateYear() {
  const year = document.getElementById('year');

  if (!year) return;

  year.textContent = new Date().getFullYear();
}

function setupMessageButton() {
  const button = document.getElementById('showMessageBtn');
  const output = document.getElementById('messageOutput');

  if (!button || !output) return;

  button.addEventListener('click', () => {
    output.textContent =
      'Përshëndetje! Ky është një projekt HTML, CSS dhe JavaScript.';
  });
}

function setupGreeting() {
  const form = document.getElementById('greetForm');
  const nameInput = document.getElementById('nameInput');
  const output = document.getElementById('output');

  if (!form || !nameInput || !output) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (!name) {
      output.textContent = 'Shkruaj emrin tënd.';
      nameInput.focus();
      return;
    }

    output.textContent =
      `Përshëndetje, ${name}! Tani po punon JavaScript.`;
  });
}

function setupThemeToggle() {
  const button = document.getElementById('themeToggle');
  const html = document.documentElement;

  if (!button) return;

  const savedTheme = localStorage.getItem('theme');
  html.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';

  button.addEventListener('click', () => {
    const newTheme =
      html.dataset.theme === 'dark' ? 'light' : 'dark';

    html.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  });
}

function addCopyButtons() {
  const cards = document.querySelector('.cards');

  if (!cards) return;

  cards.querySelectorAll('code').forEach((code, index) => {
    code.id = `snippet-${index}`;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.dataset.copy = code.id;
    button.setAttribute('aria-live', 'polite');

    const block = code.closest('pre') || code;
    block.after(button);
  });
}

async function copySnippet(button) {
  const code = document.getElementById(button.dataset.copy);

  if (!code) return;

  button.disabled = true;

  try {
    await navigator.clipboard.writeText(code.textContent);
    button.textContent = 'Copied!';
  } catch (error) {
    button.textContent = 'Nuk u kopjua';
    console.error('Kopjimi dështoi:', error);
  }

  setTimeout(() => {
    button.textContent = 'Copy';
    button.disabled = false;
  }, 1500);
}

function setupCopyButtons() {
  const cards = document.querySelector('.cards');

  if (!cards) return;

  cards.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-copy]');

    if (!button || !cards.contains(button)) return;

    copySnippet(button);
  });
}

function init() {
  updateYear();
  setupMessageButton();
  setupGreeting();
  setupThemeToggle();
  addCopyButtons();
  setupCopyButtons();
}

init();