(function () {
  const DEVOICE_KEY = 'deutsch-tts-devoice';
  const ENVOICE_KEY = 'deutsch-tts-envoice';

  let voicesList = [];
  let playbackToken = 0;
  let playAllToken = 0;
  let playAllActive = false;
  let primed = false;
  let priming = null;
  let allLines = [];
  let playAllBtn = null;
  let currentLineEl = null;

  function getVoicePref(lang) {
    try {
      return localStorage.getItem(lang === 'de' ? DEVOICE_KEY : ENVOICE_KEY) || '';
    } catch (e) {
      return '';
    }
  }

  function pickVoices() {
    voicesList = window.speechSynthesis.getVoices();
  }

  function waitForVoices() {
    if (voicesList.length) return Promise.resolve();
    return new Promise((resolve) => {
      const check = () => {
        if (voicesList.length) {
          window.speechSynthesis.removeEventListener('voiceschanged', check);
          resolve();
        }
      };
      window.speechSynthesis.addEventListener('voiceschanged', check);
    });
  }

  function prime() {
    if (primed) return Promise.resolve();
    if (priming) return priming;
    priming = new Promise((resolve) => {
      const utter = new SpeechSynthesisUtterance(' ');
      utter.volume = 0;
      utter.rate = 1;
      utter.onend = () => {
        primed = true;
        resolve();
      };
      utter.onerror = () => {
        primed = true;
        resolve();
      };
      window.speechSynthesis.speak(utter);
      setTimeout(() => {
        primed = true;
        resolve();
      }, 1000);
    });
    return priming;
  }

  if ('speechSynthesis' in window) {
    pickVoices();
    window.speechSynthesis.onvoiceschanged = pickVoices;
    document.addEventListener(
      'pointerdown',
      () => {
        prime();
      },
      { once: true }
    );
  }

  function resolveVoice(lang) {
    const pref = getVoicePref(lang);
    const list = voicesList.filter((v) =>
      v.lang.toLowerCase().startsWith(lang)
    );
    if (!list.length) return null;
    if (pref) {
      const chosen = list.find((v) => v.voiceURI === pref);
      if (chosen) return chosen;
    }
    const enhanced =
      list.find(
        (v) => /enhanced|premium|neural|quality/i.test(v.name)
      ) || null;
    return enhanced || list[0];
  }

  function speak(text, lang) {
    return new Promise(async (resolve) => {
      await waitForVoices();
      await prime();
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang === 'de' ? 'de-DE' : 'en-US';
      const voice = resolveVoice(lang);
      if (voice) utter.voice = voice;
      utter.rate = 0.9;
      utter.onend = resolve;
      utter.onerror = resolve;
      utter.oncancel = resolve;
      window.speechSynthesis.speak(utter);
      setTimeout(resolve, 60000);
    });
  }

  function highlightLine(el) {
    if (currentLineEl) currentLineEl.classList.remove('md-tts-line-active');
    currentLineEl = el;
    if (el) {
      el.classList.add('md-tts-line-active');
      if (el.scrollIntoView && !isElementInViewport(el)) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  function updatePlayAllBtn() {
    if (!playAllBtn) return;
    if (playAllActive) {
      playAllBtn.classList.add('playing');
      playAllBtn.innerHTML = '\u25A0 Stop';
      playAllBtn.setAttribute('aria-label', 'Stop conversation');
    } else {
      playAllBtn.classList.remove('playing');
      playAllBtn.innerHTML = '\u25B6 Play conversation';
      playAllBtn.setAttribute('aria-label', 'Play conversation');
    }
  }

  function stopPlayAll() {
    playAllActive = false;
    playAllToken++;
    window.speechSynthesis.cancel();
    highlightLine(null);
    updatePlayAllBtn();
  }

  async function startPlayAll() {
    if (playAllActive) return;
    playAllActive = true;
    updatePlayAllBtn();
    const myToken = ++playAllToken;
    for (let i = 0; i < allLines.length; i++) {
      if (!playAllActive || myToken !== playAllToken) break;
      highlightLine(allLines[i].el);
      await speak(allLines[i].de, 'de');
    }
    playAllActive = false;
    highlightLine(null);
    updatePlayAllBtn();
  }

  function togglePlayAll() {
    if (playAllActive) {
      stopPlayAll();
    } else {
      startPlayAll();
    }
  }

  function buildPlayAllBar() {
    const bar = document.createElement('div');
    bar.className = 'md-tts-playall-wrap';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'md-tts-playall';
    btn.textContent = '\u25B6 Play conversation';
    btn.setAttribute('aria-label', 'Play conversation');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlayAll();
    });
    playAllBtn = btn;
    bar.appendChild(btn);
    return bar;
  }

  async function playSingle(deText) {
    const myToken = ++playbackToken;
    await speak(deText, 'de');
    if (myToken !== playbackToken) return;
  }

  function makeButton(deText) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'md-tts-btn';
    btn.textContent = '\u25B6';
    btn.setAttribute('aria-label', 'Play audio');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (playAllActive) {
        stopPlayAll();
      }
      playSingle(deText);
    });
    return btn;
  }

  function extractPair(p) {
    const strong = p.querySelector('strong');
    if (!strong) return null;
    if (!p.querySelector('br')) return null;

    let deText = null;
    const nodes = Array.from(p.childNodes);
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].nodeType === Node.TEXT_NODE) {
        const t = nodes[i].textContent.trim();
        if (t) {
          deText = t;
          break;
        }
      }
    }
    if (!deText) return null;

    const em = p.querySelector('em');
    let enText = em ? em.textContent.trim() : null;
    if (enText === deText) enText = null;
    return { de: deText, en: enText };
  }

  function processDialogue() {
    allLines = [];
    const paragraphs = document.querySelectorAll(
      'article.md-content__inner p'
    );
    paragraphs.forEach((p) => {
      if (p.querySelector('.md-tts-btn')) return;
      const pair = extractPair(p);
      if (!pair) return;
      p.appendChild(makeButton(pair.de));
      allLines.push({ de: pair.de, el: p });
    });
  }

  function init() {
    if (!('speechSynthesis' in window)) return;
    document.addEventListener('DOMContentLoaded', () => {
      processDialogue();
      if (!allLines.length) return;
      const content = document.querySelector('article.md-content__inner');
      if (content && !content.querySelector('.md-tts-playall-wrap')) {
        content.insertBefore(buildPlayAllBar(), content.firstChild);
      }
      window.addEventListener('pagehide', () => {
        if (playAllActive) stopPlayAll();
      });
    });
  }

  init();
})();
