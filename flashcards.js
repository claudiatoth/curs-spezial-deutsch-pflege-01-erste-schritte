// ============================================
// FLASHCARDS — Pflege 1: Erste Schritte
// 48 carduri în 6 categorii (8 fiecare)
// ZERO ghilimele interne — folosesc CAPS pentru emfază
// Claudia Toth · Annettes Deutschkurs · A1.1
// ============================================

const flashcardsData = [
    // === 1. SALUTĂRI (8) ===
    { de: "Guten Morgen", ro: "🌅 Bună dimineața · până la ~11:00 · DESCHIDERE de zi", audio: "audio/letters/guten-morgen.wav" },
    { de: "Guten Tag", ro: "☀️ Bună ziua · 11:00-18:00 · FORMAL, oriunde", audio: "audio/letters/guten-tag.wav" },
    { de: "Guten Abend", ro: "🌆 Bună seara · după 18:00 · până la culcare", audio: "audio/letters/guten-abend.wav" },
    { de: "Gute Nacht", ro: "🌙 Noapte bună · la culcare · ULTIMA replică a zilei", audio: "audio/letters/gute-nacht.wav" },
    { de: "Hallo", ro: "👋 Salut · informal · cu colege, prietene, telefon", audio: "audio/letters/hallo.wav" },
    { de: "Auf Wiedersehen", ro: "🚪 La revedere · FORMAL · când pleci de la pacient/doctor", audio: "audio/letters/auf-wiedersehen.wav" },
    { de: "Tschüss", ro: "👋 Pa · informal · cu prietene, colege apropiate", audio: "audio/letters/tschuess.wav" },
    { de: "Bis später / Bis morgen", ro: "⏰ Pe mai târziu / Pe mâine · revii în aceeași zi sau a doua zi", audio: "audio/letters/bis-spaeter.wav" },

    // === 2. POLITEȚE (8) ===
    { de: "Bitte", ro: "🙏 Vă rog · Poftiți · MULTIFUNCȚIONAL — cer, ofer, dau", audio: "audio/letters/bitte.wav" },
    { de: "Bitte schön", ro: "🙏 Poftiți (cu zâmbet) · când îi dai ceva CU CĂLDURĂ", audio: "audio/letters/bitte-schoen.wav" },
    { de: "Danke", ro: "💚 Mulțumesc · răspunsul de bază când primești ceva", audio: "audio/letters/danke.wav" },
    { de: "Danke schön", ro: "💚 Mulțumesc frumos · mai cald, pentru momente speciale", audio: "audio/letters/danke-schoen.wav" },
    { de: "Vielen Dank", ro: "💚 Mulțumiri multe · cea mai FORMALĂ · la doctor, în farmacie", audio: "audio/letters/vielen-dank.wav" },
    { de: "Entschuldigung", ro: "🙇 Scuze · Mă scuzați · greșeli + ÎNTRERUPERI conversație", audio: "audio/letters/entschuldigung.wav" },
    { de: "Verzeihung", ro: "🙇 Iertați-mă · mai formal · pentru greșeli importante", audio: "audio/letters/verzeihung.wav" },
    { de: "Gern geschehen", ro: "✨ Cu plăcere · răspunsul TĂU când pacienta îți mulțumește", audio: "audio/letters/gern-geschehen.wav" },

    // === 3. ALFABET — litere reprezentative (8) ===
    { de: "A B C D — [a be țe de]", ro: "🔤 Primele 4 litere · pentru silabisit nume", audio: "audio/letters/abcd.wav" },
    { de: "J — [iot]", ro: "🔤 Litera J · NU [j] ca în română · sună ca i lung", audio: "audio/letters/j.wav" },
    { de: "V W — [fau ve]", ro: "🔤 ATENȚIE INVERSAT · V=[fau], W=[ve] · CAPCANĂ pentru români", audio: "audio/letters/vw.wav" },
    { de: "Y — [üpsilon]", ro: "🔤 Litera Y · 5 silabe · ca grecesc upsilon", audio: "audio/letters/y.wav" },
    { de: "Z — [țet]", ro: "🔤 Litera Z · sună ca ț românesc, NU z", audio: "audio/letters/z.wav" },
    { de: "Ä Ö Ü — [ae oe ue]", ro: "🔤 Umlaut · cu 2 puncte deasupra · scriere fără tastatură: AE OE UE", audio: "audio/letters/aeoeue.wav" },
    { de: "ß — eszett [s ascuțit]", ro: "🔤 Litera SPECIALĂ doar germană · scriere alternativă: SS · ex Straße = Strasse", audio: "audio/letters/eszett.wav" },
    { de: "Wie schreibt man das?", ro: "❓ Cum se scrie asta? · INSTRUMENT CHEIE când silabisesc nume", audio: "audio/letters/wie-schreibt-man.wav" },

    // === 4. CIFRE 0-10 (8) — primele 8 ===
    { de: "null — 0", ro: "🔢 Zero · pron [nul] · pentru numere telefon", audio: "audio/letters/null.wav" },
    { de: "eins — 1", ro: "🔢 Unu · pron [ains] · la telefon adesea ZWO în loc de eins", audio: "audio/letters/eins.wav" },
    { de: "zwei (sau zwo) — 2", ro: "🔢 Doi · pron [țvai] · la telefon ZWO ca să nu se confunde cu drei", audio: "audio/letters/zwei.wav" },
    { de: "drei — 3", ro: "🔢 Trei · pron [drai] · ATENȚIE confuzie cu zwei la telefon", audio: "audio/letters/drei.wav" },
    { de: "vier — 4", ro: "🔢 Patru · pron [fir] · NU [vir] · ca four în engleză", audio: "audio/letters/vier.wav" },
    { de: "fünf — 5", ro: "🔢 Cinci · pron [fünf] · cu U-umlaut · scriere fără tastatură FUENF", audio: "audio/letters/fuenf.wav" },
    { de: "sechs — 6", ro: "🔢 Șase · pron [zecs] · sună ca SEX engleză · CAPCANĂ ciudată dar reală", audio: "audio/letters/sechs.wav" },
    { de: "sieben acht neun zehn", ro: "🔢 7-8-9-10 · pron [zibăn aht noin țen] · GRUPATE pentru memorie", audio: "audio/letters/sieben-acht-neun-zehn.wav" },

    // === 5. VERBE CHEIE (8) ===
    { de: "sein — ich BIN / Sie SIND", ro: "🔁 A FI · cel mai important verb · NEREGULAT · Ich bin Andreea", audio: "audio/letters/sein.wav" },
    { de: "heißen — ich HEISSE / Sie HEISSEN", ro: "🔁 A SE NUMI · ich heiße = mă numesc · Wie heißen Sie?", audio: "audio/letters/heissen.wav" },
    { de: "kommen — ich KOMME", ro: "🔁 A VENI · Ich komme aus Rumänien (Vin din România)", audio: "audio/letters/kommen.wav" },
    { de: "wohnen — ich WOHNE", ro: "🔁 A LOCUI · Ich wohne in Berlin (Locuiesc în Berlin)", audio: "audio/letters/wohnen.wav" },
    { de: "sprechen — Sprechen Sie...?", ro: "🔁 A VORBI · Sprechen Sie langsamer = vorbiți mai rar", audio: "audio/letters/sprechen.wav" },
    { de: "verstehen — ich VERSTEHE", ro: "🔁 A ÎNȚELEGE · Ich verstehe nicht = NU înțeleg (FRAZĂ SALVATOARE)", audio: "audio/letters/verstehen.wav" },
    { de: "lernen — ich LERNE", ro: "🔁 A ÎNVĂȚA · Ich lerne noch = încă învăț (scuză onestă)", audio: "audio/letters/lernen.wav" },
    { de: "helfen — Sie helfen mir", ro: "🔁 A AJUTA · Können Sie mir helfen? = Puteți să mă ajutați?", audio: "audio/letters/helfen.wav" },

    // === 6. FRAZE SALVATOARE (8) ===
    { de: "Ich verstehe nicht.", ro: "🆘 NU înțeleg · CEA MAI IMPORTANTĂ frază a primei luni", audio: "audio/letters/ich-verstehe-nicht.wav" },
    { de: "Wiederholen Sie, bitte.", ro: "🆘 Repetați, vă rog · când vrei să auzi încă o dată", audio: "audio/letters/wiederholen-sie.wav" },
    { de: "Noch einmal, bitte.", ro: "🆘 Încă o dată, vă rog · varianta SCURTĂ, la fel de politicoasă", audio: "audio/letters/noch-einmal.wav" },
    { de: "Sprechen Sie bitte langsamer.", ro: "🆘 Vă rog vorbiți mai rar · când pacientul vorbește prea repede", audio: "audio/letters/langsamer.wav" },
    { de: "Wie heißt das auf Deutsch?", ro: "🆘 Cum se spune pe germană? · arăți un obiect și întrebi numele", audio: "audio/letters/wie-heisst-das.wav" },
    { de: "Was bedeutet das?", ro: "🆘 Ce înseamnă asta? · auzi un cuvânt nou și vrei sensul", audio: "audio/letters/was-bedeutet.wav" },
    { de: "Können Sie das schreiben?", ro: "🆘 Puteți să scrieți? · pe hârtie când nu prinzi vorbirea", audio: "audio/letters/koennen-sie-schreiben.wav" },
    { de: "Entschuldigung, ich lerne noch.", ro: "🆘 Scuze, încă învăț · recunoaște ONEST, mai bine decât să te prefaci", audio: "audio/letters/lerne-noch.wav" }
];

// ============================================
// BUILD FLASHCARDS UI
// ============================================
let currentFlashcardIndex = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="flashcard-intro">
            <p>🎯 <strong>48 flashcards în 6 categorii</strong> — Salutări · Politețe · Alfabet · Cifre 0-10 · Verbe cheie · Fraze salvatoare.</p>
            <p>Apasă pe card pentru traducere · Apasă 🔊 pentru pronunție · Folosește săgețile pentru navigare.</p>
        </div>
        <div class="flashcard-wrapper">
            <div class="flashcard" id="flashcard" onclick="flipFlashcard()">
                <button class="flashcard-audio-btn" id="flashcard-audio-btn" onclick="event.stopPropagation(); playFlashcardAudio()" aria-label="Asculta pronunția">🔊</button>
                <div class="flashcard-content">
                    <div class="de" id="flashcard-de"></div>
                    <div class="ro" id="flashcard-ro"></div>
                </div>
                <div class="flashcard-hint">👆 Apasă cardul pentru traducere · 🔊 pentru pronunție</div>
                <audio id="flashcard-audio" preload="none"></audio>
            </div>
            <div class="flashcard-controls">
                <button class="flashcard-btn" onclick="prevFlashcard()">← Înapoi</button>
                <span class="flashcard-counter" id="flashcard-counter">1 / 48</span>
                <button class="flashcard-btn" onclick="nextFlashcard()">Înainte →</button>
            </div>
            <div class="flashcard-progress">
                <div class="flashcard-progress-fill" id="flashcard-progress-fill"></div>
            </div>
        </div>
    `;
    showFlashcard(0);
}

function showFlashcard(index) {
    const card = flashcardsData[index];
    if (!card) return;
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const progress = document.getElementById('flashcard-progress-fill');
    const audio = document.getElementById('flashcard-audio');

    if (de) de.textContent = card.de;
    if (ro) ro.textContent = card.ro;
    if (audio && card.audio) {
        audio.pause();
        audio.src = card.audio;
        audio.load();
    }

    if (counter) counter.textContent = `${index + 1} / ${flashcardsData.length}`;
    if (progress) progress.style.width = ((index + 1) / flashcardsData.length * 100) + '%';

    isFlipped = false;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.remove('flipped');
}

function playFlashcardAudio() {
    const audio = document.getElementById('flashcard-audio');
    if (!audio || !audio.src) return;
    audio.currentTime = 0;
    audio.play().catch(() => { /* missing file - silent fail */ });
}

function flipFlashcard() {
    isFlipped = !isFlipped;
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

function prevFlashcard() {
    currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    showFlashcard(currentFlashcardIndex);
}

buildFlashcards();
