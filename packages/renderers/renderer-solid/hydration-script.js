(() => {
  window._$HYDRATION = { events: [], completed: new WeakSet() };
  const t = (e) => e && e.hasAttribute && ((e.hasAttribute('data-hk') && e) || t(e.host && e.host instanceof Node ? e.host : e.parentNode)),
    e = (e) => {
      let o = (e.composedPath && e.composedPath()[0]) || e.target,
        s = t(o);
      s && !window._$HYDRATION.completed.has(s) && window._$HYDRATION.events.push([s, e]);
    };
  ['click', 'input'].forEach((t) => document.addEventListener(t, e));
})();
window._$HYDRATION.resources = {};
