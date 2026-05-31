// ============================================
// DIALOGS.JS — Pflege 1: Erste Schritte
// 2 dialoguri Andreea ↔ Frau Müller cu animație CSS + audio
// Sincronizare PERFECTĂ pe audio.currentTime
// Claudia Toth · Annettes Deutschkurs · A1.1
// ============================================

// ============================================
// DIALOG 1: „Endlich da!" — Andreea ajunge prima oară
// 10 replici, ~70 sec estimate
// ============================================
const dialog1Data = {
    id: 'dialog1',
    title: 'Endlich da!',
    context: 'Andreea sosește pentru prima oară la casa Doamnei Müller, la Berlin. E seara, după o călătorie lungă. Primele cuvinte între ele.',
    audioFile: 'audio/dialog-01.mp3',
    totalDuration: 70,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 6, de: 'Guten Tag, Frau Müller. Ich heiße Andreea.', ro: 'Bună ziua, Doamnă Müller. Eu mă numesc Andreea.' },
        { id: 2, speaker: 'fraumueller', start: 6,  duration: 6, de: 'Guten Tag, Andreea. Herzlich willkommen!', ro: 'Bună ziua, Andreea. Bun venit din toată inima!' },
        { id: 3, speaker: 'andreea',     start: 12, duration: 7, de: 'Vielen Dank. Ich bin aus Rumänien.', ro: 'Mulțumesc mult. Sunt din România.' },
        { id: 4, speaker: 'fraumueller', start: 19, duration: 6, de: 'Schön. Wie war die Reise?', ro: 'Frumos. Cum a fost călătoria?' },
        { id: 5, speaker: 'andreea',     start: 25, duration: 6, de: 'Lang, aber gut. Danke.', ro: 'Lungă, dar bună. Mulțumesc.' },
        { id: 6, speaker: 'fraumueller', start: 31, duration: 5, de: 'Sind Sie müde?', ro: 'Sunteți obosită?' },
        { id: 7, speaker: 'andreea',     start: 36, duration: 5, de: 'Ein bisschen, ja.', ro: 'Puțin, da.' },
        { id: 8, speaker: 'fraumueller', start: 41, duration: 7, de: 'Ihr Zimmer ist hier. Schlafen Sie gut.', ro: 'Camera dumneavoastră este aici. Să dormiți bine.' },
        { id: 9, speaker: 'andreea',     start: 48, duration: 8, de: 'Sehr schön. Vielen Dank, Frau Müller. Gute Nacht.', ro: 'Foarte frumos. Mulțumesc mult, Doamnă Müller. Noapte bună.' },
        { id: 10, speaker: 'fraumueller', start: 56, duration: 14, de: 'Gute Nacht, Andreea. Bis morgen.', ro: 'Noapte bună, Andreea. Pe mâine.' }
    ]
};

// ============================================
// DIALOG 2: „Wie schreibt man das?" — A doua zi dimineața
// 10 replici, ~75 sec estimate
// Andreea învață alfabet + cifre cu Frau Müller (situație didactică naturală)
// ============================================
const dialog2Data = {
    id: 'dialog2',
    title: 'Wie schreibt man das?',
    context: 'A doua zi dimineața. Andreea are nevoie de datele fiicei Doamnei Müller pentru fișier. Învață alfabetul și cifrele direct de la sursă.',
    audioFile: 'audio/dialog-02.mp3',
    totalDuration: 75,
    replici: [
        { id: 1, speaker: 'andreea',     start: 0,  duration: 7, de: 'Guten Morgen, Frau Müller. Wie haben Sie geschlafen?', ro: 'Bună dimineața, Doamnă Müller. Cum ați dormit?' },
        { id: 2, speaker: 'fraumueller', start: 7,  duration: 6, de: 'Guten Morgen, Andreea. Gut, danke.', ro: 'Bună dimineața, Andreea. Bine, mulțumesc.' },
        { id: 3, speaker: 'andreea',     start: 13, duration: 8, de: 'Frau Müller, wie heißt Ihre Tochter?', ro: 'Doamnă Müller, cum o cheamă pe fiica dumneavoastră?' },
        { id: 4, speaker: 'fraumueller', start: 21, duration: 8, de: 'Sie heißt Petra. P-E-T-R-A.', ro: 'O cheamă Petra. P-E-T-R-A.' },
        { id: 5, speaker: 'andreea',     start: 29, duration: 8, de: 'Petra. Können Sie das schreiben, bitte?', ro: 'Petra. Puteți să scrieți, vă rog?' },
        { id: 6, speaker: 'fraumueller', start: 37, duration: 8, de: 'Natürlich. Hier ist auch die Telefonnummer.', ro: 'Bineînțeles. Aici e și numărul de telefon.' },
        { id: 7, speaker: 'andreea',     start: 45, duration: 6, de: 'Vielen Dank. Wie ist die Nummer?', ro: 'Mulțumesc mult. Care e numărul?' },
        { id: 8, speaker: 'fraumueller', start: 51, duration: 9, de: 'Null - eins - sieben - zwei - drei - vier - fünf.', ro: 'Zero - unu - șapte - doi - trei - patru - cinci.' },
        { id: 9, speaker: 'andreea',     start: 60, duration: 6, de: 'Noch einmal, bitte. Langsamer.', ro: 'Încă o dată, vă rog. Mai rar.' },
        { id: 10, speaker: 'fraumueller', start: 66, duration: 9, de: 'Null - eins - sieben - zwei - drei - vier - fünf.', ro: 'Zero - unu - șapte - doi - trei - patru - cinci.' }
    ]
};

// ============================================
// BUILD ANIMATED DIALOG HTML
// ============================================
function buildAnimatedDialog(data) {
    const repliciHTML = data.replici.map(r => `
        <div class="reply-item" data-reply-id="${r.id}" data-speaker="${r.speaker}">
            <div class="reply-header">
                <span class="reply-num">${r.id}.</span>
                <span class="reply-speaker speaker-${r.speaker}">${r.speaker === 'andreea' ? '🧑‍⚕️ Andreea' : '👵 Frau Müller'}</span>
                <button class="btn-replay-reply" onclick="replayReply('${data.id}', ${r.id})">🔁</button>
            </div>
            <div class="reply-de">${r.de}</div>
            <div class="reply-ro">${r.ro}</div>
        </div>
    `).join('');

    return `
        <div class="animated-dialog" id="dialog-${data.id}" data-dialog-id="${data.id}">
            <div class="dialog-context">
                <strong>📍 Situația:</strong> ${data.context}
            </div>

            <div class="stage-container">
                <div class="stage">
                    <div class="character-wrapper character-andreea" data-speaker="andreea">
                        <div class="character-avatar">
                            <img src="images/andreea.png" alt="Andreea">
                        </div>
                        <div class="character-label">Andreea</div>
                        <div class="speech-bubble speech-andreea" id="bubble-${data.id}-andreea">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>

                    <div class="character-wrapper character-fraumueller" data-speaker="fraumueller">
                        <div class="character-avatar frau-mueller-avatar-large">
                            <span class="avatar-hair">⚪</span>
                            <span class="avatar-face">👵</span>
                        </div>
                        <div class="character-label">Frau Müller</div>
                        <div class="speech-bubble speech-fraumueller" id="bubble-${data.id}-fraumueller">
                            <div class="bubble-de"></div>
                            <div class="bubble-ro"></div>
                        </div>
                    </div>
                </div>

                <div class="dialog-controls">
                    <button class="btn-dialog btn-play" id="btn-play-${data.id}" onclick="playDialog('${data.id}')">▶️ Pornește</button>
                    <button class="btn-dialog btn-pause" id="btn-pause-${data.id}" onclick="pauseDialog('${data.id}')" disabled>⏸ Pauză</button>
                    <button class="btn-dialog btn-reset" id="btn-reset-${data.id}" onclick="resetDialog('${data.id}')">🔄 Reset</button>
                </div>

                <div class="dialog-progress">
                    <div class="progress-bar" id="progress-${data.id}"><div class="progress-fill" id="progress-fill-${data.id}"></div></div>
                    <div class="progress-text" id="progress-text-${data.id}">Replica 0 / ${data.replici.length}</div>
                </div>

                <audio id="audio-${data.id}" preload="none">
                    <source src="${data.audioFile}" type="audio/mpeg">
                </audio>
            </div>

            <details class="transcript-details">
                <summary>📜 Vezi transcriptul complet (bilingv)</summary>
                <div class="transcript-list">
                    ${repliciHTML}
                </div>
            </details>
        </div>
    `;
}

// ============================================
// STATE per dialog (cu support pentru currentTime sync)
// ============================================
const dialogState = {};

function initDialogState(dialogId) {
    if (!dialogState[dialogId]) {
        dialogState[dialogId] = {
            isPlaying: false,
            currentReply: 0,
            lastDisplayedIdx: -1,
            timeouts: [],
            timeUpdateHandler: null,
            endedHandler: null,
            data: dialogId === 'dialog1' ? dialog1Data : dialog2Data
        };
    }
    return dialogState[dialogId];
}

// ============================================
// PLAY DIALOG — sincronizare pe audio.currentTime (PERFECTĂ)
// ============================================
function playDialog(dialogId) {
    const state = initDialogState(dialogId);
    if (state.isPlaying) return;

    state.isPlaying = true;
    const data = state.data;
    const audio = document.getElementById(`audio-${dialogId}`);

    document.getElementById(`btn-play-${dialogId}`).disabled = true;
    document.getElementById(`btn-pause-${dialogId}`).disabled = false;

    if (audio && !state.timeUpdateHandler) {
        state.timeUpdateHandler = () => {
            if (!state.isPlaying) return;
            const t = audio.currentTime;
            let currentIdx = -1;
            for (let i = 0; i < data.replici.length; i++) {
                if (t >= data.replici[i].start) currentIdx = i;
                else break;
            }
            if (currentIdx >= 0 && currentIdx !== state.lastDisplayedIdx) {
                state.lastDisplayedIdx = currentIdx;
                state.currentReply = currentIdx + 1;
                showReply(dialogId, data.replici[currentIdx]);
                updateProgress(dialogId);
            }
        };
        audio.addEventListener('timeupdate', state.timeUpdateHandler);
        state.endedHandler = () => endDialog(dialogId);
        audio.addEventListener('ended', state.endedHandler);
    }

    if (audio) {
        if (state.currentReply >= data.replici.length) {
            audio.currentTime = 0;
            state.currentReply = 0;
            state.lastDisplayedIdx = -1;
        }
        audio.play().catch(() => { startTimerFallback(dialogId); });
    } else {
        startTimerFallback(dialogId);
    }
}

function startTimerFallback(dialogId) {
    const state = initDialogState(dialogId);
    const data = state.data;
    const startFromReply = state.currentReply;
    const offsetMs = startFromReply > 0 ? data.replici[startFromReply - 1].start * 1000 : 0;

    for (let i = startFromReply; i < data.replici.length; i++) {
        const reply = data.replici[i];
        const delayMs = (reply.start * 1000) - offsetMs;
        const timeout = setTimeout(() => {
            if (!state.isPlaying) return;
            state.lastDisplayedIdx = i;
            showReply(dialogId, reply);
            state.currentReply = i + 1;
            updateProgress(dialogId);
            if (i === data.replici.length - 1) {
                setTimeout(() => endDialog(dialogId), reply.duration * 1000);
            }
        }, delayMs);
        state.timeouts.push(timeout);
    }
}

function showReply(dialogId, reply) {
    const activeChar = document.querySelector(`#dialog-${dialogId} .character-${reply.speaker}`);
    const sameSpeakerContinues = activeChar && activeChar.classList.contains('speaking');

    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => {
        if (c !== activeChar) c.classList.remove('speaking');
    });
    if (activeChar) activeChar.classList.add('speaking');

    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => {
        if (!b.id.endsWith('-' + reply.speaker)) b.classList.remove('visible');
    });

    const bubble = document.getElementById(`bubble-${dialogId}-${reply.speaker}`);
    if (!bubble) return;

    if (sameSpeakerContinues) {
        bubble.classList.add('text-fading');
        setTimeout(() => {
            bubble.querySelector('.bubble-de').textContent = reply.de;
            bubble.querySelector('.bubble-ro').textContent = reply.ro;
            bubble.classList.remove('text-fading');
        }, 180);
    } else {
        bubble.querySelector('.bubble-de').textContent = reply.de;
        bubble.querySelector('.bubble-ro').textContent = reply.ro;
        bubble.classList.add('visible');
    }

    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));
    const replyItem = document.querySelector(`#dialog-${dialogId} .reply-item[data-reply-id="${reply.id}"]`);
    if (replyItem) replyItem.classList.add('active');
}

function pauseDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state || !state.isPlaying) return;
    state.isPlaying = false;
    state.timeouts.forEach(t => clearTimeout(t));
    state.timeouts = [];
    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) audio.pause();
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function resetDialog(dialogId) {
    pauseDialog(dialogId);
    const state = initDialogState(dialogId);
    state.currentReply = 0;
    state.lastDisplayedIdx = -1;
    state.timeouts = [];

    document.querySelectorAll(`#dialog-${dialogId} .character-wrapper`).forEach(c => c.classList.remove('speaking'));
    document.querySelectorAll(`#dialog-${dialogId} .speech-bubble`).forEach(b => b.classList.remove('visible'));
    document.querySelectorAll(`#dialog-${dialogId} .reply-item`).forEach(r => r.classList.remove('active'));

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) { audio.pause(); audio.currentTime = 0; }

    updateProgress(dialogId);
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function endDialog(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    state.isPlaying = false;
    state.currentReply = state.data.replici.length;
    state.timeouts = [];
    document.getElementById(`btn-play-${dialogId}`).disabled = false;
    document.getElementById(`btn-pause-${dialogId}`).disabled = true;
}

function updateProgress(dialogId) {
    const state = dialogState[dialogId];
    if (!state) return;
    const total = state.data.replici.length;
    const pct = total > 0 ? (state.currentReply / total) * 100 : 0;
    const fill = document.getElementById(`progress-fill-${dialogId}`);
    const text = document.getElementById(`progress-text-${dialogId}`);
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = `Replica ${state.currentReply} / ${total}`;
}

function replayReply(dialogId, replyId) {
    const data = (dialogId === 'dialog1') ? dialog1Data : dialog2Data;
    const replyIdx = data.replici.findIndex(r => r.id === replyId);
    if (replyIdx < 0) return;
    const reply = data.replici[replyIdx];

    const state = initDialogState(dialogId);
    state.lastDisplayedIdx = -1;
    showReply(dialogId, reply);
    state.currentReply = replyIdx + 1;
    updateProgress(dialogId);

    const audio = document.getElementById(`audio-${dialogId}`);
    if (audio) {
        audio.currentTime = reply.start;
        if (audio.paused) {
            state.isPlaying = true;
            audio.play().catch(() => { /* silent fail */ });
            document.getElementById(`btn-play-${dialogId}`).disabled = true;
            document.getElementById(`btn-pause-${dialogId}`).disabled = false;
        }
    }
}

document.getElementById('dialog1-container').innerHTML = buildAnimatedDialog(dialog1Data);
document.getElementById('dialog2-container').innerHTML = buildAnimatedDialog(dialog2Data);
