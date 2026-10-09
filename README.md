# CodeLab

## Shqip

CodeLab është një përmbledhje mësimore në shqip me shembuj HTML, CSS dhe
JavaScript. Ka 12 karta, kërkim gjatë shkrimit, butona kopjimi, temë të
çelët/errët që ruhet dhe një formular përshëndetjeje. Nuk kërkon biblioteka
ose proces ndërtimi.

### Si ta hapësh

Hap terminalin në dosjen e projektit dhe ekzekuto:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Hap <http://127.0.0.1:8000> në shfletues. Për ta ndalur serverin, shtyp
Ctrl+C në terminal.

### Pse Python 3?

Python përdoret këtu vetëm për të nisur një server lokal që i dërgon
skedarët shfletuesit me HTTP. Vetë faqja punon me HTML, CSS dhe JavaScript.
Kur hap `index.html` me dy klikime, adresa përdor `file://`; shfletuesi
zakonisht e bllokon leximin e `data.json` me `fetch()` në atë mënyrë.
Serveri lokal e hap projektin me `http://`, që kërkesa të funksionojë.

- `python3` nis Python-in e versionit 3, që është i instaluar në këtë pajisje.
- `-m http.server` ekzekuton modulin e serverit të përfshirë me Python-in.
- `8000` është porta: numri në fund të adresës ku hapet faqja.
- `--bind 127.0.0.1` e bën serverin të dëgjojë vetëm në pajisjen tënde.

Mund të përdorësh edhe një server tjetër lokal, për shembull **Live Server**
në VS Code, nëse e ke të instaluar. Python nuk është kusht i vetë projektit.

### Çfarë bën secili skedar?

| Skedari | Roli |
| --- | --- |
| `index.html` | Struktura e faqes: navigimi, titujt, kërkimi dhe formulari. |
| `styles.css` | Pamja: ngjyrat, hapësirat, kartat dhe përshtatja për ekranet. |
| `script.js` | Sjellja: leximi i JSON-it, krijimi i kartave, filtrimi dhe butonat. |
| `data.json` | Të dhënat: titujt dhe të gjithë shembujt e kodit. |
| `.gitignore` | Rregullat që i tregojnë Git-it cilët skedarë të rinj të injorojë. |
| `README.md` | Udhëzuesi i projektit, i shkruar në Markdown. |
| `favicon.svg` | Ikona e vogël në skedën e shfletuesit. |

**`data.json`** është skedar teksti në formatin JSON, jo bazë të dhënash.
JavaScript e merr me `fetch()` dhe `response.json()` e kthen në objekt.
`preview` përmban kodin e hyrjes; `sections` është vargu i seksioneve.
Çdo seksion ka `id`, `title` dhe vargun `cards`; çdo kartë ka `title` dhe
vargun `snippets`, ku ruhen shembujt si tekste. `[]` shënon varg, ndërsa
`{}` shënon objekt. `\n` brenda tekstit do të thotë rresht i ri dhe `\"`
përfaqëson thonjëz brenda tekstit.

Për të shtuar një kartë, shtoje te `cards` në seksionin përkatës dhe rifresko
faqen. Mbaji id-të unike dhe ruaj `html`, `css`, `js` për lidhjet e navigimit.
JSON kërkon thonjëza të dyfishta, nuk lejon presje pas elementit të fundit
dhe **nuk lejon komente**; prandaj shpjegimi i tij është këtu.

**`.gitignore`** aktualisht injoron `.DS_Store`, një skedar që krijon macOS
për cilësimet e dosjeve. Nuk e fshin atë nga pajisja dhe nuk ndalon gjurmimin
e një skedari që është ruajtur më parë në Git. Rreshtat që nisin me `#` janë
komente shpjeguese.

**`README.md`** është dokumenti që i tregon lexuesit çfarë është projekti,
si hapet dhe çfarë u mësua. `.md` do të thotë Markdown: tekst i thjeshtë
me shenja formatimi si `#` për tituj dhe `-` për lista. Nuk ekzekutohet nga faqja.

### Çfarë mësova dhe si ta kontrolloj

- `map()` krijon elementet HTML nga të dhënat; `filter()` zgjedh kartat që
  përputhen pa ndryshuar vargun origjinal; `forEach()` shton butonat e kopjimit.
- `JSON.stringify()` shndërron vlera JavaScript në tekst JSON;
  `JSON.parse()` bën të kundërtën. Këtu `response.json()` lexon dhe përpunon
  përgjigjen në mënyrë asinkrone.
- `fetch()` pret përgjigjen e serverit. Kontrolloj `response.ok`, sepse
  një përgjigje 404 nuk e refuzon vetvetiu premtimin e `fetch()`.
- `textContent` shfaq shembujt HTML si tekst. Një dëgjues i përbashkët i
  klikimeve e mban kopjimin funksional edhe pas rikrijimit të kartave.
- `git add` përgatit ndryshimet; `git commit` i ruan në historik.
  `git status`, `git diff` dhe `git log --oneline` ndihmojnë në kontrollin e tyre.

Në kod, komentet shqip shpjegojnë udhëzimet dhe atributet. Rreshtat që vetëm
mbyllin kllapat i përkasin bllokut të shpjeguar sipër. Komentet nuk ekzekutohen.
Kërko `flex` ose `padding`, provo një fjalë pa rezultate dhe fshije kërkimin.
Provo kopjimin pas filtrimit, ruajtjen e temës pas rifreskimit, formularin
dhe pamjen në ekran të ngushtë. Burimet e leximit janë në fund të dokumentit.

## English

An Albanian HTML, CSS, and JavaScript cheat sheet with 12 cards, live search,
copy buttons, a saved light/dark theme, and a greeting demo. Built with plain
HTML, CSS, and JavaScript; no dependencies or build step.

### Run locally

From the project folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. Use a local server rather than opening
`index.html` directly, because the page loads `data.json` with `fetch()`.
Press Ctrl+C in the terminal to stop the server.

Python 3 only serves the files over HTTP so `fetch()` can load the JSON.
`-m http.server` runs Python's included server module, `8000` is the port,
and `--bind 127.0.0.1` limits it to this device. Another local HTTP server
can serve the same project; Python is not part of the application itself.

### Project files

- `index.html`, `styles.css`, and `script.js` define structure, appearance,
  and behavior. Albanian comments explain their statements and attributes.
- `data.json` is a JSON text file containing the preview and card data.
  JSON does not support comments, so its structure is explained here.
- `.gitignore` tells Git to ignore matching untracked files. Its `.DS_Store`
  rule excludes macOS folder metadata without deleting the file.
- `README.md` is the project guide in Markdown, not executable page code.
- `favicon.svg` is the browser tab icon.

### Edit the content

All snippets, including the hero preview, live in `data.json`. Each section
has an `id`, a `title`, and a `cards` array; each card has a `title` and a
`snippets` array of strings. Keep section IDs unique and retain `html`, `css`,
and `js` for the navigation links. Add or edit a card there and refresh the page.
Search matches category headings, card titles, and code as you type, ignoring
case and surrounding spaces. Clear the search to restore every card.

### What I learned

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

### Review

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
