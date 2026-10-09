// Komentet // shpjegojnë kodin dhe nuk ekzekutohen nga shfletuesi.
// { dhe } hapin/mbyllin blloqet; ( dhe ) rrethojnë argumentet ose kushtet.
// Një udhëzim mund të vazhdojë në disa rreshta; komenti i tij vendoset sipër.

// Përcakton funksionin që shfaq vitin aktual në fund të faqes.
function updateYear() {
  // Gjen elementin HTML me id="year"; const ruan referencën pa e ricaktuar.
  const year = document.getElementById('year');

  // Nëse elementi mungon, return e ndal funksionin që të shmangë gabimet.
  if (!year) return;

  // Merr vitin nga data e pajisjes dhe e vendos si tekst brenda elementit.
  year.textContent = new Date().getFullYear();
}

// Përgatit butonin që shfaq mesazhin demonstrues.
function setupMessageButton() {
  // Gjen butonin e mesazhit sipas id-së së tij në HTML.
  const button = document.getElementById('showMessageBtn');
  // Gjen paragrafin ku do të shfaqet mesazhi.
  const output = document.getElementById('messageOutput');

  // || do të thotë 'ose': nëse mungon butoni ose paragrafi, ndalet funksioni.
  if (!button || !output) return;

  // Regjistron një funksion që ekzekutohet sa herë klikohet ky buton.
  button.addEventListener('click', () => {
    // Vendos mesazhin demonstrues në paragrafin përkatës.
    output.textContent =
      'Përshëndetje! Ky është një projekt HTML, CSS dhe JavaScript.';
  });
}

// Përgatit formularin që përshëndet përdoruesin me emër.
function setupGreeting() {
  // Gjen formularin e përshëndetjes.
  const form = document.getElementById('greetForm');
  // Gjen fushën ku përdoruesi shkruan emrin.
  const nameInput = document.getElementById('nameInput');
  // Gjen paragrafin ku shfaqet përshëndetja ose kërkesa për emrin.
  const output = document.getElementById('output');

  // Ndal funksionin nëse mungon ndonjëri nga tre elementet e nevojshme.
  if (!form || !nameInput || !output) return;

  // Dëgjon dërgimin e formularit, si me butonin ashtu edhe me tastin Enter.
  form.addEventListener('submit', (event) => {
    // Pengon rifreskimin automatik të faqes gjatë dërgimit të formularit.
    event.preventDefault();

    // Lexon emrin dhe heq hapësirat në fillim e në fund me trim().
    const name = nameInput.value.trim();

    // Kontrollon nëse emri është bosh pasi janë hequr hapësirat.
    if (!name) {
      // I kërkon përdoruesit të shkruajë një emër.
      output.textContent = 'Shkruaj emrin tënd.';
      // Vendos kursorin në fushën e emrit që përdoruesi të shkruajë menjëherë.
      nameInput.focus();
      // Del nga ky funksion pa vazhduar me udhëzimet e tjera.
      return;
    }

    // Shfaq përshëndetjen; ${name} zëvendësohet me emrin e shkruar.
    output.textContent =
      `Përshëndetje, ${name}! Tani po punon JavaScript.`;
  });
}

// Përgatit ndërrimin dhe ruajtjen e temës së çelët ose të errët.
function setupThemeToggle() {
  // Gjen butonin që ndryshon temën.
  const button = document.getElementById('themeToggle');
  // Merr elementin rrënjë <html>, ku ruhet atributi data-theme.
  const html = document.documentElement;

  // Nëse butoni mungon, funksioni ndalet.
  if (!button) return;

  // Lexon zgjedhjen e ruajtur në shfletues; pa zgjedhje kthen null.
  const savedTheme = localStorage.getItem('theme');
  // === krahason saktë; kushti ? A : B zgjedh temën light ose, përndryshe, dark.
  html.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';

  // Regjistron një funksion që ekzekutohet sa herë klikohet ky buton.
  button.addEventListener('click', () => {
    // Përgatit temën e kundërt: nëse tema është dark, zgjedh light; përndryshe dark.
    const newTheme =
      html.dataset.theme === 'dark' ? 'light' : 'dark';

    // Ndryshon data-theme në <html>; CSS-ja përkatëse ndryshon ngjyrat e faqes.
    html.dataset.theme = newTheme;
    // Ruan zgjedhjen në shfletues që të përdoret edhe pas rifreskimit.
    localStorage.setItem('theme', newTheme);
  });
}

// Merr një varg seksionesh dhe krijon elementet e tyre në faqe (DOM).
function renderSections(sections) {
  // Gjen vendin në HTML ku do të vendosen seksionet me karta.
  const container = document.getElementById('snippetSections');

  // map() krijon një varg të ri elementesh; sectionIndex është pozicioni duke nisur nga 0.
  const panels = sections.map((section, sectionIndex) => {
    // Krijon një element <section> në kujtesë; ende nuk është vendosur në faqe.
    const panel = document.createElement('section');
    // Vendos id-në nga JSON-i që lidhjet #html, #css dhe #js të gjejnë seksionin.
    panel.id = section.id;
    // % jep mbetjen e pjesëtimit; seksionet në pozicione tek marrin edhe klasën alt.
    panel.className = sectionIndex % 2 === 1 ? 'panel alt' : 'panel';
    // Fsheh seksionin kur lista e kartave është bosh pas filtrimit.
    panel.hidden = section.cards.length === 0;

    // Krijon titullin e seksionit me elementin <h2>.
    const heading = document.createElement('h2');
    // Vendos titullin e seksionit nga të dhënat si tekst.
    heading.textContent = section.title;

    // Krijon mbajtësin <div> që do të përmbajë kartat.
    const grid = document.createElement('div');
    // Lidh mbajtësin me rregullat CSS që i rreshtojnë kartat në rrjetë.
    grid.className = 'card-grid';
    // map() krijon kartat; ... e shpërndan vargun në argumente të append() që t'i shtojë të gjitha.
    grid.append(...section.cards.map((card, cardIndex) => {
      // Krijon një <article> për një kartë të vetme.
      const article = document.createElement('article');
      // Vendos klasën card që karta të marrë stilin përkatës në CSS.
      article.className = 'card';

      // Krijon titullin <h3> të kartës.
      const title = document.createElement('h3');
      // Vendos tekstin e titullit të kartës nga JSON-i.
      title.textContent = card.title;
      // Shton titullin dhe përdor map() për të krijuar një element për çdo shembull kodi.
      article.append(title, ...card.snippets.map((snippet, snippetIndex) => {
        // Krijon një element <code> për të shfaqur një shembull kodi.
        const code = document.createElement('code');
        // ${...} fut vlera në tekst; kombinimi i seksionit dhe pozicioneve krijon një id unike në këtë renderim.
        code.id = `snippet-${section.id}-${cardIndex}-${snippetIndex}`;
        // Vendos kodin si tekst: shembujt HTML shfaqen pa u interpretuar si elemente.
        code.textContent = snippet;
        // Kthen elementin e kodit si rezultatin e këtij hapi të map().
        return code;
      }));

      // Kthen kartën e përfunduar që map() ta shtojë në vargun e kartave.
      return article;
    }));

    // Vendos titullin dhe rrjetën me karta brenda seksionit.
    panel.append(heading, grid);
    // Kthen seksionin e përfunduar për vargun panels.
    return panel;
  });

  // Zëvendëson seksionet e vjetra me seksionet e reja; ... i kalon si argumente të veçanta.
  container.replaceChildren(...panels);
  // Shton butonat e kopjimit pranë shembujve që sapo u krijuan.
  addCopyButtons();
}

// async lejon përdorimin e await për të pritur ngarkimin e të dhënave.
async function loadSnippets() {
  // Gjen paragrafin që njofton për ngarkimin, rezultatet ose gabimet.
  const status = document.getElementById('snippetStatus');
  // Gjen vendin në HTML ku do të vendosen seksionet me karta.
  const container = document.getElementById('snippetSections');

  // Provon veprimet brenda bllokut; gabimet e hedhura kalojnë te catch.
  try {
    // Kërkon data.json nga i njëjti server dhe pret përgjigjen HTTP.
    const response = await fetch('./data.json');
    // Kontrollon statusin HTTP: ok është true për statuset 200–299.
    if (!response.ok) {
      // Hedh një gabim me numrin e statusit; edhe një 404 duhet trajtuar këtu.
      throw new Error(`HTTP ${response.status}`);
    }

    // Pret leximin e përgjigjes dhe shndërrimin e JSON-it në një objekt JavaScript.
    const data = await response.json();
    // Mbush shembullin në krye të faqes me tekstin preview nga JSON-i.
    document.getElementById('heroSnippet').textContent = data.preview;
    // Kalon seksionet te funksioni që përgatit kërkimin dhe shfaq kartat fillestare.
    setupSearch(data.sections);
  // Kap gabimet e rrjetit, statusit HTTP, leximit të JSON-it ose veprimeve në try.
  } catch (error) {
    // Shfaq një mesazh të kuptueshëm për përdoruesin kur ngarkimi dështon.
    status.textContent =
      'Shembujt nuk u ngarkuan. Hape faqen me server lokal dhe provo përsëri.';
    // Shkruan hollësitë e gabimit në konsolën e shfletuesit për kontroll nga zhvilluesi.
    console.error('Ngarkimi dështoi:', error);
  // Ky bllok ekzekutohet pas try/catch, qoftë kur ngarkimi kalon, qoftë kur dështon.
  } finally {
    // Njofton teknologjitë ndihmëse se procesi i ngarkimit ka përfunduar.
    container.setAttribute('aria-busy', 'false');
  }
}

// Përgatit kërkimin duke ruajtur seksionet origjinale për çdo filtrim të ri.
function setupSearch(sections) {
  // Gjen fushën ku përdoruesi shkruan fjalën e kërkimit.
  const input = document.getElementById('snippetSearch');
  // Gjen paragrafin që njofton për ngarkimin, rezultatet ose gabimet.
  const status = document.getElementById('snippetStatus');
  // reduce() mbledh numrin e kartave të çdo seksioni duke nisur nga 0.
  const total = sections.reduce((count, section) => count + section.cards.length, 0);

  // Përcakton funksionin që filtron dhe rishfaq kartat për tekstin aktual.
  function updateResults() {
    // Lexon kërkimin, heq hapësirat anësore dhe e kthen në shkronja të vogla sipas shqipes.
    const query = input.value.trim().toLocaleLowerCase('sq');
    // map() ndërton një varg seksionesh të filtruar; kllapat ({...}) kthejnë një objekt.
    const filteredSections = sections.map((section) => ({
      // Kopjon fushat e seksionit origjinal; cards më poshtë zëvendësohet vetëm në kopje.
      ...section,
      // filter() mban vetëm kartat për të cilat funksioni kthen true.
      cards: section.cards.filter((card) => {
        // Bashkon titullin e seksionit, titullin e kartës dhe shembujt në një tekst kërkimi.
        const text = [section.title, card.title, ...card.snippets].join(' ');
        // Kontrollon nëse teksti përmban kërkimin; teksti bosh përputhet me çdo kartë.
        return text.toLocaleLowerCase('sq').includes(query);
      }),
    }));
    // Mbledh sa karta mbetën pas filtrimit që të shfaqet numri i rezultateve.
    const count = filteredSections.reduce((sum, section) => sum + section.cards.length, 0);

    // Rindërton seksionet duke përdorur vetëm kartat që kaluan filtrin.
    renderSections(filteredSections);
    // Nëse numri është 0, zgjedh mesazhin pa rezultate; ndryshe shfaq numrin e kartave.
    status.textContent = count === 0
      ? 'Nuk u gjet asnjë shembull. Provo një fjalë tjetër.'
      : `Shfaqen ${count} nga ${total} karta.`;
  }

  // Aktivizon fushën e kërkimit pasi të dhënat janë lexuar.
  input.disabled = false;
  // Thërret updateResults pas çdo ndryshimi të tekstit, përfshirë shkrimin, ngjitjen dhe fshirjen.
  input.addEventListener('input', updateResults);
  // Shfaq rezultatet fillestare pa pritur që përdoruesi të shkruajë.
  updateResults();
}

// Shton një buton kopjimi për çdo element <code>, pa dyfishuar butonat ekzistues.
function addCopyButtons() {
  // Gjen elementin e parë me klasën cards; në këtë projekt është <body>.
  const cards = document.querySelector('.cards');

  // Ndal funksionin nëse mbajtësi i shembujve nuk gjendet.
  if (!cards) return;

  // Gjen të gjithë elementet <code>; forEach() kryen veprimin për secilin, pa kthyer varg të ri.
  cards.querySelectorAll('code').forEach((code) => {
    // Përdor <pre>-në më të afërt nëse ekziston; përndryshe përdor vetë <code>.
    const block = code.closest('pre') || code;
    // ?. kontrollon vetëm kur ka element pasues; nëse ai është buton kopjimi, kalon te kodi tjetër.
    if (block.nextElementSibling?.matches('button[data-copy]')) return;

    // Krijon një buton të ri në kujtesë.
    const button = document.createElement('button');
    // E bën buton të zakonshëm që të mos dërgojë ndonjë formular.
    button.type = 'button';
    // Vendos emrin e klasës së butonit të kopjimit.
    button.className = 'copy-button';
    // Vendos ose rikthen tekstin fillestar të butonit: Copy.
    button.textContent = 'Copy';
    // Ruan id-në e kodit në data-copy që të dihet cili shembull duhet kopjuar.
    button.dataset.copy = code.id;
    // Lejon lexuesit e ekranit të njoftojnë ndryshimin e tekstit pa ndërprerje urgjente.
    button.setAttribute('aria-live', 'polite');

    // Vendos butonin menjëherë pas bllokut të kodit në faqe.
    block.after(button);
  });
}

// Përcakton funksionin asinkron që kopjon kodin e lidhur me butonin e klikuar.
async function copySnippet(button) {
  // Lexon data-copy të butonit dhe gjen elementin e kodit me atë id.
  const code = document.getElementById(button.dataset.copy);

  // Ndal kopjimin nëse elementi i kodit nuk ekziston më.
  if (!code) return;

  // Çaktivizon përkohësisht butonin që të mos klikohet përsëri gjatë kopjimit.
  button.disabled = true;

  // Provon veprimet brenda bllokut; gabimet e hedhura kalojnë te catch.
  try {
    // Pret kopjimin e tekstit në kujtesën e kopjimit; kërkon lejen/kushtet e shfletuesit.
    await navigator.clipboard.writeText(code.textContent);
    // Njofton se teksti u kopjua me sukses.
    button.textContent = 'Copied!';
  // Kap gabimet e rrjetit, statusit HTTP, leximit të JSON-it ose veprimeve në try.
  } catch (error) {
    // Njofton se kopjimi dështoi, për shembull kur shfletuesi e pengon.
    button.textContent = 'Nuk u kopjua';
    // Shënon hollësitë e gabimit të kopjimit në konsolë.
    console.error('Kopjimi dështoi:', error);
  }

  // Planifikon rikthimin e gjendjes së butonit pas një vonese.
  setTimeout(() => {
    // Vendos ose rikthen tekstin fillestar të butonit: Copy.
    button.textContent = 'Copy';
    // Aktivizon sërish butonin që shembulli të mund të kopjohet përsëri.
    button.disabled = false;
  // 1500 milisekonda janë 1,5 sekonda: kjo është vonesa e planifikuar.
  }, 1500);
}

// Përgatit një dëgjues të përbashkët klikimesh edhe për butonat që krijohen më vonë.
function setupCopyButtons() {
  // Gjen elementin e parë me klasën cards; në këtë projekt është <body>.
  const cards = document.querySelector('.cards');

  // Ndal funksionin nëse mbajtësi i shembujve nuk gjendet.
  if (!cards) return;

  // Dëgjon klikimet që arrijnë te <body>, përfshirë ato në butonat brenda tij.
  cards.addEventListener('click', (event) => {
    // Nga elementi i klikuar kërkon butonin më të afërt që ka atributin data-copy.
    const button = event.target.closest('button[data-copy]');

    // Injoron klikimet që nuk vijnë nga një buton kopjimi brenda mbajtësit.
    if (!button || !cards.contains(button)) return;

    // Nis kopjimin e shembullit që i përket butonit të gjetur.
    copySnippet(button);
  });
}

// Mbledh hapat që nisin funksionet e faqes.
function init() {
  // Shfaq vitin aktual në fund të faqes.
  updateYear();
  // Aktivizon butonin e mesazhit demonstrues.
  setupMessageButton();
  // Aktivizon formularin e përshëndetjes.
  setupGreeting();
  // Lexon temën e ruajtur dhe aktivizon butonin e ndërrimit.
  setupThemeToggle();
  // Aktivizon dëgjuesin e kopjimit para krijimit të kartave.
  setupCopyButtons();
  // Nis ngarkimin e JSON-it, që më pas përgatit kërkimin dhe kartat.
  loadSnippets();
}

// Thërret funksionin fillestar sapo shfletuesi ekzekuton këtë skedar.
init();
