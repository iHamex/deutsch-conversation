(function () {
  const MODE_KEY = 'deutsch-tts-mode';
  const DEVOICE_KEY = 'deutsch-tts-devoice';
  const ENVOICE_KEY = 'deutsch-tts-envoice';

  let voicesList = [];
  let playbackToken = 0;
  let deSelectRef = null;
  let enSelectRef = null;
  let primed = false;
  let priming = null;

  function getMode() {
    try {
      return localStorage.getItem(MODE_KEY) || 'de-en';
    } catch (e) {
      return 'de-en';
    }
  }

  function setMode(mode) {
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch (e) {}
  }

  function getVoicePref(lang) {
    try {
      return localStorage.getItem(lang === 'de' ? DEVOICE_KEY : ENVOICE_KEY) || '';
    } catch (e) {
      return '';
    }
  }

  function setVoicePref(lang, uri) {
    try {
      localStorage.setItem(lang === 'de' ? DEVOICE_KEY : ENVOICE_KEY, uri);
    } catch (e) {}
  }

  function pickVoices() {
    voicesList = window.speechSynthesis.getVoices();
    if (deSelectRef) populateVoiceSelect(deSelectRef, 'de');
    if (enSelectRef) populateVoiceSelect(enSelectRef, 'en');
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

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function playPair(deText, enText) {
    const myToken = ++playbackToken;
    await speak(deText, 'de');
    if (myToken !== playbackToken) return;
    if (getMode() === 'de-en' && enText) {
      await sleep(600);
      if (myToken !== playbackToken) return;
      await speak(enText, 'en');
    }
  }

  function makeButton(deText, enText) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'md-tts-btn';
    btn.textContent = '\u25B6';
    btn.setAttribute('aria-label', 'Play audio');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      playPair(deText, enText);
    });
    return btn;
  }

  function populateVoiceSelect(select, lang) {
    select.innerHTML = '';
    const auto = document.createElement('option');
    auto.value = '';
    auto.textContent = 'Auto';
    select.appendChild(auto);
    const list = voicesList.filter((v) =>
      v.lang.toLowerCase().startsWith(lang)
    );
    const pref = getVoicePref(lang);
    list.forEach((v) => {
      const opt = document.createElement('option');
      opt.value = v.voiceURI;
      opt.textContent = v.name;
      if (v.voiceURI === pref) opt.selected = true;
    });
  }

  function buildModeBar() {
    const bar = document.createElement('div');
    bar.className = 'md-tts-bar';

    const modeLabel = document.createElement('span');
    modeLabel.textContent = 'Audio: ';
    const select = document.createElement('select');
    select.className = 'md-tts-select';
    const optDeEn = document.createElement('option');
    optDeEn.value = 'de-en';
    optDeEn.textContent = 'German + English';
    const optDe = document.createElement('option');
    optDe.value = 'de';
    optDe.textContent = 'German only';
    select.appendChild(optDeEn);
    select.appendChild(optDe);
    select.value = getMode();
    select.addEventListener('change', () => setMode(select.value));

    const deLabel = document.createElement('span');
    deLabel.textContent = 'DE voice: ';
    const deSelect = document.createElement('select');
    deSelect.className = 'md-tts-select';
    const enLabel = document.createElement('span');
    enLabel.textContent = 'EN voice: ';
    const enSelect = document.createElement('select');
    enSelect.className = 'md-tts-select';

    deSelect.addEventListener('focus', () => populateVoiceSelect(deSelect, 'de'));
    enSelect.addEventListener('focus', () => populateVoiceSelect(enSelect, 'en'));
    deSelect.addEventListener('change', () => setVoicePref('de', deSelect.value));
    enSelect.addEventListener('change', () => setVoicePref('en', enSelect.value));
    deSelectRef = deSelect;
    enSelectRef = enSelect;

    populateVoiceSelect(deSelect, 'de');
    populateVoiceSelect(enSelect, 'en');

    bar.appendChild(modeLabel);
    bar.appendChild(select);
    bar.appendChild(deLabel);
    bar.appendChild(deSelect);
    bar.appendChild(enLabel);
    bar.appendChild(enSelect);
    return bar;
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
    const paragraphs = document.querySelectorAll(
      'article.md-content__inner p'
    );
    paragraphs.forEach((p) => {
      if (p.querySelector('.md-tts-btn')) return;
      const pair = extractPair(p);
      if (!pair) return;
      p.appendChild(makeButton(pair.de, pair.en));
    });
  }

  function init() {
    if (!('speechSynthesis' in window)) return;
    document.addEventListener('DOMContentLoaded', () => {
      const content = document.querySelector('article.md-content__inner');
      if (content && !content.querySelector('.md-tts-bar')) {
        content.insertBefore(buildModeBar(), content.firstChild);
      }
      processDialogue();
    });
  }

  init();
})();
