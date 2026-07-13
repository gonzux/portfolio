(function () {
  var STORAGE_KEY = 'portfolio-lang';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'es';
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('hidden', el.getAttribute('data-lang') !== lang);
    });

    document.querySelectorAll('[data-i18n-alt-es]').forEach(function (el) {
      var attr = lang === 'en' ? 'data-i18n-alt-en' : 'data-i18n-alt-es';
      el.setAttribute('alt', el.getAttribute(attr));
    });

    var meta = document.getElementById('lang-meta');
    if (meta) {
      try {
        var data = JSON.parse(meta.textContent);
        if (data.title) document.title = data.title[lang] || data.title.es;
        if (data.description) {
          var metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', data.description[lang] || data.description.es);
        }
      } catch (e) {}
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('text-black', active);
      btn.classList.toggle('font-semibold', active);
      btn.classList.toggle('text-gray-400', !active);
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang-btn'));
      });
    });
    applyLang(getLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
