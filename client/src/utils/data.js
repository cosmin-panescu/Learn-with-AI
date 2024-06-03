export const html = [
  {
    question:
      "Care dintre tag-urile HTML menționate mai jos este folosit pentru cel mai mare titlu (heading)?",
    option1: "<title>",
    option2: "<h1>",
    option3: "<heading>",
    option4: "<h6>",
    answer: 2,
    explanation: `
    - Tag-ul <h1> este utilizat pentru a defini cel mai important titlu dintr-o pagină web.\n- De obicei, textul afișat cu <h1> este ilustrat cu o dimensiune mai mare și cu un stil mai pronunțat decât alt text de pe pagină, indicând importanța sa.\n- De asemenea, motoarele de căutare acordă o atenție sporită textului dintr-un tag <h1>, astfel încât este recomandat să fie folosit cu atenție și să conțină cuvinte cheie relevante pentru conținutul paginii.`,
  },
  {
    question: "Ce tag-uri HTML sunt folosite pentru a crea meniul drop-down?",
    option1: "<dropdown>, <item>",
    option2: "<select>, <option>",
    option3: "<dropdown>, <option>",
    option4: "<list>, <item>",
    answer: 2,
    explanation: `
    - Pentru a crea un meniu dropdown, tagurile principale utilizate sunt <select> și <option>.\n- Tag-ul <select> definește un meniu de selecție, iar în interiorul acestuia sunt plasate tagurile <option>.\n- Fiecare tag <option> reprezintă o opțiune din meniul dropdown și poate fi selectată de utilizator.\n- Împreună, aceste taguri creează o interfață de selecție convenabilă pentru utilizatori, cu opțiunea de a alege dintr-o listă predefinită de valori.
    `,
  },
  {
    question: "Ce tag HTML5 nu exista?",
    option1: "aside",
    option2: "footer",
    option3: "main",
    option4: "container",
    answer: 4,
    explanation: `
    - Termenul "container" nu reprezintă un tag propriu-zis, ci mai degrabă este folosit pentru a descrie un element sau o secțiune care încadrează și organizează conținutul.\n- De exemplu, tagurile <div> sau <section> pot fi considerate containere în HTML deoarece sunt utilizate pentru a grupa și organiza alte elemente sau conținut în interiorul lor.\n- Deși termenul "container" nu este un element HTML în sine, este adesea folosit pentru a indica un element care are rolul de a conține și structura alte elemente.
    `,
  },
  {
    question: "Cum declari un link pentru o adresa de email?",
    option1: `<a href="email:user@email.com"> user@email.com </a>`,
    option2: `<a href="mailto="user@email.com"> user@email.com </a>`,
    option3: `<a href="email-user@email.com"> user@email.com </a>`,
    option4: `<a href="user@email.com>" user@email.com </a>`,
    answer: 2,
    explanation: `
    - Pentru a declara un link către o adresă de email în HTML, folosești tag-ul <a> împreună cu atributul href.\n- În loc să furnizezi o adresă URL ca valoare a atributului href, vei furniza adresa de email folosind prefixul "mailto:".\n- Astfel, atunci când utilizatorii dau clic pe link, programul implicit de email al utilizatorului va fi deschis, iar adresa de email va fi pre-populată în câmpul "To".
    `,
  },
  {
    question: "De la ce vine HTML?",
    option1: "Hyper Text Markup Language",
    option2: "Hyperlinks and Text Markup Language",
    option3: "Home Tool Markul Language",
    option4: "Hyper Tool Markul Language",
    answer: 1,
    explanation: `
    - HTML este acronimul pentru "HyperText Markup Language".\n- A fost creat în 1989 de către cercetătorul britanic Tim Berners-Lee, care a lucrat la CERN (Organizația Europeană pentru Cercetare Nucleară).\n- HTML a fost conceput ca un limbaj simplu pentru a permite cercetătorilor să împărtășească documente între ei prin intermediul unei rețele informatice numite "World Wide Web" (www).\n- De-a lungul timpului, HTML a evoluat și a devenit unul dintre limbajele de bază pentru crearea și structurarea paginilor web.
    `,
  },
  {
    question: "Ce tag-uri nu au tag de inchidere in HTML?",
    option1: "input, p, option",
    option2: "p, img, hr",
    option3: "input, img, hr",
    option4: "aside, img, option",
    answer: 3,
    explanation: `
    - Există câteva taguri care nu necesită un tag de închidere, fiind cunoscute sub denumirea de "self-closing tags".\n- Printre aceste taguri se numără: img, br, input, hr, meta.
    `,
  },
  {
    question: "Care dintre tag-uri sunt inline?",
    option1: "span, a",
    option2: "div, article",
    option3: "span, div",
    option4: "img, div",
    answer: 1,
    explanation: `
    - Tagurile "inline" sunt acele taguri care nu determină o schimbare a structurii blocului de text în care sunt plasate.\n- Exemple de taguri inline: <span>, <a>, <strong>, <em>, <img>, <input>, <br> și <i>.\n- Aceste taguri sunt adesea utilizate pentru a formata sau marca porțiuni specifice de text sau pentru a insera elemente mici de conținut, cum ar fi link-uri, imagini sau butoane, în cadrul altor elemente HTML.\n- Spre deosebire de tagurile "block", care ocupă întreaga lățime disponibilă, tagurile "inline" rămân în același rând și se adaptează la conținutul pe care îl conțin.
    `,
  },
  {
    question:
      "Care este modalitatea corecta de a face referire la un style sheet extern?",
    option1: "<style src='mystyle.css'>",
    option2: "<stylesheet> mystyle.css </stylesheet>",
    option3: "<link rel='stylesheet' type='text/css' href='mystyle.css'>",
    option4: "<link rel='stylesheet.css' type='stylesheet'>",
    answer: 4,
    explanation: `
    - Modalitatea corectă de a face referire la un style sheet extern în HTML este prin adăugarea unui element <link> în secțiunea <head> a documentului HTML.\n- Atributul href al tagului <link> trebuie să indice calea către fișierul CSS extern.
    `,
  },
  {
    question:
      "Care este elementul HTML corect pentru a insera o linie pauza (line break)?",
    option1: "<br>",
    option2: "<lb>",
    option3: "<break>",
    option4: "<space>",
    answer: 1,
    explanation: `
    - Pentru a insera o linie pauză este utilizat tag-ul <br>.\n- Acesta este un tag auto-închis (self-closing), ceea ce înseamnă că nu are nevoie de un tag de închidere separat.\n- Atunci când este folosit, <br> determină o întrerupere a liniei curente și continuarea textului pe o nouă linie în interiorul elementului în care este plasat.
    `,
  },
  {
    question: "Cum adaugi culoare de fundal in HTML?",
    option1: "<body style='background-color: yellow;'>",
    option2: "<body bg='yellow'>",
    option3: "<background> yellow </background>",
    option4: "<background style='yellow'>",
    answer: 1,
    explanation: `
    - Pentru a adăuga culoare de fundal în HTML, poți folosi atributul style al elementului <body>, care îți permite să aplici stiluri CSS direct (in HTML) pe întregul fundal al paginii.\n- Atributul style acceptă valori CSS, inclusiv culori.
    `,
  },
  {
    question: "Cum poti deschide un link intr-un tab/fereastra noua?",
    option1: "<a href='url' new>",
    option2: "<a href='url' target='new'>",
    option3: "<a href='url' target='_blank'>",
    option4: "<a link='url' target='new tab'>",
    answer: 3,
    explanation: `
    - Atunci când creezi un link către altă pagină web sau resursă, poți utiliza atributul target="_blank" pentru a specifica browserului să deschidă link-ul într-un tab sau fereastră nouă, în loc să înlocuiască pagina curentă.\n- Acest lucru oferă utilizatorului o experiență mai convenabilă, deoarece le permite să revină la pagina originală mai târziu, fără a pierde contextul navigării lor anterioare.
    `,
  },
  {
    question: "Cum poti crea o lista numerotata?",
    option1: "<list>",
    option2: "<nl>",
    option3: "<ol>",
    option4: "<ul>",
    answer: 3,
    explanation: `
    - Pentru a crea o listă numerotată în HTML, folosești elementul <ol>, care este abrevierea de la "ordered list" (listă ordonată).\n- În interiorul acestui element, poți adăuga elemente <li> pentru a reprezenta fiecare punct din listă.\n- Browserul va numerota automat aceste elemente în ordine crescătoare.
    `,
  },
  {
    question: "Cum poti crea o lista neordonată (cu buline)?",
    option1: "<list>",
    option2: "<nl>",
    option3: "<ol>",
    option4: "<ul>",
    answer: 4,
    explanation: `
    - Pentru a crea o listă neordonată, adică o listă cu buline sau alti marcatori în loc de numere, poți folosi elementul <ul>, care este abrevierea de la "unordered list" (listă neordonată).\n- În interiorul acestui element poți adăuga elemente <li> pentru a reprezenta fiecare punct din listă.\n- Browserul va afișa automat marcatorii (de obicei buline) în fața fiecărui element din listă.
    `,
  },
  {
    question: "Cum se poate crea un input de tip text?",
    option1: "<input type='textfield'>",
    option2: "<textinput>",
    option3: "<textinput type='text'>",
    option4: "<input type='text'>",
    answer: 4,
    explanation: `
    - Pentru a crea un input de tip text în HTML, folosești elementul <input> cu atributul type="text".\n- type="text" specifică că inputul va fi un câmp de introducere de tip text.\n- Pe langa valoarea 'text' a atributului 'type', mai avem: password, email, number, date, checkbox, radio, file, submit.
    `,
  },
  {
    question:
      "<iframe> este utilizat pentru a afisa o pagina web in interiorul altei pagini web?",
    option1: "Adevarat",
    option2: "Fals",
    option3: "Nu exista <iframe>",
    option4: "Nu se stie sigur",
    answer: 1,
    explanation: `
    - Elementul <iframe> în HTML este folosit pentru a încorpora o altă pagină web în cadrul paginii curente.\n- Este util pentru afișarea conținutului de la alte site-uri web sau pentru încorporarea unor elemente web externe, cum ar fi hărți, videoclipuri sau alte aplicații web.
    `,
  },
  {
    question: "In HTML, comentariile incp cu <!-- si se termina cu -->",
    option1: "Adevarat",
    option2: "Fals",
    option3: "In HTML nu exista comentarii",
    option4: "Nu se poate spune precis",
    answer: 1,
    explanation: `
    - În HTML, comentariile sunt utilizate pentru a adăuga note sau explicații în codul sursă, care nu sunt afișate în cadrul paginii web vizibile pentru utilizatori.\n- Comentariile în HTML sunt delimitate de <!-- pentru început și --> pentru sfârșit.\n- Orice text aflat între aceste delimitatoare este tratat ca un comentariu și este ignorat de către browser în momentul afișării paginii web.
    `,
  },
  {
    question: "Care este scopul meta tag-ului 'viewport' in HTML?",
    option1: "Specifica tipul caracterelor din document",
    option2: "Seteaza culoarea de fundal a paginii web",
    option3: "Defineste zona vizibila a paginii web pe diferite device-uri",
    option4: "Include librarii JavaScript externe",
    answer: 3,
    explanation: `
    - Tag-ul meta 'viewport' este folosit in HTML pentru a defini zona vizibila a paginii web pe diferite dispozitive.
    - Astfel, ofera control dezvoltatorilor asupra dimensiunii initiale, latimii si layout-ului continutului de pe pagina web, pentru o vizualizare optima a acesteia.
    `,
  },
  {
    question:
      "Ce atribut HTML specifica un text alternativ pentru o imagine, atunci cand aceasta nu poate fi afisata?",
    option1: "alt",
    option2: "longdesc",
    option3: "alt-text",
    option4: "title",
    answer: 1,
    explanation: `
    - Atributul care specifică un text alternativ pentru o imagine atunci când aceasta nu poate fi afișată este 'alt'.\n- Acest atribut este folosit în tag-ul <img> și permite furnizarea unei descrieri textuale a imaginii, care va fi afișată în locul imaginii (în cazul în care aceasta nu poate fi încărcată sau atunci când utilizatorul utilizează un browser care nu suportă imagini).
    `,
  },
  {
    question: "Ce doctype este corect pentru HTML5?",
    option1: "<!DOCTYPE html>",
    option2: "<!DOCTYPE HTML5>",
    option3: "<!DOCTYPE HTML5 PUBLIC>",
    option4: "<!DOCTYPE new version HTML5>",
    answer: 2,
    explanation: `
    - Acesta specifică faptul că documentul este scris în conformitate cu standardul HTML5.\n- Este suficient a indica browserului că paginile web trebuie să fie interpretate folosind specificațiile HTML5.\n- Este important să incluzi acest doctype la începutul documentului HTML pentru a asigura interpretarea corectă a codului HTML în toate browserele moderne.
    `,
  },
  {
    question:
      "Ce element este utilizat pentru a specifica subsolul (footer) unui document?",
    option1: "<section>",
    option2: "<end>",
    option3: "<bottom>",
    option4: "<footer>",
    answer: 4,
    explanation: `
    - Elementul <footer> în HTML este utilizat pentru a defini secțiunea de subsol (footer) a unei pagini web.\n- De obicei, acesta conține informații de contact, linkuri utile, drepturi de autor sau alte detalii de fine pagină.
    `,
  },
  {
    question: "Elementul <canvas> este utilizat pentru a:",
    option1: "Desena grafici",
    option2: "Manipula date in MySQL",
    option3: "Afisa date din baza de date",
    option4: "Crea elemente video sau audio",
    answer: 1,
    explanation: `
    - Elementul <canvas> în HTML este utilizat pentru a desena grafice, imagini și alte grafice pe o pagină web.\n- Acesta oferă un spațiu de lucru pentru a desena forme, linii, texte, imagini și alte grafice în mod dinamic.
    `,
  },
  {
    question:
      "Ce atribut este utilizat pentru a specifica faptul ca un camp dintr-un input este obligatoriu de completat?",
    option1: "formvalidate",
    option2: "required",
    option3: "validate",
    option4: "placeholder",
    answer: 2,
    explanation: `
    - Atributul required în HTML este utilizat în cadrul elementelor de formular (input) pentru a specifica că un anumit câmp trebuie completat de către utilizator înainte ca formularul să poată fi trimis.\n- Atunci când este adăugat la un element de formular, acesta indică faptul că introducerea unei valori în acel câmp este obligatorie.\n- Dacă acest câmp este lăsat necompletat și utilizatorul încearcă să trimită formularul, browserul va afișa un mesaj de eroare și nu va permite trimiterea formularului până când câmpul nu este completat.
    `,
  },
  {
    question: "Ce element HTML defineste link-uri de nagivare?",
    option1: "<navigate>",
    option2: "<navigation>",
    option3: "<nav>",
    option4: "<links>",
    answer: 3,
    explanation: `
    - Elementul <nav> în HTML este folosit pentru a defini o secțiune de navigare în cadrul unei pagini web.\n- Acesta este utilizat pentru a grupa linkuri sau alte elemente de navigare care îndrumă utilizatorii către alte pagini sau secțiuni ale paginii curente.\n- De obicei, secțiunea de navigare este plasată în partea de sus a paginii sau într-o parte laterală a acesteia și poate conține linkuri către pagini principale, meniuri drop-down, linkuri către secțiuni ale paginii sau alte elemente de navigare.
    `,
  },
  {
    question: "Ce defineste elementul <aside>?",
    option1: "O lista afisata in partea stanga a paginii",
    option2:
      "Setul de caractere ASCII, astfel incat sa se realizeze legatura intre computere si internet",
    option3: "Continut in partea laterala a unei pagini web",
    option4: "<aside> nu exista in HTML",
    answer: 3,
    explanation: `
    - Elementul <aside> în HTML este folosit pentru a defini o secțiune laterală, dar care este în mod tradițional considerată secundară sau suplimentară.\n- Această secțiune poate conține informații complementare, linkuri, reclame sau alte elemente care nu sunt esențiale pentru înțelegerea conținutului principal al paginii.
    `,
  },
  {
    question: "Documentele HTML sunt salvate cu extensia:",
    option1: ".html",
    option2: ".htm",
    option3: ".web",
    option4: ".htl",
    answer: 1,
    explanation: `
    - Extensia comună pentru fișierele HTML este .html.\n- Acesta este standardul pentru fișierele care conțin codul sursă al paginilor web scrise în limbajul de marcare HyperText Markup Language (HTML).\n- Atunci când creezi sau salvezi un fișier HTML, este recomandat să îi atribui această extensie pentru a indica că este vorba despre un fișier de tip HTML.\n- De exemplu, un fișier HTML ar putea fi numit pagina.html.
    `,
  },
  {
    question: "Care este utilizarea lui <div>?",
    option1: "Inlocuieste paragrafe de text",
    option2: "Imparte paragrafele de text",
    option3: "Ofera spatiu intre tabele",
    option4: "Imparte/Structureaza documentul",
    answer: 4,
    explanation: `
    - Acesta este un container bloc fără nicio semnificație semantică specifică, ceea ce înseamnă că este folosit pentru a organiza și a structura alte elemente HTML, fără a adăuga vreo informație semnificativă în site.
    `,
  },
  {
    question: "La ce sunt utilizate tag-urile meta?",
    option1:
      "Pentru a oferi informatii relevante browser-ului si motoarelor de cautare",
    option2: "Pentru a ofer informatii relevante pentru browser",
    option3: "Pentru a oferi informatii motoarelor de cautare",
    option4: "Pentru a stoca informatii despre link-uri externe",
    answer: 1,
    explanation: `
    - Tagurile <meta> în HTML sunt utilizate pentru a furniza metadate suplimentare despre documentul HTML.\n- Aceste metadate nu sunt afișate pe pagină, dar sunt folosite de browsere, motoarele de căutare și alte servicii web pentru a înțelege și a indexa conținutul paginii.
    `,
  },
  {
    question: "Tag-urile <meta> nu pot fi definite in tag-ul <head>",
    option1: "Fals",
    option2: "Adevarat",
    option3: "Tag-urile meta nu legatura cu dezvoltarea web",
    option4: "Se pot folosi oriunde",
    answer: 1,
    explanation: `
    - Tagurile <meta> sunt definite în secțiunea <head> a documentului HTML.\n- Deoarece metadatele nu sunt afișate pe pagină, ele sunt adesea plasate în secțiunea <head>, unde sunt accesibile pentru browsere, motoare de căutare și alte servicii web care analizează conținutul paginii.\n- Este important să plasezi tagurile <meta> în interiorul secțiunii <head> pentru a asigura că sunt interpretate corect de către browsere și alte agenții care prelucrează paginile web.
    `,
  },
  {
    question: "Cate tag-uri pentru titluri (heading) exista in HTML?",
    option1: "3",
    option2: "5",
    option3: "3",
    option4: "6",
    answer: 4,
    explanation: `
    - Tagurile <h1> până la <h6> sunt denumite "heading" sau "titluri" în HTML și sunt utilizate pentru a defini titlurile și subtitlurile unei pagini web sau ale unor secțiuni specifice.\n- Aceste taguri sunt folosite pentru a structura și organiza ierarhic conținutul unei pagini, cu <h1> reprezentând cel mai important titlu și <h6> fiind cel mai puțin important titlu.
    `,
  },
  {
    question: "Paginile create in HTML se mai numesc si:",
    option1: "Web Page",
    option2: "Server Page",
    option3: "Media Page",
    option4: "Niciun raspuns din cele de mai sus",
    answer: 1,
    explanation: `
    - Paginile create în HTML sunt numite și pagini web.\n- HTML (HyperText Markup Language) este limbajul de marcare standard folosit pentru a crea pagini web.\n- Atunci când creezi un document HTML și îl publici pe internet, acesta devine o pagină web accesibilă pentru utilizatori pe web.\n- O pagină web poate conține diverse tipuri de conținut, inclusiv text, imagini, videoclipuri, formulare și multe altele, toate structurate și formatate utilizând HTML.
    `,
  },
  {
    question: "Ce tehnologie este folosita pentru a stiliza paginile HTML?",
    option1: "JavaScript",
    option2: "CSS",
    option3: "PHP",
    option4: "XML",
    answer: 2,
    explanation: `
    - Cascading Style Sheets (CSS) este un limbaj de stilizare folosit pentru a formata și a stiliza aspectul și prezentarea paginilor web create în HTML și alte limbaje de marcare.\n- CSS oferă o serie de reguli și proprietăți care permit controlul precis al aspectului elementelor HTML, cum ar fi fonturile, culorile, dimensiunile, spațiile între elemente și multe altele.\n- Utilizând CSS, este posibil să se creeze aspecte și design-uri variate, adaptate nevoilor și preferințelor utilizatorilor, pentru o experiență de navigare mai plăcută și eficientă pe web.
    `,
  },
  {
    question: "Care dintre urmatoarele functioneaza similar cu elementul <b>?",
    option1: "<strong>",
    option2: "<em>",
    option3: "<i>",
    option4: "<block>",
    answer: 1,
    explanation: `
    - Tagurile <b> și <strong> sunt folosite pentru a evidenția textul în cadrul unei pagini web, însă ele au semnificații diferite din punct de vedere semantic și pot fi stilizate diferit prin intermediul CSS.\n- Tagul <b> (bold) este folosit pentru a face textul să apară bold, indicând astfel o importanță vizuală, fără a adăuga neapărat o semnificație semantică specială.\n- Tagul <strong> este folosit pentru a evidenția textul ca fiind semnificativ sau important din punct de vedere semantic.
    `,
  },
  {
    question:
      "Ce element HTML5 este utilizat pentru a defini link-uri de navigare?",
    option1: "<nav>",
    option2: "<header>",
    option3: "<section>",
    option4: "<article>",
    answer: 1,
    explanation: `
    - tag-ul <nav> reprezinta o sectiune a paginii care contine link-urile pentru navigare, precum link-uri catre alte pagini sau catre diferite sectiuni din pagina curenta.
    `,
  },
  {
    question:
      "Ce atribut este folosit pentru a specifica un identificator unic unui element?",
    option1: "class",
    option2: "id",
    option3: "html",
    option4: "unique",
    answer: 2,
    explanation: `
    - Atributul 'id' este utilizat pentru a furniza un identificator unic pentru un element de pe pagină.\n- Acest identificator trebuie să fie unic în cadrul întregii pagini web și poate fi utilizat pentru a selecta și a stiliza elementul respectiv folosind CSS sau pentru a accesa și manipula elementul folosind JavaScript.
    `,
  },
  {
    question: "Valoarea initiala (default) a atributului 'target' este:",
    option1: "_self",
    option2: "_parent",
    option3: "_top",
    option4: "_blank",
    answer: 1,
    explanation: `
    - Valoarea implicită (default) a atributului target pentru tag-urile <a> în este _self.\n- Atunci când acest atribut nu este specificat, linkul va fi deschis în fereastra sau tab-ul curent al browserului, peste conținutul curent al paginii.\n- Pentru a specifica un comportament diferit de deschidere a linkului, se poate folosi atributul 'target'cu o altă valoare, cum ar fi '_blank' pentru a deschide linkul într-un tab sau fereastră nouă,
    `,
  },
  {
    question:
      "Textul scris in interiorul urmatoarei perechi de tag-uri este considerat a fi un paragraf:",
    option1: "<p></p>",
    option2: "<paragraph></paragraph>",
    option3: "<par></par>",
    option4: "Niciuna din cele de mai sus",
    answer: 1,
    explanation: `
    - Elementul <p> în HTML este folosit pentru a defini un paragraf de text.\n- Fiecare paragraf este afișat pe o linie nouă și este separat de celelalte elemente de pe pagină.\n- Este important să folosești elementul <p> pentru a marca conținutul textului care face parte din diferite paragrafe, pentru a asigura o structură semantică și accesibilitate corespunzătoare a paginii web.
    `,
  },
  {
    question: "Care dintre urmatoarele nu este un Browser Web?",
    option1: "Google Chrome",
    option2: "Google",
    option3: "Opera",
    option4: "Mozilla Firefox",
    answer: 2,
    explanation: `
    - Google este cunoscut în primul rând pentru motorul său de căutare pe internet, care este unul dintre cele mai utilizate și cunoscute motoare de căutare din lume.
    `,
  },
  {
    question: "Tag-ul <a> vine de la:",
    option1: "Anchor Tag",
    option2: "Active Tag",
    option3: "Action Tag",
    option4: "Alert Tag",
    answer: 1,
    explanation: `
    - Tagul <a> în HTML este folosit pentru a crea un link către alte pagini web, fișiere, adrese de e-mail, locații în cadrul aceleiași pagini sau alte resurse online.\n- Acesta permite utilizatorilor să navigheze între diferite pagini web și să acceseze conținut relevant prin intermediul hyperlink-urilor.
    `,
  },
  {
    question: "Tag-ul ..... defineste o imagine intr-o pagina HTML.",
    option1: "<image>",
    option2: "<i>",
    option3: "<visual>",
    option4: "<img>",
    answer: 4,
    explanation: `
    - Tagul <img> în HTML este folosit pentru a încărca și afișa imagini pe o pagină web.\n- Acesta permite includerea de imagini statice, cum ar fi fotografii, ilustrații sau grafice, în cadrul conținutului HTML al paginii.
    `,
  },
  {
    question: "Atributul ..... este folosit pentru a afisa o imagine.",
    option1: "source",
    option2: "srs",
    option3: "sr",
    option4: "src",
    answer: 4,
    explanation: `
    - În HTML, atributul 'src' este folosit în tagul <img> pentru a preciza calea către fișierul imagine pe care browserul trebuie să îl încarce și să îl afișeze pe pagină.\n- Acest atribut este esențial atunci când adăugăm imagini într-o pagină web.\n- Acesta poate fi un URL absolut (în cazul în care imaginea este găzduită pe un alt server web) sau un URL relativ (în cazul în care imaginea se află în același director sau într-un subdirector al paginii HTML).
    `,
  },
  {
    question: "Ce tag este folosit pentru a crea un rand intr-un tabel?",
    option1: "<th>",
    option2: "<td>",
    option3: "<tr>",
    option4: "<row>",
    answer: 3,
    explanation: `
    - Tagul <tr> în HTML este utilizat pentru a defini o rând (linie) în cadrul unei tabele.\n- Acesta marchează o serie de celule care se află pe aceeași linie în cadrul unei tabele, organizând astfel datele într-o structură tabulară.
    `,
  },
  {
    question: "Ce reprezinta tag-ul <code>?",
    option1: "O bucata de cod",
    option2: "Comentarii",
    option3: "Cod Executabil",
    option4: "JavaScript",
    answer: 1,
    explanation: `
    - Tagul <code> în HTML este utilizat pentru a formata textul ca și cod sursă sau fragmente de cod.\n- Acesta este folosit pentru a evidenția și a distinge fragmentele de cod de textul comun al unei pagini web.\n- Atunci când este utilizat, browserul va afișa textul din interiorul tagului <code> folosind un font diferit, ceea ce face codul să fie ușor de citit și de identificat.
    `,
  },
  {
    question: "Ce reprezinta tag-ul <abbr>?",
    option1: "O abreviere sau un acronim",
    option2: "O bucata de cod",
    option3: "Un text subliniat",
    option4: "Un comentariu",
    answer: 1,
    explanation: `
    - Tagul <abbr> în HTML este utilizat pentru a defini o abreviere sau un acronim în cadrul textului.\n- Acesta este folosit pentru a specifica o abreviere și pentru a furniza o explicație sau o descriere a acesteia, care poate fi afișată atunci când utilizatorul plasează cursorul mouse-ului deasupra abrevierii.
    `,
  },
  {
    question: "Care sunt caracteristicile introduse in HTML5?",
    option1: "S-au adaugat tag-urile: <p>, <div>, <img>, <a>",
    option2: "S-a adaugat posibilitatea de a adauta stiluri",
    option3: "Au fost introduse noi elemente semantice, grafice, multimedia",
    option4: "S-a adaugat posibilitatea de a adauga cod JavaScript",
    answer: 3,
    explanation: `
    - HTML5 a adus o serie de caracteristici noi și îmbunătățiri semnificative față de versiunile anterioare ale limbajului HTML.\n- Printre acestea se numără introducerea următoarelor elemente: header, footer, nav, article, section, audio, video, canvas.
    `,
  },
  {
    question: "Care sunt diferentele dintre tag-ul <span> si <div>?",
    option1: "<div> este un element bloc, iar <span> este un element inline",
    option2: "Tag-ul <span> nu exista",
    option3: "Nu exista diferente intre cele doua",
    option4: "<span> este un element bloc, iar <div> este un element inline",
    answer: 1,
    explanation: `
    - Diferența principală între tagurile <div> și <span> constă în scopul lor și modul în care sunt afișate pe pagină.\n- <div> este un element de nivel bloc folosit pentru a grupa și a organiza alte elemente HTML, în timp ce <span> este un element de nivel inline utilizat pentru a marca porțiuni mici de text sau alte elemente inline, cărora dorim să le aplicăm un stil sau să le manipulăm individual.\n- În esență, <div> este folosit pentru structurare, în timp ce <span> este folosit pentru formatare la nivel de text.
    `,
  },
  {
    question: "La ce este util '!DOCTYPE'?",
    option1: "!DOCTYPE nu mai este folosit in versiunile noi de HTML",
    option2:
      "Comunica browserului versiunea de HTML care este folosita in document",
    option3: "Specifica limba utilizata in documentul HTML",
    option4: "Ajuta la conectarea documentului CSS si JavaScript",
    answer: 2,
    explanation: `
    - <!DOCTYPE> este o instrucțiune specială în HTML care este utilizată pentru a informa browserul despre tipul de document pe care îl citește.\n- Aceasta indică versiunea de HTML utilizată în document și ajută la asigurarea că browserul va interpreta și va afișa corect conținutul paginii web conform specificațiilor HTML.\n- Definirea corectă a DOCTYPE-ului este importantă pentru ca browserul să afișeze corect conținutul paginii și să aplice corect regulile de interpretare a documentului HTML.
    `,
  },
  {
    question: "Ce este un SVG",
    option1: "Presupune crearea unei pagini web dinamice",
    option2: "Nu exista in HTML, este un tag JavaScript",
    option3: "Nu exista in HTML, este un tag CSS",
    option4:
      "SGV-uri sunt folosite pentru a crea si descrie grafica vectoriala bidimensionala",
    answer: 4,
    explanation: `
    - Elementul <svg> (Scalable Vector Graphics) este folosit pentru a încorpora și a afișa grafică SVG în cadrul paginilor web.\n- Acesta poate conține elemente SVG, cum ar fi linii, cercuri, pătrate, texte și alte forme, precum și atribute care controlează aspectul și comportamentul acestora.
    `,
  },
  {
    question: "Ce sunt elementele void in HTML?",
    option1: "Sunt elemente care nu au tag-uri de inchidere",
    option2: "Sunt elemente care nu au continut / sunt goale",
    option3: "Nu exista acest concept in HTML",
    option4:
      "Sunt elemente care ajuta conectarea paginii la documentul JavaScript",
    answer: 1,
    explanation: `
    - În HTML, există o categorie de elemente cunoscute sub numele de "elemente vid" (void elements).\n- Acestea sunt elemente care nu au conținut și nu necesită un tag de închidere separat.\n- Ele sunt utilizate pentru a furniza informații despre elementele autonome sau pentru a introduce anumite funcționalități în pagină.
    `,
  },
  {
    question: "Care dintre urmatoarele sunt tag-uri void in HTML?",
    option1: "<a />",
    option2: "<div />",
    option3: "<img />",
    option4: "<main />",
    answer: 3,
    explanation: `
    - În HTML, există o categorie de elemente cunoscute sub numele de "elemente vid" (void elements).\n- Acestea sunt elemente care nu au conținut și nu necesită un tag de închidere separat.\n- Ele sunt utilizate pentru a furniza informații despre elementele autonome sau pentru a introduce anumite funcționalități în pagină.
    `,
  },
  {
    question: "Care este diferenta dintre <link> si <a>?",
    option1:
      "<a> este folosit pentru a creea un hyperlink catre o alta pagina web, iar <link> este folosit pentru a defini legaturi intre un document si o resursa externa (ex. CSS)",
    option2:
      "<link> este folosit pentru a creea un hyperlink catre o alta pagina web, iar <a> este folosit pentru a defini legaturi intre un document si o resursa externa (ex. CSS)",
    option3: "Sunt acelasi lucru",
    option4: "Aceste tag-uri nu exista in HTML",
    answer: 1,
    explanation: `
    - În HTML, <a> (anchor) este folosit pentru a crea hyperlink-uri vizibile care permit navigarea între pagini.\n- <link> este utilizat pentru a conecta pagini web la alte resurse externe, cum ar fi fișiere CSS, fără a crea un hyperlink vizibil pe pagină.
    `,
  },
  {
    question:
      "In ce versiune de HTML au fost introduse: API-uri de geolocalizare, Canvas, drag-n-drpop, elemente multimedia video si audio?",
    option1: "HTML6",
    option2: "HTML3",
    option3: "HTML5",
    option4: "HTML4",
    answer: 3,
    explanation: `
    - HTML5 a adus o serie de caracteristici noi și îmbunătățiri semnificative față de versiunile anterioare ale limbajului HTML.\n- Printre acestea se numără introducerea următoarelor elemente: header, footer, nav, article, section, audio, video, canvas.
    `,
  },
  {
    question: "Ce atribut HTML este folosit pentru a utiliza stilurile inline?",
    option1: "font",
    option2: "style",
    option3: "styles",
    option4: "class",
    answer: 2,
    explanation: `
    - Stilurile inline în HTML sunt definite direct în atributul style al unui element HTML, permițând aplicarea stilurilor direct pe elementul respectiv.\n- Acest lucru este util atunci când dorim să aplicăm stiluri specifice unui singur element, fără a crea sau a folosi fișiere CSS separate.
    `,
  },
  {
    question: "Este recomandat sa incluzi doar un singur <h1> in pagina web?",
    option1: `Desigur`,
    option2: `Nu este recomandat`,
    option3: `Nu exista o regula clara`,
    option4: `Trebuie incluse cat mai multe tag-uri <h1>`,
    answer: 1,
    explanation: `- Un singur element <h1> pe pagina web este o practică recomandată deoarece promovează o structură web clară și sănătoasă.\n- Oferă beneficii pentru SEO, accesibilitate și experiența utilizatorului.\n- Un singur <h1> clarifică subiectul principal al paginii pentru motoarele de căutare, ajută utilizatorii de cititoare de ecran să navigheze și creează o ierarhie vizuală distinctă, îmbunătățind scanabilitatea paginii.`,
  },
  {
    question: "Care este scopul atributului 'async' in tag-urile script?",
    option1: `De a incarca scriptul in mod asincron, fara a bloca incarcarea codului HTML`,
    option2: `De a executa script in fundal`,
    option3: `De a amana executia scriptului pana la finalizarea incarcarii codului HTML`,
    option4: `De a prioritiza incarcarea scriptului peste alte resurse`,
    answer: 1,
    explanation: `
      - Atributul "async" din tag-urile HTML script este utilizat pentru a incarca scriptul in mod asincron, permitand browserului sa continue analizarea si redarea continutului HTML fara a astepta incarcarea sau executarea scriptului.
      `,
  },
  {
    question:
      "Ce atribut este utilizat pentru a specifica URL-ul paginii catre care vei fi redirectionat?",
    option1: `src`,
    option2: `href`,
    option3: `link`,
    option4: `url`,
    answer: 2,
    explanation: `
      - In HTML, atributul 'href' este folosit pentru a specifica URL-ul paginii unde dorim sa mergem.\n- In plus, daca este setat si atributul target="_blank", link-ul se va deschide intr-un tab nou.
      `,
  },
];

export const css = [
  {
    question: "Ce selector folosesti pentru a selecta descendentii directi?",
    option1: "E ~ F",
    option2: "E + F",
    option3: "E.F",
    option4: "E > F",
    answer: 4,
  },
  {
    question: "Care dintre urmatoarele coduri de culoare este valid?",
    option1: "#000000",
    option2: "#0000000",
    option3: "#00000000",
    option4: "#0000000000",
    answer: 1,
  },
  {
    question: "Ce tag-uri vor avea culoarea galbena?",
    code: `
    div ~ p {
      color: yellow;
    }

    <div>
      <p>Primul element</p> <p>Al doilea element</p>
    </div>
    <p>Primul paragraf</p>
    <p>Al doilea paragraf</p>
    `,
    option1: "Doar 'Primul element'",
    option2: "Toate tag-urile p",
    option3: "Primul paragraf si Al doilea paragraf",
    option4: "Doar Primu paragraf",
    answer: 3,
  },
  {
    question:
      "Ce proprietate CSS permite setarea unui spatiu liber între chenar/bordura (border) și conținutul unui element?",
    option1: "margin",
    option2: "padding",
    option3: "block-gap",
    option4: "border-height",
    answer: 2,
  },
  {
    question: "Cum declari o variabila in CSS?",
    option1: "element {--main-bg-color: red;}",
    option2: "{variabl --main-bg-color: red;}",
    option3: ":root {--main-bg-color: red;}",
    option4: "var main-bg-color = red;",
    answer: 3,
  },
  {
    question: "Care este modalitatea corecta de a face referire",
    option1: "element {--main-bg-color: red;}",
    option2: "{variabl --main-bg-color: red;}",
    option3: ":root {--main-bg-color: red;}",
    option4: "var main-bg-color = red;",
    answer: 3,
  },
  {
    question:
      "Cum specifici o culoare transparenta pentru un fundalul unui element?",
    option1: `background-color: transparent;`,
    option2: `background-opacity: 0;`,
    option3: `background-alpha: 0;`,
    option4: `background-color: none;`,
    answer: 1,
    explanation:
      "Pentru a specifica transparenta pentru fundalul unui elemet, poti folosi keyword-ul 'transparent' cu proprietatea 'background-color'. Astfel, fundalul unui element va fi complet transparent.",
  },
  {
    question:
      "Ce proprietate CSS folosesti pentru a crea spatiu intre continutul unui element si bordura (border) acestuia?",
    option1: `margin`,
    option2: `spacing`,
    option3: `padding`,
    option4: `border-spacing`,
    answer: 3,
    explanation: `
    - Proprietatea padding este utilizata pentru a oferi spatiu intre continutul unui element si bordrura acestuia.
    - Defineste dimensiunea spatiului de langa element.
    - 'margin' ofera spatiu in afara bordurii unui element.
    - 'border-spacing' este utilizat pentru a seta distanta dintre bordura si celulele adiacente ale unui tabel.
    - 'spacing' nu este o proprietate valida in CSS. 
    `,
  },
  {
    question: "In ce ordine vor fi adaugate marginile?",
    code: `
    p {
      margin: 25px 50px 75px 100px;
    }
    `,
    option1: `Dreapta, stanga, sus, jos`,
    option2: `Sus, dreapta, jos, stanga`,
    option3: `Sus, stanga, jos, dreapta`,
    option4: `Jos, sus, stanga, dreapta`,
    answer: 2,
    explanation:
      "Marginile, cat si padding-ul, sunt adaugate in sensul acelor de ceasornic, incepand cu partea de sus (top) si terminandu-se in partea stanga (left).",
  },
  {
    question:
      "Ce proprietate CSS controleaza modul in care un element este pozitionat?",
    option1: `static`,
    option2: `position`,
    option3: `fix`,
    option4: `set`,
    answer: 2,
    explanation:
      "Proprietatea 'position' controleaza modul in care un element este pozitionat in pagina web. Cand este setat pe 'absolute' sau 'fixed', elementul este eliminat complet din flow-ul normal al documentului. Cand aceasta proprietate este setata pe 'relative', elementul este mutat relativ la pozitia sa, in flow-ul normal al documentului. Valoarea initiala, default, este 'static', insemnand ca elementul ramane in flow-ul normal al documentului si nu este pozitionat.",
  },
  {
    question: "Care este forma intreaga pentru 'RGB'?",
    option1: `Red Green Black`,
    option2: `Red Gray Black`,
    option3: `Red Green Blue`,
    option4: `Toate de mai sus sunt corecte`,
    answer: 3,
    explanation: `
      - RGB în CSS este o modalitate de a specifica culorile folosind o combinație de roșu (Red), verde (Green) și albastru (Blue).
      - Fiecare componentă (R, G sau B) poate avea o valoare între 0 și 255, reprezentând intensitatea culorii respective.
      - Prin combinarea acestor trei culori în proporții diferite, poți crea o gamă largă de culori în designul web. 
      - De exemplu, rgb(255, 0, 0) reprezintă roșu complet, rgb(0, 255, 0) reprezintă verde complet, iar rgb(0, 0, 255) reprezintă albastru complet.
      `,
  },
  {
    question: "Care este rolul layout-ului GRID?",
    option1: `De a crea design responsive si layout flexibil de tip grid`,
    option2: `De a anima elementele de pe site`,
    option3: `De a manipula structuri de date in JavaScript`,
    option4: `De a optimiza interogari ale bazelor de date`,
    answer: 1,
    explanation: `
      - In CSS, 'grid' este utilizat pentru a realiza un design responsive si flexibil din punct de vedere al asezarii elementelor in pagina web.
      - Permite dezvoltatorilor sa creeze design-uri complexe, oferind control precis asupra elementelor paginii web.
      `,
  },
  {
    question: "Ce proprietate CSS este folosita pentru a face textul bold?",
    option1: `text-decoration: bold;`,
    option2: `font-weight: bold;`,
    option3: `font-style: bold;`,
    option4: `text-align: bold;`,
    answer: 2,
    explanation:
      "Proprietatea 'font-weight' este folosita pentru a seta grosimea fontului. Grosimea dispoibila pentru text depinde de font-ul folosit (font-family).",
  },
  {
    question: "Cum poti realiza un efect text 3D in HTML si CSS?",
    option1: `Folosind tag-ul <3dtext>t in HTML`,
    option2: `Aplicand proprietatea 'text-3d' in CSS`,
    option3: `Utilizand proprietati CSS precum 'text-shadow' si 'transform'`,
    option4: `Folosind tag-ul <3d> in HTML`,
    answer: 3,
    explanation: `
      - Pentru a obtine un effect 3D pentru text in HTML si CSS, poti folosi proprietati CSS precum 'text-shadow' (unde adaugi 'adancime') si 'transform' (pentru a manipula perspectiva si rotatia textului).
      `,
  },
  {
    question: "Catre cine face referire pseudo selectorul ':nth-child:(2n+1)?",
    option1: `Catre toate elementele copil de pe pozitii pare ale unui element parinte`,
    option2: `Catre toate elementele copil de pe pozitii impare ale unui element parinte`,
    option3: `Catre al doilea element copil al unui element parinte `,
    option4: `Catre fiecare al treilea element copil dintr-un element parinte`,
    answer: 2,
    explanation: `
    - Selectorul pseudo nth-child:(2n+1) tinteste catre toate elementele copil de pe pozitii impare.
    - Expresia 2n+1 genereaza un sir de numere care incepe cu 1 (numerele impare: 1, 3, 5, 7, ...), facand referire la toate elementele copil care se afla pe aceste pozitii.
    - Este util atunci cand vrei sa aplici stiluri elementelor copil de pe anumite pozitii.
      `,
  },
  {
    question: "Ce metode sunt folosite pentru a reprezenta culori in CSS?",
    option1: `Numele culorii`,
    option2: `Valori RGB`,
    option3: `Valori HEX`,
    option4: `Toate variantele sunt corecte`,
    answer: 4,
    explanation:
      "In CSS, culorile sunt specificate folosind atat numele culorii respective, cat si valori RGB, HEX si HSL.",
  },
  {
    question: "Cum poti scrie comentarii in CSS?",
    option1: `/* */`,
    option2: `//`,
    option3: `#`,
    option4: `Nicio varianta nu este corecta`,
    answer: 1,
    explanation: `
    - Pentru a marca un comentariu in CSS, folosim /* */.
    `,
  },
  {
    question:
      "Ce proprietate si valoare CSS folosesti pentru a face culaorea unui text complet opaca/transparenta?",
    option1: `color: rgba(0, 0, 0, 0);`,
    option2: `color: rgba(0, 0, 0, 1);`,
    option3: `color: rgba(0, 0, 0, 0.5);`,
    option4: `color: rgba(255, 255, 255, 0);`,
    answer: 1,
    explanation: `
    - In functia 'rgba', valoarea alpha '1' face culoarea complet opaca / transparenta.
    `,
  },
  {
    question: "Care va fi rezultatul urmatorului cod CSS?",
    code: `
    body {
      color: rgb(255, 255, 255);
      background-color: rgba(0, 0, 0, 0.5);
    }
    `,
    option1: `Text alb cu un fundal complet transparent`,
    option2: `Text negru cu un fundal complet transparent`,
    option3: `Text negru cu un fundal transparent pe jumatate`,
    option4: `Text alb cu un fundal transparent pe jumatate`,
    answer: 4,
    explanation: `
    - color: rgb(255, 255, 255) seteaza culoarea textului la alb.
    - background-color: rgba(0, 0, 0, 0.5) seteaza fundalul ca fiind negru, cu o transparenta/opacitate de 50% (adica la jumatate).
    `,
  },
  {
    question:
      "Ce tip de CSS este in general recomandat pentru a stiliza pagini web?",
    option1: `Inline`,
    option2: `Internal`,
    option3: `External`,
    answer: 3,
    explanation: `
    - Stilul extern pentru CSS este o practică recomandată pentru organizarea, gestionarea și performanța codului web.
    - Oferă o separare clară a responsabilităților, refolosire ușoară, întreținere simplă și poate îmbunătăți performanța încărcării paginii.`,
  },
  {
    question: "Care este rolul principal al CSS-ului in Web Development?",
    option1: `Realizeaza pagini web`,
    option2: `Stilizeaza pagini web`,
    option3: `Stocheaza date`,
    option4: `Face legatura cu o baza de date`,
    answer: 2,
    explanation: `
    - Rolul principal al CSS-ului (Cascading Style Sheets) este de a stiliza paginile web. 
    - Definițește aspectul vizual al elementelor HTML, controlând caracteristici precum culori, fonturi, dimensiuni, margini, spațiere și poziționare. 
    - CSS transformă codul HTML brut in pagini web atractive și ușor de utilizat.
    - Fără CSS, paginile web ar fi simple texte brute, lipsite de formatare și personalizare.`,
  },
  {
    question: "Care este obiectivul Design-ului Responsive (RWD)?",
    option1: `Face site-ul mai rapid`,
    option2: `Face site-ul compatibil cu mai multe browsere`,
    option3: `Mareste viteza de incarcare a imaginilor si fisierelor CSS`,
    option4: `Realizeaza design care se adapteaza la marimi diferite de ecrane`,
    answer: 4,
    explanation: `
    - Responsive Web Design (RWD) este o abordare de design care are ca scop realizarea unor layout-uri si design-uri care se adapteaza automat diferitelor dimensiuni de ecran pe care se afla deschis site-ul web.
    `,
  },
  {
    question:
      "Daca vrem sa aplicam un stil doar asupra unui singur element, ce selector folosim?",
    option1: `id`,
    option2: `class`,
    option3: `text`,
    option4: `numele tag-ului respectiv`,
    answer: 1,
    explanation: `
    - Selectorul CSS 'id' poate fi utilizat pentru a selecta doar un singur element, astfel incat sa ii aplicam doar lui un anumit stil.
    - Selectorul 'id' foloseste atributul 'id' asupra elementelor HTML pentru a le oferi caracterul de unicitate. 
    - Pentru a selecta un element cu un id specific, folosim caracterul'#', urmat de numele id-ului pe care l-am specificat in interiorul tag-ului HTML.
    `,
  },
  {
    question:
      "Cum creezi o bordura (border) de 2 pixeli, linie continua (solida), albastra?",
    option1: `border: solid blue 2px;`,
    option2: `border: 2px solid blue;`,
    option3: `border: blue solid 2px;`,
    option4: `border: 2px blue solid;`,
    answer: 2,
    explanation: `
    - Ordinea corecta pentru scurtatura proprietatii border este: latime, stil, culoare.
    - Deci, ordinea corecta a valorilor este: 2px (latime), solid (stil/tip), blue (culoare). 
    `,
  },
  {
    question:
      "Cum aplici o margine de 20 de pixeli pentru top si bottom, iar pentru stanga si dreapta o margine de 10 pixeli?",
    option1: `margin: 20px 10px;`,
    option2: `margin: 10px 20px;`,
    option3: `margin: 20px 0 10px 0;`,
    option4: `margin: 10px 20px 10px 20px;`,
    answer: 1,
    explanation: `
    - Cand folosesti doua valori pentru proprietatea margin, prima valoarea seteaza marginea de sus si de jos (top & bottom), iar a doua valoarea seteaza marginea pentru partea stanga si dreapta (left & right).
    `,
  },
];

export const javascript = [
  {
    question: "Ce inseamna DOM?",
    option1: `Data Oriented Model`,
    option2: `Data Object Model`,
    option3: `Document Object Model`,
    option4: `Document Oriented Model`,
    answer: 3,
    explanation:
      "DOM (Document Object Model) reprezintă o interfață fundamentală oferită de browser care permite accesarea și manipularea conținutului paginii web (HTML). Practic, este o reprezentare a structurii paginii ca un arbore ierarhic, unde fiecare element HTML corespunde unui obiect în arborele DOM.",
  },
  {
    question: "Cum poti obtine data si ora curenta in JavaScript?",
    option1: `new Date();`,
    option2: `getCurrentDateAndTime();`,
    option3: `getDataAndTimeNow();`,
    option4: `fetchCurrentDateTime();`,
    answer: 1,
    explanation: `
    - În JavaScript, new Date() este un constructor care creează un nou obiect Date. ${(
      <br />
    )}
    - Acest obiect reprezintă un punct specific în timp, conținând de obicei data (an, lună, zi) și ora (ore, minute, secunde, milisecunde).
    `,
  },
  {
    question: "Care este scopul functiei setTimeout()?",
    option1: `Realizeaza operatii aritmetice`,
    option2: `Creaza un array nou`,
    option3: `Intarzie executia unei functii sau a unui bloc de cod`,
    option4: `Realizeaza cereri catre server si se ocupa de raspunsurile primite`,
    answer: 3,
    explanation: `
    - Functia setTimeout() este folosita pentru a intarzia executarea unei functii sau a unui bloc de cod pentru o anumita perioada de timp. 
    - Perioada de timp este specificata in milisecunde (1000ms = 1s).
    `,
  },
  {
    question: "Care este scopul keyword-ului 'const', in JavaScript?",
    option1: `Declara o variabila cu block scope`,
    option2: `Creaza o functie`,
    option3: `Verifica daca un element este vizibil`,
    option4: `Declara variabile cu valoare constanta`,
    answer: 4,
    explanation: `
    - In JavaScript,'const' este utilizat pentru a declara variabile care au valoarea constanta. <br />
    - Odata ce variabilei i s-a atribuit o valoare folosind 'const', valoarea nu mai poate fi schimbata (reatribuita/reassinged). 
    `,
  },
  {
    question: "Care este scopul functiei parseInt()?",
    option1: `Filtreaza elementele dintr-un array`,
    option2: `Converteste un string in numar intreg`,
    option3: `Creaza un array nou care are ca elemente rezultatul apelarii unei functii asupra fiecarui element`,
    option4: `Gaseste numere intregi dintr-un sir de elemente`,
    answer: 2,
    explanation: `
    - Functia parseInt() este utilizata pentru a converti un string in numar intreg. <br />
    - Preia un string si il converteste in numar intreg.
    `,
  },
  {
    question: "Care este scopul functiei 'fetch'?",
    option1: `Realizeaza operatii aritmetice`,
    option2: `Realizeaza request-uri si are grija de raspunsurile primite`,
    option3: `Creeaza un array nou`,
    option4: `Manipuleaza elementele DOM (Document Object Model) folosind proprietati specifica JavaScript`,
    answer: 2,
    explanation: `
    - Functia 'fetch' este folosita pentru a face diverse cereri (request-uri catre API-uri spre exemplu) si de a avea grija de raspunsurile primite.
    - Este folosita pentru a obtine date de la un server si face parte din WEb API cand vine vorba de request-uri HTTP.
    `,
  },
  {
    question: "Ce sunt 'timpul' si 'data' (date) in JavaScript?",
    option1: `Array`,
    option2: `Class`,
    option3: `Function`,
    option4: `Object`,
    answer: 4,
    explanation:
      "în JavaScript, timpul și data sunt reprezentate de obiecte de tipul Date. Obiectul Date oferă funcționalități pentru a lucra cu date și ore.",
  },
  {
    question: "Ce este un event listener in JavaScript?",
    option1: `O functie care se executa automat cand un anumit eveniment are loc`,
    option2: `O metoda built-in folosita pentru a defini functii`,
    option3: `Un obiect care stocheaza date despre anumite evenimente, pentru utilizari ulterioare`,
    option4: `Un tip de bucla (loop) folosit pentru a itera prin array-uri si obiecte`,
    answer: 1,
    explanation:
      "În JavaScript, un event listener este o funcție care așteaptă să se întâmple un anumit eveniment și apoi execută o bucata de cod ca răspuns la acel eveniment. Evenimentele sunt acțiuni sau întâmplări pe o pagină web, cum ar fi click-ul utilizatorului pe un buton, trecerea cu mouse-ul peste o imagine sau trimiterea unui formular.",
  },
  {
    question: "Care este rezultatul acestui cod?",
    code: `
    var a = true + true + true * 3;
    print(a)
    `,
    option1: `0`,
    option2: `3`,
    option3: `5`,
    option4: `error`,
    answer: 3,
    explanation:
      "In JavaScript, 'true' este considerat drept numarul '1' atunci cand este utilizat in expresii aritmetice. Deci, calculul este: 1+1+1*3 = 5.",
  },
  {
    question: "Care va fi rezultatul codului?",
    code: `
    (function() {
      setTimeout(() => console.log(1), 2000);
      console.log(2);
      setTimeout(() => console.log(3), 0);
      console.log(4);
    })();
    `,
    option1: `2 4 3 1`,
    option2: `1 2 3 4 `,
    option3: `2 3 4 1`,
    option4: `4 3 2 1`,
    answer: 1,
    explanation:
      "Prima data se afiseaza 2 (din console.log(2)). Apoi, desi are un delay de doar 0ms, 4 este afisat inaintea lui 3 deoarece JavaScript executa setTimeout() dupa ce restul codului este este rulat. Deci, prima data sunt afisate valorile din afara lui setTimeout(), iar apoi, in functie de marimea delay-ului, se vor afisa si celelalte valori, care sunt executate in mod asincron (deoarece setTimeout() este o functie asincrona).",
  },
  {
    question:
      "Ce tip de variabila este vizibil doar in functia unde este definita variabila?",
    option1: `Variabilele globale`,
    option2: `Variabilele locale`,
    option3: `Ambele variante`,
    option4: `Nicio varianta`,
    answer: 2,
    explanation: `
    - O variabila locala este vizibila doar in functia in care este definita.
    - O variabila globala este vizibila si disponibila oriunde in program, dupa locul in care a fost declarata.
    `,
  },
  {
    question: "Care este diferenta dintre 'let' si 'const'?",
    option1: `Variabilelor 'let' li se pot reatribui valori, in timp ce variabilele 'const' sunt imutabile`,
    option2: `Variabilelor 'const' li se pot reatribui valori, in timp ce variabilele 'let' sunt imutabile`,
    option3: `Variabilele 'let' sunt hoistate, spre deosebire de variabilele 'const'`,
    option4: `Nu exista nicio diferenta intre cele doua.`,
    answer: 1,
    explanation: `
    - In JavaScript, variabilele declarate cu 'let' pot primi alte valori (valoarea lor poate fi schimbata dupa definirea initiala), in timp ce variabilele declarate cu 'const' sunt imutabile, adica valoarea lor nu poate fi schimbata odata ce a fost deja initializata.
    `,
  },
  {
    question: "Care va fi rezultatul codului?",
    code: `
    console.log(typeof null);
    `,
    option1: `null`,
    option2: `undefined `,
    option3: `object`,
    option4: `string`,
    answer: 3,
    explanation: `
    - In JavaScript, operatorul 'typeof' returneaza un string care indica tipul unui operand.
    - Din anumite motive, 'typeof null' returneaza 'object', insemnand ca 'null' este un obiect.
    - Desi valoarea 'null' reprezinta absenta unei valori sau a unei valori obiect, este totusi considerat de tip obiect (object). 
    `,
  },
  {
    question: "Care va fi rezultatul codului?",
    code: `
    let x = 5;
    x = 10;
    console.log(x);
    `,
    option1: `5`,
    option2: `undefined `,
    option3: `Error`,
    option4: `10`,
    answer: 4,
    explanation: `
    - Variabilele declarate cu 'let' pot primi alta valoare dupa ce au fost initializate initial.
    - Deci, valoarea lui 'x' este schimbata in 10 inainte de a fi afisata cu 'console.log(x)';
    `,
  },
  {
    question: "Care va fi rezultatul?",
    code: `
    function height() {
      var height = 123.56;
      var type = (height >= 190) ? "tall" : "short";
      return type;
    }
    `,
    option1: `short`,
    option2: `123.56`,
    option3: `tall`,
    option4: `190`,
    answer: 1,
    explanation:
      "Operatorul ternar (ternary operator) este folosit drept operator de comparatie. In plus, reprezinta o modalitate compactă de a scrie o instrucțiune if-else pe o singură linie. In cazul nostru, verificăm dacă inaltimea (height) este mai mare sau egală cu 190. Dacă este adevărat, cuvantul 'tall' este atribuit variabilei type. Dacă este fals, cuvantul 'short' este atribuit.",
  },
  {
    question: "Care va fi rezultatul codului?",
    code: `
    var quiz = [1,2,3];
    var js = [6,7,8];
    var result = quiz.concat(js);
    console.log(result);
    `,
    option1: `1,2,3,6,7,8`,
    option2: `1,2,3`,
    option3: `123`,
    answer: 1,
    explanation: `
    - concat() creează un șir sau un array nou care conține elementele combinate pe care le specificam.
    - este o metodă versatilă pentru a combina valorile șirurilor sau array-urilor.
    - șirurile sau array-urile originale rămân neschimbate.`,
  },
  {
    question: "Care va fi rezultatul urmatoarei comparatii in JavaScript?",
    code: `
    5 == "5"
    `,
    option1: `true`,
    option2: `false`,
    option3: `Error`,
    option4: `NaN`,
    answer: 1,
    explanation: `
    - Operatorul == compara valoarea operanzilor, facand si conversia daca este necesar.
    - In cazul nostru, sirul de caractere (string) "5" este convertit la numere inainte de comparatie.
    - Deci, intr-un final, se vor compara doua numere: 5 == 5, rezultand "True".
    `,
  },
  {
    question: "Care va fi rezultatul urmatorului cod?",
    code: `
    let x;
    console.log(x);
    `,
    option1: `null`,
    option2: `0`,
    option3: `NaN`,
    option4: `undefined`,
    answer: 4,
    explanation: `
    - Cand o variabila este declarata, dar nu initializata, valoarea ei este 'undefined' (nedefinit).
    - Deci, console.log(x) va afisa 'undefined', deoarece variabila nu este definita.
    `,
  },
  {
    question: "Care este numele intreg pentru NaN, in JavaScript?",
    option1: `Not a Null`,
    option2: `Not a Number`,
    option3: `Nicio varianta nu este corecta`,
    option4: `Numbers as Null`,
    answer: 2,
    explanation: `
    - În JavaScript, NaN reprezintă valoarea specială "Not a Number" (Nu este un Număr). Aceasta indică o operație matematică sau o conversie nereușită care nu a rezultat într-un număr valid.
    - În plus, putem folosi funcția isNaN() pentru a verifica dacă o valoare este NaN sau nu.`,
  },
  {
    question: "Unde nu poate fi folosit JavaScript?",
    option1: `Pe servere`,
    option2: `In AI (Inteligenta Artificiala)`,
    option3: `In Machine Learning`,
    option4: `JavaScript este un 'General Purpose Language' care poate fi utilizat oriunde`,
    answer: 4,
    explanation: `
    - JavaScript este un limbaj de programare cu scop general care poate fi folosit peste tot.
    - Acest lucru inseamna ca daca undeva este nevoie de programare, JavaScript poate fi utilizat acolo.
    `,
  },
  {
    question:
      "Care este limitarea folosirii 'switch case' in schimbul folosirii 'else if'?",
    option1: `'switch case' compara doar egalitatea`,
    option2: `'switch case' este mai lent`,
    option3: `'switch case' poate compara doar doua valori`,
    option4: `'switch case' este mai dificil de invatat`,
    answer: 1,
    explanation: `
    - Desi 'switch case' reprezinta, de multe ori, o varianta mai eleganta a 'else if-ului', acesta nu poate fi utilizat in cazul compararii folosind > sau <.
    - Acesta este utilizat doar pentru a verifica situatii de egalitate.
    `,
  },
  {
    question: "Ce folosim pentru a scrie in console browser-ului?",
    option1: `console.write()`,
    option2: `console.output()`,
    option3: `console.log()`,
    option4: `console.writeHTML()`,
    answer: 3,
    explanation: `
    - În JavaScript, console.log() este o funcție predefinită folosită pentru afișarea mesajelor sau valorilor în consola pentru dezvoltatori a browserului. 
    - Este o unealtă pentru depanarea codului, inspectarea variabilelor și înțelegerea mai buna a codului.
    `,
  },
  {
    question: "Care este scopul metodei 'Array.isArray()?",
    option1: `Filtreaza elementele unui array`,
    option2: `Verifica daca o variabila este array`,
    option3: `Creeaza un array nou`,
    option4: `Gaseste o anumita valoare dintr-un array`,
    answer: 2,
    explanation: `
    - În JavaScript, isArray() este o metoda folosita pentru a verifica daca o variabila este array sau nu. 
    - Returneaza o valoarea boolean (adevarat sau fals), in functie de variabila pe care o dam catre verificat.`,
  },
  {
    question: "Care este rezultatul expresiei de mai jos?",
    code: `
    Math.abs(-4);
    `,
    option1: `4`,
    option2: `-4`,
    option3: `0`,
    option4: `undefined`,
    answer: 1,
    explanation: `
    - Functia Math.abs() returneaza valoarea absoluta (adica modulul) a unui numar.`,
  },
  {
    question: "Care este rezultatul expresiei de mai jos?",
    code: `
    Math.ceil(4.3);
    `,
    option1: `4`,
    option2: `5`,
    option3: `3`,
    option4: `6`,
    answer: 2,
    explanation: `
    - Functia Math.abs() returneaza cel mai mic numar intreg care este mai mare sau egal cu numarul specificat de noi. 
    - Mai pe scurt, aproximeaza 'in sus'.`,
  },
  {
    question: "Care este rezultatul expresiei de mai jos?",
    code: `
    Math.floor(4.8);
    `,
    option1: `4`,
    option2: `5`,
    option3: `3`,
    option4: `6`,
    answer: 1,
    explanation: `
    - Functia Math.abs() returneaza cel mai mare numar intreg care este mai mic sau egal cu numarul specificat de noi. 
    - Mai pe scurt, aproximeaza 'in jos'.`,
  },
  {
    question: "Care este rezultatul expresiei de mai jos?",
    code: `
    Math.sqrt(25);
    `,
    option1: `5`,
    option2: `6`,
    option3: `50`,
    option4: `7`,
    answer: 1,
    explanation: `
    - Functia Math.abs() returneaza radacina patrata a numarului specificat de noi. 
    - Mai pe scurt, calculeaza radical din numarul nostru.`,
  },
  {
    question: "Care este rolul metodei Array.shift(), in JavaScript?",
    option1: `Adauga un element la finalul unui array`,
    option2: `Creeaza un nou array, rezultate in urma unei operatii specificate de noi`,
    option3: `Filtreaza elementele unui array`,
    option4: `Elimina primul element al unui array si il returneaza`,
    answer: 4,
    explanation: `
    - În JavaScript, Array.shift() este o metodă utilizată pentru a elimina primul element dintr-un array și a returna valoarea eliminată.
    - Dacă arrayul este gol (nu are elemente), shift() returnează undefined.
    - shift() modifică arrayul original.`,
  },
  {
    question: "Care este rolul metodei Array.pop(), in JavaScript?",
    option1: `Adauga un element la finalul unui array`,
    option2: `Elimina ultimul element dintr-un array si il returneaza`,
    option3: `Filtreaza elementele unui array`,
    option4: `Creeaza un array nou, in functie de ce conditii specificam`,
    answer: 2,
    explanation: `
    - În JavaScript, Array.pop() este o metodă utilizată pentru a elimina ultimul element dintr-un array și a returna valoarea eliminată.
    - Dacă arrayul este gol (nu are elemente), pop() returnează undefined.
    - pop() modifică arrayul original.
    
    const fructe = ['Mere','Pere','Mango','Ananas'];
    const eliminareFruct = fructe.pop();

    console.log(eliminareFruct); // Ananas
    console.log(fructe); // ['Mere','Pere','Mango'];
    `,
  },
  {
    question: "Care este scopul functiei isNaN(), in JavaScript?",
    option1: `Verifica daca o variabila este array`,
    option2: `Intarzie executarea unei functii sau a unei bucati de cod`,
    option3: `Nu exista aceasta functie in JavaScript`,
    option4: `Determina daca o valoare este sau nu un numar`,
    answer: 4,
    explanation: `
    - NaN inseamna Not-a-Number, iar functia isNaN() verifica daca o variabila este sau nu un numar.
    - Returneaza true daca valoarea este NaN, iar false daca valoarea nu este NaN, adica este numar.`,
  },
  {
    question: "Care este scopul metodei Array.splice(), in JavaScript?",
    option1: `Gaseste prima potrivire a unui element intr-un array`,
    option2: `Creeaza un array nou cu elemente rezultate in urma unor actiuni stabilite de noi`,
    option3: `Elimina sau inlocuieste elemente dintr-un array, la un anumit index specificat de noi`,
    option4: `Sorteaza elementele unui array in ordine descrescatoare `,
    answer: 3,
    explanation: `
    - Array.splice() este o metodă în JavaScript folosită pentru a modifica conținutul unui array.
    - Poți specifica indexul de pornire și numărul de elemente pe care vrei să le elimini din array.
    - Poți insera elemente noi într-o anumită poziție din array.
    - Poți elimina elemente existente și insera altele noi simultan.`,
  },
  {
    question: "Care este rezultatul urmatoarei comparatii?",
    code: `
    console.log("2" > "12");
    `,
    option1: `true`,
    option2: `false`,
    option3: `String-urile nu se pot compara`,
    option4: `undefined`,
    answer: 1,
    explanation: `
    - In JavaScript, compararea sirurilor de caractere (strings) se realizeaza lexicografic (adica in ordinea crescatoare a literelor si cifrelor).
    - In cazul nostru, din moment ce caracterul "2" este mai mare lexicografic decat caracterul "1", va rezulta ca "2" > "12" este adevarat (true).`,
  },
  {
    question: "Care este rezultatul codului urmator?",
    code: `
    let x = 10;

    function test() {
      x = 20;
      console.log(x);
    }

    foo();
    console.log(x);
    `,
    option1: `20 10`,
    option2: `20 20`,
    option3: `10 20`,
    option4: `10 10`,
    answer: 2,
    explanation: `
    - Variabile x este declarata in scopul global si este modificata in interiorul functiei test.
    - Cand functia test() este apelata, seteaza valoarea lui x la 20 si afiseaza 20.
    - Dupa ce functia test() este apelata, din moment ce x a fost modificat global, valoarea lui x in scop global este acum 20. 
    - Prin urmare, al doilea console.log(x) va afisa tot 20. 
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    let x = {y:1};
    let z = x;
    z.y = 10;
    `,
    option1: `1`,
    option2: `10`,
    option3: `undefined`,
    option4: `ReferenceError`,
    answer: 2,
    explanation: `
    - Cand se executa z = x, z devine o referinta a aceluiasi obiect precum x.
    - Deci, orice modificare a obiectului prin intermediul lui z va fi reflectata si pentru x.
    - Cand z.y este setat ca fiind 10, x.y devine 10, deoarece atat x, cat si z fac referinta la acelasi obiect. 
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    function multiply(a, b=2) {
      return a * b;
    }

    console.log(multiply(5));
    console.log(multiply(5, 3));
    `,
    option1: `10 15`,
    option2: `NaN 15`,
    option3: `10 NaN`,
    option4: `NaN NaN`,
    answer: 1,
    explanation: `
    - multiply(5): Functia este apelata cu un singur argument, 5. Cat timp b nu este specificat, se va folosi valoarea default, care este precizata in parametrii functiei, adica 2. Deci, functia va returna 5 * 2, adica 10.
    - multiply(5, 3): Aici a si b sunt specificati (5 si 3), deci functia va returna 5 * 3, adica 15. 
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    console.log(typeof (() => {}));
    `,
    option1: `"function"`,
    option2: `"object"`,
    option3: `"undefined"`,
    option4: `"string"`,
    answer: 1,
    explanation: `
    - Codul defineste o functie arrow () => {}.
    - In JavaScript, functiile sunt obiecte, dar operatorul 'typeof' va returna totusi "function" pentru orice functie, inclusiv pentru functiile arrow. 
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    const a = [1,2,3];
    const b = [1,2,3];
    const c = "1,2,3";

    console.log(a == c);
    console.log(b == c);
    console.log(a == b);
    `,
    option1: `true, true, true`,
    option2: `true, true, false`,
    option3: `false, false, false`,
    option4: `true, false, false`,
    answer: 2,
    explanation: `
    - Array-urile in JavaScript sunt comparate prin referinta, nu prin valoare.
    - a == c si b == c sunt adevarate deaorece cand un array (a sau b) este comparat cu un string (c), array-ul este convertit in string, adica "1,2,3". 
    - Deci, comparatiile vor fi "1,2,3" == "1,2,3".
    - a == b este fals deoarece, chiar daca a si b contin aceleasi elemente, a si b reprezinta instante/obiecte diferite in memorie.
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    function greet(nume) {
      name && console.log('Salut,' + nume);
    }

    greet('Cosmin');
    greet();
    `,
    option1: `Salut, Cosmin si Salut, undefined`,
    option2: `Salut, Cosmin si no output`,
    option3: `undefined si Salut, undefined`,
    option4: `Salut, Cosmin si undefined`,
    answer: 2,
    explanation: `
    - functia verifica daca 'nume' este adevarat (adica valoare truthy).
    - Daca nume exista (daca ii transmitem o valoare), va executa console.log('Salut,' + nume).
    - Daca nume nu exista (adica nu ii transmitem nicio valoare), este valoarea falsy, functia nu va executa console.log(), nerezultannd vreun mesaj (no output).
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
   const haine = ['geaca', 'tricou'];
   haine.length = 0;

   console.log(haine[0]);
    `,
    option1: `undefined`,
    option2: `'geaca'`,
    option3: `[]`,
    option4: `tricou`,
    answer: 1,
    explanation: `
    - Setand lungimea array-ului ca fiind 0, 'golim' array-ul.
    - Dupa haine.length = 0, array-ul haine va fi gol.
    - Deci, accesand primul element (haine[0]), va fi returnat 'undefined', deoarece nu este niciun element definit la index-ul 0 din array.
    `,
  },
  {
    question: "La ce se refera termenul de 'functie callback' in JavaScript?",
    option1: `O functie care se apeleaza singura, in mod recursiv`,
    option2: `O functie trecuta ca argument unei alte functii, pentru a fi executata mai tarziu`,
    option3: `O functie care declanseaza evenimente bazate pe interactiunile utilizatorului`,
    option4: `O functie care genereaza numere aleatorii`,
    answer: 2,
    explanation: `
    - O functie callback se refera la o functie 'oferita' ca argument unei alte functii, cu scopul de a fi executata mai tarziu.
    - De cele mai multe ori, aceste functii sunt utilizate pentru operatii asincrone sau pentru manipularea evenimentelor (events).
    `,
  },
  {
    question: "Ce face operatorul 'spread' (...) in JavaScript?",
    option1: `Concateneaza doua array-uri`,
    option2: `Copiaza proprietatile unui obiect in alt obiect`,
    option3: `Converteste un sir de caractere intr-un array de caractere`,
    option4: `Operatorul 'spread' nu este specific JavaScript`,
    answer: 2,
    explanation: `
    - Operatorul 'spread', ... , este o caracteristica variantei JavaScript ES6.
    - Este folosit pentru a crea o copie a unui obiect sau array. 
    `,
  },
  {
    question: "Care nu este un tip de date valid in JavaScript?",
    option1: `undefined`,
    option2: `number`,
    option3: `boolean`,
    option4: `integer`,
    answer: 4,
    explanation: `
    - JavaScript nu are tipul de date 'integer'.
    - In schimb, are tipul de date 'number', acesta reprezentand atat numerele intregi, cat si pe cele cu virgula mobila  
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    function test() {
      var x = 1;
      if (true) {
        var x = 2;
        console.log(x);
      }
      console.log(x);
    }

    test ();
    `,
    option1: `1 2`,
    option2: `2 1`,
    option3: `2 2 `,
    option4: `1 1 `,
    answer: 3,
    explanation: `
    - In acest cod este folosit 'var' pentru a declara o variabila 'x'.
    - 'var' are function scope, adica x-ul declarat in interiorul lui 'if' este acelasi ca x-ul din afara 'if-ului'.
    - Deci, cand lui x i se reatribuie valoarea 2 in interiorul blocului 'if', afecteaza si x-ul din exteriorul blocului 'if'. 
    - Deci, valoarea afisata este 2 in ambele cazuri.
    `,
  },
  {
    question:
      "Ce returneaza operatorul 'typeof' cand este aplicat asupra lui 'null'?",
    option1: `"object"`,
    option2: `"null"`,
    option3: `"undefined"`,
    option4: `"number"`,
    answer: 1,
    explanation: `
    - Chiar daca 'null' este un tip primitiv, operatorul typeof va returna "object".
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    console.log(typeof NaN);
    `,
    option1: `"object"`,
    option2: `"NaN"`,
    option3: `"undefined"`,
    option4: `"number"`,
    answer: 4,
    explanation: `
    - NaN inseamna 'Not a Number', dar, in mod ironic, JavaScript, el este considerat numar (cand vorbim de tipul acestuia).
    Deci, linia de cod va returna "number".
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    let num = 8;
    let estePar = num % 2 === 0 ? true : false;
    console.log(estePar);
    `,
    option1: `true`,
    option2: `false`,
    option3: `8`,
    option4: `undefined`,
    answer: 1,
    explanation: `
    - Codul foloseste operatorul ternar (ternary operator) pentru a verifica daca variabila 'num' este un numar par sau nu. 
    - Tinand cond de faptul ca 8 % 2 = 0, conditia num % 2 === 0 este adevarata, deci operatorul ternar va returna true.
    - Cat timp estePar este setat ca fiind adevarat, console.log(estePar) a afisa 'true'.
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    console.log("2" * "3");
    `,
    option1: `Error`,
    option2: `NaN`,
    option3: `"23"`,
    option4: `6`,
    answer: 4,
    explanation: `
    - in JavaScript, cand este folosit operatorul '*' cu string-uri, acestea sunt convertita in numere si se efectueaza inmultirea.
    - Deci, "2" * "3" este tratat la fel ca 2 * 3, care afiseaza 6.
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    console.log(a);
    
    var a = 10;
    `,
    option1: `undefined`,
    option2: `10`,
    option3: `Eroare`,
    option4: `0`,
    answer: 1,
    explanation: `
    - Chiar daca variabila 'a' este declarata mai tarziu in cod, este inca accesibila in top-ul scopului (in care este definita), datorita conceptului de 'hoisting'. 
    - Cu toate acestea, valoarea lui 'a' nu este definita pana cand nu se realizeaza atribuirea propriu-zisa (a = 10). 
    - In acest caz, in care are loc conceptul de 'hoisting', variabilele declarate cu 'var' au o valoarea default de 'undefined', spre deosebire de cele declarate cu 'let' sau 'const'.
    - Deci, chiar daca prin hoisting nu se si atribuie valoarea respectiva, ci doar este citita existenta variabilei 'a', care este declarata cu 'var', aceasta va avea valoarea 'undefined' pana cand linia de cod 'var a = 10' este executata.
    `,
  },
  {
    question: "In JavaScript, care este principala utilizare a obiectului Set?",
    option1: `Stocheaza valori unice`,
    option2: `De a stoca date de tip cheie-valoare`,
    option3: `De a executa o functie in mod repetat, la intervale specifice de timp`,
    option4: `De a lucra cu functii asincrone`,
    answer: 1,
    explanation: `
    - În JavaScript, un set este o colecție de valori unice, ceea ce înseamnă că nu poate conține duplicate ale aceluiași element.
    - Acesta este similar cu un array, dar cu două diferențe majore: în primul rând, un set nu menține ordinea elementelor sale (elementele sunt sortate implicit în ordinea lor de inserare), iar în al doilea rând, un set nu permite accesul la elemente prin index, deoarece nu sunt indexate.
    - Set-urile sunt utile atunci când lucrăm cu o mulțime de valori distincte și vrem să ne asigurăm că fiecare valoare apare doar o singură dată în colecție. 
    `,
  },
  {
    question: "Ce presupune functia fetch()?",
    option1: `Executa o anumita functie asupra fiecarui element dintr-un array`,
    option2: `Aplica o anumita functie elementelor unui array si returneaza noul array, modificat`,
    option3: `Obtine/Extrage resurse de la un server`,
    option4: `Converteste un array intr-un string`,
    answer: 3,
    explanation: `
    - Functia fetch() în JavaScript este folosită pentru a face cereri HTTP către servere web și pentru a obține răspunsuri.
    - Poți trimite cereri GET, POST, PUT, DELETE și altele folosind fetch().
    -  fetch() returnează un răspuns primit de la server, permițându-ți să procesezi datele în codul tău JavaScript.
    `,
  },
  {
    question: "Ce va afisa codul urmator?",
    code: `
    console.log(a);
    var a = 10;
    `,
    option1: `undefined`,
    option2: `a`,
    option3: `10`,
    option4: `Eroare la declarare`,
    answer: 1,
    explanation: `
    - Chiar daca 'a' este declarat mai tarziu in cod, este inca accesibil in 'partea de sus' a scopului in care se afla, datorita conceptului de hoisting.
    - Cu toate acestea, valoarea lui 'a' nu este definita pana cand i se atribuie efectiv o valoare, motiv pentru care se va afisa 'undefined', adica nedefinit.
    - Deci, a este recunoscut (deci vede faptul ca este declarat), insa nu ii este cunoscuta inca valoarea.
    - Acest concept se aplica variabilelor declarate cu 'var'. Pentru 'let'si 'const' nu este la fel. 
    `,
  },
  {
    question: "Care va fi rezultatul urmatorului cod?",
    code: `
    var a = [1,2,3];
    var b = [1,2,3];
    console.log(a == b);
    `,
    option1: `true`,
    option2: `false`,
    option3: `Error`,
    option4: `Array-urile nu se pot compara asa`,
    answer: 2,
    explanation: `
    - Aceasta intrebare testeaza cunostintele despre compararea array-urilor in JavaScript.
    - Chiar daca 'a' si 'b' contin aceleasi valori, array-urile sunt tipuri de referinta.
    - Cand compari doua array-uri folosind operatorul de egalitate, se verifica daca amandoi operanzii fac referire la acelasi array din memorie.
    - In cazul nostru, 'a' si 'b' fac referire la spatii diferite de memorie, deoarece sunt stocate in locuri diferite, fiind recunoscute drept doua array-uri diferite. 
    `,
  },
  {
    question:
      "Ce metoda HTTP este folosita de obicei pentru a extrage date de la un API?",
    option1: `GET`,
    option2: `POST`,
    option3: `PUT`,
    option4: `DELETE`,
    answer: 1,
    explanation: `
    - Metoda HTTP GET în JavaScript este folosită pentru a trimite cereri de tip GET către un server web pentru a obține date.
    - Această cerere este utilizată în principal pentru a solicita resurse, cum ar fi fișierele HTML, imagini, scripturi sau alte tipuri de date, dintr-un server. 
    -  Pentru a efectua o cerere GET în JavaScript, poți utiliza diferite metode, precum XMLHttpRequest sau fetch().
    - 
    `,
  },
  {
    question: "Ce va afisa in consola codul de mai jos?",
    code: `
console.log(typeof 1);
console.log(typeof String);
console.log(typeof typeof 1);
  `,
    option1: `"number", "function", "string"`,
    option2: `"number", "string", "number"`,
    option3: `"number", "string", "string"`,
    option4: `"number", "string", "function"`,
    answer: 3,
  },
  {
    question: "Cum obtii primul cuvant din sirul de caractere?",
    code: `
    const text = "Hello World";
    `,
    option1: `text.split(" ")[0]`,
    option2: `text.trim(0, 5)`,
    option3: `text.splice(0, 5)`,
    option4: `text.join(" ")[0]`,
    answer: 1,
  },
  {
    question: "Ce va afisa in consola codul de mai jos?",
    code: `
    console.log(typeof 1);
    console.log(typeof String);
    console.log(typeof typeof 1);
  `,
    option1: `"number", "function", "string"`,
    option2: `"number", "string", "number"`,
    option3: `"number", "string", "string"`,
    option4: `"number", "string", "function"`,
    answer: 3,
  },
  {
    question: "Ce va afisa codul de mai jos?",
    code: `
    function func(x) {
      console.log(typeof x);
      console.log(argument.length);
    }
    func();
    func('1', '2', '3');
  `,
    option1: `"undefined", 0, "number", 3`,
    option2: `"undefined", 0, "string", 3`,
    option3: `"undefined", "undefined", "string", "undefined"`,
    option4: `"undefined", 1, "string", 3`,
    answer: 2,
  },
  {
    question:
      "Ce metodă de array (array method) poate fi utilizată pentru a verifica dacă cel puțin un element din array îndeplinește o anumită condiție?",
    option1: `every`,
    option2: `map`,
    option3: `reduce`,
    option4: `some`,
    answer: 4,
  },
];

export const links = [
  {
    name: "HTML",
    link: "/test/1",
  },
  {
    name: "CSS",
    link: "/test/2",
  },
  {
    name: "JavaScript",
    link: "/test/3",
  },
];
