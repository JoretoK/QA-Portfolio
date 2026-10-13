'use strict';

/* ============================================================
   QA WORKSPACE - i18n
   Translates the DOM from window.LOCALES (see /locales).

   Markup hooks:
     data-i18n="key"                 → textContent
     data-i18n-html="key"            → innerHTML (trusted locale strings with inline markup)
     data-i18n-attr="attr:key; ..."  → attributes (aria-label, title, content, ...)
     data-i18n-date="YYYY-MM[/YYYY-MM]" → localized month / month range

   English is always the default. The browser language is never
   used; only an explicit choice saved by the visitor is restored.
   ============================================================ */
window.i18n = (function () {
  const LOCALES      = window.LOCALES || {};
  const DEFAULT_LANG = 'en';
  const STORAGE_KEY  = 'gk-lang';

  let current = readStoredLang() || DEFAULT_LANG;

  function readStoredLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved && LOCALES[saved] ? saved : null;
    } catch (e) {
      return null;
    }
  }

  function lookup(lang, key) {
    return key.split('.').reduce((node, part) => (node == null ? undefined : node[part]), LOCALES[lang]);
  }

  function resolve(key) {
    let value = lookup(current, key);
    if (value === undefined) value = lookup(DEFAULT_LANG, key);
    if (value === undefined) console.warn('[i18n] Missing translation key:', key);
    return value;
  }

  // t('board.issueCount', { count: 3 }) - plural objects { one, other } are picked by count
  function t(key, vars) {
    let value = resolve(key);
    if (value === undefined) return key;
    if (typeof value === 'object' && vars && 'count' in vars) {
      const form = new Intl.PluralRules(current).select(vars.count);
      value = value[form] !== undefined ? value[form] : value.other;
    }
    if (typeof value !== 'string') return key;
    return vars ? value.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? vars[name] : m)) : value;
  }

  // "2024-07" → "Jul 2024"; "2024-07/2026-09" → "Jul 2024 - Sep 2026"; same year → "Jul - Aug 2022";
  // "2026-10/present" → "Oct 2026 - Present"
  function formatDate(spec) {
    const months = resolve('dates.monthsShort') || [];
    const [fromSpec, toSpec] = spec.split('/');
    const [from, to] = [fromSpec, toSpec].filter(Boolean).map(part => {
      const [year, month] = part.split('-');
      return { year, month: months[Number(month) - 1] };
    });
    if (toSpec === 'present') return `${from.month} ${from.year} - ${t('dates.present')}`;
    if (!to) return `${from.month} ${from.year}`;
    if (from.year === to.year) return `${from.month} - ${to.month} ${to.year}`;
    return `${from.month} ${from.year} - ${to.month} ${to.year}`;
  }

  function apply(root) {
    const scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    scope.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    scope.querySelectorAll('[data-i18n-date]').forEach(el => { el.textContent = formatDate(el.dataset.i18nDate); });
    scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key) el.setAttribute(attr, t(key));
      });
    });
    document.documentElement.lang = current;
  }

  function setLanguage(lang) {
    if (!LOCALES[lang] || lang === current) return;
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable - choice lasts for this page only */ }
    apply();
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang } }));
  }

  function getLanguage() {
    return current;
  }

  apply();

  return { t, apply, setLanguage, getLanguage };
}());
