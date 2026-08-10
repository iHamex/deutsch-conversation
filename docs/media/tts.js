(function () {
  const DEVOICE_KEY = 'deutsch-tts-devoice';
  const ENVOICE_KEY = 'deutsch-tts-envoice';

  let voicesList = [];
  let playbackToken = 0;
  let primed = false;
  let priming = null;

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

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  async function playPair(deText, enText) {
    const myToken = ++playbackToken;
    await speak(deText, 'de');
    if (myToken !== playbackToken) return;
    if (enText) {
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
      processDialogue();
    });
  }

  init();
})();
