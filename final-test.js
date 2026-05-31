// ============================================
// FINAL TEST — Pflege 1: Erste Schritte
// 25 întrebări × 5 categorii
// 1. Salutări (5) · 2. Politețe (5) · 3. Alfabet + cifre (5) · 4. Traducere (5) · 5. Andreea în acțiune (5)
// Claudia Toth · Annettes Deutschkurs · A1.1
// ============================================

function normalizeAnswerFT(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // === 1. SALUTĂRI (5) ===
    { id: 1, category: 'Salutări', type: 'mc', question: 'Pacientul tocmai s-a trezit la 7 dimineața. Cum saluți?', options: ['Guten Tag', 'Guten Morgen', 'Guten Abend', 'Hallo'], correctIndex: 1, correct: 'Guten Morgen (până la ~11:00)' },
    { id: 2, category: 'Salutări', type: 'mc', question: 'E 19:30. Te întâlnești cu doctorul în casă. Cum saluți?', options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Gute Nacht'], correctIndex: 2, correct: 'Guten Abend (de la 18:00)' },
    { id: 3, category: 'Salutări', type: 'mc', question: 'Pleci dela pacient pentru cumpărături. La revedere formal:', options: ['Tschüss', 'Auf Wiedersehen', 'Hallo', 'Bis später'], correctIndex: 1, correct: 'Auf Wiedersehen (formal, pentru pacient/medic)' },
    { id: 4, category: 'Salutări', type: 'fill', question: 'Conduci pacienta la culcare. Înainte să închizi ușa spui: „____, Frau Müller."', correct: 'Gute Nacht', accept: ['gute nacht'] },
    { id: 5, category: 'Salutări', type: 'fill', question: 'Pleci dar te întorci la prânz. La despărțire: „____!"', correct: 'Bis später', accept: ['bis spaeter', 'bis später'] },

    // === 2. POLITEȚE (5) ===
    { id: 6, category: 'Politețe', type: 'fill', question: 'Frau Müller îți dă un pahar cu apă. Răspunzi: „____, Frau Müller."', correct: 'Danke', accept: ['danke'] },
    { id: 7, category: 'Politețe', type: 'mc', question: 'Vrei să ceri sare la masă POLITICOS. Care e schema corectă?', options: ['Salz! Geben Sie mir.', 'Geben Sie mir Salz.', 'Geben Sie mir Salz, bitte.', 'Salz!'], correctIndex: 2, correct: 'Geben Sie mir Salz, bitte. (bitte transformă ordinul în cerere)' },
    { id: 8, category: 'Politețe', type: 'fill', question: 'Ai uitat să închizi ușa. Te scuzi cu: „____!"', correct: 'Entschuldigung', accept: ['entschuldigung'] },
    { id: 9, category: 'Politețe', type: 'fill', question: 'Cea mai formală mulțumire (la doctor): „____ Dank."', correct: 'Vielen', accept: ['vielen'] },
    { id: 10, category: 'Politețe', type: 'mc', question: 'Frau Müller îți mulțumește. Cel mai natural răspuns:', options: ['Gut!', 'Gern geschehen.', 'Ich verstehe nicht.', 'Tschüss!'], correctIndex: 1, correct: 'Gern geschehen. (Cu plăcere)' },

    // === 3. ALFABET + CIFRE (5) ===
    { id: 11, category: 'Alfabet + cifre', type: 'mc', question: 'Litera V se pronunță:', options: ['[ve] ca în română', '[fau]', '[vi]', '[ef]'], correctIndex: 1, correct: '[fau] — atenție: în germană V=[fau], W=[ve] (INVERS față de română)' },
    { id: 12, category: 'Alfabet + cifre', type: 'mc', question: 'Litera Ü scrisă fără tastatură germană se înlocuiește cu:', options: ['UU', 'OU', 'UE', 'UA'], correctIndex: 2, correct: 'UE (ex: fünf → fuenf)' },
    { id: 13, category: 'Alfabet + cifre', type: 'fill', question: 'Cifra 5 în germană se scrie:', correct: 'fünf', accept: ['fuenf', 'fünf'] },
    { id: 14, category: 'Alfabet + cifre', type: 'fill', question: 'Cifra 7 în germană se scrie:', correct: 'sieben', accept: ['sieben'] },
    { id: 15, category: 'Alfabet + cifre', type: 'mc', question: 'La telefon, mulți germani spun „zwo" în loc de „zwei". De ce?', options: ['Sună mai cool', 'Ca să NU se confunde cu „drei" pe linie proastă', 'E un dialect regional', 'E forma veche, formală'], correctIndex: 1, correct: 'Ca să NU se confunde cu „drei" (sunet similar pe telefon)' },

    // === 4. TRADUCERE RO → DE (5) ===
    { id: 16, category: 'Traducere', type: 'fill', question: '🇷🇴 „Cum vă numiți?" → 🇩🇪 ?', correct: 'Wie heißen Sie?', accept: ['wie heissen sie', 'wie heißen sie', 'wie heissen sie?'] },
    { id: 17, category: 'Traducere', type: 'fill', question: '🇷🇴 „Sunt din România." → 🇩🇪 ?', correct: 'Ich bin aus Rumänien.', accept: ['ich bin aus rumaenien', 'ich bin aus rumänien', 'ich bin aus rumaenien.'] },
    { id: 18, category: 'Traducere', type: 'fill', question: '🇷🇴 „Nu înțeleg." → 🇩🇪 ?', correct: 'Ich verstehe nicht.', accept: ['ich verstehe nicht', 'ich verstehe nicht.'] },
    { id: 19, category: 'Traducere', type: 'fill', question: '🇷🇴 „Repetați, vă rog." → 🇩🇪 ?', correct: 'Wiederholen Sie, bitte.', accept: ['wiederholen sie bitte', 'wiederholen sie, bitte', 'noch einmal bitte'] },
    { id: 20, category: 'Traducere', type: 'fill', question: '🇷🇴 „Mulțumesc mult." → 🇩🇪 ?', correct: 'Vielen Dank.', accept: ['vielen dank', 'vielen dank.'] },

    // === 5. ANDREEA ÎN ACȚIUNE (5) ===
    { id: 21, category: 'Andreea', type: 'mc', question: 'Andreea ajunge prima dată la pacientă. Care e ordinea corectă a primelor 3 fraze?', options: ['Salutare → Prezentare → De unde vine', 'De unde vine → Prezentare → Salutare', 'Prezentare → Salutare → De unde vine', 'Salutare → De unde vine → Prezentare'], correctIndex: 0, correct: 'Salutare → Prezentare → De unde vine (Guten Tag → Ich heiße... → Ich bin aus...)' },
    { id: 22, category: 'Andreea', type: 'mc', question: 'Frau Müller dictează un nume: P-E-T-R-A. Andreea nu prinde. Cum cere repetarea?', options: ['Was?!', 'Können Sie das schreiben, bitte?', 'Hallo', 'Tschüss'], correctIndex: 1, correct: 'Können Sie das schreiben, bitte? — politicos: cere SCRIS pe hârtie, ca să fie sigur' },
    { id: 23, category: 'Andreea', type: 'fill', question: 'Andreea zice: „Ich ____ Andreea." (verbul a se numi)', correct: 'heiße', accept: ['heisse', 'heiße'] },
    { id: 24, category: 'Andreea', type: 'fill', question: 'Frau Müller întreabă: „Sind Sie ____?" — Andreea răspunde: „Ja, ein bisschen." Cuvântul lipsă (obosit/ă):', correct: 'müde', accept: ['muede', 'müde'] },
    { id: 25, category: 'Andreea', type: 'mc', question: 'Care e CEL MAI IMPORTANT principiu al primei luni a Andreei?', options: ['Pretinde că ai înțeles tot', 'Vorbește repede ca un nativ', 'Cere POLITICOS să repete când nu înțelegi', 'Folosește doar Hallo în loc de Guten Tag'], correctIndex: 2, correct: 'Cere POLITICOS să repete când nu înțelegi (decât să greșești)' }
];

// ============================================
// BUILD FINAL TEST UI
// ============================================
function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;

    let html = `
        <div class="final-test-intro">
            <h4>🎯 Test Final — 25 întrebări</h4>
            <p>5 categorii × 5 întrebări: <strong>Salutări · Politețe · Alfabet + cifre · Traducere · Andreea în acțiune</strong>. Estimare: 15-20 minute.</p>
            <p>📝 Diacriticele DE și RO sunt opționale — totul se acceptă.</p>
        </div>
        <div id="ft-questions">
    `;

    finalTestData.forEach((q, i) => {
        html += `<div class="ft-question" data-q-id="${q.id}">
            <div class="ft-q-header">
                <span class="ft-q-num">Întrebarea ${i + 1} / 25</span>
                <span class="ft-q-category">${q.category}</span>
            </div>
            <div class="ft-q-text">${q.question}</div>`;

        if (q.type === 'mc') {
            q.options.forEach((opt, idx) => {
                html += `<label class="ft-option"><input type="radio" name="ft-${q.id}" value="${idx}"> <span>${opt}</span></label>`;
            });
        } else if (q.type === 'fill') {
            html += `<input type="text" class="ft-input" id="ft-input-${q.id}" placeholder="Scrie răspunsul...">`;
        }

        html += `<div class="ft-feedback" id="ft-fb-${q.id}"></div></div>`;
    });

    html += `</div>
        <div class="ft-controls">
            <button class="btn btn-check" onclick="checkFinalTest()">🎯 Verifică TOT testul</button>
            <button class="btn btn-reset" onclick="resetFinalTest()">↻ Reia testul</button>
        </div>
        <div class="ft-score" id="ft-score"></div>
    `;

    container.innerHTML = html;
}

function checkFinalTest() {
    let correct = 0;
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (!fb) return;

        let userOk = false;
        if (q.type === 'mc') {
            const checked = document.querySelector(`input[name="ft-${q.id}"]:checked`);
            if (checked && parseInt(checked.value) === q.correctIndex) userOk = true;
        } else if (q.type === 'fill') {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp && q.accept.some(a => normalizeAnswerFT(a) === normalizeAnswerFT(inp.value))) userOk = true;
        }

        fb.className = userOk ? 'ft-feedback correct' : 'ft-feedback incorrect';
        fb.innerHTML = userOk ? `✓ Corect!` : `✗ Răspuns corect: <strong>${q.correct}</strong>`;
        if (userOk) correct++;
    });

    const pct = Math.round((correct / finalTestData.length) * 100);
    const scoreEl = document.getElementById('ft-score');
    if (!scoreEl) return;

    let msg = '';
    if (pct === 100) msg = `🏆 ${correct}/25 (100%) — PERFECT! Ești pregătită pentru prima ta zi!`;
    else if (pct >= 80) msg = `🎉 ${correct}/25 (${pct}%) — Foarte bine! Mai recapitulează frazele cu greșeli.`;
    else if (pct >= 60) msg = `💪 ${correct}/25 (${pct}%) — Bine. Reia teoria pe părți și încearcă din nou.`;
    else msg = `📚 ${correct}/25 (${pct}%) — Mai exersează. Reia teoria + flashcards apoi testul.`;
    scoreEl.textContent = msg;
    scoreEl.className = 'ft-score ' + (pct >= 80 ? 'score-high' : pct >= 60 ? 'score-mid' : 'score-low');
}

function resetFinalTest() {
    finalTestData.forEach(q => {
        const fb = document.getElementById(`ft-fb-${q.id}`);
        if (fb) { fb.className = 'ft-feedback'; fb.innerHTML = ''; }
        if (q.type === 'mc') {
            document.querySelectorAll(`input[name="ft-${q.id}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`ft-input-${q.id}`);
            if (inp) inp.value = '';
        }
    });
    const scoreEl = document.getElementById('ft-score');
    if (scoreEl) { scoreEl.textContent = ''; scoreEl.className = 'ft-score'; }
}

buildFinalTest();
