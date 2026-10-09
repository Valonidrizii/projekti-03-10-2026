# CodeLab

An Albanian HTML, CSS, and JavaScript cheat sheet with 12 cards, live search,
copy buttons, a saved light/dark theme, and a greeting demo. Built with plain
HTML, CSS, and JavaScript; no dependencies or build step.

## Run locally

From the project folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. Use a local server rather than opening
`index.html` directly, because the page loads `data.json` with `fetch()`.
Press Ctrl+C in the terminal to stop the server.

## Edit the content

All snippets, including the hero preview, live in `data.json`. Each section
has an `id`, a `title`, and a `cards` array; each card has a `title` and a
`snippets` array of strings. Keep section IDs unique and retain `html`, `css`,
and `js` for the navigation links. Add or edit a card there and refresh the page.
Search matches category headings, card titles, and code as you type, ignoring
case and surrounding spaces. Clear the search to restore every card.

## What I learned

- Arrays organize sections, cards, and snippets. `map()` turns their data into
  DOM elements; `filter()` selects matching cards without changing the source.
  `forEach()` adds copy buttons as a side effect.
- JSON stores data as text. `JSON.stringify()` serializes JavaScript values;
  `JSON.parse()` reads JSON text. Here, `response.json()` reads and parses the
  fetched response asynchronously.
- `fetch()` needs an HTTP status check with `response.ok`: a 404 does not
  automatically reject its promise. Loading failures get a visible message.
- `textContent` keeps HTML examples visible as code instead of executing them.
  Delegating copy clicks to the page keeps new cards interactive after filtering.
- Git stages related changes with `git add` and records them with `git commit`.
  A separate commit per feature, explaining why it matters, makes review easier.
  `git status`, `git diff`, and `git log --oneline` help inspect the work.

## Review

Check that all 12 cards load, search for `flex` or `padding`, try an unmatched
query, and clear the field. Copy a snippet after filtering, switch themes and
reload, and submit the greeting form. Check the layout on a narrow screen.
Inspect the feature history with `git log --oneline`.

Reading: [Arrays](https://javascript.info/array),
[Array methods](https://javascript.info/array-methods),
[JSON methods](https://javascript.info/json),
[Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch),
and Pro Git chapters [1: Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
and [2: Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository).
