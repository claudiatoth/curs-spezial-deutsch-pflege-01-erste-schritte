// ============================================
// THEORY.JS — Pflege 1: Erste Schritte
// Salutări + politețe + alfabet + cifre 0-10 + „nu înțeleg" + gramatică
// Claudia Toth · Annettes Deutschkurs · A1.1
// ============================================

const theoryHTML = `
<div class="theory-intro">
  <h4>💚 Bun venit în primii pași în germana de îngrijire</h4>
  <p>E prima ta zi. Bagaje făcute, telefonul plin de contacte, iar mâine ești în casa unei doamne pe care n-ai întâlnit-o niciodată. <strong>Respiră</strong>. În următoarea oră înveți tot ce-ți trebuie pentru primele 5 minute.</p>
  <p>Cele 5 mari instrumente: <strong>salutările</strong>, <strong>politețea</strong>, <strong>alfabetul</strong>, <strong>cifrele 0-10</strong> și — cel mai important — <strong>cum spui „nu înțeleg"</strong> politicos. Fără astea, te blochezi. Cu astea, ești deja la jumătatea drumului.</p>
</div>

<div class="theory-pillars">
  <h4>🏛️ Cei 4 piloni ai lecției</h4>
  <div class="pillars-grid">
    <div class="pillar-card">
      <div class="pillar-icon">🎩</div>
      <div class="pillar-title">Sie formal de la început</div>
      <div class="pillar-text">Cu pacientul vorbești ÎNTOTDEAUNA cu Sie. Niciodată „du". Asta-i prima regulă a Pflege.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">👋</div>
      <div class="pillar-title">Salutările pe ore</div>
      <div class="pillar-text">Guten Morgen până la 11. Guten Tag până seara. Guten Abend după 18. Gute Nacht la culcare.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🆘</div>
      <div class="pillar-title">Frazele salvatoare</div>
      <div class="pillar-text">„Ich verstehe nicht" · „Bitte langsamer" · „Wiederholen Sie" — astea te scot din orice impas.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🔤</div>
      <div class="pillar-title">Alfabet + cifre</div>
      <div class="pillar-text">Pentru adresă, telefon, numele tău silabisit. Cifrele 0-10 sunt baza tuturor.</div>
    </div>
  </div>
</div>

<!-- ============================================
     SUB 1 — Salutări de bază
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(0)">
    <h4>1️⃣ Salutările — primele cuvinte ale zilei</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-0">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-1" onclick="toggleAudio(event, 'audio-1')">▶</button>
        <audio id="audio-1" preload="none"><source src="audio/01-saluturi.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">În Germania, salutările se schimbă cu <strong>ora din zi</strong>. Folosește-le pe cele potrivite — pacientul observă imediat. <em>„Guten Morgen"</em> la 14:00 sună la fel de straniu ca <em>„Bună dimineața"</em> spus seara.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th><th>⏰ Când o spui</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Guten Morgen</span></td><td>Bună dimineața</td><td>Până la ~11:00 (la trezit + dimineața)</td></tr>
          <tr><td><span class="pflege-fraza">Guten Tag</span></td><td>Bună ziua</td><td>De la 11:00 până la 18:00 (formal, oriunde)</td></tr>
          <tr><td><span class="pflege-fraza">Guten Abend</span></td><td>Bună seara</td><td>De la 18:00 în sus (până la culcare)</td></tr>
          <tr><td><span class="pflege-fraza">Gute Nacht</span></td><td>Noapte bună</td><td>La culcare — exact înainte să închizi ușa</td></tr>
          <tr><td><span class="pflege-fraza">Hallo</span></td><td>Salut</td><td>Informal — cu colege, prietene, la telefon</td></tr>
          <tr><td><span class="pflege-fraza">Auf Wiedersehen</span></td><td>La revedere</td><td>Formal — când pleci de la pacient/medic</td></tr>
          <tr><td><span class="pflege-fraza">Tschüss</span></td><td>Pa</td><td>Informal — cu prietene, colege</td></tr>
          <tr><td><span class="pflege-fraza">Bis später</span></td><td>Pe mai târziu</td><td>Când mai vii înapoi în aceeași zi</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Regional — ce mai poți auzi</h5>
      <p><strong>Grüß Gott</strong> [grues got] — în Bayern și Austria, înlocuiește „Guten Tag". <strong>Servus</strong> — și mai informal, în sudul Germaniei. <strong>Moin</strong> sau <strong>Moin Moin</strong> — în nordul Germaniei, orice oră a zilei.</p>
      <p>Tu rămâi pe <strong>Guten Morgen / Guten Tag / Guten Abend</strong> — funcționează peste tot și sună întotdeauna respectuos.</p>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Capcană românește</h5>
      <p>În română „Bună" e neutru — la 10 dimineața sau 4 după-amiază. În germană NU funcționează așa. Dacă spui <em>„Guten Tag"</em> la pacient la 7 dimineața, deja a notat: „vine cu greșeli". O simplă <strong>„Guten Morgen"</strong> îi spune: „știe ce vorbește".</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 2 — Politețea esențială
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(1)">
    <h4>2️⃣ Politețea — Bitte, Danke, Entschuldigung</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-1">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-2" onclick="toggleAudio(event, 'audio-2')">▶</button>
        <audio id="audio-2" preload="none"><source src="audio/02-politete.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Politețea în germană e simplă: 3 cuvinte le folosești la fiecare 5 minute. <em>Bitte</em>, <em>Danke</em>, <em>Entschuldigung</em>. Pacientul percepe imediat dacă ești caldă sau rece — politețea NU înseamnă slăbiciune, înseamnă RESPECT profesional.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th><th>💡 Când o folosești</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Bitte</span></td><td>Vă rog · Poftiți</td><td>Multifuncțional — îi dai ceva, ceri ceva, oferi ajutor</td></tr>
          <tr><td><span class="pflege-fraza">Bitte schön</span></td><td>Poftiți (mai cald)</td><td>Când îi întinzi mâncarea sau un obiect cu zâmbet</td></tr>
          <tr><td><span class="pflege-fraza">Danke</span></td><td>Mulțumesc</td><td>De fiecare dată când primești ceva sau te ajută</td></tr>
          <tr><td><span class="pflege-fraza">Danke schön</span></td><td>Mulțumesc frumos</td><td>Mai cald — varianta pentru momente speciale</td></tr>
          <tr><td><span class="pflege-fraza">Vielen Dank</span></td><td>Mulțumiri multe</td><td>Cea mai formală — la doctor, în farmacie</td></tr>
          <tr><td><span class="pflege-fraza">Entschuldigung</span></td><td>Scuze · Mă scuzați</td><td>Ai greșit, ai bruscat sau ÎNTRERUPI o conversație</td></tr>
          <tr><td><span class="pflege-fraza">Verzeihung</span></td><td>Iertați-mă</td><td>Mai formal · când greșești ceva important</td></tr>
          <tr><td><span class="pflege-fraza">Gern geschehen</span></td><td>Cu plăcere</td><td>Răspunsul tău când pacienta îți mulțumește</td></tr>
        </tbody>
      </table>
    </div>

    <div class="grammar-tip">
      <h5>💡 Regulă de aur a Pflege</h5>
      <p>În germană, <strong>„Bitte" la sfârșit transformă orice în politețe</strong>. „Schließen Sie die Tür" = Închideți ușa (sec). „Schließen Sie die Tür, <strong>bitte</strong>" = Vă rog închideți ușa. Diferența între ordin și cerere = un cuvânt.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 3 — Alfabetul german
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(2)">
    <h4>3️⃣ Alfabetul german — pentru când îți silabisesc numele</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-2">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-3" onclick="toggleAudio(event, 'audio-3')">▶</button>
        <audio id="audio-3" preload="none"><source src="audio/03-alfabet.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Alfabetul german are <strong>26 litere + 4 speciale</strong> (Ä, Ö, Ü, ß). Vei avea nevoie de el la: telefon (când îți spune adresa), nume (când scriu „I-O-N-E-S-C-U"), spitalul (numele pacientei pe documente). Învață-le pe pronunție — nu pe scriere.</p>

    <div class="alfabet-grid">
      <div class="alfabet-row">
        <div class="alfabet-card"><span class="litera">A</span><span class="pronuntie">[a]</span></div>
        <div class="alfabet-card"><span class="litera">B</span><span class="pronuntie">[be]</span></div>
        <div class="alfabet-card"><span class="litera">C</span><span class="pronuntie">[țe]</span></div>
        <div class="alfabet-card"><span class="litera">D</span><span class="pronuntie">[de]</span></div>
        <div class="alfabet-card"><span class="litera">E</span><span class="pronuntie">[e]</span></div>
        <div class="alfabet-card"><span class="litera">F</span><span class="pronuntie">[ef]</span></div>
        <div class="alfabet-card"><span class="litera">G</span><span class="pronuntie">[ghe]</span></div>
        <div class="alfabet-card"><span class="litera">H</span><span class="pronuntie">[ha]</span></div>
      </div>
      <div class="alfabet-row">
        <div class="alfabet-card"><span class="litera">I</span><span class="pronuntie">[i]</span></div>
        <div class="alfabet-card"><span class="litera">J</span><span class="pronuntie">[iot]</span></div>
        <div class="alfabet-card"><span class="litera">K</span><span class="pronuntie">[ka]</span></div>
        <div class="alfabet-card"><span class="litera">L</span><span class="pronuntie">[el]</span></div>
        <div class="alfabet-card"><span class="litera">M</span><span class="pronuntie">[em]</span></div>
        <div class="alfabet-card"><span class="litera">N</span><span class="pronuntie">[en]</span></div>
        <div class="alfabet-card"><span class="litera">O</span><span class="pronuntie">[o]</span></div>
        <div class="alfabet-card"><span class="litera">P</span><span class="pronuntie">[pe]</span></div>
      </div>
      <div class="alfabet-row">
        <div class="alfabet-card"><span class="litera">Q</span><span class="pronuntie">[ku]</span></div>
        <div class="alfabet-card"><span class="litera">R</span><span class="pronuntie">[er]</span></div>
        <div class="alfabet-card"><span class="litera">S</span><span class="pronuntie">[es]</span></div>
        <div class="alfabet-card"><span class="litera">T</span><span class="pronuntie">[te]</span></div>
        <div class="alfabet-card"><span class="litera">U</span><span class="pronuntie">[u]</span></div>
        <div class="alfabet-card"><span class="litera">V</span><span class="pronuntie">[fau]</span></div>
        <div class="alfabet-card"><span class="litera">W</span><span class="pronuntie">[ve]</span></div>
        <div class="alfabet-card"><span class="litera">X</span><span class="pronuntie">[ics]</span></div>
      </div>
      <div class="alfabet-row">
        <div class="alfabet-card"><span class="litera">Y</span><span class="pronuntie">[üpsilon]</span></div>
        <div class="alfabet-card"><span class="litera">Z</span><span class="pronuntie">[țet]</span></div>
        <div class="alfabet-card special"><span class="litera">Ä</span><span class="pronuntie">[ae]</span></div>
        <div class="alfabet-card special"><span class="litera">Ö</span><span class="pronuntie">[oe]</span></div>
        <div class="alfabet-card special"><span class="litera">Ü</span><span class="pronuntie">[ue]</span></div>
        <div class="alfabet-card special"><span class="litera">ß</span><span class="pronuntie">[s ascuțit]</span></div>
      </div>
    </div>

    <div class="grammar-tip">
      <h5>💡 Pronunție atenție</h5>
      <p><strong>V</strong> se pronunță [fau] — NU [ve] ca în română. <strong>W</strong> se pronunță [ve] — adică INVERS față de română.<br>
      <strong>J</strong> se pronunță [iot] — sună ca „i" românesc, nu ca „j".<br>
      <strong>Z</strong> se pronunță [țet] — ca „ț" românesc, NU ca „z".</p>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Cele 4 caractere speciale</h5>
      <p><strong>Ä, Ö, Ü</strong> = vocale cu „umlaut" (cele două puncte). În scris fără tastatură germană, înlocuiește: <strong>Ä → AE</strong>, <strong>Ö → OE</strong>, <strong>Ü → UE</strong>.<br>
      <strong>ß</strong> = „s ascuțit" (eszett), apare doar în germană. Înlocuiește cu <strong>SS</strong> dacă tastatura nu o are. Ex: „Straße" → „Strasse".</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 4 — Cifrele 0-10
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(3)">
    <h4>4️⃣ Cifrele 0-10 — pentru telefon, adresă, oră</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-3">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-4" onclick="toggleAudio(event, 'audio-4')">▶</button>
        <audio id="audio-4" preload="none"><source src="audio/04-cifre.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Cifrele 0-10 sunt <strong>baza tuturor</strong>. Pe ele construim 11-100 mai târziu (Lecția 8). Astăzi le învățăm temeinic — le vei rosti la telefon, când îți dă codul de la ușă, când te întreabă câți copii ai.</p>

    <div class="cifre-grid">
      <div class="cifra-card"><span class="cifra">0</span><span class="german">null</span><span class="ro-pron">[nul]</span></div>
      <div class="cifra-card"><span class="cifra">1</span><span class="german">eins</span><span class="ro-pron">[ains]</span></div>
      <div class="cifra-card"><span class="cifra">2</span><span class="german">zwei</span><span class="ro-pron">[țvai]</span></div>
      <div class="cifra-card"><span class="cifra">3</span><span class="german">drei</span><span class="ro-pron">[drai]</span></div>
      <div class="cifra-card"><span class="cifra">4</span><span class="german">vier</span><span class="ro-pron">[fir]</span></div>
      <div class="cifra-card"><span class="cifra">5</span><span class="german">fünf</span><span class="ro-pron">[fünf]</span></div>
      <div class="cifra-card"><span class="cifra">6</span><span class="german">sechs</span><span class="ro-pron">[zecs]</span></div>
      <div class="cifra-card"><span class="cifra">7</span><span class="german">sieben</span><span class="ro-pron">[zibăn]</span></div>
      <div class="cifra-card"><span class="cifra">8</span><span class="german">acht</span><span class="ro-pron">[aht]</span></div>
      <div class="cifra-card"><span class="cifra">9</span><span class="german">neun</span><span class="ro-pron">[noin]</span></div>
      <div class="cifra-card"><span class="cifra">10</span><span class="german">zehn</span><span class="ro-pron">[țen]</span></div>
    </div>

    <div class="grammar-tip">
      <h5>💡 La telefon — „zwo" în loc de „zwei"</h5>
      <p>Când silabisesc un număr de telefon, mulți germani spun <strong>„zwo"</strong> [țvo] în loc de <em>„zwei"</em>. Motiv: „zwei" și „drei" sună aproape la fel — și pe linie proastă te confunzi. Tu poți spune la fel — sună profesionist.</p>
    </div>

    <div class="capcana-box">
      <h5>⚠️ Cele 3 capcane de pronunție</h5>
      <p><strong>vier</strong> [fir] — sună ca „four" în engleză, NU „vir".<br>
      <strong>fünf</strong> [fünf] — Ü-ul german, NU „fuf" sau „funf".<br>
      <strong>sechs</strong> [zecs] — sună ca „sex" în engleză, NU [seh-s]. Da, e ciudat. E ok.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 5 — „Nu înțeleg" — frazele salvatoare
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(4)">
    <h4>5️⃣ „Nu înțeleg" — frazele salvatoare</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-4">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-5" onclick="toggleAudio(event, 'audio-5')">▶</button>
        <audio id="audio-5" preload="none"><source src="audio/05-nu-inteleg.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Astea sunt <strong>cele mai importante 5 fraze</strong> ale primei tale luni în Germania. Dacă le știi pe astea, nu te blochezi niciodată. Pacientul vorbește repede? Spui una din ele. Cuvântul ăla nou pe care nu-l știi? O ceri pe alta. Nu cunoști semnificația? Mai bine întrebi politicos decât să te prefaci.</p>

    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>🇩🇪 Germană</th><th>🇷🇴 Română</th><th>🎯 Când o spui</th></tr>
        </thead>
        <tbody>
          <tr><td><span class="pflege-fraza">Ich verstehe nicht.</span></td><td>Nu înțeleg.</td><td>Direct, când n-ai prins ce ți-a spus</td></tr>
          <tr><td><span class="pflege-fraza">Wiederholen Sie, bitte.</span></td><td>Repetați, vă rog.</td><td>Vrei să auzi încă o dată</td></tr>
          <tr><td><span class="pflege-fraza">Noch einmal, bitte.</span></td><td>Încă o dată, vă rog.</td><td>Varianta mai scurtă — la fel de politicoasă</td></tr>
          <tr><td><span class="pflege-fraza">Sprechen Sie bitte langsamer.</span></td><td>Vă rog să vorbiți mai rar.</td><td>Când vorbește prea repede</td></tr>
          <tr><td><span class="pflege-fraza">Wie heißt das auf Deutsch?</span></td><td>Cum se spune pe germană?</td><td>Arați un obiect și întrebi numele</td></tr>
          <tr><td><span class="pflege-fraza">Was bedeutet das?</span></td><td>Ce înseamnă asta?</td><td>Auzi un cuvânt nou și vrei sensul</td></tr>
          <tr><td><span class="pflege-fraza">Können Sie das schreiben?</span></td><td>Puteți să scrieți?</td><td>Pe hârtie, când nu prinzi cuvântul vorbit</td></tr>
          <tr><td><span class="pflege-fraza">Entschuldigung, ich lerne noch.</span></td><td>Scuze, încă învăț.</td><td>Pe momentul de stres — recunoaște onest</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 De reținut — secretul Pflege</h5>
      <p>Nimeni nu se supără când ceri să repete sau să vorbească mai rar. <strong>TOȚI</strong> se supără când dai din cap că ai înțeles și după aceea greșești. Mai bine spui de 10 ori pe zi <em>„Wiederholen Sie, bitte"</em> decât să dai medicamentul greșit. Pacientul te respectă MAI mult când vede că vrei să-l înțelegi corect.</p>
    </div>

  </div>
</div>

<!-- ============================================
     SUB 6 — Gramatica pe scurt
     ============================================ -->
<div class="subsection">
  <div class="subsection-header" onclick="toggleSubSection(5)">
    <h4>6️⃣ 🧱 Gramatica pe scurt — sein + heißen + pronume</h4>
    <span class="sub-arrow">▼</span>
  </div>
  <div class="sub-section-content" id="sub-section-5">

    <div class="lesson-audio">
      <div class="audio-player">
        <button class="audio-btn" id="btn-audio-6" onclick="toggleAudio(event, 'audio-6')">▶</button>
        <audio id="audio-6" preload="none"><source src="audio/06-gramatica-recap.mp3" type="audio/mpeg"></audio>
      </div>
      <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
    </div>

    <p class="theory-intro-para">Două verbe construiesc 90% din prezentarea ta: <strong>sein</strong> (a fi) și <strong>heißen</strong> (a se numi). Plus 2 pronume: <strong>ich</strong> (eu) și <strong>Sie</strong> (dumneavoastră). Cu astea poți spune cine ești și cum te cheamă. Asta-i tot ce-ți trebuie azi.</p>

    <h5 style="color:#065f46; margin-top:18px;">🔁 Verbul SEIN (a fi)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Pronume</th><th>🇩🇪 Conjugare</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ich</strong> (eu)</td><td><strong>bin</strong></td><td>eu sunt</td></tr>
          <tr><td><strong>Sie</strong> (dumneavoastră)</td><td><strong>sind</strong></td><td>dumneavoastră sunteți</td></tr>
        </tbody>
      </table>
    </div>
    <p class="theory-intro-para"><em>Exemple:</em> <strong>Ich bin Andreea.</strong> (Eu sunt Andreea.) · <strong>Sind Sie müde?</strong> (Sunteți obosit/ă?)</p>

    <h5 style="color:#065f46; margin-top:18px;">🔁 Verbul HEISSEN (a se numi)</h5>
    <div class="pflege-table-container">
      <table class="pflege-table">
        <thead>
          <tr><th>Pronume</th><th>🇩🇪 Conjugare</th><th>🇷🇴 Traducere</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>ich</strong></td><td><strong>heiße</strong></td><td>eu mă numesc</td></tr>
          <tr><td><strong>Sie</strong></td><td><strong>heißen</strong></td><td>dumneavoastră vă numiți</td></tr>
        </tbody>
      </table>
    </div>
    <p class="theory-intro-para"><em>Exemple:</em> <strong>Ich heiße Andreea Popescu.</strong> · <strong>Wie heißen Sie?</strong> (Cum vă numiți?)</p>

    <div class="grammar-summary">
      <h5 style="color:#065f46; margin-bottom:10px;">🎯 Schema rapidă a primei tale conversații</h5>
      <table class="summary-table">
        <thead>
          <tr><th>Pas</th><th>Ce spui (DE)</th><th>Ce înseamnă (RO)</th></tr>
        </thead>
        <tbody>
          <tr><td>1. Salutarea</td><td><strong>Guten Morgen, Frau Müller.</strong></td><td>Bună dimineața, Doamnă Müller.</td></tr>
          <tr><td>2. Te prezinți</td><td><strong>Ich heiße Andreea.</strong></td><td>Eu mă numesc Andreea.</td></tr>
          <tr><td>3. Spui de unde vii</td><td><strong>Ich bin aus Rumänien.</strong></td><td>Sunt din România.</td></tr>
          <tr><td>4. Întrebare politicoasă</td><td><strong>Wie geht's Ihnen?</strong></td><td>Cum vă merge?</td></tr>
          <tr><td>5. Dacă nu înțelegi</td><td><strong>Bitte langsamer.</strong></td><td>Vă rog mai rar.</td></tr>
          <tr><td>6. La revedere</td><td><strong>Auf Wiedersehen.</strong></td><td>La revedere.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="final-note-box">
      <h5>💖 De reținut</h5>
      <p>Cu cele 6 propoziții de mai sus poți deja să te prezinți, să întrebi cum merge și să-ți iei rămas bun politicos. <strong>Astea sunt primii tăi pași.</strong> În lecția 2 înveți să răspunzi la întrebări (vârstă, copii, casnică sau divorțată). Astăzi — repetă-le până le rostești fără să te gândești.</p>
    </div>

  </div>
</div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
