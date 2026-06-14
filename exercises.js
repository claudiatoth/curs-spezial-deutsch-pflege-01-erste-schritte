// ============================================
// EXERCISES.JS — Pflege 1: Erste Schritte
// 7 exerciții × 10 itemi = 70 itemi total
// Claudia Toth · Annettes Deutschkurs · A1.1
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    if (item.sentence) {
        const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
        return item.accept.some(a => {
            const full = sentenceClean.replace(/____+/g, a);
            return normalizeAnswer(full) === u;
        });
    }
    return false;
}

// ============================================
// EX 1: Match — salutări DE → traducere RO
// ============================================
const ex1Data = [
    { id: 'a', de: 'Guten Morgen', accept: ['buna dimineata'], correct: 'Bună dimineața' },
    { id: 'b', de: 'Guten Tag', accept: ['buna ziua'], correct: 'Bună ziua' },
    { id: 'c', de: 'Guten Abend', accept: ['buna seara'], correct: 'Bună seara' },
    { id: 'd', de: 'Gute Nacht', accept: ['noapte buna'], correct: 'Noapte bună' },
    { id: 'e', de: 'Hallo', accept: ['salut', 'buna'], correct: 'Salut' },
    { id: 'f', de: 'Auf Wiedersehen', accept: ['la revedere'], correct: 'La revedere' },
    { id: 'g', de: 'Tschüss', accept: ['pa'], correct: 'Pa' },
    { id: 'h', de: 'Bis später', accept: ['pe mai tarziu', 'mai tarziu'], correct: 'Pe mai târziu' },
    { id: 'i', de: 'Wie heißen Sie?', accept: ['cum va numiti', 'cum va numiti?', 'cum va numiti dumneavoastra'], correct: 'Cum vă numiți?' },
    { id: 'j', de: 'Ich heiße Andreea.', accept: ['eu ma numesc andreea', 'ma numesc andreea', 'eu ma numesc andreea.'], correct: 'Eu mă numesc Andreea.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>👋 Scrie traducerea în română</strong> pentru fiecare salutare germană. Diacriticele sunt opționale.</div>';
    ex1Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇩🇪 ${it.de}</label><input type="text" id="ex1-${it.id}" placeholder="Scrie traducerea în română..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => {
        const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 2: Salutarea potrivită pe momentul zilei
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'E ora 8 dimineața. Pacientului îi spui: „____, Frau Müller."', translation: 'Bună dimineața', correct: 'Guten Morgen', accept: ['guten morgen'] },
    { id: 'b', sentence: 'E ora 14:00. Doctorul intră în casă. Saluți cu: „____, Herr Doktor."', translation: 'Bună ziua', correct: 'Guten Tag', accept: ['guten tag'] },
    { id: 'c', sentence: 'E ora 19:00. Pacientului care vine la cină îi spui: „____, Frau Müller."', translation: 'Bună seara', correct: 'Guten Abend', accept: ['guten abend'] },
    { id: 'd', sentence: 'O conduci pe Frau Müller la culcare. Înainte să închizi ușa: „____, Frau Müller."', translation: 'Noapte bună', correct: 'Gute Nacht', accept: ['gute nacht'] },
    { id: 'e', sentence: 'Pleci la cumpărături. La revedere formal: „____, Frau Müller."', translation: 'La revedere', correct: 'Auf Wiedersehen', accept: ['auf wiedersehen'] },
    { id: 'f', sentence: 'Te întâlnești cu o colegă pe stradă. Saluți informal: „____, Maria!"', translation: 'Salut', correct: 'Hallo', accept: ['hallo'] },
    { id: 'g', sentence: 'Te despărți de o prietenă. Mai informal: „____, Maria!"', translation: 'Pa', correct: 'Tschüss', accept: ['tschuess', 'tschüss'] },
    { id: 'h', sentence: 'Te întorci după 2 ore. „Mă întorc la prânz." Spui: „____!"', translation: 'Pe mai târziu', correct: 'Bis später', accept: ['bis spaeter', 'bis später'] },
    { id: 'i', sentence: 'E ora 7 dimineața. Pacientul tocmai s-a trezit. Saluți cu: „____, Frau Müller."', translation: 'Bună dimineața', correct: 'Guten Morgen', accept: ['guten morgen'] },
    { id: 'j', sentence: 'E ora 22:00. Pacientul merge la dormit. Înainte să stingi lumina: „____, Frau Müller."', translation: 'Noapte bună', correct: 'Gute Nacht', accept: ['gute nacht'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>⏰ Alege salutarea potrivită pe momentul zilei.</strong> Atenție la ora din enunț!</div>';
    ex2Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="Scrie salutarea..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 3: Audio dictat — litere și cifre
// ============================================
const ex3Data = [
    { id: 'a', audio: 'audio/dictat-01.wav', correct: 'A', accept: ['a'] },
    { id: 'b', audio: 'audio/dictat-02.wav', correct: 'M', accept: ['m'] },
    { id: 'c', audio: 'audio/dictat-03.wav', correct: 'Z', accept: ['z'] },
    { id: 'd', audio: 'audio/dictat-04.wav', correct: 'Ü', accept: ['ue', 'ü'] },
    { id: 'e', audio: 'audio/dictat-05.wav', correct: 'ß', accept: ['ss', 'ß'] },
    { id: 'f', audio: 'audio/dictat-06.wav', correct: 'drei', accept: ['drei', '3'] },
    { id: 'g', audio: 'audio/dictat-07.wav', correct: 'sieben', accept: ['sieben', '7'] },
    { id: 'h', audio: 'audio/dictat-08.wav', correct: 'zehn', accept: ['zehn', '10'] },
    { id: 'i', audio: 'audio/dictat-09.wav', correct: 'fünf', accept: ['fuenf', 'fünf', '5'] },
    { id: 'j', audio: 'audio/dictat-10.wav', correct: 'acht', accept: ['acht', '8'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎙️ Audio dictat — litere și cifre.</strong> Ascultă și scrie ce auzi. La cifre, accept și cifra (3 sau drei).</div>';
    ex3Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><div class="audio-dictat-row"><button class="audio-btn-mini" id="btn-${it.audio}" onclick="toggleAudio(event, 'audio-dictat-${it.id}')">▶</button><audio id="audio-dictat-${it.id}" preload="none"><source src="${it.audio}" type="audio/mpeg"></audio><span style="color:#5A5147; font-size:0.9rem;">Ascultă și scrie ce auzi:</span></div><input type="text" id="ex3-${it.id}" placeholder="Scrie ce auzi..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 4: Politețe — Bitte, Danke, Entschuldigung în context
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Frau Müller îți dă o cană cu ceai. Răspunzi politicos: „____, Frau Müller."', translation: 'Mulțumesc', correct: 'Danke', accept: ['danke'] },
    { id: 'b', sentence: 'Ai uitat să închizi ușa. Te întorci și spui: „____!"', translation: 'Scuze / Mă scuzați', correct: 'Entschuldigung', accept: ['entschuldigung'] },
    { id: 'c', sentence: 'Ceri pacientei să-ți dea cana. Politicos: „Geben Sie mir die Tasse, ____."', translation: 'Vă rog', correct: 'bitte', accept: ['bitte'] },
    { id: 'd', sentence: 'Frau Müller îți mulțumește. Răspunzi: „____."', translation: 'Cu plăcere', correct: 'Gern geschehen', accept: ['gern geschehen', 'bitte'] },
    { id: 'e', sentence: 'Îi întinzi farfuria cu mâncare. Cu zâmbet: „____, Frau Müller."', translation: 'Poftiți (cu zâmbet)', correct: 'Bitte schön', accept: ['bitte schoen', 'bitte schön'] },
    { id: 'f', sentence: 'Doctorul îți explică ceva important. La final spui: „____."', translation: 'Mulțumiri multe (formal)', correct: 'Vielen Dank', accept: ['vielen dank'] },
    { id: 'g', sentence: 'Întrerupi o discuție. Începi cu: „____, ich verstehe nicht."', translation: 'Mă scuzați', correct: 'Entschuldigung', accept: ['entschuldigung'] },
    { id: 'h', sentence: 'Pacienta îți pune o pernă. O răsplătești cu: „____, Frau Müller."', translation: 'Mulțumesc frumos', correct: 'Danke schön', accept: ['danke schoen', 'danke schön'] },
    { id: 'i', sentence: 'Mai târziu, când ai timp, vrei să răspunzi mai cald: „Vielen ____."', translation: 'Mulțumesc mult', correct: 'Dank', accept: ['dank'] },
    { id: 'j', sentence: 'Repeți cererea politicos: „Wiederholen Sie, ____."', translation: 'Vă rog', correct: 'bitte', accept: ['bitte'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🙏 Politețe în context.</strong> Alege cuvântul potrivit (Bitte / Danke / Entschuldigung sau variante).</div>';
    ex4Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="Scrie cuvântul politicos..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 5: Dialog Gap-Fill — Andreea la sosire
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Andreea: „____ Tag, Frau Müller."', translation: 'Bună ziua', correct: 'Guten', accept: ['guten'] },
    { id: 'b', sentence: 'Andreea: „Ich ____ Andreea."', translation: 'Eu mă numesc Andreea (verbul heißen)', correct: 'heiße', accept: ['heisse', 'heiße'] },
    { id: 'c', sentence: 'Andreea: „Ich ____ aus Rumänien."', translation: 'Sunt din România (verbul sein)', correct: 'bin', accept: ['bin'] },
    { id: 'd', sentence: 'Frau Müller: „Wie heißen ____?"', translation: 'Cum vă numiți DUMNEAVOASTRĂ?', correct: 'Sie', accept: ['sie'] },
    { id: 'e', sentence: 'Frau Müller: „Sind Sie ____?" (obosit/ă)', translation: 'Sunteți obosită?', correct: 'müde', accept: ['muede', 'müde'] },
    { id: 'f', sentence: 'Andreea: „Ein bisschen, ____."', translation: 'Puțin, da', correct: 'ja', accept: ['ja'] },
    { id: 'g', sentence: 'Andreea: „Vielen ____, Frau Müller."', translation: 'Mulțumiri multe (Vielen Dank)', correct: 'Dank', accept: ['dank'] },
    { id: 'h', sentence: 'Frau Müller: „Schlafen Sie ____." (bine)', translation: 'Să dormiți bine', correct: 'gut', accept: ['gut'] },
    { id: 'i', sentence: 'Andreea: „____ Nacht, Frau Müller."', translation: 'Noapte bună', correct: 'Gute', accept: ['gute'] },
    { id: 'j', sentence: 'Frau Müller: „Bis ____, Andreea." (Pe mâine)', translation: 'Pe mâine', correct: 'morgen', accept: ['morgen'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>💬 Dialog gap-fill — Andreea la sosire.</strong> Completează replicile lipsă din Dialog 1.</div>';
    ex5Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`);
        const ok = answerMatches(it, inp.value);
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 6: Traducere RO → DE
// ============================================
const ex6Data = [
    { id: 'a', ro: 'Bună dimineața.', correct: 'Guten Morgen.', accept: ['guten morgen', 'guten morgen.'] },
    { id: 'b', ro: 'Eu mă numesc Andreea.', correct: 'Ich heiße Andreea.', accept: ['ich heisse andreea', 'ich heiße andreea', 'ich heisse andreea.'] },
    { id: 'c', ro: 'Cum vă numiți?', correct: 'Wie heißen Sie?', accept: ['wie heissen sie', 'wie heißen sie', 'wie heissen sie?'] },
    { id: 'd', ro: 'Sunt din România.', correct: 'Ich bin aus Rumänien.', accept: ['ich bin aus rumaenien', 'ich bin aus rumänien', 'ich bin aus rumaenien.'] },
    { id: 'e', ro: 'Mulțumesc mult.', correct: 'Vielen Dank.', accept: ['vielen dank', 'vielen dank.'] },
    { id: 'f', ro: 'Vă rog mai rar.', correct: 'Bitte langsamer.', accept: ['bitte langsamer', 'sprechen sie bitte langsamer', 'bitte langsamer.'] },
    { id: 'g', ro: 'Nu înțeleg.', correct: 'Ich verstehe nicht.', accept: ['ich verstehe nicht', 'ich verstehe nicht.'] },
    { id: 'h', ro: 'Repetați, vă rog.', correct: 'Wiederholen Sie, bitte.', accept: ['wiederholen sie bitte', 'wiederholen sie, bitte', 'noch einmal bitte'] },
    { id: 'i', ro: 'La revedere.', correct: 'Auf Wiedersehen.', accept: ['auf wiedersehen', 'auf wiedersehen.'] },
    { id: 'j', ro: 'Noapte bună.', correct: 'Gute Nacht.', accept: ['gute nacht', 'gute nacht.'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🌍 Traducere RO → DE.</strong> Scrie propoziția în germană. Diacriticele DE sunt opționale.</div>';
    ex6Data.forEach((it, i) => {
        h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>🇷🇴 ${it.ro}</label><input type="text" id="ex6-${it.id}" placeholder="Scrie în germană..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`;
    });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => {
        const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`);
        const ok = it.accept.some(a => normalizeAnswer(a) === normalizeAnswer(inp.value));
        fb.className = ok ? 'feedback correct' : 'feedback incorrect';
        fb.textContent = `Corect: ${it.correct}`;
        if (ok) correct++;
    });
    return { correct, total };
}

// ============================================
// EX 7: Schreiben deschis — Prezentare scurtă
// ============================================
function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    c.innerHTML = `
        <div class="schreiben-wrapper">
            <div class="schreiben-prompt">
                <h4>✍️ Tema ta de scriere</h4>
                <p>Imaginează-ți că sosești pentru prima oară la pacient. <strong>Prezintă-te în 3-4 propoziții.</strong></p>
                <p>Folosește verbele <strong>sein</strong> și <strong>heißen</strong> + măcar o salutare + măcar o politețe.</p>

                <div class="schreiben-hints">
                    <h5>💡 Verbe utile</h5>
                    <p>sein (bin) · heißen (heiße) · kommen (komme)</p>
                    <h5>💡 Structuri utile</h5>
                    <p>Guten Tag · Ich heiße ... · Ich bin aus ... · Ich komme aus ... · Vielen Dank</p>
                </div>
            </div>

            <textarea id="ex7-text" class="schreiben-textarea" placeholder="Schreib hier auf Deutsch...
Beispiel:
Guten Tag, Frau Müller.
Ich heiße ..."></textarea>

            <details class="schreiben-model">
                <summary>📝 Vezi un model de răspuns</summary>
                <div class="model-text">
                    <p><em>Beispiel-Antwort:</em></p>
                    <p>Guten Tag, Frau Müller. Ich heiße Maria Popescu. Ich bin aus Rumänien. Ich komme aus Cluj. Vielen Dank für Ihre Gastfreundschaft.</p>
                    <p class="model-translation"><em>Traducere:</em> Bună ziua, Doamnă Müller. Eu mă numesc Maria Popescu. Sunt din România. Sunt din Cluj. Mulțumesc mult pentru ospitalitatea dumneavoastră.</p>
                </div>
            </details>

            <div class="schreiben-cta">
                <a href="https://forms.gle/kbzQHSQ76cTsE7PG6" target="_blank" class="btn-google-form-big">
                    ✍️ Vrei feedback PERSONAL de la Annette? Trimite-ți textul aici
                </a>
                <p class="schreiben-promise">📩 Răspunde Annette personal în 24-48 ore — corectare + sfaturi.</p>
            </div>
        </div>
    `;
}

// ============================================
// MAIN HANDLER
// ============================================
function checkExercise(n) {
    const checkers = { 1: checkEx1, 2: checkEx2, 3: checkEx3, 4: checkEx4, 5: checkEx5, 6: checkEx6 };
    if (!checkers[n]) return;
    const result = checkers[n]();
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) {
        const pct = Math.round((result.correct / result.total) * 100);
        let msg = `Scor: ${result.correct}/${result.total} (${pct}%)`;
        if (pct === 100) msg += ' — Perfect! 🎉';
        else if (pct >= 80) msg += ' — Foarte bine! 💪';
        else if (pct >= 60) msg += ' — Bine, mai exersează puțin. 🙂';
        else msg += ' — Reia teoria și încearcă din nou. 📚';
        scoreEl.textContent = msg;
        scoreEl.className = 'score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
    }
}

function resetExercise(n) {
    const containerId = `ex${n}-container`;
    const c = document.getElementById(containerId);
    if (!c) return;
    c.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    c.querySelectorAll('.feedback').forEach(fb => { fb.className = 'feedback'; fb.textContent = ''; });
    const scoreEl = document.getElementById(`score-${n}`);
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'score'; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
