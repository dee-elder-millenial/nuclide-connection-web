// Temporary helper: makes delayed decay links hidden by default when loaded after index.html.
(function hideDelayedByDefault(){
  function apply(){
    if (!window.S || !window.linkDelayed) return false;
    window.S.linkTypes.delayed = false;
    window.linkDelayed.checked = false;
    return true;
  }
  if (apply()) return;
  let tries = 0;
  const timer = setInterval(() => {
    tries++;
    if (apply() || tries > 40) clearInterval(timer);
  }, 100);
})();
