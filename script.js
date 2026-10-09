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

function renderSections(sections) {
  const container = document.getElementById('snippetSections');

  const panels = sections.map((section, sectionIndex) => {
    const panel = document.createElement('section');
    panel.id = section.id;
    panel.className = sectionIndex % 2 === 1 ? 'panel alt' : 'panel';

    const heading = document.createElement('h2');
    heading.textContent = section.title;

    const grid = document.createElement('div');
    grid.className = 'card-grid';
    grid.append(...section.cards.map((card, cardIndex) => {
      const article = document.createElement('article');
      article.className = 'card';

      const title = document.createElement('h3');
      title.textContent = card.title;
      article.append(title, ...card.snippets.map((snippet, snippetIndex) => {
        const code = document.createElement('code');
        code.id = `snippet-${section.id}-${cardIndex}-${snippetIndex}`;
        code.textContent = snippet;
        return code;
      }));

      return article;
    }));

    panel.append(heading, grid);
    return panel;
  });

  container.replaceChildren(...panels);
  addCopyButtons();
}

async function loadSnippets() {
  const status = document.getElementById('snippetStatus');
  const container = document.getElementById('snippetSections');

  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    document.getElementById('heroSnippet').textContent = data.preview;
    renderSections(data.sections);
    status.textContent = '';
  } catch (error) {
    status.textContent =
      'Shembujt nuk u ngarkuan. Hape faqen me server lokal dhe provo përsëri.';
    console.error('Ngarkimi dështoi:', error);
  } finally {
    container.setAttribute('aria-busy', 'false');
  }
}

function addCopyButtons() {
  const cards = document.querySelector('.cards');

  if (!cards) return;

  cards.querySelectorAll('code').forEach((code) => {
    const block = code.closest('pre') || code;
    if (block.nextElementSibling?.matches('button[data-copy]')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = 'Copy';
    button.dataset.copy = code.id;
    button.setAttribute('aria-live', 'polite');

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
  setupCopyButtons();
  loadSnippets();
}

init();
