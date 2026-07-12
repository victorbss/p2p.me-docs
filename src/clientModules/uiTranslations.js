import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const TRANSLATIONS = {
    en: {
      askAi: 'Ask AI',
      assistant: 'Assistant',
      welcome: "Welcome! Ask me anything about this document and I'll help you out.",
      footer: 'AI assistant · p2p.me',
      inputPlaceholder: 'Type your message',
      thinkModeAuto: 'Auto',
      thinkModeAutoDescription: 'Balances speed and quality',
      thinkModeFast: 'Instant',
      thinkModeFastDescription: 'Prioritizes speed',
      thinkModeThink: 'Think',
      thinkModeThinkDescription: 'Takes longer for better accuracy',
      sendButton: 'Send',
    },
    pt: {
      askAi: 'Perguntar à IA',
      assistant: 'Assistente',
      welcome: 'Bem-vindo! Pergunte-me qualquer coisa sobre este documento e eu te ajudo.',
      footer: 'Assistente de IA · p2p.me',
      inputPlaceholder: 'Digite sua mensagem',
      thinkModeAuto: 'Auto',
      thinkModeAutoDescription: 'Equilibra velocidade e qualidade',
      thinkModeFast: 'Instantâneo',
      thinkModeFastDescription: 'Prioriza velocidade',
      thinkModeThink: 'Pensar',
      thinkModeThinkDescription: 'Leva mais tempo para maior precisão',
      sendButton: 'Enviar',
    },
    es: {
      askAi: 'Preguntar a la IA',
      assistant: 'Asistente',
      welcome: '¡Bienvenido! Pregúntame lo que quieras sobre este documento y te ayudaré.',
      footer: 'Asistente de IA · p2p.me',
      inputPlaceholder: 'Escribe tu mensaje',
      thinkModeAuto: 'Auto',
      thinkModeAutoDescription: 'Equilibra velocidad y calidad',
      thinkModeFast: 'Instantáneo',
      thinkModeFastDescription: 'Prioriza velocidad',
      thinkModeThink: 'Pensar',
      thinkModeThinkDescription: 'Tarda más para mayor precisión',
      sendButton: 'Enviar',
    },
    id: {
      askAi: 'Tanya AI',
      assistant: 'Asisten',
      welcome: 'Selamat datang! Tanyakan apa saja tentang dokumen ini dan saya akan membantu Anda.',
      footer: 'Asisten AI · p2p.me',
      inputPlaceholder: 'Ketik pesan Anda',
      thinkModeAuto: 'Otomatis',
      thinkModeAutoDescription: 'Menyeimbangkan kecepatan dan kualitas',
      thinkModeFast: 'Instan',
      thinkModeFastDescription: 'Memprioritaskan kecepatan',
      thinkModeThink: 'Berpikir',
      thinkModeThinkDescription: 'Lebih lama untuk akurasi lebih baik',
      sendButton: 'Kirim',
    },
  };

  function getCurrentLanguage() {
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    if (firstSegment === 'pt') return 'pt';
    if (firstSegment === 'es') return 'es';
    if (firstSegment === 'id') return 'id';
    return 'en';
  }

  function deepReplaceText(root, replacements) {
    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent;
        for (const [from, to] of Object.entries(replacements)) {
          if (from && text.includes(from)) {
            text = text.split(from).join(to);
          }
        }
        if (text !== node.textContent) {
          node.textContent = text;
        }
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.shadowRoot) walk(node.shadowRoot);
      for (const child of node.childNodes) walk(child);
    };
    walk(root);
  }

  function buildReplacementMap(lang) {
    const target = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const replacements = {};
    for (const strings of Object.values(TRANSLATIONS)) {
      replacements[strings.assistant] = target.assistant;
      replacements[strings.welcome] = target.welcome;
      replacements[strings.footer] = target.footer;
      replacements[strings.askAi] = target.askAi;
      replacements[strings.inputPlaceholder] = target.inputPlaceholder;
      replacements[strings.thinkModeAuto] = target.thinkModeAuto;
      replacements[strings.thinkModeAutoDescription] = target.thinkModeAutoDescription;
      replacements[strings.thinkModeFast] = target.thinkModeFast;
      replacements[strings.thinkModeFastDescription] = target.thinkModeFastDescription;
      replacements[strings.thinkModeThink] = target.thinkModeThink;
      replacements[strings.thinkModeThinkDescription] = target.thinkModeThinkDescription;
      replacements[strings.sendButton] = target.sendButton;
    }
    return { target, replacements };
  }

  function deepQuery(selector, root = document) {
    const found = root.querySelector(selector);
    if (found) return found;
    for (const el of root.querySelectorAll('*')) {
      if (el.shadowRoot) {
        const result = deepQuery(selector, el.shadowRoot);
        if (result) return result;
      }
    }
    return null;
  }

  const WELCOME_MARKERS = [
    'Ask me anything about this document',
    'Pergunte-me qualquer coisa sobre este documento',
    'Pregúntame lo que quieras sobre este documento',
    'Tanyakan apa saja tentang dokumen ini',
  ];

  function replaceWelcomeText(root, welcomeText) {
    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (WELCOME_MARKERS.some((marker) => node.textContent.includes(marker))) {
          node.textContent = welcomeText;
        }
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      if (node.shadowRoot) walk(node.shadowRoot);
      for (const child of node.childNodes) walk(child);
    };
    walk(root);
  }

  function applyBielAttributes(element, target) {
    element.setAttribute('welcome-message', target.welcome);
    element.setAttribute('assistant-label', target.assistant);
    element.setAttribute('footer-text', target.footer);
    element.setAttribute('input-placeholder-text', target.inputPlaceholder);
    element.setAttribute('think-mode-auto-text', target.thinkModeAuto);
    element.setAttribute('think-mode-auto-description', target.thinkModeAutoDescription);
    element.setAttribute('think-mode-fast-text', target.thinkModeFast);
    element.setAttribute('think-mode-fast-description', target.thinkModeFastDescription);
    element.setAttribute('think-mode-think-text', target.thinkModeThink);
    element.setAttribute('think-mode-think-description', target.thinkModeThinkDescription);
    element.setAttribute('send-button-text', target.sendButton);
  }

  function updateBielTranslations(lang) {
    const { target, replacements } = buildReplacementMap(lang);
    const bielBtn = document.querySelector('biel-button');
    const bielBot = deepQuery('biel-bot');

    if (bielBtn) {
      applyBielAttributes(bielBtn, target);
      if (bielBtn.textContent.trim() !== target.askAi) {
        bielBtn.textContent = target.askAi;
      }
    }

    if (bielBot) {
      applyBielAttributes(bielBot, target);
    }

    replaceWelcomeText(document.body, target.welcome);
    deepReplaceText(document.body, replacements);

    const placeholders = new Set(
      Object.values(TRANSLATIONS).map((strings) => strings.inputPlaceholder)
    );
    document.querySelectorAll('textarea, input').forEach((input) => {
      if (placeholders.has(input.placeholder)) {
        input.placeholder = target.inputPlaceholder;
      }
    });
  }

  let isUpdating = false;
  let updateTimer;

  function scheduleUpdateUITranslations() {
    clearTimeout(updateTimer);
    updateTimer = setTimeout(updateUITranslations, 200);
  }

  function updateUITranslations() {
    if (isUpdating) return;
    isUpdating = true;

    try {
    const lang = getCurrentLanguage();
    const { target } = buildReplacementMap(lang);

    // Toggle lang-pt class on html element for CSS-based translations
    document.documentElement.classList.toggle('lang-pt', lang === 'pt');
    document.documentElement.classList.toggle('lang-es', lang === 'es');

    // Translate Ask AI selection tooltip
    const askAiLabel = document.querySelector('#ask-ai-tooltip span');
    if (askAiLabel) {
      askAiLabel.textContent = target.askAi;
    }

    // Translate Biel.ai widget strings
    updateBielTranslations(lang);

    // Translate Previous / Next pagination
    if (lang === 'pt') {
      document.querySelectorAll('.pagination-nav__sublabel').forEach((el) => {
        if (el.textContent.trim() === 'Previous') el.textContent = 'Anterior';
        if (el.textContent.trim() === 'Next') el.textContent = 'Próximo';
      });
    }
    if (lang === 'es') {
      document.querySelectorAll('.pagination-nav__sublabel').forEach((el) => {
        if (el.textContent.trim() === 'Previous') el.textContent = 'Anterior';
        if (el.textContent.trim() === 'Next') el.textContent = 'Siguiente';
      });
    }

    // Translate Search button placeholder and input
    const searchPlaceholder = lang === 'pt' ? 'Pesquisar' : lang === 'es' ? 'Buscar' : 'Search';

    // DocSearch button placeholder
    document.querySelectorAll('.DocSearch-Button-Placeholder').forEach((el) => {
      el.textContent = searchPlaceholder;
    });

    // Search input fields
    document.querySelectorAll(
      'input[placeholder="Search"], input[placeholder="Pesquisar"]'
    ).forEach((input) => {
      input.placeholder = searchPlaceholder;
    });

    // Local search input (easyops-cn/docusaurus-search-local)
    document.querySelectorAll('input.search-local-input').forEach((input) => {
      input.placeholder = searchPlaceholder;
    });
    } finally {
      isUpdating = false;
    }
  }

  if (document.readyState === 'complete') {
    scheduleUpdateUITranslations();
  } else {
    window.addEventListener('load', scheduleUpdateUITranslations, { once: true });
  }

  let lastPathname = window.location.pathname;

  function onRouteMaybeChanged() {
    const pathname = window.location.pathname;
    if (pathname === lastPathname) return;
    lastPathname = pathname;
    scheduleUpdateUITranslations();
  }

  function patchHistoryMethod(methodName) {
    const original = history[methodName];
    history[methodName] = function (...args) {
      const result = original.apply(this, args);
      onRouteMaybeChanged();
      return result;
    };
  }

  patchHistoryMethod('pushState');
  patchHistoryMethod('replaceState');
  window.addEventListener('popstate', onRouteMaybeChanged);

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest('[class*="languageSwitcher"]')) {
        setTimeout(scheduleUpdateUITranslations, 50);
        setTimeout(scheduleUpdateUITranslations, 400);
      }
    },
    true
  );

  const observer = new MutationObserver((mutations) => {
    const shouldUpdate = mutations.some((mutation) => {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== Node.ELEMENT_NODE) continue;
        if (
          node.matches?.(
            'biel-button, biel-bot, .DocSearch-Button, .search-local-input, .pagination-nav__sublabel'
          ) ||
          node.querySelector?.(
            'biel-button, biel-bot, .DocSearch-Button, .search-local-input, .pagination-nav__sublabel'
          )
        ) {
          return true;
        }
      }
      return false;
    });
    if (shouldUpdate) scheduleUpdateUITranslations();
  });

  window.addEventListener('load', () => {
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

